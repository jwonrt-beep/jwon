# Manual auto commit & push script
# Usage: powershell -ExecutionPolicy Bypass -File auto-push.ps1

$projectRoot = $PSScriptRoot
Set-Location $projectRoot

if (-not (Test-Path ".git")) {
    Write-Host "Git 저장소가 없습니다. 먼저 git init을 실행하세요." -ForegroundColor Red
    exit 1
}

$configPath = ".cursor\auto-git.json"
$config = $null
if (Test-Path $configPath) {
    $config = Get-Content $configPath -Raw | ConvertFrom-Json
}

$status = git status --porcelain
if (-not $status) {
    Write-Host "변경 사항이 없습니다." -ForegroundColor Yellow
    exit 0
}

$prefix = if ($config -and $config.commitPrefix) { $config.commitPrefix } else { "Update" }
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
$message = "$prefix`: $timestamp"

git add -A
git commit -m $message
Write-Host "커밋 완료: $message" -ForegroundColor Green

$remote = $null
if ($config -and $config.remote) {
    $remote = $config.remote
} else {
    $remote = git remote get-url origin 2>$null
}

if (-not $remote) {
    Write-Host "원격 저장소가 없습니다. .cursor\auto-git.json 에 remote URL을 입력하세요." -ForegroundColor Yellow
    exit 0
}

$branch = if ($config -and $config.branch) { $config.branch } else { "main" }
$hasOrigin = git remote get-url origin 2>$null
if (-not $hasOrigin) {
    git remote add origin $remote
}

git push -u origin $branch
if ($LASTEXITCODE -eq 0) {
    Write-Host "푸시 완료: origin/$branch" -ForegroundColor Green
} else {
    Write-Host "푸시 실패. GitHub 로그인/권한을 확인하세요." -ForegroundColor Red
    exit 1
}
