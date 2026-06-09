// 제품군 카탈로그 – product-manager.js에 내장 (외부 파일 의존 없음)
var PRODUCT_CATALOG = [
    {
        id: 'tawers-welding-robot-system',
        slug: 'tawers-welding-robot-system',
        order: 1,
        name: 'TAWERS 용접로봇 시스템',
        badge: '용접전원 일체형 로봇',
        categories: ['용접로봇 시스템', '용접 장비'],
        filterTags: ['용접로봇 시스템'],
        description: '로봇 제어와 용접전원을 하나로 통합한 아크 용접 자동화 시스템입니다. 로봇팔, 용접전원, 컨트롤러, 토치, 와이어 송급 장치를 현장 조건에 맞춰 하나의 시스템으로 제안합니다.',
        imageHint: '로봇팔 · 용접전원 · 컨트롤러 · 토치 통합 시스템',
        features: ['통합제어', '아크용접', '자동화'],
        price: '현장 조건별 별도 산정',
        highlight: true
    },
    {
        id: 'welding-robot-manipulator-lineup',
        slug: 'welding-robot-manipulator-lineup',
        order: 2,
        name: '용접 로봇 매니퓰레이터 라인업',
        badge: 'TS · TM · TL 시리즈',
        categories: ['로봇 라인업', '산업용 로봇'],
        filterTags: ['로봇 라인업'],
        description: '작업물 크기와 설치 공간에 따라 선택하는 파나소닉 용접 로봇 라인업입니다. 소형 워크용 TS, 표준 범용형 TM, 대형 워크용 TL 시리즈로 구성됩니다.',
        imageHint: 'TS · TM · TL 로봇팔 라인업 비교',
        features: ['소형', '표준형', '대형워크'],
        price: '현장 조건별 별도 산정'
    },
    {
        id: 'welding-process-software',
        slug: 'welding-process-software',
        order: 3,
        name: '용접 공법 소프트웨어',
        badge: 'S-AWP · HBC · Zi-Tech',
        categories: ['용접 공법', '용접 장비'],
        filterTags: ['용접 공법'],
        description: '스패터, 번스루, 블로홀, 고속 용접 등 현장 문제에 맞춰 적용하는 용접 공법 소프트웨어입니다. 용접 품질과 생산성을 높이기 위한 공법을 현장 조건에 따라 제안합니다.',
        imageHint: '스패터 · 번스루 · 블로홀 전후 비교',
        features: ['저스패터', '박판용접', '도금강판'],
        price: '현장 조건별 별도 산정'
    },
    {
        id: 'high-power-welding-system',
        slug: 'high-power-welding-system',
        order: 4,
        name: '고출력 용접 시스템',
        badge: '중후판·고전류 대응',
        categories: ['용접로봇 시스템', '용접 장비'],
        filterTags: ['용접로봇 시스템'],
        description: '중후판, 대형 구조물, 고전류 용접이 필요한 제조 현장을 위한 고출력 용접 자동화 구성입니다. TAWERS 시스템의 고전류·중후판 대응 구성으로 WGH 계열을 함께 검토합니다.',
        imageHint: '중후판 · 필렛 용접 · 대형 구조물',
        features: ['고출력', '중후판', '구조물'],
        price: '현장 조건별 별도 산정'
    },
    {
        id: 'jig-positioner-automation',
        slug: 'jig-positioner-automation',
        order: 5,
        name: '지그·포지셔너 자동화',
        badge: '맞춤 자동화 구성',
        categories: ['지그/포지셔너', '로봇 자동화 시스템'],
        filterTags: ['지그/포지셔너'],
        description: '작업물 고정, 회전, 위치 제어를 위한 지그와 포지셔너를 현장 조건에 맞춰 구성합니다. 로봇 용접 품질과 작업 효율을 높이는 핵심 주변 설비입니다.',
        imageHint: '회전 포지셔너 · 작업물 고정 지그',
        features: ['지그', '포지셔너', '맞춤설계'],
        price: '현장 조건별 별도 산정'
    },
    {
        id: 'turnkey-robot-automation-cell',
        slug: 'turnkey-robot-automation-cell',
        order: 6,
        name: '턴키 로봇 자동화 셀',
        badge: '설계·설치·시운전',
        categories: ['로봇 자동화 시스템', '스마트팩토리'],
        filterTags: ['용접로봇 시스템', '스마트팩토리'],
        description: '로봇만 공급하는 것이 아니라 작업물, 지그, 안전펜스, 컨트롤러, 시운전까지 현장에 맞춰 통합 구성하는 자동화 셀 솔루션입니다.',
        imageHint: '안전펜스 · 로봇 · 지그 · 통합 셀',
        features: ['턴키', '자동화셀', '현장맞춤'],
        price: '현장 조건별 별도 산정'
    },
    {
        id: 'smart-factory-integration',
        slug: 'smart-factory-integration',
        order: 7,
        name: '스마트팩토리 연동 솔루션',
        badge: '생산 데이터 연동',
        categories: ['스마트팩토리', '로봇 자동화 시스템'],
        filterTags: ['스마트팩토리'],
        description: '로봇 용접 설비와 생산 데이터를 연동해 공정 모니터링, 작업 이력, 품질 데이터 관리까지 확장할 수 있는 스마트팩토리형 자동화 솔루션입니다.',
        imageHint: '설비 · 모니터링 대시보드 · 데이터 연동',
        features: ['데이터연동', '공정관리', '품질관리'],
        price: '현장 조건별 별도 산정'
    }
];

