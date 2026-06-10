// TAWERS → 턴키 로봇 자동화 셀 → 구성별 계층 데이터
var TURNKEY_HIERARCHY = {
    parentSystem: {
        name: 'TAWERS 용접로봇 시스템',
        slug: 'tawers-welding-robot-system',
        url: '/products/tawers-welding-robot-system/'
    },
    lineup: {
        name: '턴키 로봇 자동화 셀',
        slug: 'turnkey-robot-automation-cell',
        url: '/products/turnkey-robot-automation-cell/',
        description: '로봇만 공급하는 것이 아니라 작업물, 지그, 안전펜스, 컨트롤러, 시운전까지 현장에 맞춰 통합 구성하는 TAWERS 기반 자동화 셀 솔루션입니다. 설계·제작·설치·시운전·교육을 하나의 프로젝트로 제안합니다.'
    },
    configs: {
        'standard-welding-cell': {
            id: 'standard-welding-cell',
            name: '표준 용접 자동화 셀',
            position: '신규 라인·표준 셀 구축',
            description: 'TAWERS 로봇 시스템, 맞춤 지그, 안전펜스, 컨트롤러를 포함한 표준 용접 자동화 셀입니다. 신규 용접 자동화 라인 구축에 가장 많이 검토하는 턴키 구성입니다.',
            tags: ['신규라인', 'TAWERS', '지그', '안전펜스'],
            sites: ['신규 자동화 라인', '소형·중형 셀', '반복 용접 공정', 'PoC·파일럿 라인'],
            badge: '표준 셀',
            highlight: true
        },
        'retrofit-cell': {
            id: 'retrofit-cell',
            name: '기존 공정 개조 셀',
            position: '부분 자동화·공정 개조',
            description: '기존 용접 공정에 로봇을 추가하거나, 안전·인터록을 보완하는 부분 셀 구성입니다. 현장 layout과 기존 설비를 고려해 단계적으로 자동화를 확장합니다.',
            tags: ['공정개조', '부분셀', '안전보완', '단계도입'],
            sites: ['기존 공정 개조', '로봇 추가 도입', '안전·인터록 보완', '다품종 셋업'],
            badge: '공정 개조'
        },
        'large-turnkey-cell': {
            id: 'large-turnkey-cell',
            name: '대형·고출력 턴키 셀',
            position: '대형 워크·고출력 통합 셀',
            description: 'TL 시리즈, WGH 고출력 전원, 포지셔너, 대형 지그, 안전설비를 포함한 대형·고출력 턴키 자동화 셀입니다. 중후판·대형 구조물 현장에 통합 제안합니다.',
            tags: ['대형워크', '고출력', 'TL+WGH', '포지셔너'],
            sites: ['대형 워크 셀', '중후판 라인', '고출력 자동화', '건설·산업기계 프레임'],
            badge: '대형·고출력'
        },
        'full-service-delivery': {
            id: 'full-service-delivery',
            name: '시운전·교육 포함 One-Stop',
            position: '설계·납품·시운전·교육 일괄',
            description: '셀 설계·제작·설치뿐 아니라 시운전, 티칭, 작업자 교육, 인수까지 포함하는 One-Stop 턴키 납품 패키지입니다. 빠른 가동과 안정적 양산 전환을 목표로 합니다.',
            tags: ['One-Stop', '시운전', '교육', '인수'],
            sites: ['신규 라인 가동', '벤더 분리 발주 회피', '시운전·교육 필요', '납기 중심 프로젝트'],
            badge: 'Full Service'
        }
    }
};

