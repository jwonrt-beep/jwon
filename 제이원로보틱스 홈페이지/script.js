// 제이원로보틱스 메인 스크립트 - Modern ES6+ Version

class JaywonRobotics {
    constructor() {
        this.elements = {
            header: document.querySelector('.header'),
            mobileMenuToggle: document.getElementById('mobileMenuToggle'),
            navList: document.querySelector('.nav-list'),
            heroVideo: document.getElementById('heroVideo'),
            heroBackground: document.querySelector('.hero-background'),
            loopDuration: document.getElementById('loopDuration'),
            loopHighlight: document.getElementById('loopHighlight'),
            loopProgressBar: document.getElementById('loopProgressBar'),
            loopShotlist: document.getElementById('loopShotlist'),
            loopButtons: document.querySelectorAll('[data-loop-target]'),
            heroFallback: document.getElementById('heroFallback'),
            fallbackMessage: document.getElementById('fallbackMessage'),
            heroVideoRetry: document.getElementById('heroVideoRetry'),
            qrForm: document.getElementById('qrForm'),
            qrPreview: document.getElementById('qrPreview'),
            qrCopy: document.getElementById('qrCopy'),
            qrStatus: document.getElementById('qrStatus'),
            pdfForm: document.getElementById('pdfForm'),
            pdfStatus: document.getElementById('pdfStatus'),
            pdfShare: document.getElementById('pdfShare')
        };
        
        this.heroLoops = [
            {
                id: 'loop8',
                label: '8초 루프',
                duration: 8,
                src: 'assets/video/제이원로보틱스 메인비디오 (1).mp4',
                highlight: '차체 라인 스패터 65% 감소 시퀀스',
                shots: [
                    'Shot 01 · 240fps 아크 점화',
                    'Shot 02 · AI 센서 HUD',
                    'Shot 03 · KPI 오버레이'
                ],
                poster: 'assets/images/hero_poster.jpg'
            },
            {
                id: 'loop10',
                label: '10초 루프',
                duration: 10,
                src: 'assets/video/제이원로보틱스 메인비디오 (2).mp4',
                highlight: '조선/중공업 25mm 강재 고출력 용접',
                shots: [
                    'Shot 01 · 듀얼 토치 시퀀스',
                    'Shot 02 · 용접 풀 클로즈업',
                    'Shot 03 · 고출력 KPI 오버레이'
                ],
                poster: 'assets/images/hero_poster.jpg'
            },
            {
                id: 'loop12',
                label: '12초 루프',
                duration: 12,
                src: 'assets/video/제이원로보틱스 메인비디오 (1).mp4',
                highlight: 'DTPSⅢ 디지털 트윈/오프라인 티칭',
                shots: [
                    'Shot 01 · 디지털 트윈 UI',
                    'Shot 02 · 로봇 경로 시뮬레이션',
                    'Shot 03 · PoC KPI 타임라인'
                ],
                poster: 'assets/images/hero_poster.jpg'
            }
        ];
        
        this.currentVideoIndex = 0;
        this.prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
        this.networkInfo = navigator.connection || navigator.mozConnection || navigator.webkitConnection || null;
        this.isSwitchingLoop = false;
        this.boundHandlers = {
            loopProgress: this.handleLoopProgress.bind(this),
            videoEnd: this.handleVideoEnd.bind(this),
            videoLoaded: this.handleVideoLoaded.bind(this),
            videoError: this.handleVideoError.bind(this)
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupScrollEffects();
        // this.setupHeroLoopUI(); // 리뉴얼로 인해 비활성화
        this.setupExpoTools();
        this.setupAnalyticsTracking();
        this.enableLazyLoading();
        this.observeMotionPreference();
        // this.setupVideoSequentialPlay(); // 리뉴얼로 인해 비활성화
        this.setupAnimations();
        this.setupIntersectionObserver();
        this.setupSmoothScrollLinks();
        this.setupAdminEasterEgg();
        console.log('제이원로보틱스 웹사이트 초기화 완료');
    }
    
    setupSmoothScrollLinks() {
        // 모든 앵커 링크에 smooth scroll 적용
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = this.elements.header ? this.elements.header.offsetHeight : 80;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetPosition - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    setupAdminEasterEgg() {
        // 히어로 타이틀에서 '스' 7번 클릭하면 관리자 페이지로 이동
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;
        
        let clickCount = 0;
        let lastClickTime = 0;
        const resetDelay = 2000; // 2초 이내에 7번 클릭해야 함
        
        heroTitle.addEventListener('click', (e) => {
            const now = Date.now();
            
            // 2초 이상 지났으면 카운트 리셋
            if (now - lastClickTime > resetDelay) {
                clickCount = 0;
            }
            
            clickCount++;
            lastClickTime = now;
            
            // 7번 클릭하면 관리자 페이지로 이동
            if (clickCount === 7) {
                window.location.href = 'admin/login.html';
                clickCount = 0;
            }
        });
        
        // 커서 스타일 변경 (클릭 가능함을 암시)
        heroTitle.style.cursor = 'pointer';
    }
    
    setupEventListeners() {
        // 스크롤 이벤트
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
        
        // 모바일 메뉴 토글
        if (this.elements.mobileMenuToggle) {
            this.elements.mobileMenuToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
        }
        
        // 스무스 스크롤 (앵커 링크용)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
        });
        
        // 윈도우 리사이즈 이벤트
        window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
        
        // 키보드 접근성
        document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
    }

