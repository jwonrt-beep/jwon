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

    function currentSlug() {
        return resolveSlugFromUrl();
    }

    function imgGuide(slug) {
        if (typeof getGuideLookup === 'function') return getGuideLookup(slug);
        return {};
    }

    /** 사진 슬롯: 파일 있으면 사진 표시, 없으면 준비 안내 카드 */
    function renderImageSlot(slot, sizeClass) {
        if (!slot) return '';
        const cls = 'pd-img-slot' + (sizeClass ? ' pd-img-slot--' + sizeClass : '');
        const guideItems = (slot.guide || []).map(function (g) {
            return '<li>' + esc(g) + '</li>';
        }).join('');
        return `
            <div class="${cls}" data-image-path="${esc(slot.src)}">
                <img src="${esc(slot.src)}" alt="${esc(slot.label || '')}" loading="lazy"
                    onload="this.closest('.pd-img-slot').classList.add('has-photo')"
                    onerror="this.closest('.pd-img-slot').classList.add('no-photo');this.style.display='none'">
                <div class="pd-img-slot-placeholder">
                    <div class="pd-img-slot-icon" aria-hidden="true">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    </div>
                    <span class="pd-img-slot-badge">📷 사진 준비</span>
                    <strong class="pd-img-slot-label">${esc(slot.label || '이미지')}</strong>
                    ${slot.src ? `<code class="pd-img-slot-path">${esc(slot.src)}</code>` : ''}
                    ${guideItems ? `<ul class="pd-img-slot-guide">${guideItems}</ul>` : ''}
                </div>
            </div>`;
    }

    function visualGallerySection(gallery, title) {
        if (!gallery || !gallery.length) return '';
        return `
            <section class="pd-section pd-visual-gallery">
                <div class="container">
                    <h2 class="pd-section-title">${esc(title || '현장·적용 사진')}</h2>
                    <p class="pd-section-desc">아래 영역에 현장 사진을 넣으면 고객이 시스템 구성과 적용 결과를 더 직관적으로 이해할 수 있습니다.</p>
                    <div class="pd-gallery-grid">
                        ${gallery.map(function (g) { return renderImageSlot(g, 'gallery'); }).join('')}
                    </div>
                </div>
            </section>`;
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

    function heroVisual(content, slug) {
        const guide = imgGuide(slug);
        const slot = (content && content.heroImage) || guide.hero || {
            src: '',
            label: content.imageHint || '메인 사진',
            guide: [content.imageHint || '제품·현장 대표 사진을 넣어주세요']
        };
        return renderImageSlot(slot, 'hero');
    }

    function heroSection(product, content, qUrl, slug) {
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
                        <div class="pd-hero-text">
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
                        ${heroVisual(c, slug)}
                    </div>
                </div>
            </section>`;
    }

    function summarySection(cards) {
        if (!cards || !cards.length) return '';
        return `
            <section class="pd-section pd-section--alt pd-summary-section">
                <div class="container">
                    <h2 class="pd-section-title pd-section-title--center">한눈에 보는 핵심 포인트</h2>
                    <div class="pd-summary-grid">
                        ${cards.map((c, i) => `
                            <div class="pd-summary-card">
                                <div class="pd-summary-num">${String(i + 1).padStart(2, '0')}</div>
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
                                    <span class="pd-arch-node-link">자세히 →</span>
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
            <section class="pd-section pd-config-flow">
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

    function childModulesSection(sec, slug) {
        if (!sec) return '';
        const guides = imgGuide(slug).module || {};
        return `
            <section class="pd-section pd-child-modules">
                <div class="container">
                    <span class="pd-section-label">TAWERS 하위 구성</span>
                    <h2 class="pd-section-title">${esc(sec.title)}</h2>
                    <div class="pd-child-grid">
                        ${sec.items.map((item) => {
                            const img = guides[item.name] || null;
                            return `
                            <div class="pd-child-card">
                                ${img ? renderImageSlot(img, 'thumb') : ''}
                                <div class="pd-child-card-body">
                                    <h3>${esc(item.name)}</h3>
                                    <p>${esc(item.desc)}</p>
                                    <a href="${detailUrl(item.link)}" class="pd-child-link">${esc(item.btn)} →</a>
                                </div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>
            </section>`;
    }

    function systemSection(sec) {
        if (!sec) return '';
        return `
            <section class="pd-section pd-system-section">
                <div class="container">
                    <h2 class="pd-section-title">${esc(sec.title)}</h2>
                    <p class="pd-section-desc">${esc(sec.description)}</p>
                    <div class="pd-components-grid">
                        ${sec.components.map((c) => `<div class="pd-component-item"><span>${esc(c)}</span></div>`).join('')}
                    </div>
                </div>
            </section>`;
    }

    function recommendationsSection(items, title, slug) {
        if (!items || !items.length) return '';
        const guides = imgGuide(slug).rec || {};
        const hasSite = items.some((r) => r.site);
        return `
            <section class="pd-section pd-rec-section">
                <div class="container">
                    <h2 class="pd-section-title">${esc(title || '추천 구성 예시')}</h2>
                    <p class="pd-section-desc">현장 조건에 따른 구성 예시입니다. 실제 제안은 작업물·소재·생산량을 확인한 뒤 결정합니다.</p>
                    <div class="pd-rec-grid${hasSite ? ' pd-rec-grid--with-site' : ''}">
                        ${items.map((r) => {
                            const img = guides[r.title] || r.image || null;
                            return `
                            <div class="pd-rec-card">
                                ${img ? renderImageSlot(img, 'rec') : ''}
                                <div class="pd-rec-body">
                                    <h4>${esc(r.title)}</h4>
                                    <p class="pd-rec-desc">${esc(r.desc)}</p>
                                    ${r.site ? `<p class="pd-rec-site"><strong>적합 현장</strong> ${esc(r.site)}</p>` : ''}
                                </div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>
            </section>`;
    }

    function lineupSection(cards, slug) {
        if (!cards) return '';
        const guides = imgGuide(slug).series || {};
        return `
            <section class="pd-section pd-lineup-section">
                <div class="container">
                    <h2 class="pd-section-title">라인업 비교 — 작업물 크기에 맞게 선택</h2>
                    <p class="pd-section-desc">소형 TS, 표준 TM, 대형 TL — TAWERS 시스템 안에서 작업물과 설치 공간에 맞는 로봇팔을 선택합니다.</p>
                    <div class="pd-lineup-grid">
                        ${cards.map((c) => {
                            const img = guides[c.name] || c.image || null;
                            return `
                            <div class="pd-lineup-card${c.highlight ? ' pd-lineup-card--highlight' : ''}">
                                ${img ? renderImageSlot(img, 'lineup') : renderImageSlot({
                                    src: '/assets/images/products/lineup/card-' + c.name.replace(/\s+/g, '-').toLowerCase().replace('시리즈', 'series') + '.jpg',
                                    label: c.name + ' 사진',
                                    guide: [c.name + ' 로봇 제품 또는 현장 사진']
                                }, 'lineup')}
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
                            </div>`;
                        }).join('')}
                    </div>
                </div>
            </section>`;
    }

    function selectionGuideSection(guide, title) {
        if (!guide) return '';
        return `
            <section class="pd-section pd-section--alt pd-guide-section">
                <div class="container">
                    <h2 class="pd-section-title">${esc(title || '이런 경우 이렇게 선택하세요')}</h2>
                    <div class="pd-guide-cards">
                        ${guide.map((g) => `
                            <div class="pd-guide-card">
                                <div class="pd-guide-q">${esc(g.condition)}</div>
                                <div class="pd-guide-a">→ ${esc(g.recommendation)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function processCardsSection(cards, slug) {
        if (!cards) return '';
        const guides = imgGuide(slug).process || {};
        return `
            <section class="pd-section pd-process-section">
                <div class="container">
                    <h2 class="pd-section-title">현장 문제별 공법 솔루션</h2>
                    <p class="pd-section-desc">어떤 용접 문제가 있으신지에 따라 적합한 공법을 함께 제안합니다.</p>
                    <div class="pd-process-cards">
                        ${cards.map((c) => {
                            const img = guides[c.name] || c.image || null;
                            return `
                            <div class="pd-process-card">
                                ${img ? renderImageSlot(img, 'process') : ''}
                                <div class="pd-process-card-body">
                                    <h3>${esc(c.name)}</h3>
                                    <p>${esc(c.desc)}</p>
                                    <div class="pd-process-problem">
                                        <span>해결 문제</span>
                                        ${esc(c.problem)}
                                    </div>
                                </div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>
            </section>`;
    }

    function fieldsSection(fields, title) {
        if (!fields) return '';
        return `
            <section class="pd-section pd-section--alt pd-fields-section">
                <div class="container">
                    <h2 class="pd-section-title">${esc(title || '이런 현장에 적용합니다')}</h2>
                    <div class="pd-fields-grid">
                        ${fields.map((f) => `<div class="pd-field-card"><span class="pd-field-icon">●</span>${esc(f)}</div>`).join('')}
                    </div>
                </div>
            </section>`;
    }

    function problemsSection(problems) {
        if (!problems) return '';
        return `
            <section class="pd-section pd-problems-section">
                <div class="container">
                    <h2 class="pd-section-title">이런 문제, 함께 해결할 수 있습니다</h2>
                    <div class="pd-problems-list">
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
                    <h2 class="pd-section-title">${esc(title || '관련 구성')}</h2>
                    <div class="pd-related-grid">
                        ${links.map((r) => `
                            <a href="${detailUrl(r.slug)}" class="pd-related-card">
                                <h3>${esc(r.name)}</h3>
                                <p>${esc(r.desc)}</p>
                                <span class="pd-related-arrow">자세히 보기 →</span>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function specsSection(specs) {
        if (!specs) return '';
        return `
            <section class="pd-section pd-specs-section">
                <div class="container pd-specs-wrap">
                    <h2 class="pd-section-title">주요 사양 · 상담 기준</h2>
                    <div class="pd-spec-cards">
                        ${Object.entries(specs).map(([k, v]) => `
                            <div class="pd-spec-card">
                                <span class="pd-spec-key">${esc(k)}</span>
                                <span class="pd-spec-val">${esc(v)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function processStepsSection(steps) {
        if (!steps) return '';
        return `
            <section class="pd-section pd-section--alt pd-steps-section">
                <div class="container">
                    <h2 class="pd-section-title">상담부터 설치까지, 이렇게 진행됩니다</h2>
                    <div class="pd-process">
                        ${steps.map((s, i) => `
                            <div class="pd-process-step">
                                <div class="pd-process-step-num">${i + 1}</div>
                                <p>${esc(s)}</p>
                            </div>
                        `).join('')}
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

    function renderPage(product, content, slug) {
        const qUrl = quoteUrl(product);
        const type = content.pageType || 'system';
        const guide = imgGuide(slug);
        let html = heroSection(product, content, qUrl, slug);

        html += visualGallerySection(guide.gallery);

        if (type === 'parent-system') {
            html += architectureSection(content.architectureSection);
            html += configFlowSection(content.configFlowSection);
            html += summarySection(content.summaryCards);
            html += childModulesSection(content.childModulesSection, slug);
            html += recommendationsSection(content.recommendations, '현장 조건별 TAWERS 구성 예시', slug);
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
            html += recommendationsSection(content.recommendations, '추천 구성 예시', slug);
        } else if (type === 'lineup') {
            html += lineupSection(content.lineupCards, slug);
            html += selectionGuideSection(content.selectionGuide);
        } else if (type === 'process') {
            html += processCardsSection(content.processCards, slug);
            html += selectionGuideSection(content.selectionGuide, '문제별 선택 가이드');
        } else if (type === 'extension' || type === 'peripheral') {
            html += systemSection(content.systemSection);
            if (content.recommendations) html += recommendationsSection(content.recommendations, '추천 구성 예시', slug);
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

        container.innerHTML = renderPage(product, content, slug);
    };

    document.addEventListener('DOMContentLoaded', window.renderProductDetail);
})();
