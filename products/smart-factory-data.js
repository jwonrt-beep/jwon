// TAWERS → 스마트팩토리 연동 솔루션 → 구성별 계층 데이터
var SMART_FACTORY_HIERARCHY = {
    parentSystem: {
        name: 'TAWERS 용접로봇 시스템',
        slug: 'tawers-welding-robot-system',
        url: '/products/tawers-welding-robot-system/'
    },
    lineup: {
        name: '스마트팩토리 연동 솔루션',
        slug: 'smart-factory-integration',
        url: '/products/smart-factory-integration/',
        description: '로봇 용접 설비와 생산 데이터를 연동해 공정 모니터링, 작업 이력, 품질 데이터 관리까지 확장할 수 있는 TAWERS 기반 스마트팩토리형 자동화 솔루션입니다. 기존 설비부터 단계적으로 구축합니다.'
    },
    configs: {
        'quality-data-log': {
            id: 'quality-data-log',
            name: '용접 품질 데이터 수집',
            position: '품질·용접 이력 데이터 축적',
            description: 'TAWERS 용접 설비에서 품질·용접 관련 데이터를 수집·저장하는 구성입니다. 용접 품질 데이터가 남지 않는 문제를 해결하고, 공정 개선·품질 추적의 기반을 마련합니다.',
            tags: ['품질데이터', '용접이력', '데이터수집', '품질추적'],
            sites: ['용접 자동화 라인', '품질 추적 필요 공정', '데이터 기반 공정 개선', '다품종 생산'],
            badge: '품질 데이터',
            highlight: true
        },
        'process-monitoring': {
            id: 'process-monitoring',
            name: '공정 모니터링 대시보드',
            position: '설비·공정 상태 실시간 확인',
            description: '용접 설비 상태, 공정 진행, 알람·이상 징후를 대시보드로 확인하는 모니터링 구성입니다. 현장·관리자가 공정 상태를 실시간으로 파악할 수 있도록 지원합니다.',
            tags: ['모니터링', '대시보드', '실시간', '공정상태'],
            sites: ['용접 자동화 라인', '다라인·다셀 관리', '원격·중앙 모니터링', '생산 관리 필요 현장'],
            badge: '모니터링'
        },
        'mes-traceability': {
            id: 'mes-traceability',
            name: 'MES·작업 이력·추적성',
            position: '생산·작업 이력 연동',
            description: 'MES·생산 시스템과 용접 설비 데이터를 연동해 작업 이력, 로트·작업별 추적성을 확보하는 구성입니다. 품질·납기·추적 요구가 있는 공정에 검토합니다.',
            tags: ['MES', '작업이력', '추적성', '로트관리'],
            sites: ['품질 추적 필요 공정', '다품종 생산', '납기·이력 관리', '고객사 추적 요구'],
            badge: 'MES·이력'
        },
        'phased-expansion': {
            id: 'phased-expansion',
            name: '단계적 스마트공장 확장',
            position: 'PoC → 파일럿 → 확장 구축',
            description: '기존 TAWERS·자동화 설비를 기반으로 PoC, 파일럿, 본격 확장까지 단계적으로 스마트팩토리 연동을 구축하는 패키지입니다. 국책·스마트공장 과제 대응에도 활용합니다.',
            tags: ['단계구축', 'PoC', '스마트공장', '확장'],
            sites: ['국책·스마트공장 과제', '단계적 도입', '기존 설비 연동', '확장 계획 수립'],
            badge: '단계 확장'
        }
    }
};

