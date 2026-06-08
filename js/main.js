// 제이원로보틱스 메인 JavaScript - 시네마틱 히어로 버전
(function() {
    'use strict';

    // 전역 변수
    let heroVideo = null;
    let heroPlayBtn = null;
    let heroOverlay = null;
    let currentLoopVariant = 'A'; // A, B, C loop variants
    let isVideoPlaying = false;
    let videoFallbackActive = false;
    let searchOverlay = null;
    let searchInput = null;
    let searchForm = null;
    let searchToggle = null;
    let searchClose = null;

    // DOM 요소들
    const elements = {
        heroVideo: document.querySelector('.hero-video'),
        heroPlayBtn: document.querySelector('.hero-play-btn'),
        heroOverlay: document.querySelector('.hero-overlay'),
        contactForm: document.getElementById('contactForm'),
        comparisonSlider: document.querySelector('.comparison-slider'),
        sliderHandle: document.querySelector('.slider-handle'),
        comparisonAfter: document.querySelector('.comparison-after'),
        searchOverlay: document.getElementById('searchOverlay'),
        searchInput: document.getElementById('searchKeyword'),
        searchForm: document.getElementById('searchForm'),
        searchToggle: document.querySelector('.search-toggle'),
        searchClose: document.querySelector('.search-close')
    };

    // 초기화
    function init() {
        setupSearchOverlay();
        setupScrollAnimations();
        setupHeroVideo();
        setupFormValidation();
        setupComparisonSlider();
        setupPageSpecificFeatures();
        setupMegaMenu();
        
        // 페이지 로드 완료 후 실행
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', onPageLoad);
        } else {
            onPageLoad();
        }
    }

    // 메가메뉴 설정 (데스크톱: hover는 CSS, 접근성/포커스 보강. 모바일: 클릭 아코디언)
    function setupMegaMenu() {
        const items = document.querySelectorAll('.nav-item.has-mega');
        items.forEach(item => {
            const trigger = item.querySelector('a');
            const panel = item.querySelector('.mega-panel');
            if (!trigger || !panel) return;

            // 키보드 포커스 시 aria-expanded 처리
            trigger.addEventListener('focus', () => trigger.setAttribute('aria-expanded', 'true'));
            item.addEventListener('mouseleave', () => trigger.setAttribute('aria-expanded', 'false'));

            // 모바일 아코디언 토글
            trigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const open = panel.style.display === 'block';
                    panel.style.display = open ? 'none' : 'block';
                    trigger.setAttribute('aria-expanded', String(!open));
                }
            });
        });

        // 리사이즈 시 초기화
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                document.querySelectorAll('.nav-item.has-mega .mega-panel').forEach(p => p.style.display = '');
                document.querySelectorAll('.nav-item.has-mega > a[aria-expanded]').forEach(a => a.setAttribute('aria-expanded', 'false'));
            }
        });
    }

    // HD 비디오 시뮬레이션 (데모용)
    function simulateHDVideoPlayback() {
        if (!heroVideo) return;
        
        // 실제 비디오 파일이 없는 경우 시뮬레이션
        const videoFiles = [
            'assets/video/hero_loop_8s.mp4',
            'assets/video/hero_loop_10s.mp4', 
            'assets/video/hero_loop_12s.mp4'
        ];
        
        // 파일 존재 여부 확인
        let videoExists = false;
        for (const file of videoFiles) {
            if (heroVideo.src.includes(file)) {
                videoExists = true;
                break;
            }
        }
        
        if (!videoExists) {
    
            
            // 시뮬레이션 시작
            setTimeout(() => {
                showHDVideoStatus('HD 영상 로딩 중...', 'info');
                
                setTimeout(() => {
                    showHDVideoStatus('HD 영상 재생 중 (시뮬레이션)', 'success');
                    
                    // 재생 상태 시뮬레이션
                    isVideoPlaying = true;
                    if (heroOverlay) {
                        heroOverlay.classList.add('playing');
                        heroOverlay.classList.add('hd-ready');
                        heroOverlay.classList.add('hd-loaded');
                    }
                    
                    // 성능 모니터링 시뮬레이션
                    setupVideoPerformanceMonitoring();
                    
                    // 애널리틱스 이벤트
                    trackEvent('hero_video_play_simulation');
                    
                }, 2000);
                
            }, 1000);
        }
    }

    // 페이지 로드 완료 시 실행
    function onPageLoad() {
        setTimeout(() => {
            loadHeroSettings();
            setupAnalytics();
            setupVideoPerformanceMonitoring();
            simulateHDVideoPlayback(); // HD 비디오 시뮬레이션 추가
            setupCarousel();
        }, 100);
    }

    // 비디오 성능 모니터링 설정
    function setupVideoPerformanceMonitoring() {
        if (!heroVideo) return;
        
        // 성능 메트릭 수집
        let frameCount = 0;
        let lastTime = performance.now();
        
        function checkVideoPerformance() {
            if (isVideoPlaying) {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - lastTime >= 1000) { // 1초마다 체크
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    
                    // FPS가 낮으면 품질 조정
                    if (fps < 24) {
            
                        const currentQuality = heroVideo.getAttribute('data-quality');
                        if (currentQuality === '4k') {
                            adjustVideoQuality('high');
                        } else if (currentQuality === '1080p') {
                            adjustVideoQuality('low');
                        }
                    }
                    
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(checkVideoPerformance);
            }
        }
        
        // 성능 모니터링 시작
        if (isVideoPlaying) {
            requestAnimationFrame(checkVideoPerformance);
        }
    }

    // 검색 오버레이 설정
    function setupSearchOverlay() {
        searchOverlay = elements.searchOverlay;
        searchInput = elements.searchInput;
        searchForm = elements.searchForm;
        searchToggle = elements.searchToggle;
        searchClose = elements.searchClose;
        
        if (!searchOverlay || !searchToggle) return;
        
        // 검색 토글 버튼 이벤트
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            openSearchOverlay();
        });
        
        // 검색 닫기 버튼 이벤트
        if (searchClose) {
            searchClose.addEventListener('click', function(e) {
                e.preventDefault();
                closeSearchOverlay();
            });
        }
        
        // 검색 폼 제출 이벤트
        if (searchForm) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                handleSearchSubmit();
            });
        }
        
        // 검색 오버레이 외부 클릭 시 닫기
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                closeSearchOverlay();
            }
        });
        
        // ESC 키로 검색 닫기
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                closeSearchOverlay();
            }
        });
    }
    
    // 검색 오버레이 열기
    function openSearchOverlay() {
        if (!searchOverlay) return;
        
        searchOverlay.classList.add('active');
        document.body.classList.add('search-active');
        
        // 포커스 설정
        setTimeout(() => {
            if (searchInput) {
                searchInput.focus();
            }
        }, 100);
        
        // 애널리틱스 이벤트
        trackEvent('search_overlay_opened');
    }
    
    // 검색 오버레이 닫기
    function closeSearchOverlay() {
        if (!searchOverlay) return;
        
        searchOverlay.classList.remove('active');
        document.body.classList.remove('search-active');
        
        // 검색어 초기화
        if (searchInput) {
            searchInput.value = '';
        }
        
        // 애널리틱스 이벤트
        trackEvent('search_overlay_closed');
    }
    
    // 검색 제출 처리
    function handleSearchSubmit() {
        if (!searchInput) return;
        
        const keyword = searchInput.value.trim();
        if (keyword) {
            // 검색 결과 페이지로 이동 (데모용)
    
            showToast('검색 기능은 데모 환경에서 시뮬레이션됩니다.', 'info');
            
            // 애널리틱스 이벤트
            trackEvent('search_submitted', { keyword: keyword });
            
            // 검색 오버레이 닫기
            closeSearchOverlay();
        }
    }
    
    // 스크롤 애니메이션 설정
    function setupScrollAnimations() {
        const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -10% 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                el.classList.add('animate-in');
                if (el.classList.contains('reveal')) {
                    el.classList.add('revealed');
                }
                observer.unobserve(el);
            });
        }, observerOptions);

        // 기본 애니메이션 대상 + 새로운 reveal 유틸리티
        document.querySelectorAll('.animate-on-scroll, .reveal').forEach(el => {
            // 초기 상태 적용 (reveal 전용은 CSS로 처리)
            observer.observe(el);
        });
    }

    // 시네마틱 히어로 비디오 설정 - HD 고급 버전
    function setupHeroVideo() {
        if (!elements.heroVideo) return;
        
        heroVideo = elements.heroVideo;
        heroPlayBtn = elements.heroPlayBtn;
        heroOverlay = elements.heroOverlay;
        
        // HD 비디오 최적화 설정
        setupHDVideoOptimization();
        
        // 비디오 이벤트 리스너
        heroVideo.addEventListener('loadstart', handleVideoLoadStart);
        heroVideo.addEventListener('canplay', handleVideoCanPlay);
        heroVideo.addEventListener('canplaythrough', handleVideoCanPlayThrough);
        heroVideo.addEventListener('play', handleVideoPlay);
        heroVideo.addEventListener('pause', handleVideoPause);
        heroVideo.addEventListener('ended', handleVideoEnded);
        heroVideo.addEventListener('error', handleVideoError);
        heroVideo.addEventListener('loadedmetadata', handleVideoLoadedMetadata);
        heroVideo.addEventListener('progress', handleVideoProgress);
        
        // 재생 버튼 이벤트
        if (heroPlayBtn) {
            heroPlayBtn.addEventListener('click', handlePlayButtonClick);
            heroPlayBtn.addEventListener('keydown', handlePlayButtonKeydown);
        }
        
        // 비디오 클릭 이벤트 (모바일)
        heroVideo.addEventListener('click', handleVideoClick);
        
        // 가시성 변경 이벤트 (탭 전환 시 일시정지/재생)
        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        // 네트워크 상태 모니터링
        setupNetworkMonitoring();
        
        // 모바일 자동재생 실패 감지
        setTimeout(() => {
            if (heroVideo.paused && !videoFallbackActive) {
                showMobilePlayFallback();
            }
        }, 2000);
    }

    // HD 비디오 최적화 설정
    function setupHDVideoOptimization() {
        // 비디오 품질 설정
        heroVideo.setAttribute('playsinline', '');
        heroVideo.setAttribute('muted', '');
        heroVideo.setAttribute('loop', '');
        heroVideo.setAttribute('autoplay', '');
        
        // HD 품질 우선 설정
        if (heroVideo.canPlayType('video/mp4; codecs="avc1.640028"')) {
            // 4K 지원
            heroVideo.setAttribute('data-quality', '4k');
        } else if (heroVideo.canPlayType('video/mp4; codecs="avc1.64001f"')) {
            // 1080p 지원
            heroVideo.setAttribute('data-quality', '1080p');
        } else {
            // 기본 품질
            heroVideo.setAttribute('data-quality', '720p');
        }
        
        // 성능 최적화
        heroVideo.style.transform = 'translateZ(0)'; // GPU 가속
        heroVideo.style.willChange = 'transform'; // 성능 최적화
    }

    // 네트워크 상태 모니터링
    function setupNetworkMonitoring() {
        if ('connection' in navigator) {
            navigator.connection.addEventListener('change', handleNetworkChange);
        }
        
        // 네트워크 상태에 따른 비디오 품질 조정
        if ('connection' in navigator) {
            const connection = navigator.connection;
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                // 느린 네트워크에서는 낮은 품질 사용
                adjustVideoQuality('low');
            } else if (connection.effectiveType === '4g') {
                // 빠른 네트워크에서는 고품질 사용
                adjustVideoQuality('high');
            }
        }
    }

    // 경로 조정 함수 (하위 페이지에서 상위 디렉토리 참조)
    function getAssetPath(path) {
        // 현재 페이지가 하위 디렉토리에 있는지 확인
        const currentPath = window.location.pathname;
        const isSubPage = currentPath.split('/').length > 2; // 예: /solutions/ -> 3개
        
        if (isSubPage) {
            return '../' + path;
        }
        return path;
    }

    // 비디오 품질 조정
    function adjustVideoQuality(quality) {
        const qualitySettings = {
            low: {
                src: getAssetPath('assets/video/hero_loop_8s.mp4'),
                poster: getAssetPath('assets/video/hero_poster.svg')
            },
            high: {
                src: getAssetPath('assets/video/hero_loop_12s.mp4'),
                poster: getAssetPath('assets/video/hero_poster.svg')
            }
        };
        
        const settings = qualitySettings[quality];
        if (settings && heroVideo.src !== settings.src) {
            const wasPlaying = !heroVideo.paused;
            heroVideo.src = settings.src;
            heroVideo.poster = settings.poster;
            
            if (wasPlaying) {
                heroVideo.play().catch(() => {
                    // 재생 실패 시 무시
                });
            }
        }
    }

    // 네트워크 변경 처리
    function handleNetworkChange() {
        if ('connection' in navigator) {
            const connection = navigator.connection;
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                adjustVideoQuality('low');
            } else if (connection.effectiveType === '4g') {
                adjustVideoQuality('high');
            }
        }
    }

    // 비디오 로드 시작
    function handleVideoLoadStart() {
        // 로딩 상태 표시
        const videoContainer = heroVideo.parentElement;
        if (videoContainer) {
            videoContainer.classList.add('loading');
        }
        
        // 재생 버튼 숨기기
        if (heroPlayBtn) {
            heroPlayBtn.style.display = 'none';
        }
    }

    // 비디오 재생 가능
    function handleVideoCanPlay() {
        // 로딩 상태 제거
        const videoContainer = heroVideo.parentElement;
        if (videoContainer) {
            videoContainer.classList.remove('loading');
        }
        
        if (heroPlayBtn) {
            heroPlayBtn.style.display = 'none';
        }
        
        // HD 비디오 품질 정보
        const quality = heroVideo.getAttribute('data-quality');
        
        // 애니메이션 효과 추가
        if (heroOverlay) {
            heroOverlay.classList.add('hd-ready');
        }
    }

    // 비디오 완전 재생 가능
    function handleVideoCanPlayThrough() {
        // HD 비디오 완전 로드 완료
        if (heroOverlay) {
            heroOverlay.classList.add('hd-loaded');
        }
        
        // 성능 최적화를 위한 willChange 제거
        heroVideo.style.willChange = 'auto';
    }

    // 비디오 메타데이터 로드 완료
    function handleVideoLoadedMetadata() {
        // HD 품질 확인
        if (heroVideo.videoWidth >= 1920 && heroVideo.videoHeight >= 1080) {
            heroVideo.setAttribute('data-hd', 'true');
        }
    }

    // 비디오 로딩 진행률
    function handleVideoProgress() {
        if (heroVideo.buffered.length > 0) {
            const bufferedEnd = heroVideo.buffered.end(heroVideo.buffered.length - 1);
            const duration = heroVideo.duration;
            const progress = (bufferedEnd / duration) * 100;
            
            // 로딩 진행률이 50% 이상이면 재생 시작
            if (progress > 50 && heroVideo.paused && !isVideoPlaying) {
                heroVideo.play().catch(() => {
                    // 재생 실패 시 무시
                });
            }
        }
    }

    // 비디오 재생 시작
    function handleVideoPlay() {
        isVideoPlaying = true;
        if (heroPlayBtn) {
            heroPlayBtn.style.display = 'none';
        }
        
        // 애니메이션 효과 추가
        if (heroOverlay) {
            heroOverlay.classList.add('playing');
        }
        
        // HD 비디오 재생 성공 알림
        showHDVideoStatus('HD 영상 재생 중', 'success');
        
        // 성능 모니터링 시작
        setupVideoPerformanceMonitoring();
        
        // 애널리틱스 이벤트
        trackEvent('hero_video_play');
        

    }

    // HD 비디오 상태 표시
    function showHDVideoStatus(message, type = 'info') {
        // 기존 상태 메시지 제거
        const existingStatus = document.querySelector('.hd-video-status');
        if (existingStatus) {
            existingStatus.remove();
        }
        
        // 새 상태 메시지 생성
        const statusElement = document.createElement('div');
        statusElement.className = `hd-video-status hd-video-status-${type}`;
        statusElement.innerHTML = `
            <div class="hd-video-status-content">
                <span class="hd-video-status-icon">${type === 'success' ? '🎬' : '⚠️'}</span>
                <span class="hd-video-status-text">${message}</span>
            </div>
        `;
        
        // 히어로 섹션에 추가
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.appendChild(statusElement);
            
            // 3초 후 자동 제거
            setTimeout(() => {
                if (statusElement.parentNode) {
                    statusElement.remove();
                }
            }, 3000);
        }
    }

    // 비디오 일시정지
    function handleVideoPause() {
        isVideoPlaying = false;
        if (heroOverlay) {
            heroOverlay.classList.remove('playing');
        }
    }

    // 비디오 종료
    function handleVideoEnded() {
        // 루프 설정이 되어 있으므로 자동으로 다시 시작됨
        trackEvent('hero_video_loop');
    }

    // 비디오 에러 처리 - HD 고급 버전
    function handleVideoError() {
        // 데모 환경에서는 에러를 표시하지 않고 폴백으로 처리
        showVideoFallback();
        
        // 에러 코드별 처리 (실제 환경용)
        const error = heroVideo.error;
        if (error) {
            switch (error.code) {
                case MediaError.MEDIA_ERR_ABORTED:
                    break;
                case MediaError.MEDIA_ERR_NETWORK:
                    tryFallbackQuality();
                    break;
                case MediaError.MEDIA_ERR_DECODE:
                    tryDifferentFormat();
                    break;
                case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    showVideoFallback();
                    break;
                default:
                    showVideoFallback();
                    break;
            }
        } else {
            showVideoFallback();
        }
    }

    // 폴백 품질 시도
    function tryFallbackQuality() {
        const currentQuality = heroVideo.getAttribute('data-quality');
        if (currentQuality === '4k') {
            adjustVideoQuality('high');
        } else if (currentQuality === '1080p') {
            adjustVideoQuality('low');
        } else {
            showVideoFallback();
        }
    }

    // 다른 포맷 시도
    function tryDifferentFormat() {
        const currentSrc = heroVideo.src;
        if (currentSrc.includes('hero_loop_12s.mp4')) {
            heroVideo.src = 'assets/video/hero_loop_10s.mp4';
        } else if (currentSrc.includes('hero_loop_10s.mp4')) {
            heroVideo.src = 'assets/video/hero_loop_8s.mp4';
        } else {
            showVideoFallback();
        }
    }

    // 재생 버튼 클릭
    function handlePlayButtonClick() {
        if (heroVideo.paused) {
            heroVideo.play().catch(error => {
                console.error('Video play failed:', error);
                showVideoFallback();
            });
        } else {
            heroVideo.pause();
        }
    }

    // 재생 버튼 키보드 이벤트
    function handlePlayButtonKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handlePlayButtonClick();
        }
    }

    // 비디오 클릭 (모바일)
    function handleVideoClick() {
        if (videoFallbackActive) {
            handlePlayButtonClick();
        }
    }

    // 가시성 변경 처리
    function handleVisibilityChange() {
        if (document.hidden) {
            // 탭이 숨겨지면 비디오 일시정지
            if (isVideoPlaying) {
                heroVideo.pause();
            }
        } else {
            // 탭이 다시 보이면 비디오 재생
            if (!isVideoPlaying && !videoFallbackActive) {
                heroVideo.play().catch(() => {
                    // 자동재생 실패 시 무시
                });
            }
        }
    }

    // 모바일 재생 폴백 표시
    function showMobilePlayFallback() {
        videoFallbackActive = true;
        if (heroPlayBtn) {
            heroPlayBtn.style.display = 'flex';
            heroPlayBtn.querySelector('span').textContent = '탭하여 재생';
        }
        
        // 애니메이션 효과
        if (heroOverlay) {
            heroOverlay.classList.add('fallback');
        }
    }

    // 비디오 폴백 표시 - HD 고급 버전
    function showVideoFallback() {
        videoFallbackActive = true;
        
        // 데모 환경임을 표시
        showHDVideoStatus('🎬 데모 모드: 시네마틱 영상 재생 중...', 'success');
        
        if (heroPlayBtn) {
            heroPlayBtn.style.display = 'flex';
            heroPlayBtn.classList.add('demo-mode');
            heroPlayBtn.querySelector('span').textContent = '🎬 데모 영상';
        }
        
        // 정적 이미지로 대체 (애니메이션 효과 포함)
        const poster = heroVideo.getAttribute('poster');
        if (poster) {
            const staticImage = document.createElement('img');
            staticImage.src = poster;
            staticImage.alt = '용접 로봇 시네마틱 이미지 (데모 모드)';
            staticImage.className = 'hero-static-image';
            staticImage.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 1;
            `;
            
            const videoContainer = heroVideo.parentElement;
            if (videoContainer) {
                videoContainer.appendChild(staticImage);
                
                // 데모 환경임을 표시하는 오버레이 추가
                const demoOverlay = document.createElement('div');
                demoOverlay.className = 'demo-video-overlay';
                demoOverlay.innerHTML = `
                    <div class="demo-indicator">
                        <span class="demo-icon">🎬</span>
                        <span class="demo-text">데모 영상 재생 중</span>
                    </div>
                `;
                demoOverlay.style.cssText = `
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(0, 0, 0, 0.7);
                    color: white;
                    padding: 8px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    z-index: 10;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                `;
                videoContainer.appendChild(demoOverlay);
            }
        }
        
        // 2초 후 데모 상태 메시지 업데이트
        setTimeout(() => {
            showHDVideoStatus('🎬 데모 모드: 시네마틱 영상이 재생되고 있습니다', 'success');
        }, 2000);
        
        // 5초 후 데모 오버레이 숨기기
        setTimeout(() => {
            const demoOverlay = document.querySelector('.demo-video-overlay');
            if (demoOverlay) {
                demoOverlay.style.opacity = '0';
                demoOverlay.style.transform = 'translateY(-10px)';
                demoOverlay.style.transition = 'all 0.5s ease';
                setTimeout(() => {
                    if (demoOverlay.parentNode) {
                        demoOverlay.parentNode.removeChild(demoOverlay);
                    }
                }, 500);
            }
        }, 5000);
    }

    // 히어로 설정 로드
    function loadHeroSettings() {
        // localStorage에서 설정 로드
        const savedLoopVariant = localStorage.getItem('hero_loop_variant');
        if (savedLoopVariant) {
            currentLoopVariant = savedLoopVariant;
            updateHeroLoopVariant();
        }
        
        // reduced motion 설정 확인
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            applyReducedMotion();
        }
    }

    // 히어로 루프 변형 업데이트
    function updateHeroLoopVariant() {
        if (!heroVideo) return;
        
        const videoSources = {
            'A': 'assets/video/hero_loop_8s.mp4',
            'B': 'assets/video/hero_loop_10s.mp4', 
            'C': 'assets/video/hero_loop_12s.mp4'
        };
        
        const newSource = videoSources[currentLoopVariant];
        if (newSource && heroVideo.src !== newSource) {
            const wasPlaying = !heroVideo.paused;
            heroVideo.src = newSource;
            
            if (wasPlaying) {
                heroVideo.play().catch(() => {
                    // 재생 실패 시 무시
                });
            }
        }
    }

    // reduced motion 적용
    function applyReducedMotion() {
        // 비디오 정지 이미지로 대체
        if (heroVideo) {
            heroVideo.style.display = 'none';
            const poster = heroVideo.getAttribute('poster');
            if (poster) {
                const staticImage = document.createElement('img');
                staticImage.src = poster;
                staticImage.alt = '용접 로봇 시네마틱 이미지';
                staticImage.className = 'hero-static-image';
                heroVideo.parentNode.insertBefore(staticImage, heroVideo);
            }
        }
        
        // 텍스트 애니메이션 제거
        const animatedElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta');
        animatedElements.forEach(el => {
            el.style.animation = 'none';
        });
    }

    // 폼 검증 설정
    function setupFormValidation() {
        const form = elements.contactForm;
        if (!form) return;
        
        form.addEventListener('submit', handleFormSubmit);
        
        // 실시간 검증
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
        
        // 파일 업로드 검증
        const fileInput = form.querySelector('input[type="file"]');
        if (fileInput) {
            fileInput.addEventListener('change', validateFile);
        }
    }

    // 폼 제출 처리
    function handleFormSubmit(event) {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        
        // localStorage에 저장 (데모 환경)
        saveContactSubmission(data);
        
        // 성공 메시지 표시
        showToast('상담·견적 요청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.', 'success');
        
        // 폼 초기화
        event.target.reset();
        
        // 애널리틱스 이벤트
        trackEvent('contact_form_submit', {
            company: data.company,
            issues: data.issues ? data.issues.join(',') : ''
        });
    }

    // 폼 검증
    function validateForm() {
        const form = elements.contactForm;
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!validateField({ target: field })) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    // 필드 검증
    function validateField(event) {
        const field = event.target;
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // 필수 필드 검증
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = '필수 입력 항목입니다.';
        }
        
        // 이메일 검증
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = '올바른 이메일 형식이 아닙니다.';
            }
        }
        
        // 전화번호 검증
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[0-9-+\s()]+$/;
            if (!phoneRegex.test(value) || value.length < 10) {
                isValid = false;
                errorMessage = '올바른 전화번호 형식이 아닙니다.';
            }
        }
        
        // 텍스트 영역 길이 검증
        if (field.tagName === 'TEXTAREA' && value.length > 280) {
            isValid = false;
            errorMessage = '최대 280자까지 입력 가능합니다.';
        }
        
        // 에러 표시/제거
        if (!isValid) {
            showFieldError(field, errorMessage);
        } else {
            clearFieldError({ target: field });
        }
        
        return isValid;
    }

    // 필드 에러 표시
    function showFieldError(field, message) {
        clearFieldError({ target: field });
        
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    // 필드 에러 제거
    function clearFieldError(event) {
        const field = event.target;
        field.classList.remove('error');
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    // 파일 검증
    function validateFile(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const maxSizes = {
            'video': 120 * 1024 * 1024, // 120MB
            'image': 5 * 1024 * 1024,   // 5MB
            'application': 20 * 1024 * 1024 // 20MB
        };
        
        const allowedTypes = {
            'video': ['video/mp4', 'video/avi'],
            'image': ['image/jpeg', 'image/jpg', 'image/png'],
            'application': ['application/pdf']
        };
        
        const fileType = file.type.split('/')[0];
        const maxSize = maxSizes[fileType];
        const allowedTypeList = allowedTypes[fileType];
        
        // 파일 크기 검증
        if (file.size > maxSize) {
            showFieldError(event.target, `파일 크기가 너무 큽니다. (최대 ${maxSize / (1024 * 1024)}MB)`);
            event.target.value = '';
            return;
        }
        
        // 파일 타입 검증
        if (!allowedTypeList.includes(file.type)) {
            showFieldError(event.target, '지원하지 않는 파일 형식입니다.');
            event.target.value = '';
            return;
        }
        
        // 파일명 형식 검증
        const filenameRegex = /^[a-zA-Z0-9-]+\.(pdf|jpg|jpeg|png|mp4|avi)$/;
        if (!filenameRegex.test(file.name)) {
            showFieldError(event.target, '파일명은 영문-숫자-하이픈 형식이어야 합니다.');
            event.target.value = '';
            return;
        }
        
        clearFieldError({ target: event.target });
    }

    // 비교 슬라이더 설정
    function setupComparisonSlider() {
        if (!elements.comparisonSlider) return;
        
        const slider = elements.comparisonSlider;
        const handle = elements.sliderHandle;
        const afterImage = elements.comparisonAfter;
        
        if (!handle || !afterImage) return;
        
        let isDragging = false;
        
        // 마우스 이벤트
        handle.addEventListener('mousedown', startDragging);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDragging);
        
        // 터치 이벤트
        handle.addEventListener('touchstart', startDragging);
        document.addEventListener('touchmove', drag);
        document.addEventListener('touchend', stopDragging);
        
        // 클릭 이벤트 (슬라이더 영역 클릭)
        slider.addEventListener('click', handleSliderClick);
        
        function startDragging(event) {
            isDragging = true;
            event.preventDefault();
        }
        
        function drag(event) {
            if (!isDragging) return;
            
            const rect = slider.getBoundingClientRect();
            const clientX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
            const position = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
            
            updateSliderPosition(position);
        }
        
        function stopDragging() {
            isDragging = false;
        }
        
        function handleSliderClick(event) {
            const rect = slider.getBoundingClientRect();
            const position = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
            updateSliderPosition(position);
        }
        
        function updateSliderPosition(position) {
            handle.style.left = `${position}%`;
            afterImage.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
        }
        
        // 초기 위치 설정
        updateSliderPosition(50);
    }

    // 간단한 캐러셀 구현 (오토플레이, 버튼, 드래그/스와이프)
    function setupCarousel() {
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(root => {
            const track = root.querySelector('.carousel-track');
            const slides = Array.from(root.querySelectorAll('.product-card'));
            const prevBtn = root.querySelector('.carousel-nav.prev');
            const nextBtn = root.querySelector('.carousel-nav.next');
            const dotsRoot = root.querySelector('.carousel-dots');
            if (!track || slides.length === 0) return;

            let index = 0;
            let startX = 0;
            let currentX = 0;
            let isDragging = false;
            const autoplay = root.getAttribute('data-autoplay') === 'true';
            const interval = parseInt(root.getAttribute('data-interval') || '4000', 10);
            let timer = null;

            // dots
            dotsRoot.innerHTML = '';
            slides.forEach((_, i) => {
                const b = document.createElement('button');
                b.setAttribute('aria-label', `슬라이드 ${i + 1}`);
                b.addEventListener('click', () => goTo(i));
                dotsRoot.appendChild(b);
            });

            function update() {
                const slideWidth = slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0);
                track.style.transform = `translateX(${-index * slideWidth}px)`;
                dotsRoot.querySelectorAll('button').forEach((b, i) => b.classList.toggle('active', i === index));
            }

            function goTo(i) {
                index = (i + slides.length) % slides.length;
                update();
                restartAutoplay();
            }

            function next() { goTo(index + 1); }
            function prev() { goTo(index - 1); }

            nextBtn?.addEventListener('click', next);
            prevBtn?.addEventListener('click', prev);

            // drag/swipe
            const onDown = (e) => {
                isDragging = true;
                startX = (e.touches ? e.touches[0].clientX : e.clientX);
                currentX = startX;
                track.style.transition = 'none';
            };
            const onMove = (e) => {
                if (!isDragging) return;
                currentX = (e.touches ? e.touches[0].clientX : e.clientX);
                const dx = currentX - startX;
                const slideWidth = slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0);
                track.style.transform = `translateX(${(-index * slideWidth) + dx}px)`;
            };
            const onUp = () => {
                if (!isDragging) return;
                isDragging = false;
                track.style.transition = '';
                const dx = currentX - startX;
                if (Math.abs(dx) > 50) {
                    if (dx < 0) next(); else prev();
                } else {
                    update();
                }
            };
            track.addEventListener('mousedown', onDown);
            track.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
            track.addEventListener('touchstart', onDown, { passive: true });
            track.addEventListener('touchmove', onMove, { passive: true });
            track.addEventListener('touchend', onUp);

            function startAutoplay() {
                if (!autoplay) return;
                stopAutoplay();
                timer = setInterval(next, interval);
            }
            function stopAutoplay() {
                if (timer) { clearInterval(timer); timer = null; }
            }
            function restartAutoplay() { stopAutoplay(); startAutoplay(); }

            // init
            update();
            startAutoplay();
            window.addEventListener('resize', update);
        });
    }

    // 페이지별 특화 기능 설정
    function setupPageSpecificFeatures() {
        const currentPage = getCurrentPage();
        
        switch (currentPage) {
            case 'solutions':
                setupSolutionsPage();
                break;
            case 'applications':
                setupApplicationsPage();
                break;
            case 'cases':
                setupCasesPage();
                break;
            case 'resources':
                setupResourcesPage();
                break;
            case 'about':
                setupAboutPage();
                break;
            case 'contact':
                setupContactPage();
                break;
            case 'home':
                setupHomeTabs();
                break;
        }
    }

    // 현재 페이지 확인
    function getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('/solutions')) return 'solutions';
        if (path.includes('/applications')) return 'applications';
        if (path.includes('/cases')) return 'cases';
        if (path.includes('/resources')) return 'resources';
        if (path.includes('/about')) return 'about';
        if (path.includes('/contact')) return 'contact';
        return 'home';
    }

    // 홈 탭(공지/뉴스/자료) 설정
    function setupHomeTabs() {
        const tabs = document.querySelectorAll('#community .tab');
        const panels = document.querySelectorAll('#community .tab-content');
        if (tabs.length === 0) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                panels.forEach(p => p.classList.toggle('active', p.id === target));
            });
        });
    }

    // 솔루션 페이지 설정
    function setupSolutionsPage() {
        // 탭 기능
        const tabs = document.querySelectorAll('.solution-tab');
        const tabContents = document.querySelectorAll('.solution-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                
                // 탭 활성화
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // 콘텐츠 표시
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === target) {
                        content.classList.add('active');
                    }
                });
                
                // 애널리틱스 이벤트
                trackEvent('solution_tab_click', { solution: target });
            });
        });
    }

    // 적용분야 페이지 설정
    function setupApplicationsPage() {
        // 산업별 필터
        const filters = document.querySelectorAll('.industry-filter');
        const cards = document.querySelectorAll('.application-card');
        
        filters.forEach(filter => {
            filter.addEventListener('click', () => {
                const industry = filter.getAttribute('data-industry');
                
                // 필터 활성화
                filters.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');
                
                // 카드 필터링
                cards.forEach(card => {
                    if (industry === 'all' || card.getAttribute('data-industry') === industry) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // 애널리틱스 이벤트
                trackEvent('application_filter', { industry: industry });
            });
        });
    }

    // 사례 페이지 설정
    function setupCasesPage() {
        // 사례 카드 클릭 이벤트
        const caseCards = document.querySelectorAll('.case-card');
        
        caseCards.forEach(card => {
            card.addEventListener('click', () => {
                const caseId = card.getAttribute('data-case-id');
                showCaseDetail(caseId);
            });
        });
    }

    // 자료실 페이지 설정
    function setupResourcesPage() {
        // 다운로드 게이팅
        const downloadButtons = document.querySelectorAll('.download-btn');
        
        downloadButtons.forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                showDownloadGate(btn.getAttribute('data-resource-id'));
            });
        });
    }

    // 회사소개 페이지 설정
    function setupAboutPage() {
        // 타임라인 애니메이션
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.5 });
        
        timelineItems.forEach(item => observer.observe(item));
    }

    // 문의 페이지 설정
    function setupContactPage() {
        // 예약 안내 모달
        const reservationBtn = document.querySelector('.reservation-info-btn');
        if (reservationBtn) {
            reservationBtn.addEventListener('click', showReservationInfo);
        }
        
        // 카카오 상담 모달
        const kakaoBtn = document.querySelector('.kakao-info-btn');
        if (kakaoBtn) {
            kakaoBtn.addEventListener('click', showKakaoInfo);
        }
    }

    // 사례 상세 표시
    function showCaseDetail(caseId) {
        // 사례 데이터 로드 (localStorage에서)
        const cases = JSON.parse(localStorage.getItem('cases') || '[]');
        const caseData = cases.find(c => c.id === caseId);
        
        if (!caseData) {
            showToast('사례 정보를 찾을 수 없습니다.', 'error');
            return;
        }
        
        const modalContent = `
            <div class="case-detail">
                <div class="case-header">
                    <h3>${caseData.title}</h3>
                    <div class="case-meta">
                        <span class="industry">${caseData.industry}</span>
                        <span class="material">${caseData.material}</span>
                    </div>
                </div>
                <div class="case-content">
                    <div class="case-overview">
                        <h4>개요</h4>
                        <p>${caseData.overview}</p>
                    </div>
                    <div class="case-problem">
                        <h4>문제점</h4>
                        <p>${caseData.problem}</p>
                    </div>
                    <div class="case-solution">
                        <h4>해결책</h4>
                        <p>${caseData.solution}</p>
                    </div>
                    <div class="case-results">
                        <h4>결과</h4>
                        <ul>
                            ${caseData.results.map(result => `<li>${result}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        showModal(modalContent, {
            title: caseData.title,
            footer: `
                <button class="btn btn-secondary" onclick="downloadCasePDF('${caseId}')">PDF 다운로드</button>
                <button class="btn btn-primary" onclick="contactAboutCase('${caseId}')">상담·견적 요청</button>
            `
        });
        
        // 애널리틱스 이벤트
        trackEvent('case_detail_view', { case_id: caseId });
    }

    // 다운로드 게이팅 표시
    function showDownloadGate(resourceId) {
        const modalContent = `
            <form class="download-gate-form" id="downloadGateForm">
                <div class="form-group">
                    <label for="gateName">이름 *</label>
                    <input type="text" id="gateName" name="name" required>
                </div>
                <div class="form-group">
                    <label for="gateCompany">회사 *</label>
                    <input type="text" id="gateCompany" name="company" required>
                </div>
                <div class="form-group">
                    <label for="gateEmail">이메일 *</label>
                    <input type="email" id="gateEmail" name="email" required>
                </div>
                <button type="submit" class="btn btn-primary">다운로드</button>
            </form>
        `;
        
        const modal = showModal(modalContent, {
            title: '자료 다운로드',
            footer: '<small>입력하신 정보는 자료 다운로드 목적으로만 사용됩니다.</small>'
        });
        
        // 폼 제출 처리
        const form = modal.querySelector('#downloadGateForm');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // 다운로드 기록 저장
            saveDownloadRecord(resourceId, data);
            
            // 데모 환경에서는 토스트 메시지만 표시
            showToast('자료 다운로드가 시작됩니다. (데모 환경)', 'success');
            
            // 모달 닫기
            modal.querySelector('.modal-close').click();
            
            // 애널리틱스 이벤트
            trackEvent('resource_download', { resource_id: resourceId });
        });
    }

    // 예약 안내 표시
    function showReservationInfo() {
        const content = `
            <div class="reservation-info">
                <h4>15분 기술상담 예약</h4>
                <p>전문 엔지니어가 직접 방문하여 맞춤형 솔루션을 제안드립니다.</p>
                <ul>
                    <li>방문 상담: 무료</li>
                    <li>상담 시간: 15분</li>
                    <li>방문 지역: 전국</li>
                    <li>예약 방법: 전화 또는 이메일</li>
                </ul>
                <div class="contact-info">
                    <p><strong>문의:</strong> 1899-8304 / 041-587-8567</p>
                    <p><strong>이메일:</strong> jeehoon21514@naver.com</p>
                </div>
            </div>
        `;
        
        showModal(content, { title: '기술상담 예약 안내' });
        
        // 애널리틱스 이벤트
        trackEvent('reservation_info_view');
    }

    // 카카오 상담 안내 표시
    function showKakaoInfo() {
        const content = `
            <div class="kakao-info">
                <h4>카카오 상담</h4>
                <p>실시간으로 궁금한 점을 문의하세요.</p>
                <div class="kakao-qr">
                    <img src="assets/images/kakao-qr.png" alt="카카오톡 QR코드">
                </div>
                <p><strong>카카오톡 ID:</strong> @jaywonrobotics</p>
                <p><strong>상담 시간:</strong> 평일 09:00-18:00</p>
            </div>
        `;
        
        showModal(content, { title: '카카오 상담 안내' });
        
        // 애널리틱스 이벤트
        trackEvent('kakao_info_view');
    }

    // 데이터 저장 함수들
    function saveContactSubmission(data) {
        const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
        const submission = {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            ...data
        };
        submissions.push(submission);
        localStorage.setItem('contact_submissions', JSON.stringify(submissions));
    }

    function saveDownloadRecord(resourceId, userData) {
        const downloads = JSON.parse(localStorage.getItem('resource_downloads') || '[]');
        const download = {
            id: Date.now().toString(),
            resourceId: resourceId,
            timestamp: new Date().toISOString(),
            ...userData
        };
        downloads.push(download);
        localStorage.setItem('resource_downloads', JSON.stringify(downloads));
    }

    // 애널리틱스 설정
    function setupAnalytics() {
        // 페이지별 특화 이벤트
        const currentPage = getCurrentPage();
        trackEvent('page_view', { page: currentPage });
        
        // 히어로 비디오 이벤트
        if (heroVideo) {
            trackEvent('hero_video_load');
        }
    }

    // 이벤트 추적
    function trackEvent(eventName, parameters = {}) {
        const eventData = {
            event: eventName,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            user_agent: navigator.userAgent,
            ...parameters
        };
        
            // 데모 환경에서는 이벤트를 내부적으로 처리
        
        // 실제 환경에서는 gtag나 clarity로 전송
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', eventName, parameters);
        // }
        // if (typeof clarity !== 'undefined') {
        //     clarity('event', eventName, parameters);
        // }
    }

    // 사례 연구 PDF 다운로드
    function downloadCaseStudy() {
        // Demo: 토스트 메시지 표시
        showToast('사례 연구 PDF가 다운로드되었습니다. (데모)', 'success');
        
        // 실제 구현 시: PDF 파일 다운로드
        // const link = document.createElement('a');
        // link.href = 'assets/documents/case-study.pdf';
        // link.download = '제이원로보틱스_사례연구_2024.pdf';
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        
        // Analytics

        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'event_category': 'resources',
                'event_label': 'case_study_pdf'
            });
        }
        if (typeof clarity !== 'undefined') {
            clarity('event', 'download_case_study');
        }
    }

    // 자료 다운로드 함수
    function downloadResource(resourceId) {
        const resourceMap = {
            'active-g3-whitepaper': {
                name: 'Active GⅢ 기술 백서',
                filename: '제이원로보틱스_Active_G3_기술백서_2024.pdf'
            },
            'case-study-2024': {
                name: '2024 성공 사례 모음집',
                filename: '제이원로보틱스_성공사례_2024.pdf'
            },
            'installation-manual': {
                name: '설치 및 운영 가이드',
                filename: '제이원로보틱스_설치가이드_2024.pdf'
            }
        };

        const resource = resourceMap[resourceId];
        if (!resource) {
            showToast('자료를 찾을 수 없습니다.', 'error');
            return;
        }

        // Demo: 토스트 메시지 표시
        showToast(`${resource.name}이 다운로드되었습니다. (데모)`, 'success');
        
        // 실제 구현 시: PDF 파일 다운로드
        // const link = document.createElement('a');
        // link.href = `assets/documents/${resourceId}.pdf`;
        // link.download = resource.filename;
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        
        // Analytics

        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'event_category': 'resources',
                'event_label': resourceId
            });
        }
        if (typeof clarity !== 'undefined') {
            clarity('event', `download_${resourceId}`);
        }
    }

    // 자료 분류 보기 함수
    function showResourceCategories() {
        const categories = [
            { name: '기술 백서', count: 8 },
            { name: '사례집', count: 12 },
            { name: '매뉴얼', count: 15 },
            { name: '카탈로그', count: 6 },
            { name: '동영상', count: 20 }
        ];

        let categoryList = categories.map(cat => 
            `• ${cat.name}: ${cat.count}개`
        ).join('\n');

        showToast(`자료 분류:\n${categoryList}`, 'info');
        
        // Analytics

        if (typeof gtag !== 'undefined') {
            gtag('event', 'view_item_list', {
                'event_category': 'resources',
                'event_label': 'resource_categories'
            });
        }
        if (typeof clarity !== 'undefined') {
            clarity('event', 'view_resource_categories');
        }
    }

    // 전역 함수들
    window.downloadCasePDF = function(caseId) {
        showToast('PDF 다운로드가 시작됩니다. (데모 환경)', 'success');
        trackEvent('case_pdf_download', { case_id: caseId });
    };

    window.contactAboutCase = function(caseId) {
        window.location.href = '/contact?case=' + caseId;
        trackEvent('case_contact_click', { case_id: caseId });
    };

    // 적용분야 페이지 함수들
    window.downloadGuide = function(industry) {
        const guideMap = {
            'automotive': {
                name: '자동차 산업 가이드',
                filename: '제이원로보틱스_자동차산업_적용가이드_2024.pdf'
            },
            'electronics': {
                name: '전자제품 산업 가이드',
                filename: '제이원로보틱스_전자제품산업_적용가이드_2024.pdf'
            },
            'shipbuilding': {
                name: '조선 산업 가이드',
                filename: '제이원로보틱스_조선산업_적용가이드_2024.pdf'
            },
            'construction': {
                name: '건설기계 산업 가이드',
                filename: '제이원로보틱스_건설기계산업_적용가이드_2024.pdf'
            }
        };

        const guide = guideMap[industry];
        if (!guide) {
            showToast('가이드를 찾을 수 없습니다.', 'error');
            return;
        }

        showToast(`${guide.name} 다운로드가 시작됩니다. (데모 환경)`, 'success');
        trackEvent('guide_download', { industry: industry });
    };

    // 적용분야 페이지 초기화
    function setupApplicationsPage() {
        // 산업별 상세 블록 애니메이션
        const industryBlocks = document.querySelectorAll('.industry-detail-block');
        if (industryBlocks.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            industryBlocks.forEach(block => {
                observer.observe(block);
            });
        }

        // 산업 카드 클릭 이벤트
        const industryCards = document.querySelectorAll('.industry-card');
        industryCards.forEach(card => {
            card.addEventListener('click', function() {
                const industry = this.getAttribute('data-industry');
                const detailBlock = document.getElementById(industry + '-detail');
                
                if (detailBlock) {
                    detailBlock.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    trackEvent('industry_detail_view', { industry: industry });
                }
            });
        });
    }

    window.downloadCaseStudy = downloadCaseStudy;
    window.downloadResource = downloadResource;
    window.showResourceCategories = showResourceCategories;
    window.showReservationInfo = showReservationInfo;
    window.showKakaoInfo = showKakaoInfo;
    window.downloadGuide = window.downloadGuide;

    // 초기화 실행
    init();

    // 적용분야 페이지 초기화
    if (document.querySelector('.industry-detail-block')) {
        setupApplicationsPage();
    }

})();
