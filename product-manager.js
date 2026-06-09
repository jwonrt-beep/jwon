// 제품 관리자 - 제품소개 페이지의 제품군을 관리
class ProductManager {
    constructor() {
        this.storageKey = 'jwonProducts';
        this.versionKey = 'jwonProducts_version';
        this.dataVersion = 3;
        this.loadProducts();
    }

    loadProducts() {
        const savedVersion = localStorage.getItem(this.versionKey);
        const savedProducts = localStorage.getItem(this.storageKey);

        if (savedProducts && savedVersion === String(this.dataVersion)) {
            this.products = JSON.parse(savedProducts);
        } else {
            this.products = this.getDefaultProducts();
            this.saveProducts();
            localStorage.setItem(this.versionKey, String(this.dataVersion));
        }
    }

    imagePath(slug) {
        return `../assets/images/products/${slug}.jpg`;
    }

    placeholderPath() {
        return '../assets/images/products/placeholder.svg';
    }

    getDefaultProducts() {
        const makeProduct = (data) => ({
            date: '2026.06.09',
            price: '현장 조건별 별도 산정',
            featured: false,
            highlight: false,
            thumbnail: this.imagePath(data.slug),
            ...data,
            category: data.categories[0]
        });

        return [
            makeProduct({
                id: 'tawers',
                slug: 'tawers',
                order: 1,
                name: 'TAWERS 용접로봇 시스템',
                badge: '용접전원 일체형 로봇',
                categories: ['로봇 자동화 시스템', '산업용 로봇', '용접 장비'],
                description: '로봇 제어와 용접전원을 하나로 통합한 파나소닉 TAWERS 기반 아크 용접 자동화 시스템입니다. 고속 용접, 저스패터, 안정적인 비드 품질이 필요한 제조 현장에 적합합니다.',
                imageHint: '로봇팔 · 용접전원 · 컨트롤러 · 토치 통합 시스템',
                features: ['아크용접', '저스패터', '자동화'],
                specifications: {
                    '시스템 유형': '용접전원 일체형 아크 용접 로봇',
                    '적용 공정': 'MIG/MAG 아크 용접 자동화',
                    '구성 요소': '로봇, 용접전원, 컨트롤러, 토치',
                    '제안 방식': '현장 조건 기반 맞춤 구성'
                }
            }),
            makeProduct({
                id: 'tm-series',
                slug: 'tm-series',
                order: 2,
                name: 'TM 시리즈',
                badge: '표준 범용형',
                categories: ['산업용 로봇', '용접 장비'],
                description: '소형 부품부터 중대형 프레임까지 폭넓게 대응하는 표준형 아크 용접 로봇 라인업입니다. 작업반경과 현장 공간에 따라 다양한 모델 구성이 가능합니다.',
                imageHint: '표준 용접 셀 · 프레임·금속 부품 용접',
                features: ['범용', '표준형', '프레임용접'],
                highlight: true,
                featured: true,
                specifications: {
                    '시리즈 특성': '표준 범용형 아크 용접 로봇',
                    '적용 범위': '소형 부품 ~ 중대형 프레임',
                    '구성 옵션': '작업반경·현장 공간별 모델 선택',
                    '제안 방식': '현장 조건 기반 라인업 제안'
                }
            }),
            makeProduct({
                id: 'ts-series',
                slug: 'ts-series',
                order: 3,
                name: 'TS 시리즈',
                badge: '소형·공간절약형',
                categories: ['산업용 로봇', '용접 장비'],
                description: '좁은 작업 공간과 소형 부품 용접에 적합한 컴팩트 아크 용접 로봇입니다. 자동차 소부품, 판금 부품, 반복 용접 공정에 효율적으로 적용할 수 있습니다.',
                imageHint: '컴팩트 용접 셀 · 소형 부품 용접',
                features: ['소형', '공간절약', '정밀용접'],
                specifications: {
                    '시리즈 특성': '소형·공간절약형 아크 용접 로봇',
                    '적용 분야': '자동차 소부품, 판금, 반복 용접',
                    '장점': '좁은 설치 공간 대응',
                    '제안 방식': '현장 조건 기반 맞춤 구성'
                }
            }),
            makeProduct({
                id: 'tl-series',
                slug: 'tl-series',
                order: 4,
                name: 'TL 시리즈',
                badge: '대형 워크 대응',
                categories: ['산업용 로봇', '용접 장비'],
                description: '긴 작업반경이 필요한 대형 프레임, 산업기계 부품, 구조물 용접에 적합한 롱암 타입 아크 용접 로봇입니다.',
                imageHint: '대형 프레임 · 구조물 용접',
                features: ['대형작업', '장축', '구조물'],
                specifications: {
                    '시리즈 특성': '롱암 타입 대형 용접 로봇',
                    '적용 분야': '대형 프레임, 산업기계, 구조물',
                    '장점': '긴 작업반경 대응',
                    '제안 방식': '현장 조건 기반 맞춤 구성'
                }
            }),
            makeProduct({
                id: 'wgh',
                slug: 'wgh',
                order: 5,
                name: 'WGH 고출력 시스템',
                badge: '중후판·고전류',
                categories: ['로봇 자동화 시스템', '용접 장비'],
                description: '중후판, 대형 구조물, 고전류 용접이 필요한 현장을 위한 고출력 TAWERS 시스템입니다. 두꺼운 소재의 생산성과 용접 품질을 함께 고려한 구성입니다.',
                imageHint: '중후판 · 필렛 용접 · 고출력 시스템',
                features: ['중후판', '고출력', '구조물'],
                specifications: {
                    '시스템 유형': '고출력 TAWERS 용접 시스템',
                    '적용 소재': '중후판, 대형 구조물',
                    '특성': '고전류 용접 대응',
                    '제안 방식': '생산성·품질 동시 고려 구성'
                }
            }),
            makeProduct({
                id: 'wg4-wgh4',
                slug: 'wg4-wgh4',
                order: 6,
                name: 'WG4 / WGH4 최신 시스템',
                badge: '최신 G4 시리즈',
                categories: ['로봇 자동화 시스템', '산업용 로봇', '용접 장비'],
                description: '최신 G4 기반의 파나소닉 용접 로봇 시스템입니다. 표준 용접전원 일체형 구성부터 고전류 용접전원 일체형 구성까지 현장 조건에 맞춰 제안할 수 있습니다.',
                imageHint: '최신 컨트롤러 · 티칭 펜던트 · 통합 시스템',
                features: ['최신형', '고성능', '통합제어'],
                specifications: {
                    '시리즈': 'G4 기반 최신 용접 로봇',
                    '구성 옵션': 'WG4 표준형 / WGH4 고전류형',
                    '특성': '용접전원 일체형 통합 제어',
                    '제안 방식': '현장 조건 기반 라인업 제안'
                }
            }),
            makeProduct({
                id: 's-awp',
                slug: 's-awp',
                order: 7,
                name: 'S-AWP / AWP4',
                badge: '저스패터 공법',
                categories: ['용접 장비', '스마트팩토리'],
                description: '와이어 송급과 용접 파형을 정밀하게 제어해 스패터를 줄이고 고속 용접 품질을 높이는 공법입니다. 후처리 시간을 줄이고 생산성을 높이고 싶은 현장에 적합합니다.',
                imageHint: '스패터 비교 · 저스패터 용접 결과',
                features: ['저스패터', '고속용접', '후처리절감'],
                specifications: {
                    '공법 유형': '저스패터 아크 용접 공법',
                    '제어 항목': '와이어 송급, 용접 파형',
                    '기대 효과': '스패터 감소, 후처리 시간 절감',
                    '적용 분야': '고속 생산 라인, 품질 개선 현장'
                }
            }),
            makeProduct({
                id: 'hbc',
                slug: 'hbc',
                order: 8,
                name: 'HBC 박판 용접 솔루션',
                badge: '번스루 방지',
                categories: ['용접 장비'],
                description: '얇은 판재, 고장력강, 갭 편차가 있는 용접에서 번스루를 줄이고 안정적인 비드 품질을 확보하는 용접 제어 솔루션입니다.',
                imageHint: '번스루 비교 · 안정적 비드 품질',
                features: ['박판', '고장력강', '갭대응'],
                specifications: {
                    '솔루션 유형': '박판 용접 제어',
                    '적용 소재': '얇은 판재, 고장력강',
                    '해결 과제': '번스루 방지, 비드 품질 안정화',
                    '적용 분야': '갭 편차가 있는 용접 공정'
                }
            }),
            makeProduct({
                id: 'zi-tech',
                slug: 'zi-tech',
                order: 9,
                name: 'Zi-Tech',
                badge: '도금강판 용접',
                categories: ['용접 장비'],
                description: '아연도금강판 용접 시 발생하기 쉬운 스패터와 블로홀 문제를 줄이기 위한 전용 용접 솔루션입니다. 자동차 부품, 도금 판금, 전장 케이스류에 적합합니다.',
                imageHint: '도금강판 비드 · 블로홀 비교',
                features: ['도금강판', '블로홀저감', '스패터저감'],
                specifications: {
                    '솔루션 유형': '도금강판 전용 용접',
                    '적용 소재': '아연도금강판',
                    '해결 과제': '스패터·블로홀 저감',
                    '적용 분야': '자동차 부품, 도금 판금, 전장 케이스'
                }
            }),
            makeProduct({
                id: 'jig-positioner',
                slug: 'jig-positioner',
                order: 10,
                name: '지그·포지셔너',
                badge: '맞춤 자동화 구성',
                categories: ['지그/포지셔너', '로봇 자동화 시스템'],
                description: '작업물 고정, 회전, 위치 제어를 위한 지그와 포지셔너를 현장 조건에 맞춰 구성합니다. 로봇 용접 품질과 작업 효율을 높이는 핵심 주변 설비입니다.',
                imageHint: '회전 포지셔너 · 작업물 고정 지그',
                features: ['지그', '회전포지셔너', '맞춤설계'],
                specifications: {
                    '제공 범위': '지그, 회전 포지셔너, 위치 제어',
                    '역할': '작업물 고정·회전·위치 제어',
                    '특성': '현장 맞춤 설계·제작',
                    '연계': '로봇 용접 자동화 시스템'
                }
            }),
            makeProduct({
                id: 'turnkey-cell',
                slug: 'turnkey-cell',
                order: 11,
                name: '턴키 로봇 자동화 셀',
                badge: '설계·설치·시운전',
                categories: ['로봇 자동화 시스템', '스마트팩토리'],
                description: '로봇만 공급하는 것이 아니라 작업물, 지그, 안전펜스, 포지셔너, 컨트롤러, 시운전까지 현장에 맞춰 구성하는 통합 자동화 솔루션입니다.',
                imageHint: '안전펜스 · 로봇 · 지그 · 통합 셀',
                features: ['턴키', '자동화셀', '현장맞춤'],
                specifications: {
                    '제공 범위': '설계, 설치, 시운전 일괄',
                    '구성 요소': '로봇, 지그, 펜스, 포지셔너, 컨트롤러',
                    '특성': '현장 맞춤 통합 자동화',
                    '제안 방식': 'One-Stop 턴키 솔루션'
                }
            }),
            makeProduct({
                id: 'smart-factory',
                slug: 'smart-factory',
                order: 12,
                name: '스마트팩토리 연동 솔루션',
                badge: '생산 데이터 연동',
                categories: ['스마트팩토리', '로봇 자동화 시스템'],
                description: '로봇 용접 설비와 생산 데이터를 연동해 공정 모니터링, 작업 이력 관리, 품질 데이터 관리까지 확장할 수 있는 스마트팩토리형 자동화 솔루션입니다.',
                imageHint: '설비 · 모니터링 대시보드 · 데이터 연동',
                features: ['데이터연동', '공정관리', '품질관리'],
                specifications: {
                    '솔루션 유형': '스마트팩토리 연동',
                    '기능': '공정 모니터링, 작업 이력, 품질 데이터',
                    '연계 대상': '로봇 용접 설비, 생산 시스템',
                    '제안 방식': '현장 확장형 단계별 구축'
                }
            })
        ];
    }