var SMART_FACTORY_CONFIG_CATALOG = {
    'quality-data-log': {
        slug: 'quality-data-log',
        name: '용접 품질 데이터 수집',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '스마트팩토리 연동 솔루션',
        series: '용접 품질 데이터 수집',
        position: '품질·용접 이력 데이터 축적',
        tagline: 'TAWERS 용접 설비에서 품질·용접 관련 데이터를 수집·저장하는 구성입니다. 용접 품질 데이터가 남지 않는 문제를 해결하고, 공정 개선·품질 추적의 기반을 마련합니다.',
        configType: 'TAWERS 설비 기반 품질·용접 데이터 수집',
        targetProblem: '용접 품질 데이터가 남지 않음, 수기·분산 기록, 품질 원인 분석 어려움',
        applicableSystems: 'TAWERS 용접로봇, 자동화 셀, 반복 용접 라인 (현장 조건에 따라 확인)',
        dataScope: '용접 이력 · 품질 로그 · 작업 파라미터 · 알람·이상 기록',
        integration: 'TAWERS · 용접 설비 · 데이터 수집 · 품질 로그 · 대시보드 연동 검토',
        recommendedProcess: ['품질 추적 필요 공정', '반복 용접 라인', '데이터 기반 공정 개선'],
        recommendedSites: ['용접 자동화 라인', '품질 추적 필요 공정', '데이터 기반 공정 개선', '다품종 생산'],
        recommendedCombinations: [
            'TAWERS + 품질 데이터 수집 + 모니터링',
            '턴키 셀 + 품질 로그',
            'TAWERS + S-AWP + 품질 이력'
        ],
        similarComparison: [
            '공정 모니터링 대시보드는 실시간 상태 확인 중심입니다.',
            'MES·작업 이력 구성은 생산·로트·추적성 연동 중심입니다.',
            '단계적 확장 패키지는 PoC부터 본격 구축까지 범위를 함께 설계합니다.'
        ],
        consultationCriteria: ['현재 설비 현황', '수집 필요 데이터 항목', '품질·추적 요구', '기존 IT·MES 환경', '데이터 보관·접근 요구'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/smart-factory/quality-data-log/'
    },
    'process-monitoring': {
        slug: 'process-monitoring',
        name: '공정 모니터링 대시보드',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '스마트팩토리 연동 솔루션',
        series: '공정 모니터링 대시보드',
        position: '설비·공정 상태 실시간 확인',
        tagline: '용접 설비 상태, 공정 진행, 알람·이상 징후를 대시보드로 확인하는 모니터링 구성입니다.',
        configType: 'TAWERS·용접 설비 공정 모니터링',
        targetProblem: '공정 상태를 실시간 파악하기 어려움, 이상 징후 늦은 발견, 다셀·다라인 관리 부담',
        applicableSystems: 'TAWERS 자동화 셀, 용접 라인, 다셀 운영 현장 (현장 조건에 따라 확인)',
        dataScope: '설비 상태 · 공정 진행 · 알람 · 가동·비가동 · KPI 요약',
        integration: 'TAWERS · 설비 데이터 · 모니터링 대시보드 · 알람·알림',
        recommendedProcess: ['다라인·다셀 관리', '중앙 모니터링', '생산·설비 상태 파악'],
        recommendedSites: ['용접 자동화 라인', '다라인·다셀 관리', '원격·중앙 모니터링', '생산 관리 필요 현장'],
        recommendedCombinations: [
            'TAWERS + 모니터링 대시보드',
            '품질 데이터 수집 + 실시간 모니터링',
            '턴키 셀 + 공정 모니터링'
        ],
        similarComparison: [
            '품질 데이터 수집은 이력·로그 축적 중심, 모니터링은 실시간 상태 중심입니다.',
            'MES 연동은 생산·작업 이력·추적성 확장 단계에서 함께 검토합니다.'
        ],
        consultationCriteria: ['모니터링 대상 설비·셀', '표시 필요 KPI·상태', '알람·알림 요구', '사용자·접근 권한', '기존 모니터링 환경'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/smart-factory/process-monitoring/'
    },
    'mes-traceability': {
        slug: 'mes-traceability',
        name: 'MES·작업 이력·추적성',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '스마트팩토리 연동 솔루션',
        series: 'MES·작업 이력·추적성',
        position: '생산·작업 이력 연동',
        tagline: 'MES·생산 시스템과 용접 설비 데이터를 연동해 작업 이력, 로트·작업별 추적성을 확보하는 구성입니다.',
        configType: 'TAWERS 설비 + MES·생산 시스템 연동',
        targetProblem: '작업 이력·추적성 부족, 로트·작업별 품질 연계 어려움, MES·설비 데이터 단절',
        applicableSystems: 'TAWERS·자동화 셀 + MES·ERP·생산관리 (현장 조건에 따라 확인)',
        dataScope: '작업 이력 · 로트·작업 ID · 품질 연계 · 생산·납기 추적',
        integration: 'TAWERS · MES/ERP · 작업 이력 · 품질 데이터 · 추적성',
        recommendedProcess: ['품질·납기 추적', '다품종·로트 관리', '고객사 추적 요구 대응'],
        recommendedSites: ['품질 추적 필요 공정', '다품종 생산', '납기·이력 관리', '고객사 추적 요구'],
        recommendedCombinations: [
            'TAWERS + MES + 품질 데이터',
            '모니터링 + MES 이력 연동',
            '턴키 셀 + 추적성 구축'
        ],
        similarComparison: [
            '품질 데이터 수집만으로도 1차 이력 확보가 가능합니다.',
            '단계적 확장은 MES 연동 전 PoC·파일럿 단계 설계에 적합합니다.'
        ],
        cautionNote: 'MES·ERP 벤더, 연동 API·데이터 형식, 보안·네트워크 조건은 현장별로 확인이 필요합니다.',
        consultationCriteria: ['MES·ERP 현황', '추적·이력 요구 항목', '로트·작업 ID 체계', '연동 범위·우선순위', '보안·네트워크 정책'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/smart-factory/mes-traceability/'
    },
    'phased-expansion': {
        slug: 'phased-expansion',
        name: '단계적 스마트공장 확장',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '스마트팩토리 연동 솔루션',
        series: '단계적 스마트공장 확장',
        position: 'PoC → 파일럿 → 확장 구축',
        tagline: '기존 TAWERS·자동화 설비를 기반으로 PoC, 파일럿, 본격 확장까지 단계적으로 스마트팩토리 연동을 구축하는 패키지입니다.',
        configType: 'PoC · 파일럿 · 확장 단계별 스마트팩토리 연동',
        targetProblem: '스마트공장 과제 대응 필요, 일괄 구축 부담, 기존 설비·IT 환경과의 단계적 연동 필요',
        applicableSystems: 'TAWERS·턴키 셀·기존 용접 자동화 + IT·MES 환경 (현장 조건에 따라 확인)',
        dataScope: 'PoC 범위 정의 · 파일럿 · 본 구축 · 운영·확장 지원',
        integration: 'TAWERS · 데이터 수집 · 모니터링 · MES · 단계별 확장 로드맵',
        recommendedProcess: ['국책·스마트공장 과제', 'PoC·파일럿', '단계적 본 구축', '운영·확장'],
        recommendedSites: ['국책·스마트공장 과제', '단계적 도입', '기존 설비 연동', '확장 계획 수립'],
        recommendedCombinations: [
            'TAWERS + PoC 데이터 수집 → 모니터링 → MES',
            '턴키 셀 가동 후 스마트팩토리 확장',
            '품질 데이터 + 단계별 MES 연동'
        ],
        similarComparison: [
            '개별 구성(품질·모니터링·MES)은 기능 중심, 단계적 확장은 구축 범위·일정 중심입니다.',
            '턴키 자동화 셀은 설비·가동 중심, 스마트팩토리는 가동 이후 데이터·연동 확장입니다.'
        ],
        consultationCriteria: ['과제·예산·일정', '현재 설비·IT 현황', '1차 PoC 목표', '확장 로드맵', '운영·교육·유지 요구'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/smart-factory/phased-expansion/'
    }
};

function getSmartFactoryConfig(slug) {
    return SMART_FACTORY_CONFIG_CATALOG[slug] || null;
}

function getSmartFactoryHierarchy() {
    return SMART_FACTORY_HIERARCHY;
}

function buildSmartFactoryLineupCardsFromData() {
    var h = SMART_FACTORY_HIERARCHY;
    var order = ['quality-data-log', 'process-monitoring', 'mes-traceability', 'phased-expansion'];
    return order.map(function (key) {
        var c = h.configs[key];
        var cat = SMART_FACTORY_CONFIG_CATALOG[key];
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

function buildSmartFactoryConfigDetailContent(slug) {
    var m = SMART_FACTORY_CONFIG_CATALOG[slug];
    if (!m) return null;
    var h = SMART_FACTORY_HIERARCHY;
    var sitesSummary = m.recommendedSites.slice(0, 3).join(' · ');
    return {
        pageType: 'smartfactory-config',
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
        backLink: { url: h.lineup.url, label: '스마트팩토리 연동 솔루션 보기' },
        cautionNote: m.cautionNote || null,
        summaryCards: [
            { title: '해결 문제', desc: m.targetProblem.split(',')[0] + ' 등' },
            { title: '연동 범위', desc: m.dataScope.split(' · ')[0] + ' 등' },
            { title: '적용 설비', desc: m.applicableSystems.split(',')[0] + ' 등' },
            { title: '추천 현장', desc: sitesSummary }
        ],
        specifications: {
            '구성 유형': m.configType,
            '해결 문제': m.targetProblem,
            '적용 설비·시스템': m.applicableSystems,
            '데이터·연동 범위': m.dataScope,
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
            title: '이 스마트팩토리 연동 구성이 현장에 맞는지 데이터·공정 기준으로 검토해드립니다.',
            description: '현재 설비 현황, 수집·모니터링 목표, MES·IT 환경을 알려주시면 연동 범위와 단계를 함께 검토해드립니다.',
            lineupBtn: true
        }
    };
}

function buildSmartFactoryLineupDetailContent() {
    var h = SMART_FACTORY_HIERARCHY;
    return {
        pageType: 'lineup',
        parentSystem: {
            label: '상위 시스템',
            text: 'TAWERS 자동화 설비의 데이터 연동 확장',
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        parentNote: 'TAWERS 용접 자동화 설비를 기반으로 생산·품질·공정 데이터를 단계적으로 연동하는 확장 솔루션입니다.',
        heroBadge: '생산 데이터 연동',
        heroTitle: h.lineup.name,
        heroDescription: h.lineup.description,
        imageHint: '설비 · 모니터링 대시보드 · 데이터 연동',
        lineupSectionTitle: '구성 비교 — 데이터·공정 목표에 맞게 선택',
        lineupSectionDesc: '품질 데이터, 모니터링, MES·이력, 단계적 확장 — TAWERS 설비와 함께 현장의 데이터·추적 요구에 맞는 연동 구성을 선택합니다.',
        summaryCards: [
            { title: '공정 모니터링', desc: '용접 설비 상태 실시간 확인' },
            { title: '작업 이력', desc: '로트·작업별 이력 관리' },
            { title: '품질 데이터', desc: '용접 품질 데이터 축적' },
            { title: '단계적 확장', desc: '기존 설비부터 단계 구축' }
        ],
        selectionGuide: [
            { condition: '용접 품질 데이터가 남지 않음', recommendation: '용접 품질 데이터 수집' },
            { condition: '공정 상태 실시간 파악 필요', recommendation: '공정 모니터링 대시보드' },
            { condition: '작업 이력·추적성 필요', recommendation: 'MES·작업 이력·추적성' },
            { condition: '단계적 스마트공장 도입', recommendation: '단계적 스마트공장 확장' },
            { condition: '국책·스마트공장 과제 대응', recommendation: 'PoC → 파일럿 → 확장 패키지' }
        ],
        applicationFields: ['용접 자동화 라인', '품질 추적 필요 공정', '다품종 생산', '국책·스마트공장 과제', '데이터 기반 공정 개선'],
        problems: [
            '용접 품질 데이터가 남지 않음',
            '공정 상태를 실시간 파악하기 어려움',
            '작업 이력·추적성 부족',
            '스마트공장 과제 대응 필요',
            'MES·설비 데이터 단절'
        ],
        specifications: {
            '솔루션 유형': '스마트팩토리·데이터 연동',
            '연계 대상': 'TAWERS 용접 설비, 생산·MES 시스템',
            '기능': '모니터링, 이력, 품질 데이터, 단계 확장',
            '구축 방식': '단계별 확장 (PoC → 파일럿 → 본 구축)',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['현장·데이터 요구 확인', '연동 범위 정의', 'PoC·파일럿', '시스템 구축', '운영·교육', '확장 지원'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '핵심 설비' },
            { slug: 'turnkey-robot-automation-cell', name: '턴키 자동화 셀', desc: '통합 셀' },
            { slug: 'welding-process-software', name: '용접 공법 소프트웨어', desc: '품질·공법 연계' }
        ],
        cta: {
            title: '스마트팩토리 연동 상담',
            description: '현재 설비 현황과 데이터 관리 목표를 알려주시면 연동 범위와 단계를 제안드립니다.'
        }
    };
}
