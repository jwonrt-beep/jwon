(function () {
    const PLACEHOLDER = '/assets/images/products/placeholder.svg';

    function esc(text) {
        const d = document.createElement('div');
        d.textContent = text || '';
        return d.innerHTML;
    }

    function detailUrl(slug) {
        return `/products/${slug}/`;
    }

    function modelUrl(slug) {
        return `/products/welding-robot/${slug}/`;
    }

    function listUrl() {
        return '/products/';
    }

    function quoteUrl(product) {
        return `/contact/index.html?type=quote&product=${encodeURIComponent(product.name)}`;
    }

    function parentSystemBanner(ps) {
        if (!ps) return '';
        const link = ps.link
            ? `<a href="${ps.link}" class="pd-parent-link">${esc(ps.linkText || '상위 시스템 보기')}</a>`
            : '';
        return `
            <div class="pd-parent-banner">
                <div class="container pd-parent-banner-inner">
                    <span class="pd-parent-label">${esc(ps.label || '상위 시스템')}</span>
                    <span class="pd-parent-text">${esc(ps.text)}</span>
                    ${link}
                </div>
            </div>`;
    }

    function hierarchyBanner(items) {
        if (!items || !items.length) return '';
        return `
            <div class="pd-hierarchy-banner">
                <div class="container pd-hierarchy-banner-inner">
                    ${items.map((item) => {
                        const inner = item.link
                            ? `<a href="${item.link}">${esc(item.text)}</a>`
                            : esc(item.text);
                        return `<div class="pd-hierarchy-item"><span>${esc(item.label)}</span>${inner}</div>`;
                    }).join('')}
                </div>
            </div>`;
    }

    function heroVisual(product, hint) {
        return `
            <div class="pd-hero-visual" id="heroVisual" style="background-image:url('${PLACEHOLDER}');background-size:cover;background-position:center;">
                ${hint ? `<div class="pd-hero-visual-hint">${esc(hint)}</div>` : ''}
            </div>`;
    }

    function heroSection(product, content, qUrl) {
        const c = content;
        const parentNote = c.parentNote && !c.parentSystem
            ? `<p class="pd-parent-note">${esc(c.parentNote)}</p>` : '';
        const highlight = c.heroHighlight
            ? `<p class="pd-hero-highlight">${esc(c.heroHighlight)}</p>` : '';
        const secondary = c.heroSecondaryBtn
            ? `<a href="${c.heroSecondaryBtn.target || '#'}" class="pd-btn-outline">${esc(c.heroSecondaryBtn.label)}</a>`
            : '';
        const parentLink = c.parentSystem && c.parentSystem.link
            ? `<a href="${c.parentSystem.link}" class="pd-btn-outline">${esc(c.parentSystem.linkText || 'TAWERS 시스템 보기')}</a>`
            : '';
        const listBtn = c.pageType === 'model'
            ? `<a href="/products/welding-robot-manipulator-lineup/" class="pd-btn-outline">로봇 라인업</a>`
            : `<a href="${listUrl()}" class="pd-btn-outline">제품군 목록</a>`;

        return `
            ${parentSystemBanner(c.parentSystem)}
            ${hierarchyBanner(c.hierarchy)}
            <section class="pd-hero">
                <div class="container">
                    <div class="pd-hero-grid">
                        <div>
                            <span class="pd-badge">${esc(c.heroBadge || product.badge)}</span>
                            <h1>${esc(c.heroTitle || product.name)}</h1>
                            <p class="pd-hero-desc">${esc(c.heroDescription || product.description)}</p>
                            ${highlight}
                            ${parentNote}
                            <div class="pd-hero-actions">
                                <a href="${qUrl}" class="pd-btn-primary">견적 문의</a>
                                ${parentLink || secondary}
                                ${listBtn}
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

    function architectureSection(sec) {
        if (!sec) return '';
        const id = sec.id || 'architecture';
        const positions = ['top', 'right-top', 'right-bottom', 'bottom', 'left-bottom', 'left-top'];
        return `
            <section class="pd-section pd-architecture" id="${esc(id)}">
                <div class="container">
                    <h2 class="pd-section-title">${esc(sec.title)}</h2>
                    <p class="pd-section-desc">${esc(sec.description)}</p>
                    <div class="pd-arch-diagram">
                        <div class="pd-arch-center">
                            <div class="pd-arch-center-inner">
                                <span class="pd-arch-center-badge">통합 플랫폼</span>
                                <h3>${esc(sec.center.title)}</h3>
                                ${sec.center.subtitle ? `<p>${esc(sec.center.subtitle)}</p>` : ''}
                            </div>
                        </div>
                        ${sec.nodes.map((node, i) => {
                            const pos = positions[i] || 'top';
                            const href = node.link ? detailUrl(node.link) : '#';
                            return `
                                <a href="${href}" class="pd-arch-node pd-arch-node--${pos}">
                                    <h4>${esc(node.title)}</h4>
                                    <p>${esc(node.desc)}</p>
                                </a>`;
                        }).join('')}
                        <svg class="pd-arch-lines" aria-hidden="true" viewBox="0 0 800 600" preserveAspectRatio="none">
                            <line x1="400" y1="300" x2="400" y2="80" />
                            <line x1="400" y1="300" x2="620" y2="140" />
                            <line x1="400" y1="300" x2="620" y2="460" />
                            <line x1="400" y1="300" x2="400" y2="520" />
                            <line x1="400" y1="300" x2="180" y2="460" />
                            <line x1="400" y1="300" x2="180" y2="140" />
                        </svg>
                    </div>
                </div>
            </section>`;
    }

    function configFlowSection(sec) {
        if (!sec) return '';
        return `
            <section class="pd-section pd-section--alt pd-config-flow">
                <div class="container">
                    <h2 class="pd-section-title">${esc(sec.title)}</h2>
                    <div class="pd-flow-timeline">
                        ${sec.steps.map((step, i) => `
                            <div class="pd-flow-step">
                                <div class="pd-flow-num">${String(i + 1).padStart(2, '0')}</div>
                                <div class="pd-flow-body">
                                    <h3>${esc(step.title)}</h3>
                                    <p>${esc(step.desc)}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function childModulesSection(sec) {
        if (!sec) return '';
        return `
            <section class="pd-section pd-child-modules">
                <div class="container">
                    <span class="pd-section-label">TAWERS 하위 구성</span>
                    <h2 class="pd-section-title">${esc(sec.title)}</h2>
                    <div class="pd-child-grid">
                        ${sec.items.map((item) => `
                            <div class="pd-child-card">
                                <h3>${esc(item.name)}</h3>
                                <p>${esc(item.desc)}</p>
                                <a href="${detailUrl(item.link)}" class="pd-child-link">${esc(item.btn)} →</a>
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

    function recommendationsSection(items, title) {
        if (!items || !items.length) return '';
        const hasSite = items.some((r) => r.site);
        return `
            <section class="pd-section">
                <div class="container">
                    <h2 class="pd-section-title">${esc(title || '추천 구성 예시')}</h2>
                    <p class="pd-section-desc">현장 조건에 따른 TAWERS 시스템 구성 예시입니다. 실제 제안은 작업물·소재·생산량을 확인한 뒤 결정합니다.</p>
                    <div class="pd-rec-grid${hasSite ? ' pd-rec-grid--with-site' : ''}">
                        ${items.map((r) => `
                            <div class="pd-rec-card">
                                <h4>${esc(r.title)}</h4>
                                <p class="pd-rec-desc">${esc(r.desc)}</p>
                                ${r.site ? `<p class="pd-rec-site">적합 현장: ${esc(r.site)}</p>` : ''}
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
                                    ${c.modelLinks && c.modelLinks.length ? `
                                        <div class="pd-model-links">
                                            ${c.modelLinks.map((m) => `<a href="${m.url || modelUrl(m.name.toLowerCase())}">${esc(m.name)}</a>`).join('')}
                                        </div>
                                    ` : ''}
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

        if (type === 'parent-system') {
            html += architectureSection(content.architectureSection);
            html += configFlowSection(content.configFlowSection);
            html += summarySection(content.summaryCards);
            html += childModulesSection(content.childModulesSection);
            html += recommendationsSection(content.recommendations, '현장 조건별 TAWERS 구성 예시');
            html += fieldsSection(content.applicationFields);
            html += problemsSection(content.problems);
            html += specsSection(content.specifications);
            html += processStepsSection(content.process);
            html += ctaSection(content, qUrl);
            return html;
        }

        if (type === 'model') {
            html += summarySection(content.summaryCards);
            html += specsSection(content.specifications);
            if (content.relatedLinks) html += relatedSection(content.relatedLinks);
            html += processStepsSection(content.process);
            html += ctaSection(content, qUrl);
            return html;
        }

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
            if (content.selectionGuide) html += selectionGuideSection(content.selectionGuide, '구성 선택 가이드');
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
            if (notFound) { notFound.style.display = 'block'; notFound.hidden = false; }
            if (container) container.innerHTML = '';
            return;
        }

        let content = getProductDetailContent(slug);
        if (!content && typeof getModelDetailContent === 'function') {
            content = getModelDetailContent(slug);
        }
        if (!content) {
            if (notFound) { notFound.style.display = 'block'; notFound.hidden = false; }
            if (container) container.innerHTML = '';
            return;
        }

        if (notFound) { notFound.style.display = 'none'; notFound.hidden = true; }

        document.title = `${product.name} - 제이원로보틱스`;
        const bc = document.getElementById('breadcrumbProduct');
        if (bc) bc.textContent = product.name;

        container.innerHTML = renderPage(product, content);
    };

    document.addEventListener('DOMContentLoaded', window.renderProductDetail);
})();
