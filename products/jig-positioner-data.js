// TAWERS → 지그·포지셔너 자동화 → 구성별 계층 데이터
var JIG_POSITIONER_HIERARCHY = {
    parentSystem: {
        name: 'TAWERS 용접로봇 시스템',
        slug: 'tawers-welding-robot-system',
        url: '/products/tawers-welding-robot-system/'
    },
    lineup: {
        name: '지그·포지셔너 자동화',
        slug: 'jig-positioner-automation',
        url: '/products/jig-positioner-automation/',
        description: 'TAWERS 용접로봇 시스템에서 작업물 고정, 회전, 위치 제어를 위해 설계·제작하는 지그와 포지셔너 자동화 구성입니다. 로봇 성능만큼 중요한 작업물 셋업과 접근성을 현장 조건에 맞춰 제안합니다.'
    },
    configs: {
        'custom-jig': {
            id: 'custom-jig',
            name: '맞춤 지그',
            position: '작업물 고정·정밀 셋업',
            description: '작업물 형상과 용접 위치에 맞춰 설계·제작하는 맞춤 지그입니다. 반복 용접 품질과 셋업 시간 안정화를 위해 TAWERS 로봇 시스템과 함께 제안합니다.',
            tags: ['맞춤설계', '작업물고정', '반복용접', '품질안정'],
            sites: ['판금 부품', '프레임 용접', '브라켓', '반복 생산', '소형·중형 워크'],
            badge: '맞춤 지그',
            highlight: true
        },
        'rotary-positioner': {
            id: 'rotary-positioner',
            name: '회전 포지셔너',
            position: '다면 용접·접근성 향상',
            description: '원형·곡면·다면 용접이 필요한 작업물을 회전시켜 로봇 접근성을 높이는 포지셔너 구성입니다. 맞춤 지그와 함께 TAWERS 셀에 연동합니다.',
            tags: ['회전', '다면용접', '접근성', '포지셔너'],
            sites: ['원형·곡면 부품', '다면 용접', '프레임', '대형 부품', '접근성 부족 워크'],
            badge: '회전 포지셔너'
        },
        'slide-unit': {
            id: 'slide-unit',
            name: '슬라이드 유닛',
            position: '대형 워크·장거리 이동',
            description: '대형 구조물, 긴 프레임, 넓은 작업범위가 필요한 현장에 검토하는 슬라이드 유닛 구성입니다. 포지셔너·지그와 함께 대형 워크 대응에 활용합니다.',
            tags: ['대형워크', '슬라이드', '장거리', '구조물'],
            sites: ['대형 프레임', '긴 구조물', '대형 지그', '넓은 작업셀', '산업기계 부품'],
            badge: '슬라이드·대형'
        },
        'integrated-setup': {
            id: 'integrated-setup',
            name: '클램핑·센서·로봇 연동 통합',
            position: '지그·포지셔너 + 로봇 연동 셀',
            description: '클램핑, 센서, 인터록, 로봇 연동 인터페이스까지 포함한 지그·포지셔너 통합 구성입니다. TAWERS 또는 턴키 자동화 셀과 함께 설계합니다.',
            tags: ['클램핑', '센서', '인터록', '로봇연동'],
            sites: ['자동화 셀', '반복 생산 라인', '품질 관리 필요 공정', '턴키 프로젝트'],
            badge: '통합 연동'
        }
    }
};

