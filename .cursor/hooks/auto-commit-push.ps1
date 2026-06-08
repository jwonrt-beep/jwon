# Cursor stop hook: auto commit (+ push when remote is configured)
$ErrorActionPreference = "SilentlyContinue"

$projectRoot = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
if (-not (Test-Path (Join-Path $projectRoot ".git"))) {
    exit 0
}

$configPath = Join-Path $projectRoot ".cursor\auto-git.json"
$logPath = Join-Path $PSScriptRoot "auto-git.log"

function Write-Log($message) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Add-Content -Path $logPath -Value "[$timestamp] $message"
}

if (-not (Test-Path $configPath)) {
    exit 0
}

try {
    $config = Get-Content $configPath -Raw | ConvertFrom-Json
} catch {
    Write-Log "Config parse failed: $_"
    exit 0
}

if (-not $config.enabled) {
    exit 0
}

Set-Location $projectRoot

$status = git status --porcelain 2>&1
if (-not $status) {
    exit 0
}

$prefix = if ($config.commitPrefix) { $config.commitPrefix } else { "Update" }
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
$message = "$prefix`: $timestamp"

git add -A 2>&1 | Out-Null
$commit = git commit -m $message 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Log "Commit skipped or failed: $commit"
    exit 0
}

Write-Log "Committed: $message"

if (-not $config.pushOnStop) {
    exit 0
}

$remote = $config.remote
if (-not $remote) {
    $existingRemote = git remote get-url origin 2>&1
    if ($LASTEXITCODE -eq 0 -and $existingRemote) {
        $remote = $existingRemote
    }
}

if (-not $remote) {
    Write-Log "Push skipped: no remote configured"
    exit 0
}

$branch = if ($config.branch) { $config.branch } else { "main" }
$hasOrigin = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    git remote add origin $remote 2>&1 | Out-Null
}

$push = git push -u origin $branch 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Log "Pushed to origin/$branch"
} else {
    Write-Log "Push failed: $push"
}

exit 0