    saveProducts() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.products));
        localStorage.setItem(this.versionKey, String(this.dataVersion));
    }

    getProducts() {
        return [...this.products].sort((a, b) => (a.order || 0) - (b.order || 0));
    }

    findProductById(productId) {
        return this.products.find((product) => product.id === productId);
    }

    getCatalogProducts() {
        return this.getDefaultProducts();
    }

    findProductBySlug(slug) {
        if (!slug) return null;
        const fromStorage = this.products.find((product) => product.slug === slug || product.id === slug);
        if (fromStorage) return fromStorage;
        return this.getDefaultProducts().find((product) => product.slug === slug || product.id === slug) || null;
    }

    getProductsByCategory(category) {
        if (category === 'all') {
            return this.getProducts();
        }
        return this.getProducts().filter((product) =>
            (product.categories || [product.category]).includes(category)
        );
    }

    addProduct(product) {
        product.id = product.id || 'product_' + Date.now();
        product.slug = product.slug || product.id;
        product.date = new Date().toLocaleDateString('ko-KR');
        product.categories = product.categories || [product.category];
        this.products.unshift(product);
        this.saveProducts();
    }

    updateProduct(productId, updatedProduct) {
        const index = this.products.findIndex((product) => product.id === productId);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedProduct };
            if (updatedProduct.categories) {
                this.products[index].category = updatedProduct.categories[0];
            }
            this.saveProducts();
        }
    }

    deleteProduct(productId) {
        const index = this.products.findIndex((product) => product.id === productId);
        if (index !== -1) {
            this.products.splice(index, 1);
            this.saveProducts();
        }
    }

    getDetailUrl(product) {
        return `detail.html?p=${encodeURIComponent(product.slug || product.id)}`;
    }

    getQuoteUrl(product) {
        const name = encodeURIComponent(product.name);
        return `../contact/index.html?type=quote&product=${name}`;
    }
}

window.productManager = new ProductManager();
