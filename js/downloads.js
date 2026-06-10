(function (global) {
    'use strict';

    var BASE_PATH = '/assets/documents/';
    var CONFIG_PATH = BASE_PATH + 'downloads.json';

    function fileUrl(filename) {
        return BASE_PATH + encodeURIComponent(filename);
    }

    function esc(text) {
        var d = document.createElement('div');
        d.textContent = text || '';
        return d.innerHTML;
    }

    function loadConfig() {
        return fetch(CONFIG_PATH, { cache: 'no-store' })
            .then(function (res) {
                if (!res.ok) throw new Error('config');
                return res.json();
            });
    }

    function checkFileAvailable(filename) {
        return fetch(fileUrl(filename), { method: 'HEAD', cache: 'no-store' })
            .then(function (res) { return res.ok; })
            .catch(function () { return false; });
    }

    function downloadItem(item) {
        if (!item || !item.filename) return;
        var a = document.createElement('a');
        a.href = fileUrl(item.filename);
        a.download = item.downloadName || item.filename;
        a.rel = 'noopener';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    function enrichItems(items) {
        return Promise.all(items.map(function (item) {
            return checkFileAvailable(item.filename).then(function (ok) {
                return Object.assign({}, item, { available: ok });
            });
        }));
    }

    function renderCard(item) {
        var status = item.available
            ? '<span class="dl-card-status dl-card-status--ready">다운로드 가능</span>'
            : '<span class="dl-card-status dl-card-status--pending">파일 준비 중</span>';
        var btn = item.available
            ? '<button type="button" class="btn btn-primary dl-card-btn" data-dl-id="' + esc(item.id) + '">다운로드</button>'
            : '<button type="button" class="btn btn-outline dl-card-btn" disabled>준비 중</button>';
        return (
            '<article class="dl-card" data-category="' + esc(item.category) + '" data-id="' + esc(item.id) + '">' +
                '<div class="dl-card-icon" aria-hidden="true">PDF</div>' +
                '<div class="dl-card-body">' +
                    '<span class="dl-card-category">' + esc(item.category) + '</span>' +
                    status +
                    '<h3 class="dl-card-title">' + esc(item.title) + '</h3>' +
                    '<p class="dl-card-desc">' + esc(item.description) + '</p>' +
                    (item.available ? '<code class="dl-card-file">' + esc(item.filename) + '</code>' : '') +
                '</div>' +
                '<div class="dl-card-action">' + btn + '</div>' +
            '</article>'
        );
    }

    function renderPrimary(item) {
        if (!item) return '';
        var btn = item.available
            ? '<button type="button" class="btn btn-primary btn-lg" data-dl-id="' + esc(item.id) + '">카탈로그 다운로드</button>'
            : '<p class="dl-primary-note">카탈로그 PDF를 <code>assets/documents/' + esc(item.filename) + '</code> 경로에 넣으면 바로 다운로드됩니다.</p>';
        return (
            '<div class="dl-primary">' +
                '<div class="dl-primary-text">' +
                    '<span class="dl-primary-label">대표 자료</span>' +
                    '<h2>' + esc(item.title) + '</h2>' +
                    '<p>' + esc(item.description) + '</p>' +
                '</div>' +
                '<div class="dl-primary-action">' + btn + '</div>' +
            '</div>'
        );
    }

    function bindDownloadButtons(root, itemsById) {
        if (!root) return;
        root.querySelectorAll('[data-dl-id]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var id = btn.getAttribute('data-dl-id');
                var item = itemsById[id];
                if (item && item.available) downloadItem(item);
            });
        });
    }

    function setupFilters(container) {
        var filterBtns = container.querySelectorAll('.dl-filter-btn');
        var cards = document.querySelectorAll('.dl-card');
        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var filter = btn.getAttribute('data-filter');
                filterBtns.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                cards.forEach(function (card) {
                    var cat = card.getAttribute('data-category');
                    card.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
                });
            });
        });
    }

    function renderPage(options) {
        options = options || {};
        var boardId = options.boardId || 'downloadsBoard';
        var primaryId = options.primaryId || 'downloadsPrimary';
        var emptyId = options.emptyId || 'downloadsEmpty';
        var filtersId = options.filtersId || 'downloadsFilters';
        var board = document.getElementById(boardId);
        var primaryEl = document.getElementById(primaryId);
        var emptyEl = document.getElementById(emptyId);
        var filtersEl = document.getElementById(filtersId);

        if (!board) return Promise.resolve();

        board.innerHTML = '<p class="dl-loading">자료 목록을 불러오는 중…</p>';

        return loadConfig()
            .then(function (config) {
                var items = config.items || [];
                return enrichItems(items).then(function (enriched) {
                    return { config: config, items: enriched };
                });
            })
            .then(function (data) {
                var items = data.items;
                var itemsById = {};
                items.forEach(function (item) { itemsById[item.id] = item; });

                var primary = items.find(function (i) { return i.primary; }) || items.find(function (i) { return i.available; });
                if (primaryEl) {
                    primaryEl.innerHTML = renderPrimary(primary);
                }

                var availableCount = items.filter(function (i) { return i.available; }).length;
                if (emptyEl) {
                    emptyEl.style.display = items.length ? 'none' : 'block';
                }
                if (filtersEl) {
                    filtersEl.style.display = items.length ? '' : 'none';
                }

                if (!items.length) {
                    board.innerHTML = '';
                    return;
                }

                board.innerHTML = items.map(renderCard).join('');
                bindDownloadButtons(board, itemsById);
                if (primaryEl) bindDownloadButtons(primaryEl, itemsById);
                if (filtersEl) setupFilters(filtersEl);

                if (availableCount === 0 && emptyEl) {
                    emptyEl.style.display = 'block';
                    emptyEl.querySelector('.dl-empty-hint').textContent =
                        'PDF 파일을 assets/documents/ 폴더에 넣고 downloads.json의 filename과 맞춰 주세요.';
                }
            })
            .catch(function () {
                board.innerHTML = '<p class="dl-error">자료 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>';
            });
    }

    function downloadById(id) {
        return loadConfig().then(function (config) {
            var item = (config.items || []).find(function (i) { return i.id === id; });
            if (!item) return false;
            return checkFileAvailable(item.filename).then(function (ok) {
                if (!ok) return false;
                downloadItem(item);
                return true;
            });
        });
    }

    global.JwonDownloads = {
        BASE_PATH: BASE_PATH,
        loadConfig: loadConfig,
        fileUrl: fileUrl,
        downloadItem: downloadItem,
        downloadById: downloadById,
        renderPage: renderPage
    };
}(window));