function getCatalogProductBySlug(slug) {
    var aliases = {
        tawers: 'tawers-welding-robot-system',
        'tm-series': 'welding-robot-manipulator-lineup',
        'ts-series': 'welding-robot-manipulator-lineup',
        'tl-series': 'welding-robot-manipulator-lineup'
    };
    var resolved = aliases[slug] || slug;
    for (var i = 0; i < PRODUCT_CATALOG.length; i++) {
        if (PRODUCT_CATALOG[i].slug === resolved) return PRODUCT_CATALOG[i];
    }
    return null;
}

function getCatalogDetailUrl(slug) {
    return slug + '/index.html';
}

function getCatalogQuoteUrl(productName) {
    return '../contact/index.html?type=quote&product=' + encodeURIComponent(productName);
}

class ProductManager {
    constructor() {
        this.storageKey = 'jwonProducts';
        this.versionKey = 'jwonProducts_version';
        this.dataVersion = 6;
        this.loadProducts();
    }

    loadProducts() {
        var savedVersion = localStorage.getItem(this.versionKey);
        if (savedVersion !== String(this.dataVersion)) {
            this.products = this.getDefaultProducts();
            this.saveProducts();
            return;
        }
        try {
            var saved = localStorage.getItem(this.storageKey);
            this.products = saved ? JSON.parse(saved) : this.getDefaultProducts();
            if (!Array.isArray(this.products) || this.products.length !== 7) {
                this.products = this.getDefaultProducts();
                this.saveProducts();
            }
        } catch (e) {
            this.products = this.getDefaultProducts();
            this.saveProducts();
        }
    }

    placeholderPath() {
        return '../assets/images/products/placeholder.svg';
    }

    getDefaultProducts() {
        return PRODUCT_CATALOG.map(function (p) {
            return Object.assign({}, p, {
                date: '2026.06.09',
                thumbnail: '../assets/images/products/placeholder.svg',
                category: p.categories[0],
                featured: false
            });
        });
    }

    saveProducts() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.products));
        localStorage.setItem(this.versionKey, String(this.dataVersion));
    }

    getProducts() {
        return this.getDefaultProducts().sort(function (a, b) {
            return (a.order || 0) - (b.order || 0);
        });
    }

    getCatalogProducts() {
        return this.getProducts();
    }

    findProductBySlug(slug) {
        var fromCatalog = getCatalogProductBySlug(slug);
        if (fromCatalog) {
            return Object.assign({}, fromCatalog, {
                thumbnail: this.placeholderPath(),
                category: fromCatalog.categories[0]
            });
        }
        return this.products.find(function (p) { return p.slug === slug || p.id === slug; }) || null;
    }

    findProductById(id) {
        return this.findProductBySlug(id);
    }

    getProductsByCategory(filter) {
        if (filter === 'all') return this.getProducts();
        return this.getProducts().filter(function (p) {
            return (p.filterTags || []).indexOf(filter) !== -1;
        });
    }

    getDetailUrl(product) {
        return product.slug + '/index.html';
    }

    getQuoteUrl(product) {
        return '../contact/index.html?type=quote&product=' + encodeURIComponent(product.name);
    }

    addProduct(product) {
        product.id = product.id || 'product_' + Date.now();
        product.slug = product.slug || product.id;
        this.products.unshift(product);
        this.saveProducts();
    }

    updateProduct(productId, updated) {
        var i = this.products.findIndex(function (p) { return p.id === productId; });
        if (i !== -1) {
            this.products[i] = Object.assign({}, this.products[i], updated);
            this.saveProducts();
        }
    }

    deleteProduct(productId) {
        var i = this.products.findIndex(function (p) { return p.id === productId; });
        if (i !== -1) {
            this.products.splice(i, 1);
            this.saveProducts();
        }
    }
}

window.productManager = new ProductManager();
