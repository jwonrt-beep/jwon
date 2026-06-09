(function () {
    function getProductsBasePath() {
        const parts = window.location.pathname.split('/').filter(Boolean);
        const idx = parts.indexOf('products');
        if (idx >= 0 && parts[idx + 1] && parts[idx + 1] !== 'detail.html' && parts[idx + 1] !== 'index.html') {
            return '../';
        }
        return '';
    }

    function assetPath(relativeFromProducts) {
        const base = getProductsBasePath();
        const clean = relativeFromProducts.replace(/^\.\.\//, '');
        return base ? `../../${clean}` : `../${clean}`;
    }

    const PLACEHOLDER = assetPath('../assets/images/products/placeholder.svg');

    function esc(text) {
        const d = document.createElement('div');
        d.textContent = text || '';
        return d.innerHTML;
    }

    function detailUrl(slug) {
        return `${getProductsBasePath()}${slug}/index.html`;
    }

    function listUrl() {
        return `${getProductsBasePath()}index.html`;
    }

    function quoteUrl(product) {
        const base = getProductsBasePath();
        const prefix = base ? '../../' : '../';
        return `${prefix}contact/index.html?type=quote&product=${encodeURIComponent(product.name)}`;
    }

    function heroVisual(product, hint) {
        return `
            <div class="pd-hero-visual" id="heroVisual" style="background-image:url('${PLACEHOLDER}');background-size:cover;background-position:center;">
                ${hint ? `<div class="pd-hero-visual-hint">${esc(hint)}</div>` : ''}
            </div>`;
    }

    function heroSection(product, content, qUrl) {
        const c = content;
        const parentNote = c.parentNote
            ? `<p class="pd-parent-note">${esc(c.parentNote)}</p>` : '';
        return `
            <section class="pd-hero">
                <div class="container">
                    <div class="pd-hero-grid">
                        <div>
                            <span class="pd-badge">${esc(c.heroBadge || product.badge)}</span>
                            <h1>${esc(c.heroTitle || product.name)}</h1>
                            <p class="pd-hero-desc">${esc(c.heroDescription || product.description)}</p>
                            ${parentNote}
                            <div class="pd-hero-actions">
                                <a href="${qUrl}" class="pd-btn-primary">견적 문의</a>
                                <a href="${listUrl()}" class="pd-btn-outline">제품군 목록</a>
                            </div>
                        </div>
                        ${heroVisual(product, c.imageHint || product.imageHint)}
                    </div>
                </div>
            </section>`;
    }

    function summarySection(cards) {
        if (!cards || !cards.length) return '';
        return `
            <section class="pd-section pd-section--alt">
                <div class="container">
                    <div class="pd-summary-grid">
                        ${cards.map((c) => `
                            <div class="pd-summary-card">
                                <h3>${esc(c.title)}</h3>
                                <p>${esc(c.desc)}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function systemSection(sec) {
        if (!sec) return '';
        return `
            <section class="pd-section">
                <div class="container">
                    <h2 class="pd-section-title">${esc(sec.title)}</h2>
                    <p class="pd-section-desc">${esc(sec.description)}</p>
                    <div class="pd-components-grid">
                        ${sec.components.map((c) => `<div class="pd-component-item">${esc(c)}</div>`).join('')}
                    </div>
                </div>
            </section>`;
    }

    function subConfigSection(sec) {
        if (!sec) return '';
        return `
            <section class="pd-section pd-section--alt">
                <div class="container">
                    <h2 class="pd-section-title">${esc(sec.title)}</h2>
                    <div class="pd-subconfig-grid" style="margin-top:2rem;">
                        ${sec.items.map((item) => `
                            <a href="${detailUrl(item.link)}" class="pd-subconfig-card">
                                <h3>${esc(item.title)}</h3>
                                <p>${esc(item.desc)}</p>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function recommendationsSection(items) {
        if (!items || !items.length) return '';
        return `
            <section class="pd-section">
                <div class="container">
                    <h2 class="pd-section-title">추천 구성 예시</h2>
                    <p class="pd-section-desc">현장 조건에 따른 TAWERS 시스템 구성 예시입니다. 실제 제안은 작업물·소재·생산량을 확인한 뒤 결정합니다.</p>
                    <div class="pd-rec-grid">
                        ${items.map((r) => `
                            <div class="pd-rec-card">
                                <h4>${esc(r.title)}</h4>
                                <p>${esc(r.desc)}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function lineupSection(cards) {
        if (!cards) return '';
        return `
            <section class="pd-section">
                <div class="container">
                    <h2 class="pd-section-title">라인업 비교</h2>
                    <div class="pd-lineup-grid" style="margin-top:2rem;">
                        ${cards.map((c) => `
                            <div class="pd-lineup-card${c.highlight ? ' pd-lineup-card--highlight' : ''}">
                                <div class="pd-lineup-card-head">
                                    <span>${esc(c.badge)}</span>
                                    <h3>${esc(c.name)}</h3>
                                </div>
                                <div class="pd-lineup-card-body">
                                    <p>${esc(c.desc)}</p>
                                    <div class="pd-lineup-tags">
                                        ${(c.tags || []).map((t) => `<span>${esc(t)}</span>`).join('')}
                                    </div>
                                    <div class="pd-lineup-models">대표 모델: ${esc(c.models)}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function selectionGuideSection(guide, title) {
        if (!guide) return '';
        return `
            <section class="pd-section pd-section--alt">
                <div class="container">
                    <h2 class="pd-section-title">${esc(title || '선택 가이드')}</h2>
                    <table class="pd-guide-table" style="margin-top:2rem;">
                        <tbody>
                            ${guide.map((g) => `
                                <tr><th>${esc(g.condition)}</th><td>${esc(g.recommendation)}</td></tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </section>`;
    }

    function processCardsSection(cards) {
        if (!cards) return '';
        return `
            <section class="pd-section">
                <div class="container">
                    <h2 class="pd-section-title">공법 솔루션</h2>
                    <div class="pd-process-cards" style="margin-top:2rem;">
                        ${cards.map((c) => `
                            <div class="pd-process-card">
                                <h3>${esc(c.name)}</h3>
                                <p>${esc(c.desc)}</p>
                                <div class="problem">적합 문제: ${esc(c.problem)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function fieldsSection(fields, title) {
        if (!fields) return '';
        return `
            <section class="pd-section pd-section--alt">
                <div class="container">
                    <h2 class="pd-section-title">${esc(title || '적용 현장')}</h2>
                    <div class="pd-fields-grid" style="margin-top:2rem;">
                        ${fields.map((f) => `<div class="pd-field-card">${esc(f)}</div>`).join('')}
                    </div>
                </div>
            </section>`;
    }

    function problemsSection(problems) {
        if (!problems) return '';
        return `
            <section class="pd-section">
                <div class="container">
                    <h2 class="pd-section-title">해결 가능한 현장 문제</h2>
                    <div class="pd-problems-list" style="margin-top:2rem;">
                        ${problems.map((p) => `<div class="pd-problem-item">${esc(p)}</div>`).join('')}
                    </div>
                </div>
            </section>`;
    }

    function relatedSection(links, title) {
        if (!links) return '';
        return `
            <section class="pd-section pd-section--alt">
                <div class="container">
                    <h2 class="pd-section-title">${esc(title || '관련 제품군')}</h2>
                    <div class="pd-related-grid" style="margin-top:2rem;">
                        ${links.map((r) => `
                            <a href="${detailUrl(r.slug)}" class="pd-related-card">
                                <h3>${esc(r.name)}</h3>
                                <p>${esc(r.desc)}</p>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function specsSection(specs) {
        if (!specs) return '';
        return `
            <section class="pd-section">
                <div class="container">
                    <h2 class="pd-section-title">주요 사양 · 상담 기준</h2>
                    <table class="pd-spec-table" style="margin-top:2rem;">
                        <tbody>
                            ${Object.entries(specs).map(([k, v]) => `
                                <tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </section>`;
    }

    function processStepsSection(steps) {
        if (!steps) return '';
        return `
            <section class="pd-section pd-section--alt">
                <div class="container">
                    <h2 class="pd-section-title">상담부터 설치까지 이런 흐름으로 진행됩니다</h2>
                    <div class="pd-process" style="margin-top:2rem;">
                        ${steps.map((s) => `<div class="pd-process-step"><p>${esc(s)}</p></div>`).join('')}
                    </div>
                </div>
            </section>`;
    }

    function ctaSection(content, qUrl) {
        const c = content.cta || {};
        return `
            <section class="pd-cta">
                <div class="container">
                    <h2>${esc(c.title || '견적 문의')}</h2>
                    <p>${esc(c.description || '')}</p>
                    <div class="pd-cta-actions">
                        <a href="${qUrl}" class="pd-btn-primary">견적 문의하기</a>
                        <a href="${listUrl()}" class="pd-btn-outline">제품군 목록으로 돌아가기</a>
                    </div>
                </div>
            </section>`;
    }

    function renderPage(product, content) {
        const qUrl = quoteUrl(product);
        const type = content.pageType || 'system';
        let html = heroSection(product, content, qUrl);
        html += summarySection(content.summaryCards);

        if (type === 'system') {
            html += systemSection(content.systemSection);
            html += subConfigSection(content.subConfigSection);
            html += recommendationsSection(content.recommendations);
        } else if (type === 'lineup') {
            html += lineupSection(content.lineupCards);
            html += selectionGuideSection(content.selectionGuide);
        } else if (type === 'process') {
            html += processCardsSection(content.processCards);
            html += selectionGuideSection(content.selectionGuide, '문제별 선택 가이드');
        } else if (type === 'extension' || type === 'peripheral') {
            html += systemSection(content.systemSection);
            if (content.recommendations) html += recommendationsSection(content.recommendations);
        }

        html += fieldsSection(content.applicationFields);
        html += problemsSection(content.problems);
        if (content.relatedLinks) html += relatedSection(content.relatedLinks);
        html += specsSection(content.specifications);
        html += processStepsSection(content.process);
        html += ctaSection(content, qUrl);
        return html;
    }

    window.renderProductDetail = function () {
        const slug = resolveSlugFromUrl();
        const product = getCatalogProduct(slug);
        const notFound = document.getElementById('detailNotFound');
        const container = document.getElementById('detailContent');

        if (!product || !slug) {
            if (notFound) notFound.style.display = 'block';
            return;
        }

        const content = getProductDetailContent(slug);
        if (!content) {
            if (notFound) notFound.style.display = 'block';
            return;
        }

        document.title = `${product.name} - 제이원로보틱스`;
        const bc = document.getElementById('breadcrumbProduct');
        if (bc) bc.textContent = product.name;

        container.innerHTML = renderPage(product, content);
    };

    document.addEventListener('DOMContentLoaded', window.renderProductDetail);
})();
