(function () {
    var currentFilter = 'all';

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
            return getTawersHeroImagePriority();
        }
        var g = typeof getProductImageGuide === 'function'
            ? getProductImageGuide('tawers-welding-robot-system')
            : null;
        if (!g) return null;
        return g.hero || g.systemMap || g.systemArchitecture || null;
    }

    function renderTawersHero(parent, mode) {
        if (mode === 'compact') {
            return '<div class="pg-compact-tawers" data-section="tawers">' +
                '<span>TAWERS 용접로봇 시스템의 구성 모듈 · </span>' +
                '<a href="' + parent.url + '">TAWERS 시스템 보기</a></div>';
        }
        if (mode === 'hidden') return '';
        var heroSlot = pickTawersHeroSlot();
        var visualHtml = heroSlot
            ? '<div class="pg-tawers-visual pg-tawers-visual--slot">' + renderSlot(heroSlot, 'hero') + '</div>'
            : '<div class="pg-tawers-visual"><div class="pg-tawers-visual-hint">' + esc(parent.imageHint) + '</div></div>';
        return '<section class="pg-tawers" data-section="tawers" id="pgTawersHero">' +
            '<div class="container">' +
            '<div class="pg-tawers-grid">' +
            '<div>' +
            '<p class="pg-tawers-label">' + esc(parent.sectionLabel) + '</p>' +
            '<span class="pg-tawers-badge">' + esc(parent.badge) + '</span>' +
            '<h2>' + esc(parent.name) + '</h2>' +
            '<p class="pg-tawers-desc">' + esc(parent.description) + '</p>' +
            '<p class="pg-tawers-highlight">' + esc(parent.highlight) + '</p>' +
            '<div class="pg-tawers-actions">' +
            '<a href="' + parent.url + '" class="pg-btn-primary">TAWERS 시스템 자세히 보기</a>' +
            '<a href="/contact/index.html?type=quote&product=' + encodeURIComponent(parent.quoteProduct) + '" class="pg-btn-outline">견적 문의하기</a>' +
            '</div></div>' +
            visualHtml +
            '</div></div></section>';
    }

    function renderModuleCard(m, filter) {
        var hidden = filter !== 'all' && filter !== m.filterTag ? ' pg-hidden' : '';
        var imgData = typeof getModuleCardImage === 'function' ? getModuleCardImage(m.id) : null;
        var imgHtml = '';
        if (imgData) {
            imgHtml = '<div class="pg-module-thumb">' + renderSlot({
                src: imgData.src,
                label: imgData.label,
                guide: imgData.guide
            }, 'module') + '</div>';
        }
        return '<article class="pg-module-card' + hidden + '" data-filter="' + esc(m.filterTag) + '" data-module="' + esc(m.id) + '">' +
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

    function renderFilters(h, active) {
        return '<div class="pg-filters" id="pgFilters">' +
            h.filters.map(function (f) {
                var cls = 'pg-filter-btn' + (f.id === 'tawers' ? ' pg-filter-btn--tawers' : '');
                if (f.id === active) cls += ' active';
                return '<button class="' + cls + '" data-filter="' + f.id + '">' + esc(f.label) + '</button>';
            }).join('') +
            '</div>';
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
        root.innerHTML = renderFilters(h, currentFilter) +
            renderTawersHero(h.parent, mode === 'full' ? 'full' : 'compact') +
            renderModulesSection(h, currentFilter) +
            renderExtension(h, currentFilter);
        document.querySelectorAll('.pg-filter-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                renderPage(this.getAttribute('data-filter'));
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () { renderPage('all'); });
})();
