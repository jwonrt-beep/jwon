// TAWERS 중심 계층형 제품군 구조
var PRODUCT_HIERARCHY = {
    parent: {
        id: 'tawers-welding-robot-system',
        slug: 'tawers-welding-robot-system',
        type: 'parent-system',
        sectionLabel: '제이원로보틱스의 핵심 용접 자동화 시스템',
        name: 'TAWERS 용접로봇 시스템',
        badge: '상위 통합 시스템',
        description: 'TAWERS 용접로봇 시스템은 로봇팔, 용접전원, 컨트롤러, 토치, 와이어 송급, 용접 공법, 지그·포지셔너를 현장 조건에 맞춰 하나의 자동화 시스템으로 구성하는 제이원로보틱스의 핵심 용접 자동화 플랫폼입니다.',
        highlight: '로봇만 선택하는 것이 아니라, 작업물과 용접 조건에 맞는 전체 시스템을 함께 설계합니다.',
        imageHint: '로봇팔 · 용접전원 · 컨트롤러 · 토치 통합 시스템',
        filterTag: 'tawers',
        url: '/products/tawers-welding-robot-system/',
        quoteProduct: 'TAWERS 용접로봇 시스템'
    },
    modulesSection: {
        title: 'TAWERS 시스템은 아래 구성으로 완성됩니다',
        description: '작업물 크기, 소재, 두께, 용접 품질 문제, 생산량에 따라 로봇 라인업과 용접 공법, 지그·포지셔너, 스마트팩토리 연동까지 함께 구성합니다.',
        label: 'TAWERS 구성 모듈'
    },
    modules: [
        {
            id: 'welding-robot-manipulator-lineup',
            name: '용접 로봇 매니퓰레이터 라인업',
            badge: '로봇팔 선택',
            description: 'TS, TM, TL 시리즈 중 작업반경과 설치 공간에 맞춰 로봇팔을 선택합니다.',
            tags: ['TS', 'TM', 'TL'],
            btn: '로봇 라인업 보기',
            url: '/products/welding-robot-manipulator-lineup/',
            filterTag: 'lineup',
            type: 'module',
            parent: 'tawers-welding-robot-system'
        },
        {
            id: 'welding-power-controller',
            name: '용접전원·컨트롤러 구성',
            badge: '통합 제어',
            description: '용접 조건과 출력에 맞춰 WG, WGH 계열 등 용접전원과 컨트롤러 구성을 검토합니다.',
            tags: ['WG', 'WGH', '통합제어'],
            btn: '시스템 구성 보기',
            url: '/products/tawers-welding-robot-system/#architecture',
            filterTag: 'power',
            type: 'module',
            parent: 'tawers-welding-robot-system'
        },
        {
            id: 'welding-process-software',
            name: '용접 공법 소프트웨어',
            badge: '품질 문제 해결',
            description: '스패터, 번스루, 블로홀, 고속 용접 등 현장 문제에 맞춰 S-AWP, HBC, Zi-Tech 등을 적용합니다.',
            tags: ['S-AWP', 'HBC', 'Zi-Tech'],
            btn: '공법 보기',
            url: '/products/welding-process-software/',
            filterTag: 'process',
            type: 'module',
            parent: 'tawers-welding-robot-system'
        },
        {
            id: 'high-power-welding-system',
            name: '고출력 용접 시스템',
            badge: '중후판·고전류',
            description: '중후판, 대형 구조물, 고전류 용접이 필요한 현장에는 WGH 계열 고출력 구성을 함께 검토합니다.',
            tags: ['WGH', '중후판', '고출력'],
            btn: '고출력 구성 보기',
            url: '/products/high-power-welding-system/',
            filterTag: 'highpower',
            type: 'module',
            parent: 'tawers-welding-robot-system'
        },
        {
            id: 'jig-positioner-automation',
            name: '지그·포지셔너 자동화',
            badge: '작업물 고정·회전',
            description: '작업물 고정, 회전, 위치 제어를 위한 지그와 포지셔너를 로봇 시스템과 함께 구성합니다.',
            tags: ['지그', '포지셔너', '맞춤설계'],
            btn: '지그·포지셔너 보기',
            url: '/products/jig-positioner-automation/',
            filterTag: 'jig',
            type: 'module',
            parent: 'tawers-welding-robot-system'
        },
        {
            id: 'turnkey-robot-automation-cell',
            name: '턴키 로봇 자동화 셀',
            badge: '설계·설치·시운전',
            description: '로봇, 지그, 안전펜스, 컨트롤러, 시운전까지 현장에 맞춰 하나의 자동화 셀로 구성합니다.',
            tags: ['턴키', '자동화셀', '현장맞춤'],
            btn: '턴키셀 보기',
            url: '/products/turnkey-robot-automation-cell/',
            filterTag: 'turnkey',
            type: 'module',
            parent: 'tawers-welding-robot-system'
        }
    ],
    extensionSection: {
        title: '자동화 이후의 데이터 연동까지 확장합니다',
        label: '확장 솔루션'
    },
    extension: {
        id: 'smart-factory-integration',
        name: '스마트팩토리 연동 솔루션',
        badge: '생산 데이터 연동',
        description: '로봇 용접 설비와 생산 데이터를 연동해 공정 모니터링, 작업 이력, 품질 데이터 관리까지 확장할 수 있습니다.',
        tags: ['데이터연동', '공정관리', '품질관리'],
        btn: '스마트팩토리 보기',
        url: '/products/smart-factory-integration/',
        filterTag: 'smartfactory',
        type: 'extension',
        parent: 'tawers-welding-robot-system'
    },
    filters: [
        { id: 'all', label: '전체' },
        { id: 'tawers', label: 'TAWERS 통합 시스템' },
        { id: 'lineup', label: '로봇 라인업' },
        { id: 'process', label: '용접 공법' },
        { id: 'highpower', label: '고출력 구성' },
        { id: 'jig', label: '지그·포지셔너' },
        { id: 'turnkey', label: '턴키셀' },
        { id: 'smartfactory', label: '스마트팩토리' }
    ]
};