var TURNKEY_CONFIG_CATALOG = {
    'standard-welding-cell': {
        slug: 'standard-welding-cell',
        name: '표준 용접 자동화 셀',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '턴키 로봇 자동화 셀',
        series: '표준 용접 자동화 셀',
        position: '신규 라인·표준 셀 구축',
        tagline: 'TAWERS 로봇 시스템, 맞춤 지그, 안전펜스, 컨트롤러를 포함한 표준 용접 자동화 셀입니다. 신규 라인 구축에 가장 많이 검토하는 턴키 구성입니다.',
        configType: 'TAWERS 기반 표준 용접 자동화 셀',
        targetProblem: '로봇만 도입해 주변 설비 미비, 벤더별 분리 발주로 일정 지연, 안전설비 미구비',
        applicableWorkpieces: '판금, 프레임, 브라켓, 소형·중형 부품 (현장 조건에 따라 확인)',
        cellScope: 'TAWERS · 로봇 · 맞춤 지그 · 안전펜스 · 컨트롤러 · 인터록',
        integration: 'TAWERS · TM/TS 시리즈 · 맞춤 지그 · 안전펜스 · 용접 공법 · 시운전',
        recommendedProcess: ['신규 용접 자동화 라인', '반복 프레임·브라켓 용접', 'PoC·파일럿 라인'],
        recommendedSites: ['신규 자동화 라인', '소형·중형 셀', '반복 용접 공정', 'PoC·파일럿 라인'],
        recommendedCombinations: [
            'TM-1400 + TAWERS + 맞춤 지그 + 펜스',
            'TS-800 + 소형 지그 + 안전펜스',
            'TAWERS + S-AWP + 표준 턴키 셀'
        ],
        similarComparison: [
            '기존 공정 개조 셀은 현장 layout·기존 설비를 고려한 부분 자동화에 적합합니다.',
            '대형·고출력 턴키 셀은 TL + WGH + 포지셔너 중심의 대형 워크 구성입니다.',
            '지그·포지셔너 페이지에서 작업물 고정·회전 장비 단독 구성도 확인할 수 있습니다.'
        ],
        consultationCriteria: ['작업물 도면·사진', '용접 위치', '셀 설치 공간', '월 생산량', '안전·인터록 요구', '납기 목표'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/turnkey/standard-welding-cell/'
    },
    'retrofit-cell': {
        slug: 'retrofit-cell',
        name: '기존 공정 개조 셀',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '턴키 로봇 자동화 셀',
        series: '기존 공정 개조 셀',
        position: '부분 자동화·공정 개조',
        tagline: '기존 용접 공정에 로봇을 추가하거나, 안전·인터록을 보완하는 부분 셀 구성입니다. 현장 layout과 기존 설비를 고려해 단계적으로 자동화를 확장합니다.',
        configType: '기존 공정 개조·부분 자동화 셀',
        targetProblem: '로봇 추가 후 안전·인터록 미비, 기존 layout 제약, 단계적 자동화 필요',
        applicableWorkpieces: '기존 공정 부품, 다품종 워크 (현장 조건에 따라 확인)',
        cellScope: '로봇 추가 · 지그 보완 · 안전펜스·인터록 · 기존 설비 연동',
        integration: 'TAWERS · 기존 공정 · 부분 지그 · 안전 보완 · 단계적 확장',
        recommendedProcess: ['기존 수동 용접 → 로봇 전환', '안전·인터록 보완', '다품종 셋업 개선'],
        recommendedSites: ['기존 공정 개조', '로봇 추가 도입', '안전·인터록 보완', '다품종 셋업'],
        recommendedCombinations: [
            'TM-1100 + 기존 공정 연동 + 안전펜스',
            'TAWERS + 지그 보완 + 인터록',
            '부분 셀 + 이후 확장 계획'
        ],
        similarComparison: [
            '표준 용접 자동화 셀은 신규 라인·풀 셀 구축 중심입니다.',
            '시운전·교육 포함 One-Stop은 납품·가동·교육까지 일괄 범위를 다룹니다.'
        ],
        cautionNote: '기존 설비·layout·전기·안전 조건은 현장별로 확인이 필요합니다. 임의 치수·용량 수치는 표기하지 않습니다.',
        consultationCriteria: ['현장 layout·사진', '기존 공정 설명', '로봇 도입 범위', '안전·인터록 요구', '다품종·셋업 현황', '확장 계획'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/turnkey/retrofit-cell/'
    },
    'large-turnkey-cell': {
        slug: 'large-turnkey-cell',
        name: '대형·고출력 턴키 셀',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '턴키 로봇 자동화 셀',
        series: '대형·고출력 턴키 셀',
        position: '대형 워크·고출력 통합 셀',
        tagline: 'TL 시리즈, WGH 고출력 전원, 포지셔너, 대형 지그, 안전설비를 포함한 대형·고출력 턴키 자동화 셀입니다.',
        configType: 'TAWERS 대형·고출력 통합 자동화 셀',
        targetProblem: '대형 워크 접근·출력 동시 요구, 로봇·전원·지그·안전설비 분리 발주, 중후판 셀 일괄 구축 필요',
        applicableWorkpieces: '대형 프레임, 구조물, 중후판 부품 (현장 조건에 따라 확인)',
        cellScope: 'TL 시리즈 · WGH · 포지셔너 · 대형 지그 · 슬라이드 · 안전펜스 · 시운전',
        integration: 'TL · WGH · 포지셔너 · 대형 지그 · 안전설비 · TAWERS · 고출력 공법',
        recommendedProcess: ['대형 프레임 용접', '중후판 라인 구축', '고출력 자동화 셀', '턴키 납품'],
        recommendedSites: ['대형 워크 셀', '중후판 라인', '고출력 자동화', '건설·산업기계 프레임'],
        recommendedCombinations: [
            'TL-2000 + WGH + 포지셔너 + 턴키 셀',
            '고출력 구성 + 대형 지그 + 안전펜스',
            'TL + WGH + S-AWP + 턴키 납품'
        ],
        similarComparison: [
            '고출력 용접 시스템 페이지는 TL + WGH 장비 조합 중심으로 검토합니다.',
            '표준 용접 자동화 셀은 소형·중형 워크·신규 라인 중심입니다.',
            '지그·포지셔너·슬라이드 유닛은 셀 내 주변 설비 구성요소입니다.'
        ],
        consultationCriteria: ['작업물 도면·사진', '크기·중량', '소재·두께', '셀 설치 공간', '포지셔너·슬라이드 필요', '납기·시운전 범위'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/turnkey/large-turnkey-cell/'
    },
    'full-service-delivery': {
        slug: 'full-service-delivery',
        name: '시운전·교육 포함 One-Stop',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '턴키 로봇 자동화 셀',
        series: '시운전·교육 포함 One-Stop',
        position: '설계·납품·시운전·교육 일괄',
        tagline: '셀 설계·제작·설치뿐 아니라 시운전, 티칭, 작업자 교육, 인수까지 포함하는 One-Stop 턴키 납품 패키지입니다.',
        configType: '설계·제작·설치·시운전·교육 One-Stop 턴키',
        targetProblem: '시운전·교육 미흡, 벤더별 분리 발주로 일정 지연, 가동 후 품질·운영 불안',
        applicableWorkpieces: '턴키 셀 대상 작업물 전반 (현장 조건에 따라 확인)',
        cellScope: '설계 · 제작 · 설치 · 배선 · 시운전 · 티칭 · 교육 · 인수',
        integration: 'TAWERS · 지그·포지셔너 · 안전설비 · 공법 · 시운전 · 현장 교육',
        recommendedProcess: ['신규 라인 가동', '양산 전환', '운영자·정비 교육', '인수·사후 지원'],
        recommendedSites: ['신규 라인 가동', '벤더 분리 발주 회피', '시운전·교육 필요', '납기 중심 프로젝트'],
        recommendedCombinations: [
            '표준 턴키 셀 + 시운전·교육 패키지',
            '대형 턴키 셀 + 현장 교육·인수',
            'TAWERS + 지그 + One-Stop 납품'
        ],
        similarComparison: [
            '표준·대형 셀 구성은 장비·layout 중심, One-Stop은 납품·가동·교육 범위 중심입니다.',
            '스마트팩토리 연동은 가동 이후 데이터·모니터링 확장 단계에서 검토합니다.'
        ],
        consultationCriteria: ['작업물·공정 정보', '납기 목표', '시운전·교육 범위', '운영 인력 현황', '인수 기준', '사후 지원 요구'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/turnkey/full-service-delivery/'
    }
};

function getTurnkeyConfig(slug) {
    return TURNKEY_CONFIG_CATALOG[slug] || null;
}

function getTurnkeyHierarchy() {
    return TURNKEY_HIERARCHY;
}

function buildTurnkeyLineupCardsFromData() {
    var h = TURNKEY_HIERARCHY;
    var order = ['standard-welding-cell', 'retrofit-cell', 'large-turnkey-cell'];
    return order.map(function (key) {
        var c = h.configs[key];
        var cat = TURNKEY_CONFIG_CATALOG[key];
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

function buildTurnkeyConfigDetailContent(slug) {
    var m = TURNKEY_CONFIG_CATALOG[slug];
    if (!m) return null;
    var h = TURNKEY_HIERARCHY;
    var sitesSummary = m.recommendedSites.slice(0, 3).join(' · ');
    return {
        pageType: 'turnkey-config',
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
        backLink: { url: h.lineup.url, label: '턴키 로봇 자동화 셀 보기' },
        cautionNote: m.cautionNote || null,
        summaryCards: [
            { title: '해결 문제', desc: m.targetProblem.split(',')[0] + ' 등' },
            { title: '셀 범위', desc: m.cellScope.split(' · ')[0] + ' 등' },
            { title: '적용 작업물', desc: m.applicableWorkpieces.split(',')[0] + ' 등' },
            { title: '추천 현장', desc: sitesSummary }
        ],
        specifications: {
            '구성 유형': m.configType,
            '해결 문제': m.targetProblem,
            '적용 작업물': m.applicableWorkpieces,
            '셀 제공 범위': m.cellScope,
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
            title: '이 턴키 셀 구성이 현장에 맞는지 공정·작업물 기준으로 검토해드립니다.',
            description: '작업물, 공정, 월 생산량, 셀 공간, 현재 이슈를 알려주시면 턴키 자동화 셀의 적용 가능 여부와 범위를 함께 검토해드립니다.',
            lineupBtn: true
        }
    };
}

function buildTurnkeyLineupDetailContent() {
    var h = TURNKEY_HIERARCHY;
    return {
        pageType: 'lineup',
        parentSystem: {
            label: '상위 시스템',
            text: 'TAWERS 기반 통합 자동화 셀 구성',
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        parentNote: 'TAWERS 용접로봇 시스템을 중심으로 로봇, 지그, 안전펜스, 컨트롤러, 시운전까지 하나의 프로젝트로 제안하는 주변 자동화 솔루션입니다.',
        heroBadge: '설계·설치·시운전',
        heroTitle: h.lineup.name,
        heroDescription: h.lineup.description,
        imageHint: '안전펜스 · 로봇 · 지그 · 통합 셀',
        lineupSectionTitle: '구성 비교 — 현장·공정에 맞게 선택',
        lineupSectionDesc: '표준 셀, 공정 개조, 대형·고출력 — TAWERS 시스템 안에서 현장 조건과 납기·가동 목표에 맞는 턴키 셀을 선택합니다. 시운전·교육은 프로젝트 범위에 포함됩니다.',
        summaryCards: [
            { title: '프로젝트 제안', desc: '상담→설계→제작→설치→시운전' },
            { title: '현장 맞춤', desc: '공정·작업물 기준 셀 설계' },
            { title: '안전·인터록', desc: '펜스·안전설비 포함' },
            { title: '빠른 가동', desc: '시운전·교육까지 지원' }
        ],
        selectionGuide: [
            { condition: '신규 용접 자동화 라인 구축', recommendation: '표준 용접 자동화 셀' },
            { condition: '기존 공정에 로봇만 추가', recommendation: '기존 공정 개조 셀' },
            { condition: '대형·중후판 워크 일괄 구축', recommendation: '대형·고출력 턴키 셀' },
            { condition: '벤더 분리 발주로 일정 지연', recommendation: '턴키 프로젝트 일괄 제안 검토' },
            { condition: '시운전·교육까지 필요', recommendation: '프로젝트 범위에 시운전·교육 포함' }
        ],
        applicationFields: ['신규 자동화 라인', '기존 공정 개조', '소형·중형 셀', '대형 워크 셀', '다품종 셋업', 'PoC·파일럿 라인'],
        problems: [
            '로봇만 도입해 주변 설비 미비',
            '벤더별 분리 발주로 일정 지연',
            '시운전·교육 미흡',
            '안전설비·인터록 미구비',
            '가동 후 품질·운영 불안'
        ],
        specifications: {
            '제공 범위': '설계·제작·설치·시운전·교육',
            '구성': '로봇, 지그, 펜스, 컨트롤, 공법',
            '연계': 'TAWERS, 지그·포지셔너, 고출력, 스마트팩토리',
            '세부 치수·용량': '현장 조건에 따라 상담 시 확인',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['현장·공정 분석', '셀 레이아웃 설계', '장비·지그 제작', '설치·배선', '시운전·티칭', '교육·인수'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '핵심 로봇 시스템' },
            { slug: 'jig-positioner-automation', name: '지그·포지셔너', desc: '주변 설비' },
            { slug: 'high-power-welding-system', name: '고출력 용접 시스템', desc: '대형·고출력 확장' }
        ],
        cta: {
            title: '턴키 자동화 셀 상담',
            description: '작업물, 공정, 월 생산량, 현재 이슈를 알려주시면 통합 자동화 셀을 제안드립니다.'
        }
    };
}
