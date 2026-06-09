(function () {
    var currentFilter = 'all';

    var MODULE_SHORT_NAMES = {
        'welding-robot-manipulator-lineup': '로봇 라인업',
        'welding-power-controller': '용접전원',
        'welding-process-software': '용접 공법',
        'high-power-welding-system': '고출력',
        'jig-positioner-automation': '지그·포지셔너',
        'turnkey-robot-automation-cell': '턴키셀'
    };

    function esc(t) {
        var d = document.createElement('div');
        d.textContent = t || '';
        return d.innerHTML;
    }

    function renderSlot(slot, sizeClass) {
        if (typeof window.renderImageSlotHtml === 'function') {
            return window.renderImageSlotHtml(slot, sizeClass);
        }
        return '';
    }

    function pickTawersHeroSlot() {
        if (typeof getTawersHeroImagePriority === 'function') {
            return getTawersHeroImagePriority('catalog');
        }
        var g = typeof getProductImageGuide === 'function'
            ? getProductImageGuide('tawers-welding-robot-system')
            : null;
        if (!g) return null;
        return g.hero || g.systemMap || g.systemArchitecture || null;
    }

    function renderSystemMapDiagram(h) {
        var modules = (h && h.modules) || [];
        var ext = h && h.extension;
        var moduleNodes = modules.map(function (m) {
            return '<li class="pg-system-map-node" data-filter="' + esc(m.filterTag) + '">' +
                '<span class="pg-system-map-node-dot" aria-hidden="true"></span>' +
                esc(MODULE_SHORT_NAMES[m.id] || m.name) +
                '</li>';
        }).join('');
        var extNode = ext
            ? '<div class="pg-system-map-ext">' +
                '<span class="pg-system-map-ext-label">' + esc(h.extensionSection.label) + '</span>' +
                '<span class="pg-system-map-node pg-system-map-node--ext" data-filter="' + esc(ext.filterTag) + '">' +
                    esc(ext.name.replace('스마트팩토리 연동 솔루션', '스마트팩토리')) +
                '</span>' +
              '</div>'
            : '';
        return '<div class="pg-system-map" role="img" aria-label="TAWERS 상위 통합 시스템과 6개 구성 모듈, 스마트팩토리 확장 구조">' +
            '<p class="pg-system-map-caption">TAWERS = 상위 통합 시스템 · 아래 = 구성 모듈</p>' +
            '<div class="pg-system-map-tree">' +
                '<div class="pg-system-map-root">' +
                    '<span class="pg-system-map-center">TAWERS</span>' +
                    '<span class="pg-system-map-center-sub">상위 통합 시스템</span>' +
                '</div>' +
                '<div class="pg-system-map-connector" aria-hidden="true"></div>' +
                '<ul class="pg-system-map-modules">' + moduleNodes + '</ul>' +
                extNode +
            '</div>' +
            '</div>';
    }

    function renderTawersVisual(h) {
        var heroSlot = pickTawersHeroSlot();
        var mapHtml = renderSystemMapDiagram(h);
        var photoHtml = heroSlot
            ? '<div class="pg-tawers-photo">' + renderSlot(heroSlot, 'hero') + '</div>'
            : '';
        return '<div class="pg-tawers-visual-col">' + mapHtml + photoHtml + '</div>';
    }

    function renderTawersHero(h, parent, mode) {
        if (mode === 'compact') {
            return '<div class="pg-compact-tawers" data-section="tawers">' +
                '<span class="pg-compact-tawers-badge">TAWERS 상위 시스템</span>' +
                '<span>아래는 TAWERS 구성 모듈입니다 · </span>' +
                '<a href="' + parent.url + '">TAWERS 시스템 보기</a></div>';
        }
        if (mode === 'hidden') return '';
        return '<section class="pg-tawers" data-section="tawers" id="pgTawersHero">' +
            '<div class="container">' +
            '<div class="pg-tawers-grid">' +
            '<div class="pg-tawers-text">' +
            '<span class="pg-tawers-badge">' + esc(parent.badge) + '</span>' +
            '<h1 class="pg-tawers-title">' + esc(parent.name) + '</h1>' +
            '<p class="pg-tawers-lead">아래 <strong>6개 구성 모듈</strong>과 스마트팩토리 연동으로 완성되는 상위 통합 용접 자동화 플랫폼</p>' +
            '<p class="pg-tawers-desc">' + esc(parent.description) + '</p>' +
            '<p class="pg-tawers-highlight">' + esc(parent.highlight) + '</p>' +
            '<div class="pg-tawers-actions">' +
            '<a href="' + parent.url + '" class="pg-btn-primary">TAWERS 시스템 자세히 보기</a>' +
            '<a href="/contact/index.html?type=quote&product=' + encodeURIComponent(parent.quoteProduct) + '" class="pg-btn-outline">견적 문의하기</a>' +
            '</div></div>' +
            renderTawersVisual(h) +
            '</div></div></section>';
    }

    function renderModuleCard(m, filter) {
        var hidden = filter !== 'all' && filter !== m.filterTag ? ' pg-hidden' : '';
        var imgData = typeof getModuleCardImage === 'function' ? getModuleCardImage(m.id) : null;
        var imgHtml = '';
        if (imgData) {
            imgHtml = '<div class="pg-module-thumb">' + renderSlot(imgData, 'module') + '</div>';
        }
        return '<article class="pg-module-card' + hidden + '" data-filter="' + esc(m.filterTag) + '" data-module="' + esc(m.id) + '">' +
            '<span class="pg-module-parent-badge">TAWERS 구성</span>' +
            imgHtml +
            '<span class="pg-module-badge">' + esc(m.badge) + '</span>' +
            '<h3>' + esc(m.name) + '</h3>' +
            '<p>' + esc(m.description) + '</p>' +
            '<div class="pg-module-tags">' + m.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
            '<a href="' + m.url + '" class="pg-module-link">' + esc(m.btn) + '</a>' +
            '</article>';
    }

    function renderModulesSection(h, filter) {
        var hideAll = filter === 'tawers' || filter === 'smartfactory';
        var cls = hideAll ? ' pg-hidden' : '';
        return '<section class="pg-modules' + cls + '" data-section="modules" id="pgModules">' +
            '<div class="container">' +
            '<div class="pg-section-head">' +
            '<span class="pg-section-label">' + esc(h.modulesSection.label) + '</span>' +
            '<h2>' + esc(h.modulesSection.title) + '</h2>' +
            '<p>' + esc(h.modulesSection.description) + '</p>' +
            '</div>' +
            '<div class="pg-module-grid" id="pgModuleGrid">' +
            h.modules.map(function (m) { return renderModuleCard(m, filter); }).join('') +
            '</div></div></section>';
    }

    function renderExtension(h, filter) {
        var e = h.extension;
        var hide = filter !== 'all' && filter !== 'smartfactory';
        var imgData = typeof getModuleCardImage === 'function'
            ? getModuleCardImage('smart-factory-integration')
            : null;
        if (!imgData && typeof getProductImageGuide === 'function') {
            var sf = getProductImageGuide('smart-factory-integration');
            if (sf && sf.hero) {
                imgData = { src: sf.hero.src, label: sf.hero.label, guide: sf.hero.guide };
            }
        }
        var imgHtml = imgData
            ? '<div class="pg-extension-visual">' + renderSlot(Object.assign({}, imgData, { imageType: '예시 이미지' }), 'module') + '</div>'
            : '';
        return '<section class="pg-extension' + (hide ? ' pg-hidden' : '') + '" data-section="extension" id="pgExtension">' +
            '<div class="container">' +
            '<div class="pg-section-head">' +
            '<span class="pg-section-label">' + esc(h.extensionSection.label) + '</span>' +
            '<h2>' + esc(h.extensionSection.title) + '</h2>' +
            '</div>' +
            '<div class="pg-extension-card" data-filter="' + esc(e.filterTag) + '">' +
            '<span class="pg-module-parent-badge pg-module-parent-badge--ext">TAWERS 확장</span>' +
            imgHtml +
            '<span class="pg-module-badge">' + esc(e.badge) + '</span>' +
            '<h3>' + esc(e.name) + '</h3>' +
            '<p>' + esc(e.description) + '</p>' +
            '<div class="pg-module-tags" style="justify-content:center;margin-bottom:1.25rem">' +
            e.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') +
            '</div>' +
            '<a href="' + e.url + '" class="pg-btn-primary" style="display:inline-block">' + esc(e.btn) + '</a>' +
            '</div></div></section>';
    }

    function renderFilterBtn(f, active, extraClass) {
        var cls = 'pg-filter-btn' + (extraClass ? ' ' + extraClass : '');
        if (f.id === 'tawers') cls += ' pg-filter-btn--tawers';
        if (f.id === active) cls += ' active';
        return '<button type="button" class="' + cls + '" data-filter="' + f.id + '">' + esc(f.label) + '</button>';
    }

    function renderFilters(h, active) {
        var groups = h.filterGroups;
        if (!groups) {
            return '<div class="pg-filters" id="pgFilters">' +
                (h.filters || []).map(function (f) {
                    return renderFilterBtn(f, active, f.id === 'tawers' ? 'pg-filter-btn--tawers' : '');
                }).join('') +
                '</div>';
        }
        return '<div class="pg-filters pg-filters--tiered" id="pgFilters">' +
            '<div class="pg-filter-row pg-filter-row--parent">' +
                '<span class="pg-filter-row-label">시스템</span>' +
                '<div class="pg-filter-row-btns">' +
                    groups.parent.map(function (f) { return renderFilterBtn(f, active, 'pg-filter-btn--parent'); }).join('') +
                '</div>' +
            '</div>' +
            '<div class="pg-filter-row pg-filter-row--modules">' +
                '<span class="pg-filter-row-label">' + esc(groups.modules.label) + '</span>' +
                '<div class="pg-filter-row-btns">' +
                    groups.modules.items.map(function (f) { return renderFilterBtn(f, active, 'pg-filter-btn--child'); }).join('') +
                '</div>' +
            '</div>' +
            '<div class="pg-filter-row pg-filter-row--ext">' +
                '<span class="pg-filter-row-label">' + esc(groups.extension.label) + '</span>' +
                '<div class="pg-filter-row-btns">' +
                    groups.extension.items.map(function (f) { return renderFilterBtn(f, active, 'pg-filter-btn--child pg-filter-btn--ext'); }).join('') +
                '</div>' +
            '</div>' +
            '</div>';
    }

    function bindFilterClicks() {
        document.querySelectorAll('.pg-filter-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                renderPage(this.getAttribute('data-filter'));
            });
        });
        document.querySelectorAll('.pg-system-map-node[data-filter]').forEach(function (node) {
            node.addEventListener('click', function () {
                renderPage(this.getAttribute('data-filter'));
            });
            node.setAttribute('role', 'button');
            node.setAttribute('tabindex', '0');
            node.addEventListener('keydown', function (ev) {
                if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    renderPage(this.getAttribute('data-filter'));
                }
            });
        });
    }

    function tawersMode(filter) {
        if (filter === 'all' || filter === 'tawers') return 'full';
        return 'compact';
    }

    function renderPage(filter) {
        var h = window.PRODUCT_HIERARCHY;
        var root = document.getElementById('productsHierarchy');
        if (!h || !root) return;
        currentFilter = filter || 'all';
        var mode = tawersMode(currentFilter);
        root.innerHTML =
            renderTawersHero(h, h.parent, mode === 'full' ? 'full' : 'compact') +
            renderFilters(h, currentFilter) +
            renderModulesSection(h, currentFilter) +
            renderExtension(h, currentFilter);
        bindFilterClicks();
    }

    document.addEventListener('DOMContentLoaded', function () { renderPage('all'); });
})();