var ROBOT_MODEL_CATALOG = {
    'ts-800': { name: 'TS-800', series: 'TS 시리즈', seriesSlug: 'ts-series', parent: 'welding-robot-manipulator-lineup', desc: '소형 워크와 좁은 설치 공간에 적합한 컴팩트 아크 용접 로봇', payload: '8kg급', reach: '소형 작업반경' },
    'ts-950': { name: 'TS-950', series: 'TS 시리즈', seriesSlug: 'ts-series', parent: 'welding-robot-manipulator-lineup', desc: '소형 부품 용접에 적합한 공간 절약형 로봇', payload: '9.5kg급', reach: '소형~중형 작업반경' },
    'tm-1100': { name: 'TM-1100', series: 'TM 시리즈', seriesSlug: 'tm-series', parent: 'welding-robot-manipulator-lineup', desc: '표준 범용형 아크 용접 로봇', payload: '11kg급', reach: '표준 작업반경' },
    'tm-1400': { name: 'TM-1400', series: 'TM 시리즈', seriesSlug: 'tm-series', parent: 'welding-robot-manipulator-lineup', desc: '일반 제조업 프레임 용접에 많이 선택되는 표준형', payload: '14kg급', reach: '표준 작업반경' },
    'tm-1600': { name: 'TM-1600', series: 'TM 시리즈', seriesSlug: 'tm-series', parent: 'welding-robot-manipulator-lineup', desc: '중형 프레임과 범용 용접에 적합한 표준형', payload: '16kg급', reach: '중형 작업반경' },
    'tm-1800': { name: 'TM-1800', series: 'TM 시리즈', seriesSlug: 'tm-series', parent: 'welding-robot-manipulator-lineup', desc: '중대형 프레임 용접에 적합한 표준형', payload: '18kg급', reach: '중대형 작업반경' },
    'tm-2000': { name: 'TM-2000', series: 'TM 시리즈', seriesSlug: 'tm-series', parent: 'welding-robot-manipulator-lineup', desc: '대형 프레임 경계의 범용 표준형 로봇', payload: '20kg급', reach: '대형 작업반경' },
    'tl-1800': { name: 'TL-1800', series: 'TL 시리즈', seriesSlug: 'tl-series', parent: 'welding-robot-manipulator-lineup', desc: '긴 작업반경이 필요한 대형 구조물 용접용 롱암 로봇', payload: '18kg급', reach: '롱암 작업반경' },
    'tl-2000': { name: 'TL-2000', series: 'TL 시리즈', seriesSlug: 'tl-series', parent: 'welding-robot-manipulator-lineup', desc: '대형 프레임·산업기계 부품용 대형 워크 대응 로봇', payload: '20kg급', reach: '초장축 작업반경' }
};

function getRobotModel(slug) {
    return ROBOT_MODEL_CATALOG[slug] || null;
}
