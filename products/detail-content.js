// 제품 상세 페이지 확장 콘텐츠 (localStorage와 무관하게 항상 사용 가능)
const PRODUCT_DETAIL_CONTENT = {
    tawers: {
        heroBadge: '용접전원 일체형 아크 용접 로봇',
        heroTitle: 'TAWERS 용접로봇 시스템',
        heroDescription: '로봇 제어와 용접전원을 하나로 통합한 아크 용접 자동화 시스템입니다. 고속 용접, 저스패터, 안정적인 비드 품질이 필요한 제조 현장에 맞춰 로봇, 용접전원, 컨트롤러, 토치 구성을 제안합니다.',
        imageHint: '로봇팔 · 용접전원 · 컨트롤러 · 토치 통합 시스템',
        summaryCards: [
            { title: '통합 제어', desc: '로봇과 용접전원을 하나의 시스템으로 제어' },
            { title: '저스패터 용접', desc: '스패터와 후처리 부담을 줄이는 용접 품질' },
            { title: '고속 생산 대응', desc: '반복 용접 공정의 생산성 향상' },
            { title: '현장 맞춤 구성', desc: '작업물, 소재, 두께, 생산량에 따른 시스템 제안' }
        ],
        systemSection: {
            title: '로봇팔부터 용접전원까지 하나의 시스템으로 구성',
            description: '로봇만 공급하는 것이 아니라 용접 공정에 필요한 핵심 장비를 현장 조건에 맞춰 하나의 자동화 시스템으로 구성합니다.',
            components: [
                '로봇팔', '용접전원', '컨트롤러', '티칭 펜던트',
                '토치', '와이어 송급 장치', '지그/포지셔너', '안전설비'
            ]
        },
        applicationFields: [
            '자동차 부품 용접', '판금 부품 용접', '산업기계 프레임',
            '농기계·건설장비 부품', '스테인리스 제품', '아연도금강판', '중후판 구조물'
        ],
        problems: [
            '스패터가 많아 후처리 시간이 오래 걸리는 현장',
            '작업자별 용접 품질 편차가 큰 현장',
            '숙련 용접공 확보가 어려운 현장',
            '박판 용접 시 번스루가 발생하는 현장',
            '도금강판 용접 시 블로홀 문제가 있는 현장',
            '중후판 용접 생산성을 높이고 싶은 현장'
        ],
        relatedSolutions: [
            { slug: 's-awp', name: 'S-AWP / AWP4', desc: '고속·저스패터 용접 공법' },
            { slug: 'hbc', name: 'HBC', desc: '박판·고장력강 번스루 방지 솔루션' },
            { slug: 'zi-tech', name: 'Zi-Tech', desc: '아연도금강판 스패터·블로홀 저감 솔루션' },
            { slug: 'wgh', name: 'WGH 고출력 시스템', desc: '중후판·고전류 용접 대응' }
        ],
        specifications: {
            '시스템 유형': '용접전원 일체형 아크 용접 로봇',
            '적용 공정': 'MIG/MAG, CO₂, 스테인리스 MIG 등',
            '구성 요소': '로봇, 용접전원, 컨트롤러, 토치, 와이어 송급 장치',
            '적용 소재': '연강, 스테인리스, 고장력강, 아연도금강판 등',
            '추천 현장': '자동차 부품, 판금, 프레임, 구조물 용접',
            '제안 방식': '작업물·소재·두께·생산량 기준 맞춤 구성',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: [
            '작업물 사진·도면 확인',
            '소재·두께·용접 조건 검토',
            '적합 로봇 모델 및 공법 선정',
            '지그·포지셔너·안전설비 구성 검토',
            '견적 및 납기 안내',
            '설치·시운전·교육 진행'
        ],
        cta: {
            title: '작업물 사진만 있어도 상담 가능합니다',
            description: '소재, 두께, 용접 길이, 월 생산량, 현재 용접 문제를 알려주시면 현장 조건에 맞는 TAWERS 용접로봇 시스템을 제안드립니다.'
        }
    }
};

function getProductDetailContent(slug) {
    return PRODUCT_DETAIL_CONTENT[slug] || null;
}

function getCatalogProduct(slug) {
    if (!window.productManager) return null;
    let product = window.productManager.findProductBySlug(slug);
    if (!product && window.productManager.getCatalogProducts) {
        product = window.productManager.getCatalogProducts().find((p) => p.slug === slug);
    }
    return product || null;
}
