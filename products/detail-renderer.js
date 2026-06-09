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
        if (typeof window.renderImageSlotHtml === 'function') {
            return window.renderImageSlotHtml(slot, sizeClass);
        }
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

    function featuredImageSection(slot, title, desc, sizeClass) {
        if (!slot) return '';
        return `
            <section class="pd-section pd-featured-image">
                <div class="container">
                    ${title ? `<h2 class="pd-section-title">${esc(title)}</h2>` : ''}
                    ${desc ? `<p class="pd-section-desc">${esc(desc)}</p>` : ''}
                    ${renderImageSlot(slot, sizeClass || 'featured')}
                </div>
            </section>`;
    }

    function lineupCompareSection(guide) {
        if (!guide.modelComparison && !guide.reachComparison) return '';
        return `
            <section class="pd-section pd-lineup-compare">
                <div class="container">
                    <h2 class="pd-section-title">모델별 작업반경과 적용 현장을 비교하세요</h2>
                    <p class="pd-section-desc">TS · TM · TL 시리즈의 차이를 작업반경과 적용 현장 중심으로 확인합니다.</p>
                    <div class="pd-compare-grid">
                        ${guide.modelComparison ? renderImageSlot(guide.modelComparison, 'compare') : ''}
                        ${guide.reachComparison ? renderImageSlot(guide.reachComparison, 'compare') : ''}
                    </div>
                </div>
            </section>`;
    }

    function modelGallerySection(slug, content) {
        const guide = imgGuide(slug);
        const gallery = guide.gallery || [];
        if (!gallery.length) return '';
        const modelName = content.heroTitle || slug;
        return `
            <section class="pd-section pd-model-gallery">
                <div class="container">
                    <h2 class="pd-section-title">${esc(modelName)} 이미지 구성</h2>
                    <p class="pd-section-desc">제품 단독, 현장 적용, 디테일, 작업반경, 추천 워크 — 5개 슬롯으로 모델 특성을 확인합니다.</p>
                    <div class="pd-gallery-grid pd-gallery-grid--model">
                        ${gallery.map(function (g) { return renderImageSlot(g, 'gallery'); }).join('')}
                    </div>
                </div>
            </section>`;
    }

    function imagePrioritySection(priority) {
        if (!priority || !priority.tiers) return '';
        return `
            <section class="pd-section pd-image-priority">
                <div class="container">
                    <h2 class="pd-section-title">${esc(priority.title)}</h2>
                    <p class="pd-section-desc">${esc(priority.description)}</p>
                    <div class="pd-priority-grid">
                        ${priority.tiers.map(function (tier) {
                            return `
                            <div class="pd-priority-card">
                                <span class="pd-priority-level">${esc(tier.level)}</span>
                                <h3>${esc(tier.label)}</h3>
                                <ul>${tier.items.map(function (item) { return '<li>' + esc(item) + '</li>'; }).join('')}</ul>
                            </div>`;
                        }).join('')}
                    </div>
                </div>
            </section>`;
    }

    function visualGallerySection(gallery, title, desc) {
        if (!gallery || !gallery.length) return '';
        const isExample = gallery.some(function (g) { return g.imageType === '예시 이미지'; });
        const defaultDesc = isExample
            ? '아래는 연동 구성·대시보드 예시 이미지입니다. 실제 납품 사례와 구분하여 표시합니다.'
            : '아래 영역에 현장 사진을 넣으면 고객이 시스템 구성과 적용 결과를 더 직관적으로 이해할 수 있습니다.';
        return `
            <section class="pd-section pd-visual-gallery">
                <div class="container">
                    <h2 class="pd-section-title">${esc(title || '현장·적용 사진')}</h2>
                    <p class="pd-section-desc">${esc(desc || defaultDesc)}</p>
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

    function modelHeroVisual(content, slug) {
        const guide = imgGuide(slug);
        const slot = guide.hero || {
            src: '/assets/images/products/robots/' + slug + '.jpg',
            label: (content.heroTitle || '') + ' 제품/현장 사진',
            guide: [
                (content.heroTitle || '') + ' 로봇 단독 제품 사진 (정면·측면)',
                '현장 설치 후 용접 작업 장면',
                '작업반경·로봇 크기가 보이는 각도'
            ]
        };
        const modelName = content.heroTitle || '';
        const seriesName = content.heroBadge || '';
        return `
            <div class="pd-model-hero-visual">
                ${renderImageSlot(slot, 'hero')}
                <div class="pd-model-hero-label" aria-hidden="true">
                    <span class="pd-model-hero-series">${esc(seriesName)}</span>
                    <span class="pd-model-hero-name">${esc(modelName)}</span>
                </div>
            </div>`;
    }

    function heroVisual(content, slug) {
        if (content.pageType === 'model' || content.pageType === 'power-series' || content.pageType === 'process-item' || content.pageType === 'highpower-config' || content.pageType === 'jig-config' || content.pageType === 'turnkey-config' || content.pageType === 'smartfactory-config') {
            return modelHeroVisual(content, slug);
        }
        if (content.pageType === 'parent-system' && typeof getTawersHeroImagePriority === 'function') {
            var tawersSlot = getTawersHeroImagePriority('parent-detail');
            if (tawersSlot) {
                return renderImageSlot(tawersSlot, 'hero');
            }
        }
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
        const parentNote = c.parentNote
            ? `<p class="pd-parent-note">${esc(c.parentNote)}</p>` : '';
        const highlight = c.heroHighlight
            ? `<p class="pd-hero-highlight">${esc(c.heroHighlight)}</p>` : '';
        const position = c.heroPosition
            ? `<p class="pd-hero-position">${esc(c.heroPosition)}</p>` : '';
        const secondary = c.heroSecondaryBtn
            ? `<a href="${c.heroSecondaryBtn.target || '#'}" class="pd-btn-outline">${esc(c.heroSecondaryBtn.label)}</a>`
            : '';
        const parentLink = c.parentSystem && c.parentSystem.link && c.pageType !== 'model' && c.pageType !== 'power-series' && c.pageType !== 'process-item' && c.pageType !== 'highpower-config' && c.pageType !== 'jig-config' && c.pageType !== 'turnkey-config' && c.pageType !== 'smartfactory-config'
            ? `<a href="${c.parentSystem.link}" class="pd-btn-outline">${esc(c.parentSystem.linkText || 'TAWERS 시스템 보기')}</a>`
            : '';
        const listBtn = c.backLink
            ? `<a href="${c.backLink.url}" class="pd-btn-outline">${esc(c.backLink.label)}</a>`
            : c.pageType === 'model'
            ? `<a href="/products/welding-robot-manipulator-lineup/" class="pd-btn-outline">로봇 라인업 보기</a>`
            : c.pageType === 'power-series'
            ? `<a href="/products/welding-power-controller/" class="pd-btn-outline">용접전원·컨트롤러 구성 보기</a>`
            : c.pageType === 'process-item'
            ? `<a href="/products/welding-process-software/" class="pd-btn-outline">용접 공법 소프트웨어 보기</a>`
            : c.pageType === 'highpower-config'
            ? `<a href="/products/high-power-welding-system/" class="pd-btn-outline">고출력 용접 시스템 보기</a>`
            : c.pageType === 'jig-config'
            ? `<a href="/products/jig-positioner-automation/" class="pd-btn-outline">지그·포지셔너 자동화 보기</a>`
            : c.pageType === 'turnkey-config'
            ? `<a href="/products/turnkey-robot-automation-cell/" class="pd-btn-outline">턴키 로봇 자동화 셀 보기</a>`
            : c.pageType === 'smartfactory-config'
            ? `<a href="/products/smart-factory-integration/" class="pd-btn-outline">스마트팩토리 연동 솔루션 보기</a>`
            : `<a href="${listUrl()}" class="pd-btn-outline">제품군 목록</a>`;

        return `
            ${parentSystemBanner(c.parentSystem)}
            ${hierarchyBanner(c.hierarchy)}
            <section class="pd-hero${c.pageType === 'model' || c.pageType === 'power-series' || c.pageType === 'process-item' || c.pageType === 'highpower-config' || c.pageType === 'jig-config' || c.pageType === 'turnkey-config' || c.pageType === 'smartfactory-config' ? ' pd-hero--model' : ''}">
                <div class="container">
                    <div class="pd-hero-grid">
                        <div class="pd-hero-text">
                            <span class="pd-badge">${esc(c.heroBadge || product.badge)}</span>
                            <h1>${esc(c.heroTitle || product.name)}</h1>
                            ${position}
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

    function summarySection(cards, title) {
        if (!cards || !cards.length) return '';
        return `
            <section class="pd-section pd-section--alt pd-summary-section">
                <div class="container">
                    <h2 class="pd-section-title pd-section-title--center">${esc(title || '한눈에 보는 핵심 포인트')}</h2>
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

    function architectureSection(sec, slug) {
        if (!sec) return '';
        const id = sec.id || 'architecture';
        const guide = imgGuide(slug);
        const archImg = guide.systemArchitecture || null;
        const positions = ['top', 'right-top', 'right-bottom', 'bottom', 'left-bottom', 'left-top'];
        return `
            <section class="pd-section pd-architecture" id="${esc(id)}">
                <div class="container">
                    <h2 class="pd-section-title">${esc(sec.title)}</h2>
                    <p class="pd-section-desc">${esc(sec.description)}</p>
                    ${archImg ? `<div class="pd-arch-image">${renderImageSlot(archImg, 'featured')}</div>` : ''}
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

    function configFlowSection(sec, slug) {
        if (!sec) return '';
        const guide = imgGuide(slug);
        const flowImg = guide.configurationFlow || null;
        return `
            <section class="pd-section pd-config-flow">
                <div class="container">
                    <h2 class="pd-section-title">${esc(sec.title)}</h2>
                    ${flowImg ? `<div class="pd-flow-image">${renderImageSlot(flowImg, 'featured')}</div>` : ''}
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

    function systemMapSection(guide) {
        if (!guide.systemMap) return '';
        return featuredImageSection(
            guide.systemMap,
            'TAWERS 하위 구성 연결',
            'TAWERS 용접로봇 시스템을 중심으로 로봇 라인업, 공법, 주변 설비, 데이터 연동까지 계층적으로 연결됩니다.',
            'map'
        );
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
                            const slot = img ? {
                                src: img.src,
                                label: item.name,
                                guide: img.guide || [],
                                fallback: img.fallback
                            } : null;
                            return `
                            <div class="pd-child-card">
                                ${slot ? renderImageSlot(slot, 'thumb') : ''}
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

    function lineupSection(cards, slug, sectionMeta) {
        if (!cards) return '';
        const guides = imgGuide(slug).series || {};
        const title = (sectionMeta && sectionMeta.title) || '라인업 비교 — 작업물 크기에 맞게 선택';
        const desc = (sectionMeta && sectionMeta.desc) || '소형 TS, 표준 TM, 대형 TL — TAWERS 시스템 안에서 작업물과 설치 공간에 맞는 로봇팔을 선택합니다.';
        return `
            <section class="pd-section pd-lineup-section">
                <div class="container">
                    <h2 class="pd-section-title">${esc(title)}</h2>
                    <p class="pd-section-desc">${esc(desc)}</p>
                    <div class="pd-lineup-grid">
                        ${cards.map((c) => {
                            const img = guides[c.name] || c.image || null;
                            const detailLinks = c.modelLinks || c.seriesLinks || c.detailLinks || [];
                            return `
                            <div class="pd-lineup-card${c.highlight ? ' pd-lineup-card--highlight' : ''}">
                                ${img ? renderImageSlot(img, 'lineup') : renderImageSlot({
                                    src: '/assets/images/products/lineup/card-' + c.name.replace(/\s+/g, '-').toLowerCase().replace('시리즈', 'series').replace('계열', 'series').replace('통합-컨트롤러', 'controller') + '.jpg',
                                    label: c.name + ' 사진',
                                    guide: [c.name + ' 제품 또는 현장 사진']
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
                                    ${c.problem ? `<div class="pd-lineup-problem"><span>해결 문제</span> ${esc(c.problem)}</div>` : ''}
                                    ${c.models ? `<div class="pd-lineup-models">${c.modelLinks || c.detailLinks ? '공법' : '구성'}: ${esc(c.models)}</div>` : ''}
                                    ${detailLinks.length ? `
                                        <div class="pd-model-links">
                                            ${detailLinks.map((m) => `<a href="${m.url}">${esc(m.name)}</a>`).join('')}
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

    function cautionNoteSection(note) {
        if (!note) return '';
        return `
            <section class="pd-section pd-caution-section">
                <div class="container">
                    <div class="pd-caution-box">
                        <strong>참고 사항</strong>
                        <p>${esc(note)}</p>
                    </div>
                </div>
            </section>`;
    }

    function modelSpecsTableSection(specs, note) {
        if (!specs) return '';
        const defaultNote = '아래 수치는 제공된 로봇 매니퓰레이터 사양 기준입니다. 토치·케이블·주변 장치 구성은 현장 조건에 따라 확인이 필요합니다.';
        return `
            <section class="pd-section pd-model-specs">
                <div class="container">
                    <h2 class="pd-section-title">주요 스펙</h2>
                    <p class="pd-section-desc">${esc(note || defaultNote)}</p>
                    <table class="pd-spec-table pd-spec-table--model">
                        <tbody>
                            ${Object.entries(specs).map(([k, v]) => `
                                <tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </section>`;
    }

    function combinationsSection(items) {
        if (!items || !items.length) return '';
        return `
            <section class="pd-section pd-section--alt pd-combo-section">
                <div class="container">
                    <h2 class="pd-section-title">TAWERS 시스템 추천 조합</h2>
                    <p class="pd-section-desc">이 모델을 TAWERS 통합 시스템 안에서 이렇게 구성하는 경우가 많습니다.</p>
                    <div class="pd-combo-grid">
                        ${items.map((item) => `
                            <div class="pd-combo-card">
                                <span class="pd-combo-icon">+</span>
                                <p>${esc(item)}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function similarComparisonSection(items) {
        if (!items || !items.length) return '';
        return `
            <section class="pd-section pd-compare-section">
                <div class="container">
                    <h2 class="pd-section-title">비슷한 모델과 비교</h2>
                    <div class="pd-compare-list">
                        ${items.map((item) => `
                            <div class="pd-compare-item">${esc(item)}</div>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    function consultationCriteriaSection(criteria) {
        if (!criteria || !criteria.length) return '';
        return `
            <section class="pd-section pd-section--alt pd-criteria-section">
                <div class="container">
                    <h2 class="pd-section-title">상담 시 준비해주시면 좋은 정보</h2>
                    <p class="pd-section-desc">아래 정보를 주시면 이 모델의 적용 가능 여부와 더 적합한 구성을 함께 검토합니다.</p>
                    <div class="pd-criteria-grid">
                        ${criteria.map((c) => `<div class="pd-criteria-item">${esc(c)}</div>`).join('')}
                    </div>
                </div>
            </section>`;
    }

    function modelCtaSection(content, qUrl) {
        const c = content.cta || {};
        const back = content.backLink || { url: '/products/welding-robot-manipulator-lineup/', label: '로봇 라인업 보기' };
        if (content.pageType === 'power-series') {
            back.url = '/products/welding-power-controller/';
            back.label = '용접전원·컨트롤러 구성 보기';
        }
        if (content.pageType === 'process-item') {
            back.url = '/products/welding-process-software/';
            back.label = '용접 공법 소프트웨어 보기';
        }
        if (content.pageType === 'highpower-config') {
            back.url = '/products/high-power-welding-system/';
            back.label = '고출력 용접 시스템 보기';
        }
        if (content.pageType === 'jig-config') {
            back.url = '/products/jig-positioner-automation/';
            back.label = '지그·포지셔너 자동화 보기';
        }
        if (content.pageType === 'turnkey-config') {
            back.url = '/products/turnkey-robot-automation-cell/';
            back.label = '턴키 로봇 자동화 셀 보기';
        }
        if (content.pageType === 'smartfactory-config') {
            back.url = '/products/smart-factory-integration/';
            back.label = '스마트팩토리 연동 솔루션 보기';
        }
        return `
            <section class="pd-cta">
                <div class="container">
                    <h2>${esc(c.title || '견적 문의')}</h2>
                    <p>${esc(c.description || '')}</p>
                    <div class="pd-cta-actions">
                        <a href="${qUrl}" class="pd-btn-primary">견적 문의하기</a>
                        <a href="${back.url}" class="pd-btn-outline">${esc(back.label)}</a>
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

        if (type === 'model' || type === 'power-series' || type === 'process-item' || type === 'highpower-config' || type === 'jig-config' || type === 'turnkey-config' || type === 'smartfactory-config') {
            const specNote = type === 'power-series'
                ? '출력·전류·토치·와이어 송급 구성은 작업물 조건에 따라 상담 시 확인합니다. 임의 수치는 표기하지 않습니다.'
                : type === 'process-item'
                ? '공법 파라미터·세부 용접 조건은 작업물·소재·두께에 따라 상담 시 확인합니다. 임의 수치는 표기하지 않습니다.'
                : type === 'highpower-config'
                ? '출력·전류·토치·와이어 송급·용접 속도 등은 작업물 조건에 따라 상담 시 확인합니다. 임의 수치는 표기하지 않습니다.'
                : type === 'jig-config'
                ? '지그·포지셔너 치수, 회전·슬라이드 스트로크, 클램핑·센서 구성은 작업물 조건에 따라 상담 시 확인합니다. 임의 수치는 표기하지 않습니다.'
                : type === 'turnkey-config'
                ? '셀 치수, 펜스·인터록, 설치·시운전 범위는 현장 조건에 따라 상담 시 확인합니다. 임의 수치는 표기하지 않습니다.'
                : type === 'smartfactory-config'
                ? '수집 데이터 항목, 연동 범위, MES·IT 환경은 현장 조건에 따라 상담 시 확인합니다. 임의 수치·기능은 표기하지 않습니다.'
                : undefined;
            html += summarySection(content.summaryCards, '핵심 요약');
            html += cautionNoteSection(content.cautionNote);
            if (type === 'process-item' && guide.processSelectionMap) {
                html += featuredImageSection(guide.processSelectionMap, '문제별 용접 공법 선택표', '현장 문제 기준으로 공법 적용 가능 여부를 함께 검토합니다.', 'map');
            }
            if (type === 'highpower-config' && guide.wghSystemMap) {
                html += featuredImageSection(guide.wghSystemMap, 'WGH 고출력 구성 맵', 'TAWERS 고출력 확장 구성으로 WGH와 TL 로봇을 함께 검토합니다.', 'map');
            }
            if (type === 'turnkey-config' && guide.processFlow) {
                html += featuredImageSection(guide.processFlow, '턴키 도입 프로세스', '상담부터 시운전·교육까지의 턴키 납품 흐름입니다.', 'flow');
            }
            if (type === 'smartfactory-config') {
                html += visualGallerySection(guide.gallery, '연동 화면 예시', '아래는 대시보드·데이터 연동 예시 이미지입니다. 실제 납품 사례와 구분하여 표시합니다.');
            } else {
                html += modelGallerySection(slug, content);
            }
            html += modelSpecsTableSection(content.specifications, specNote);
            html += fieldsSection(content.applicationFields, '적용 현장');
            html += combinationsSection(content.recommendedCombinations);
            html += similarComparisonSection(content.similarComparison);
            html += consultationCriteriaSection(content.consultationCriteria);
            html += modelCtaSection(content, qUrl);
            return html;
        }

        if (type !== 'parent-system') {
            html += visualGallerySection(guide.gallery);
        }

        if (type === 'parent-system') {
            html += architectureSection(content.architectureSection, slug);
            html += configFlowSection(content.configFlowSection, slug);
            html += systemMapSection(guide);
            html += summarySection(content.summaryCards);
            html += childModulesSection(content.childModulesSection, slug);
            html += recommendationsSection(content.recommendations, '현장 조건별 TAWERS 구성 예시', slug);
            html += visualGallerySection(guide.gallery, '시스템 전체·현장 사진');
            html += fieldsSection(content.applicationFields);
            html += problemsSection(content.problems);
            html += specsSection(content.specifications);
            html += processStepsSection(content.process);
            html += imagePrioritySection(guide.imagePriority);
            html += ctaSection(content, qUrl);
            return html;
        }

        html += summarySection(content.summaryCards);

        if (type === 'system') {
            html += systemSection(content.systemSection);
            html += recommendationsSection(content.recommendations, '추천 구성 예시', slug);
        } else if (type === 'lineup') {
            var lineupCards;
            if (slug === 'welding-power-controller' && typeof buildPowerLineupCardsFromData === 'function') {
                lineupCards = buildPowerLineupCardsFromData();
            } else if (slug === 'welding-process-software' && typeof buildProcessLineupCardsFromData === 'function') {
                lineupCards = buildProcessLineupCardsFromData();
            } else if (slug === 'high-power-welding-system' && typeof buildHighPowerLineupCardsFromData === 'function') {
                lineupCards = buildHighPowerLineupCardsFromData();
            } else if (slug === 'jig-positioner-automation' && typeof buildJigLineupCardsFromData === 'function') {
                lineupCards = buildJigLineupCardsFromData();
            } else if (slug === 'turnkey-robot-automation-cell' && typeof buildTurnkeyLineupCardsFromData === 'function') {
                lineupCards = buildTurnkeyLineupCardsFromData();
            } else if (slug === 'smart-factory-integration' && typeof buildSmartFactoryLineupCardsFromData === 'function') {
                lineupCards = buildSmartFactoryLineupCardsFromData();
            } else if (typeof buildLineupCardsFromData === 'function') {
                lineupCards = buildLineupCardsFromData();
            } else {
                lineupCards = content.lineupCards;
            }
            if (slug === 'welding-robot-manipulator-lineup') {
                html += lineupCompareSection(guide);
            }
            if (slug === 'welding-process-software' && guide.processSelectionMap) {
                html += featuredImageSection(
                    guide.processSelectionMap,
                    '문제별 용접 공법 선택표',
                    '현장 문제 기준으로 S-AWP, HBC, Zi-Tech, 고출력 구성을 선택할 수 있습니다.',
                    'map'
                );
            }
            if (slug === 'high-power-welding-system' && guide.wghSystemMap) {
                html += featuredImageSection(
                    guide.wghSystemMap,
                    'WGH 고출력 구성 맵',
                    'WGH는 TAWERS와 별개 브랜드가 아니라, TL 로봇과 함께 검토하는 고출력·중후판 확장 구성입니다.',
                    'map'
                );
            }
            html += lineupSection(lineupCards, slug, {
                title: content.lineupSectionTitle,
                desc: content.lineupSectionDesc
            });
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
        if (slug === 'turnkey-robot-automation-cell' && guide.processFlow) {
            html += featuredImageSection(
                guide.processFlow,
                '턴키 도입 프로세스',
                '상담부터 시운전·교육까지 One-Stop으로 진행하는 턴키 자동화 셀 도입 흐름입니다.',
                'flow'
            );
        }
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
        if (!content && typeof getSmartFactoryConfigDetailContent === 'function') {
            content = getSmartFactoryConfigDetailContent(slug);
        }
        if (!content && typeof getTurnkeyConfigDetailContent === 'function') {
            content = getTurnkeyConfigDetailContent(slug);
        }
        if (!content && typeof getJigConfigDetailContent === 'function') {
            content = getJigConfigDetailContent(slug);
        }
        if (!content && typeof getHighPowerConfigDetailContent === 'function') {
            content = getHighPowerConfigDetailContent(slug);
        }
        if (!content && typeof getProcessItemDetailContent === 'function') {
            content = getProcessItemDetailContent(slug);
        }
        if (!content && typeof getPowerSeriesDetailContent === 'function') {
            content = getPowerSeriesDetailContent(slug);
        }
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