var JIG_CONFIG_CATALOG = {
    'custom-jig': {
        slug: 'custom-jig',
        name: '맞춤 지그',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '지그·포지셔너 자동화',
        series: '맞춤 지그',
        position: '작업물 고정·정밀 셋업',
        tagline: '작업물 형상과 용접 위치에 맞춰 설계·제작하는 맞춤 지그입니다. 반복 용접 품질과 셋업 시간 안정화를 위해 제안합니다.',
        configType: '작업물 맞춤형 용접 지그',
        targetProblem: '작업물 고정 불량, 셋업 편차, 반복 용접 품질 불안정',
        applicableWorkpieces: '판금, 프레임, 브라켓, 소형·중형 부품 (현장 조건에 따라 확인)',
        controlStructure: '클램핑·센서 연동 검토 (현장 조건에 따라 확인)',
        integration: 'TAWERS 로봇 · TM/TS 시리즈 · 맞춤 지그 · 턴키 셀',
        recommendedProcess: ['반복 프레임 용접', '브라켓·판금 용접', '소량 다품종 (지그 교체형)'],
        recommendedSites: ['판금 부품', '프레임 용접', '브라켓', '반복 생산', '소형·중형 워크'],
        recommendedCombinations: [
            'TM-1400 + 맞춤 지그',
            'TS-800 + 소형 맞춤 지그',
            'TAWERS + 지그 + S-AWP'
        ],
        similarComparison: [
            '회전 포지셔너는 다면·곡면 접근성 문제가 있을 때 함께 검토합니다.',
            '슬라이드 유닛은 대형·장거리 워크 중심 구성입니다.',
            '통합 연동 구성은 센서·인터록까지 포함한 셀 단위 설계입니다.'
        ],
        consultationCriteria: ['작업물 도면·사진', '용접 위치', '소재·두께', '월 생산량', '허용 오차', '현재 셋업 문제'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/jig-positioner/custom-jig/'
    },
    'rotary-positioner': {
        slug: 'rotary-positioner',
        name: '회전 포지셔너',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '지그·포지셔너 자동화',
        series: '회전 포지셔너',
        position: '다면 용접·접근성 향상',
        tagline: '원형·곡면·다면 용접이 필요한 작업물을 회전시켜 로봇 접근성을 높이는 포지셔너 구성입니다.',
        configType: '회전형 포지셔너 + 맞춤 지그',
        targetProblem: '다면 용접 접근성 부족, 작업자 repositioning, 긴 셋업 시간',
        applicableWorkpieces: '원형·곡면·다면 용접 부품 (현장 조건에 따라 확인)',
        controlStructure: '로봇·포지셔너 연동, 회전 각도·인터록 (현장 조건에 따라 확인)',
        integration: 'TAWERS · 회전 포지셔너 · 맞춤 지그 · 로봇 연동',
        recommendedProcess: ['다면 프레임 용접', '원형 부품', '곡면 접근 용접', '반복 회전 공정'],
        recommendedSites: ['원형·곡면 부품', '다면 용접', '프레임', '접근성 부족 워크'],
        recommendedCombinations: [
            'TM-1400 + 회전 포지셔너 + 맞춤 지그',
            'TL-1800 + 포지셔너 (대형 워크)',
            'TAWERS + 포지셔너 + 턴키 셀'
        ],
        similarComparison: [
            '맞춤 지그만으로 해결되는 고정·셋업 문제에는 지그 단독 구성이 적합합니다.',
            '슬라이드 유닛은 직선 이동·대형 워크 중심입니다.'
        ],
        cautionNote: '회전 반경, 하중, 인터록·안전 범위는 작업물과 셀 조건에 따라 상담 시 확인이 필요합니다.',
        consultationCriteria: ['작업물 도면·사진', '용접 면·각도', '중량·크기', '회전 필요 범위', '생산량'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/jig-positioner/rotary-positioner/'
    },
    'slide-unit': {
        slug: 'slide-unit',
        name: '슬라이드 유닛',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '지그·포지셔너 자동화',
        series: '슬라이드 유닛',
        position: '대형 워크·장거리 이동',
        tagline: '대형 구조물, 긴 프레임, 넓은 작업범위가 필요한 현장에 검토하는 슬라이드 유닛 구성입니다.',
        configType: '슬라이드 유닛 + 지그/포지셔너',
        targetProblem: '대형 워크 접근 범위 부족, 긴 용접선 repositioning, 넓은 셀 내 이동 필요',
        applicableWorkpieces: '대형 프레임, 긴 구조물, 산업기계 부품 (현장 조건에 따라 확인)',
        controlStructure: '슬라이드 이동 + 로봇·포지셔너 연동 (현장 조건에 따라 확인)',
        integration: 'TL 시리즈 · 슬라이드 · 포지셔너 · 대형 지그',
        recommendedProcess: ['대형 프레임 용접', '긴 구조물', '넓은 작업셀 내 이동 용접'],
        recommendedSites: ['대형 프레임', '긴 구조물', '대형 지그', '산업기계 부품'],
        recommendedCombinations: [
            'TL-2000 + 슬라이드 + 포지셔너',
            '고출력 구성 + 대형 지그/슬라이드',
            '턴키 셀 + 슬라이드 유닛'
        ],
        similarComparison: [
            '회전 포지셔너는 다면·회전 중심, 슬라이드는 직선·대형 이동 중심입니다.',
            '맞춤 지그는 고정·셋업 정밀도 문제 해결에 더 직접적입니다.'
        ],
        consultationCriteria: ['작업물 도면·사진', '크기·중량', '이동 거리', '용접 위치', '셀 공간', '생산량'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/jig-positioner/slide-unit/'
    },
    'integrated-setup': {
        slug: 'integrated-setup',
        name: '클램핑·센서·로봇 연동 통합',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '지그·포지셔너 자동화',
        series: '클램핑·센서·로봇 연동 통합',
        position: '지그·포지셔너 + 로봇 연동 셀',
        tagline: '클램핑, 센서, 인터록, 로봇 연동 인터페이스까지 포함한 지그·포지셔너 통합 구성입니다.',
        configType: '지그·포지셔너 + 센서·인터록 + 로봇 연동',
        targetProblem: '작업물 미감지, 셋업 오류, 안전 interlock 부족, 로봇-지그 연동 미비',
        applicableWorkpieces: '반복 생산 부품, 자동화 라인 (현장 조건에 따라 확인)',
        controlStructure: '클램핑 · 센서 · 인터록 · TAWERS/로봇 연동',
        integration: 'TAWERS · 지그 · 포지셔너 · 센서 · 안전설비 · 턴키 셀',
        recommendedProcess: ['반복 자동화 라인', '품질·안전 interlock 필요 공정', '턴키 셀 구축'],
        recommendedSites: ['자동화 셀', '반복 생산 라인', '품질 관리 필요 공정', '턴키 프로젝트'],
        recommendedCombinations: [
            'TAWERS + 맞춤 지그 + 센서 interlock',
            '턴키 자동화 셀 + 포지셔너 + 지그',
            'TAWERS + 포지셔너 + 스마트팩토리 연동 검토'
        ],
        similarComparison: [
            '턴키 자동화 셀 페이지에서 셀 전체 범위(펜스·시운전 등)를 확인할 수 있습니다.',
            '맞춤 지그·포지셔너 단독 구성은 장비 중심, 통합 구성은 연동·안전 중심입니다.'
        ],
        consultationCriteria: ['작업물 도면', '자동화 수준 목표', '안전·인터록 요구', '생산량', '기존 설비 연동', '현장 layout'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/jig-positioner/integrated-setup/'
    }
};

function getJigConfig(slug) {
    return JIG_CONFIG_CATALOG[slug] || null;
}

function getJigPositionerHierarchy() {
    return JIG_POSITIONER_HIERARCHY;
}

function buildJigLineupCardsFromData() {
    var h = JIG_POSITIONER_HIERARCHY;
    var order = ['custom-jig', 'rotary-positioner', 'slide-unit', 'integrated-setup'];
    return order.map(function (key) {
        var c = h.configs[key];
        var cat = JIG_CONFIG_CATALOG[key];
        return {
            name: c.name,
            badge: c.badge,
            desc: c.description,
            tags: c.tags,
            models: c.name,
            problem: cat.targetProblem,
            detailLinks: [{ name: c.name, url: cat.detailUrl }],
            highlight: !!c.highlight,
            position: c.position
        };
    });
}

function buildJigConfigDetailContent(slug) {
    var m = JIG_CONFIG_CATALOG[slug];
    if (!m) return null;
    var h = JIG_POSITIONER_HIERARCHY;
    var sitesSummary = m.recommendedSites.slice(0, 3).join(' · ');
    return {
        pageType: 'jig-config',
        parentSystem: {
            label: '상위 시스템',
            text: m.parentSystem,
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        hierarchy: [
            { label: '상위 구성', text: m.parentLineup, link: h.lineup.url },
            { label: '유형', text: m.series }
        ],
        heroBadge: m.parentLineup,
        heroTitle: m.name,
        heroPosition: m.position,
        heroDescription: m.tagline,
        backLink: { url: h.lineup.url, label: '지그·포지셔너 자동화 보기' },
        cautionNote: m.cautionNote || null,
        summaryCards: [
            { title: '해결 문제', desc: m.targetProblem.split(',')[0] + ' 등' },
            { title: '구성 유형', desc: m.configType },
            { title: '적용 작업물', desc: m.applicableWorkpieces.split(',')[0] + ' 등' },
            { title: '추천 현장', desc: sitesSummary }
        ],
        specifications: {
            '구성 유형': m.configType,
            '해결 문제': m.targetProblem,
            '적용 작업물': m.applicableWorkpieces,
            '제어·연동': m.controlStructure,
            'TAWERS 연동': m.integration,
            '추천 공정': m.recommendedProcess.join(' · '),
            '세부 사양': '현장 조건에 따라 상담 시 확인',
            '견적 방식': m.quoteMethod
        },
        applicationFields: m.recommendedSites,
        recommendedCombinations: m.recommendedCombinations,
        similarComparison: m.similarComparison,
        consultationCriteria: m.consultationCriteria,
        cta: {
            title: '이 지그·포지셔너 구성이 현장에 맞는지 작업물 기준으로 검토해드립니다.',
            description: '작업물 도면, 용접 위치, 생산량, 현재 셋업 문제를 알려주시면 맞춤 지그·포지셔너 구성의 적용 가능 여부를 함께 검토해드립니다.',
            lineupBtn: true
        }
    };
}

function buildJigLineupDetailContent() {
    var h = JIG_POSITIONER_HIERARCHY;
    return {
        pageType: 'lineup',
        parentSystem: {
            label: '상위 시스템',
            text: 'TAWERS 용접로봇 시스템의 주변 자동화 구성',
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        parentNote: 'TAWERS 용접로봇 시스템과 함께 설계·연동하는 주변 자동화 설비입니다.',
        heroBadge: '맞춤 자동화 구성',
        heroTitle: h.lineup.name,
        heroDescription: h.lineup.description,
        imageHint: '회전 포지셔너 · 작업물 고정 지그',
        lineupSectionTitle: '구성 비교 — 작업물·공정에 맞게 선택',
        lineupSectionDesc: '맞춤 지그, 회전 포지셔너, 슬라이드 유닛, 통합 연동 — TAWERS 시스템 안에서 작업물 형상과 용접 접근성에 맞는 지그·포지셔너를 선택합니다.',
        summaryCards: [
            { title: '작업물 고정', desc: '용접 품질을 위한 정밀 지그' },
            { title: '회전·위치 제어', desc: '포지셔너·슬라이드로 접근성 향상' },
            { title: '현장 맞춤 설계', desc: '도면 기반 설계·제작' },
            { title: '로봇 연동', desc: 'TAWERS·턴키 셀과 통합' }
        ],
        selectionGuide: [
            { condition: '작업물 고정·셋업 편차 문제', recommendation: '맞춤 지그' },
            { condition: '다면 용접, 접근성 부족', recommendation: '회전 포지셔너 + 맞춤 지그' },
            { condition: '대형 구조물, 긴 워크', recommendation: '슬라이드 유닛 + 포지셔너' },
            { condition: '센서·인터록·로봇 연동 필요', recommendation: '클램핑·센서·로봇 연동 통합' },
            { condition: '셀 전체 일괄 구축', recommendation: '턴키 자동화 셀과 함께 검토' }
        ],
        applicationFields: ['프레임 용접', '원형·곡면 작업물', '다면 용접', '대형 구조물', '반복 생산 라인'],
        problems: [
            '작업물 고정 불량으로 용접 품질 편차',
            '다면 용접 시 접근성 부족',
            '작업자마다 셋업 시간·품질 차이',
            '로봇 도입 후 지그·포지셔너 미구비',
            '대형 워크 repositioning 부담'
        ],
        specifications: {
            '제공 범위': '지그·포지셔너 설계·제작·로봇 연동',
            '설계 기준': '작업물 형상, 용접 위치, 생산 수량, 접근성',
            '연계': 'TAWERS, 턴키 자동화 셀, 고출력 구성',
            '세부 치수·하중': '현장 조건에 따라 상담 시 확인',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['작업물 도면·사진 확인', '용접 위치·접근성 검토', '지그·포지셔너 유형 선정', '설계·제작', 'TAWERS/로봇 연동·시운전', '양산 지원'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '상위 통합 시스템' },
            { slug: 'turnkey-robot-automation-cell', name: '턴키 자동화 셀', desc: '통합 셀 구축' },
            { slug: 'welding-robot-manipulator-lineup', name: '로봇 매니퓰레이터 라인업', desc: '로봇 모델 선택' }
        ],
        cta: {
            title: '작업물 도면만 있어도 상담 가능합니다',
            description: '작업물 형상, 용접 위치, 월 생산량을 알려주시면 지그·포지셔너 구성을 제안드립니다.'
        }
    };
}