    setupHeroLoopUI() {
        if (this.elements.loopButtons?.length) {
            this.elements.loopButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    const targetIndex = Number(button.dataset.loopTarget);
                    if (!Number.isNaN(targetIndex)) {
                        this.switchLoop(targetIndex, true);
                    }
                });
            });
        }

        if (this.elements.heroVideoRetry) {
            this.elements.heroVideoRetry.addEventListener('click', () => {
                this.toggleHeroFallback(false);
                this.setupVideoSequentialPlay(true);
            });
        }
    }

    observeMotionPreference() {
        if (!this.prefersReducedMotion) return;
        if (this.prefersReducedMotion.matches) {
            this.pauseHeroVideoForAccessibility('접근성 설정으로 영상이 정지되어 있습니다.');
        }

        const handler = (event) => this.handleMotionPreferenceChange(event.matches);
        if (typeof this.prefersReducedMotion.addEventListener === 'function') {
            this.prefersReducedMotion.addEventListener('change', handler);
        } else if (typeof this.prefersReducedMotion.addListener === 'function') {
            this.prefersReducedMotion.addListener(handler);
        }
    }

    setupExpoTools() {
        if (this.elements.qrForm) {
            this.elements.qrForm.addEventListener('submit', (event) => this.handleQrSubmit(event));
        }
        if (this.elements.qrCopy) {
            this.elements.qrCopy.addEventListener('click', () => this.copyQrLink());
        }
        if (this.elements.pdfForm) {
            this.elements.pdfForm.addEventListener('submit', (event) => this.handlePdfSubmit(event));
        }
        if (this.elements.pdfShare) {
            this.elements.pdfShare.addEventListener('click', () => this.handlePdfShare());
        }
    }

    setupAnalyticsTracking() {
        // CTA click tracking
        document.querySelectorAll('[data-analytics="cta"]').forEach((element) => {
            element.addEventListener('click', () => {
                const eventName = element.dataset.analyticsEvent || 'cta_click';
                this.dataLayerPush(eventName, {
                    cta_id: element.dataset.ctaId || element.id || element.textContent?.trim(),
                    href: element.getAttribute('href') || null,
                    section: element.closest('[id]')?.id || 'global'
                });
            });
        });

        // Form submit tracking + localStorage 저장
        document.querySelectorAll('form[data-analytics="form"]').forEach((form) => {
            form.addEventListener('submit', (event) => {
                event.preventDefault(); // 기본 폼 제출 방지
                
                const eventName = form.dataset.analyticsEvent || 'form_submit';
                this.dataLayerPush(eventName, {
                    form_id: form.id || null,
                    action: form.getAttribute('action') || window.location.pathname
                });
                
                // 폼 데이터 수집
                const formData = new FormData(form);
                const leadData = {
                    id: 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                    timestamp: new Date().toISOString(),
                    intent: formData.get('intent'),
                    company: formData.get('company'),
                    name: formData.get('name'),
                    phone: formData.get('phone'),
                    email: formData.get('email')
                };
                
                // 추가 필드 (있을 경우)
                if (formData.get('industry')) leadData.industry = formData.get('industry');
                if (formData.get('uph')) leadData.uph = formData.get('uph');
                if (formData.get('solution')) leadData.solution = formData.get('solution');
                if (formData.get('date')) leadData.preferredDate = formData.get('date');
                if (formData.get('issue')) leadData.issue = formData.get('issue');
                if (formData.get('message')) leadData.message = formData.get('message');
                
                // localStorage에 저장
                const leads = JSON.parse(localStorage.getItem('leads') || '[]');
                leads.push(leadData);
                localStorage.setItem('leads', JSON.stringify(leads));
                
                // 성공 메시지
                const intentLabels = {
                    'quote': '상담·견적 요청',
                    'resource': '자료 다운로드',
                    'tech-call': '기술상담'
                };
                
                alert(`✅ ${intentLabels[leadData.intent] || '문의'}가 성공적으로 접수되었습니다!\n\n담당자가 빠른 시일 내에 연락드리겠습니다.\n평균 응답 시간: 4시간`);
                
                // 폼 초기화
                form.reset();
            });
        });
    }

    enableLazyLoading() {
        const candidates = document.querySelectorAll('img:not([loading])');
        candidates.forEach((img) => {
            if (img.closest('.hero-background')) return;
            img.setAttribute('loading', 'lazy');
            img.setAttribute('decoding', 'async');
        });
    }
    
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 헤더 스크롤 효과
        if (this.elements.header) {
            if (scrollTop > 50) {
                this.elements.header.classList.add('scrolled');
            } else {
                this.elements.header.classList.remove('scrolled');
            }
        }
        
        // 스크롤 진행률 표시
        this.updateScrollProgress(scrollTop);
    }
    
    updateScrollProgress(scrollTop) {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / windowHeight) * 100;
        
        // 스크롤 진행률을 시각적으로 표시할 수 있음
        document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    }
    
    toggleMobileMenu() {
        const toggle = this.elements.mobileMenuToggle;
        const overlay = document.getElementById('menuOverlay');
        if (!toggle || !overlay) return;
        const isOpen = overlay.classList.contains('open');
        const nextState = !isOpen;
        overlay.classList.toggle('open', nextState);
        overlay.setAttribute('aria-hidden', String(!nextState));
        toggle.classList.toggle('active', nextState);
        toggle.setAttribute('aria-expanded', String(nextState));
        this.animateHamburgerMenu(toggle, nextState);
        document.body.style.overflow = nextState ? 'hidden' : '';

        // 오버레이 내부 링크 포커스 & 닫기 동작
        if (nextState) {
            const firstLink = overlay.querySelector('a');
            if (firstLink) firstLink.focus();
            // 배경 클릭 시 닫기
            const onOverlayClick = (e) => {
                if (e.target === overlay) {
                    overlay.removeEventListener('click', onOverlayClick);
                    this.toggleMobileMenu();
                }
            };
            overlay.addEventListener('click', onOverlayClick);
            // ESC 닫기
            const onKeydown = (e) => {
                if (e.key === 'Escape') {
                    document.removeEventListener('keydown', onKeydown);
                    this.toggleMobileMenu();
                }
            };
            document.addEventListener('keydown', onKeydown);
            // 링크 클릭 시 닫기
            overlay.querySelectorAll('a').forEach(a => {
                a.addEventListener('click', () => this.toggleMobileMenu(), { once: true });
            });
            // 닫기 버튼 클릭 시 닫기
            const closeBtn = document.getElementById('menuClose');
            if (closeBtn) {
                const onCloseClick = () => {
                    this.toggleMobileMenu();
                };
                closeBtn.addEventListener('click', onCloseClick, { once: true });
            }
        }
    }
    
    animateHamburgerMenu(toggle, isActive) {
        const lines = toggle.querySelectorAll('span');
        lines.forEach((line, index) => {
            if (isActive) {
                switch(index) {
                    case 0:
                        line.style.transform = 'rotate(45deg) translate(5px, 5px)';
                        break;
                    case 1:
                        line.style.opacity = '0';
                        break;
                    case 2:
                        line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                        break;
                }
            } else {
                line.style.transform = 'none';
                line.style.opacity = '1';
            }
        });
    }
    
    handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = this.elements.header?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    handleResize() {
        // 모바일 메뉴가 열려있을 때 데스크톱으로 전환되면 메뉴 닫기
        if (window.innerWidth > 768 && this.elements.navList?.classList.contains('active')) {
            this.toggleMobileMenu();
        }
    }
    
    handleKeyboardNavigation(e) {
        // ESC 키로 모바일 메뉴 닫기
        if (e.key === 'Escape' && this.elements.navList?.classList.contains('active')) {
            this.toggleMobileMenu();
        }
    }
    
    setupScrollEffects() {
        // 스크롤 기반 애니메이션 요소들
        const animateElements = document.querySelectorAll('.card, .hero-content > *');
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                if (entry.target.classList.contains('reveal')) {
                    entry.target.classList.add('revealed');
                } else {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    if (entry.target.classList.contains('card')) {
                        const cards = Array.from(entry.target.parentElement.children);
                        const index = cards.indexOf(entry.target);
                        entry.target.style.transitionDelay = `${index * 0.1}s`;
                    }
                }
                
                observer.unobserve(entry.target);
            });
        }, observerOptions);
        
        // 애니메이션 요소들 관찰 시작
        const animateElements = document.querySelectorAll('.card, .hero-content > *, .reveal');
        animateElements.forEach(el => observer.observe(el));
    }
    
    setupVideoSequentialPlay(forceRetry = false) {
        if (!this.elements.heroVideo) return;
        if (this.prefersReducedMotion?.matches && !forceRetry) return;
        if (!this.assessNetworkConditions(forceRetry)) {
            this.toggleHeroFallback(true, '네트워크 상태가 불안정하여 영상을 대신 이미지로 제공합니다.');
            return;
        }

        this.toggleHeroFallback(false);

        this.elements.heroVideo.removeEventListener('timeupdate', this.boundHandlers.loopProgress);
        this.elements.heroVideo.removeEventListener('ended', this.boundHandlers.videoEnd);
        this.elements.heroVideo.removeEventListener('loadeddata', this.boundHandlers.videoLoaded);
        this.elements.heroVideo.removeEventListener('error', this.boundHandlers.videoError);

        this.elements.heroVideo.addEventListener('timeupdate', this.boundHandlers.loopProgress);
        this.elements.heroVideo.addEventListener('ended', this.boundHandlers.videoEnd);
        this.elements.heroVideo.addEventListener('loadeddata', this.boundHandlers.videoLoaded);
        this.elements.heroVideo.addEventListener('error', this.boundHandlers.videoError);

        const startIndex = forceRetry ? this.currentVideoIndex : 0;
        this.switchLoop(startIndex);
    }

    assessNetworkConditions(forceRetry = false) {
        if (!this.networkInfo) return true;
        const slowTypes = ['slow-2g', '2g'];
        const isSlow = slowTypes.includes(this.networkInfo.effectiveType);
        if ((this.networkInfo.saveData || isSlow) && !forceRetry) {
            return false;
        }
        return true;
    }

    switchLoop(index = 0, userInitiated = false) {
        if (!this.elements.heroVideo) return;
        const targetIndex = Math.max(0, Math.min(index, this.heroLoops.length - 1));
        const loop = this.heroLoops[targetIndex];
        if (!loop) return;

        this.isSwitchingLoop = true;
        this.currentVideoIndex = targetIndex;
        this.elements.heroVideo.dataset.loopId = loop.id;
        this.elements.heroVideo.poster = loop.poster || '';
        if (this.elements.heroVideo.currentSrc !== loop.src) {
            this.elements.heroVideo.src = loop.src;
        }
        this.elements.heroVideo.currentTime = 0;
        this.elements.heroVideo.load();
        this.updateLoopUI(loop);
        if (!this.prefersReducedMotion?.matches) {
            this.playVideo();
        }
        if (userInitiated) {
            this.updateLoopProgress(0);
        }
    }

    updateLoopUI(loop) {
        if (this.elements.loopDuration) {
            this.elements.loopDuration.textContent = `${loop.label}`;
        }
        if (this.elements.loopHighlight) {
            this.elements.loopHighlight.textContent = loop.highlight;
        }
        if (this.elements.loopButtons?.length) {
            this.elements.loopButtons.forEach((button, idx) => {
                const isActive = idx === this.currentVideoIndex;
                button.classList.toggle('active', isActive);
                button.setAttribute('aria-selected', String(isActive));
            });
        }
        this.renderShotlist(loop);
    }

    updateLoopProgress(percent = 0) {
        const safePercent = Math.max(0, Math.min(100, percent));
        if (this.elements.loopProgressBar) {
            this.elements.loopProgressBar.style.width = `${safePercent}%`;
        }
        const progressContainer = this.elements.loopProgressBar?.parentElement;
        if (progressContainer) {
            progressContainer.setAttribute('aria-valuenow', safePercent.toFixed(0));
        }
    }

    renderShotlist(loop) {
        if (!this.elements.loopShotlist) return;
        this.elements.loopShotlist.innerHTML = '';
        loop.shots.forEach((shotText) => {
            const li = document.createElement('li');
            li.textContent = shotText;
            this.elements.loopShotlist.appendChild(li);
        });
    }

    handleLoopProgress() {
        if (!this.elements.heroVideo || this.isSwitchingLoop) return;
        const loop = this.heroLoops[this.currentVideoIndex];
        if (!loop || !loop.duration) return;
        const percent = (this.elements.heroVideo.currentTime / loop.duration) * 100;
        this.updateLoopProgress(percent);
        if (this.elements.heroVideo.currentTime >= loop.duration - 0.15) {
            this.advanceLoop();
        }
    }

    advanceLoop() {
        const nextIndex = (this.currentVideoIndex + 1) % this.heroLoops.length;
        this.switchLoop(nextIndex);
    }

    handleQrSubmit(event) {
        event.preventDefault();
        if (!this.elements.qrForm) return;
        const form = this.elements.qrForm;
        const baseUrl = form.dataset.baseUrl || window.location.origin;
        const expoCode = form.expoCode.value.trim() || 'campaign';
        const industry = form.industry.value;
        const intent = form.intent.value;
        const params = new URLSearchParams({
            utm_source: 'expo',
            utm_medium: 'qr',
            utm_campaign: expoCode,
            industry,
            intent
        });
        const qrUrl = `${baseUrl}?${params.toString()}`;
        this.updateQrPreview(qrUrl);
        this.setStatus(this.elements.qrStatus, 'QR 랜딩 URL이 생성되었습니다.');
        this.dataLayerPush('qr_link_generated', {
            campaign: expoCode,
            industry,
            intent
        });
    }

    updateQrPreview(url) {
        if (!this.elements.qrPreview) return;
        this.elements.qrPreview.textContent = url;
        this.elements.qrPreview.dataset.value = url;
    }

    async copyQrLink() {
        if (!this.elements.qrPreview) return;
        const url = this.elements.qrPreview.dataset.value || this.elements.qrPreview.textContent;
        if (!url) return;
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(url);
            } else {
                const tempInput = document.createElement('textarea');
                tempInput.value = url;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            }
            this.setStatus(this.elements.qrStatus, '클립보드에 복사되었습니다.');
            this.dataLayerPush('qr_link_copied', { url });
        } catch (error) {
            console.warn('클립보드 복사 실패', error);
            this.setStatus(this.elements.qrStatus, '복사에 실패했습니다. 직접 복사해주세요.');
        }
    }

    handlePdfSubmit(event) {
        if (!this.elements.pdfForm) return;
        const form = this.elements.pdfForm;
        const industry = form.industry.value;
        const lang = form.lang.value;
        const readableIndustry = this.getIndustryLabel(industry);
        const readableLang = lang === 'en' ? '영문' : '국문';
        this.setStatus(this.elements.pdfStatus, `${readableIndustry} ${readableLang} 1페이지 PDF를 새 탭에서 다운로드합니다.`);
        this.dataLayerPush('pdf_generate', {
            industry,
            lang
        });
    }

    handlePdfShare() {
        if (!this.elements.pdfForm) return;
        const form = this.elements.pdfForm;
        const email = form.email?.value?.trim() || '';
        const industry = form.industry.value || 'automotive';
        const lang = form.lang.value || 'ko';
        const pdfUrl = this.buildPdfUrl(industry, lang);
        const subject = encodeURIComponent(`[제이원 로보틱스] ${this.getIndustryLabel(industry)} 1페이지 요약본`);
        const body = encodeURIComponent(`필요하신 산업 제안 요약본 링크입니다.\n\n${pdfUrl}\n\n추가 상담이 필요하시면 문의 부탁드립니다.`);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        this.setStatus(this.elements.pdfStatus, '메일 클라이언트에서 공유를 준비했습니다.');
        this.dataLayerPush('pdf_share', {
            industry,
            lang,
            has_email: Boolean(email)
        });
    }

    buildPdfUrl(industry, lang) {
        if (!this.elements.pdfForm) return '';
        const action = this.elements.pdfForm.getAttribute('action') || '/resources/index.html';
        const url = new URL(action, window.location.origin);
        url.searchParams.set('template', 'onepager');
        url.searchParams.set('industry', industry);
        url.searchParams.set('lang', lang);
        url.searchParams.set('utm_source', 'expo');
        url.searchParams.set('utm_medium', 'pdf');
        return url.toString();
    }

    getIndustryLabel(code) {
        const map = {
            automotive: '자동차',
            shipbuilding: '조선',
            construction: '건설기계',
            heavy: '중공업'
        };
        return map[code] || '산업';
    }

    setStatus(target, message) {
        if (!target) return;
        target.textContent = message;
    }

    dataLayerPush(eventName, detail = {}) {
        try {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: eventName,
                timestamp: new Date().toISOString(),
                ...detail
            });
        } catch (error) {
            console.warn('dataLayer push 실패', error);
        }
    }
    
    handleVideoEnd() {
        this.advanceLoop();
    }
    
    handleVideoLoaded() {
        this.isSwitchingLoop = false;
        this.playVideo();
        this.toggleHeroFallback(false);
        this.updateLoopProgress(0);
    }
    
    handleVideoError() {
        console.warn('비디오 로드 실패, 다음 루프로 전환');
        this.toggleHeroFallback(true, '영상 로드에 문제가 발생했습니다. 다시 시도해주세요.');
        this.advanceLoop();
    }
    
    async playVideo() {
        try {
            await this.elements.heroVideo.play();
        } catch (error) {
            console.log('비디오 자동 재생 실패:', error.message);
        }
    }

    toggleHeroFallback(show, message = '') {
        if (this.elements.heroBackground) {
            this.elements.heroBackground.classList.toggle('fallback-active', show);
        }
        if (this.elements.heroFallback) {
            this.elements.heroFallback.setAttribute('aria-hidden', String(!show));
        }
        if (this.elements.fallbackMessage && message) {
            this.elements.fallbackMessage.textContent = message;
        }
    }

    handleMotionPreferenceChange(matches) {
        if (matches) {
            this.pauseHeroVideoForAccessibility('접근성 설정으로 영상이 일시 정지되었습니다.');
        } else {
            this.resumeHeroVideo();
        }
    }

    pauseHeroVideoForAccessibility(message) {
        if (!this.elements.heroVideo) return;
        this.elements.heroVideo.pause();
        this.toggleHeroFallback(true, message);
    }

    resumeHeroVideo() {
        this.toggleHeroFallback(false);
        this.setupVideoSequentialPlay(true);
    }
    
    setupAnimations() {
        // 페이지 로드 시 초기 애니메이션
        window.addEventListener('load', () => {
            this.animateHeroElements();
        });
    }
    
    animateHeroElements() {
        const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-stats, .hero-actions');
        
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    // 유틸리티 함수들
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // 정적 메서드
    static init() {
        return new JaywonRobotics();
    }
}

// 전역 초기화
document.addEventListener('DOMContentLoaded', () => {
    window.JaywonRobotics = JaywonRobotics.init();
    // Fallback: ensure hamburger opens overlay even if class binding fails
    const toggle = document.getElementById('mobileMenuToggle');
    const overlay = document.getElementById('menuOverlay');
    const closeBtn = document.getElementById('menuClose');
    if (toggle && overlay) {
        toggle.addEventListener('click', (e) => {
            // If class handler already toggled, skip; otherwise force-toggle
            if (!overlay.classList.contains('open')) {
                overlay.classList.add('open');
                overlay.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (overlay && overlay.classList.contains('open')) {
                overlay.classList.remove('open');
                overlay.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        });
    }
});

// 컴포넌트 초기화 완료 메시지
console.log('컴포넌트 초기화 완료');