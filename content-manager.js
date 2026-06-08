// 콘텐츠 관리자 - 페이지 내용을 로컬 스토리지에 저장하고 불러오기
class ContentManager {
    constructor() {
        this.storageKey = 'jwonContent';
        this.loadContent();
    }

    // 콘텐츠 로드
    loadContent() {
        const savedContent = localStorage.getItem(this.storageKey);
        if (savedContent) {
            this.content = JSON.parse(savedContent);
            // 구 버전 서브타이틀을 새로운 문구로 마이그레이션
            try {
                const oldPhraseStart = "2018년 설립된 이래";
                const newSubtitle = "독자 기술로 여는 용접 자동화의 미래";
                if (this.content?.index && typeof this.content.index.heroSubtitle === 'string' && this.content.index.heroSubtitle.includes(oldPhraseStart)) {
                    this.content.index.heroSubtitle = newSubtitle;
                    this.saveContent();
                }
            } catch (e) {
                // 무시
            }
        } else {
            this.content = this.getDefaultContent();
            this.saveContent();
        }
    }

    // 기본 콘텐츠 설정
    getDefaultContent() {
        return {
            index: {
                title: "제이원로보틱스 - 혁신적인 용접 자동화 솔루션",
                heroTitle: "(주)제이원로보틱스",
                heroSubtitle: "독자 기술로 여는 용접 자동화의 미래",
                badgeText: "Welding Automation Solutions"
            },
            products: {
                title: "제품소개 - 제이원로보틱스",
                heroTitle: "제품소개",
                heroSubtitle: "혁신적인 용접 자동화 솔루션으로 제조업의 미래를 만들어갑니다"
            },
            about: {
                title: "회사소개 - 제이원로보틱스",
                heroTitle: "회사소개",
                heroSubtitle: "용접 자동화 분야의 선도 기업으로서 고객의 성공을 위해 최선을 다합니다"
            },
            contact: {
                title: "문의 - 제이원로보틱스",
                heroTitle: "문의",
                heroSubtitle: "제이원로보틱스에 문의하시면 전문 상담사가 도와드리겠습니다"
            }
        };
    }

    // 콘텐츠 저장
    saveContent() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.content));
    }

    // 특정 페이지 콘텐츠 가져오기
    getPageContent(pageId) {
        return this.content[pageId] || {};
    }

    // 특정 페이지 콘텐츠 업데이트
    updatePageContent(pageId, newContent) {
        this.content[pageId] = { ...this.content[pageId], ...newContent };
        this.saveContent();
        this.applyContentToPage(pageId);
    }

    // 페이지에 콘텐츠 적용
    applyContentToPage(pageId) {
        const content = this.getPageContent(pageId);
        if (!content) return;

        // 페이지 제목 업데이트
        if (content.title) {
            document.title = content.title;
        }

        // 히어로 섹션 업데이트
        if (content.heroTitle) {
            const heroTitle = document.querySelector('.hero-title, .media-hero h1');
            if (heroTitle) {
                heroTitle.textContent = content.heroTitle;
            }
        }

        if (content.heroSubtitle) {
            const heroSubtitle = document.querySelector('.hero-subtitle, .media-hero p');
            if (heroSubtitle) {
                heroSubtitle.innerHTML = content.heroSubtitle;
            }
        }

        if (content.badgeText) {
            const badgeText = document.querySelector('.badge-text');
            if (badgeText) {
                badgeText.textContent = content.badgeText;
            }
        }
    }

    // 현재 페이지 ID 감지
    getCurrentPageId() {
        const path = window.location.pathname;
        if (path.includes('/products/')) return 'products';
        if (path.includes('/about/')) return 'about';
        if (path.includes('/contact/')) return 'contact';
        if (path.includes('/media/')) return 'media';
        return 'index';
    }

    // 현재 페이지에 콘텐츠 적용
    applyCurrentPageContent() {
        const pageId = this.getCurrentPageId();
        this.applyContentToPage(pageId);
    }
}

// 전역 인스턴스 생성
window.contentManager = new ContentManager();

// 페이지 로드 시 콘텐츠 적용
document.addEventListener('DOMContentLoaded', function() {
    window.contentManager.applyCurrentPageContent();
});
