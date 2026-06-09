// TAWERS → 고출력 용접 시스템 → 현장별 구성 계층 데이터
var HIGH_POWER_HIERARCHY = {
    parentSystem: {
        name: 'TAWERS 용접로봇 시스템',
        slug: 'tawers-welding-robot-system',
        url: '/products/tawers-welding-robot-system/'
    },
    lineup: {
        name: '고출력 용접 시스템',
        slug: 'high-power-welding-system',
        url: '/products/high-power-welding-system/',
        description: 'TAWERS 용접로봇 시스템의 고전류·중후판 대응 확장 구성입니다. 별도 브랜드가 아니라, TL 시리즈 로봇과 WGH 계열 용접전원, 고출력 공법, 지그·포지셔너를 현장 조건에 맞춰 함께 제안하는 TAWERS 고출력 패키지입니다.'
    },
    configs: {
        'heavy-plate-frame': {
            id: 'heavy-plate-frame',
            name: '중후판 프레임 용접 구성',
            position: '두꺼운 판재·프레임 중심',
            description: '중후판 프레임, 설비 구조물, 두꺼운 필렛 용접이 필요한 현장에 검토하는 TAWERS 고출력 구성입니다. TL 시리즈와 WGH 계열을 함께 제안합니다.',
            tags: ['중후판', '프레임', 'WGH', 'TL시리즈'],
            sites: ['중후판 프레임', '설비 구조물', '산업기계 부품', '두꺼운 필렛', '건설기계 프레임'],
            badge: '중후판·프레임',
            highlight: true
        },
        'large-structure': {
            id: 'large-structure',
            name: '대형 구조물 용접 구성',
            position: '대형 워크·장축 작업',
            description: '대형 구조물, 건설장비·농기계 프레임, 긴 용접선이 필요한 현장에 적용하는 TAWERS 고출력 구성입니다. TL 롱암 로봇, WGH, 포지셔너·대형 지그를 함께 검토합니다.',
            tags: ['대형구조물', '장축', '포지셔너', 'TL롱암'],
            sites: ['대형 프레임', '건설장비 부품', '농기계 프레임', '대형 지그', '긴 용접선'],
            badge: '대형·장축'
        },
        'fillet-high-output': {
            id: 'fillet-high-output',
            name: '필렛 고속·고출력 구성',
            position: '고출력 + 생산성 중심',
            description: '중후판 필렛 용접에서 생산성과 품질을 함께 높이기 위해 검토하는 TAWERS 고출력 구성입니다. WGH 계열과 S-AWP, HD-Pulse 등 공법을 함께 검토합니다.',
            tags: ['필렛', '고속', 'S-AWP', '생산성'],
            sites: ['필렛 용접 라인', '중후판 반복 생산', '대형 부품', '고속 용접 공정'],
            badge: '필렛·고속'
        },
        'tl-wgh-integrated-cell': {
            id: 'tl-wgh-integrated-cell',
            name: 'TL + WGH 통합 고출력 셀',
            position: '턴키형 고출력 자동화 셀',
            description: 'TL 시리즈, WGH 고출력 전원, 고전류 토치, 지그·포지셔너, 안전설비를 하나의 TAWERS 고출력 자동화 셀로 구성하는 패키지입니다. 중후판·대형 워크 현장에 통합 제안합니다.',
            tags: ['턴키', '통합셀', 'TL+WGH', '안전설비'],
            sites: ['고출력 자동화 셀', '중후판 라인', '대형 워크 셀', '턴키 프로젝트'],
            badge: '통합 고출력 셀'
        }
    }
};

var HIGH_POWER_CONFIG_CATALOG = {
    'heavy-plate-frame': {
        slug: 'heavy-plate-frame',
        name: '중후판 프레임 용접 구성',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '고출력 용접 시스템',
        series: '중후판 프레임 용접 구성',
        position: '두꺼운 판재·프레임 중심',
        tagline: '중후판 프레임, 설비 구조물, 두꺼운 필렛 용접이 필요한 현장에 검토하는 TAWERS 고출력 구성입니다.',
        configType: 'TAWERS 고출력·중후판 확장 구성',
        targetProblem: '중후판 용접 생산성 저하, 출력 부족, 두꺼운 소재 품질 편차',
        applicableMaterials: '중후판, 구조용 강재 (현장 조건에 따라 확인)',
        applicableThickness: '중후판 (현장 조건에 따라 확인)',
        weldingProcess: 'MIG/MAG, CO₂, 중후판 필렛·对接 용접 등',
        integration: 'TL 시리즈 · WGH 계열 · 고전류 토치 · 와이어 송급 · TAWERS 통합 컨트롤러',
        recommendedProcess: ['중후판 MIG/MAG', '필렛 용접', '구조물 프레임 용접', '다층 용접 검토'],
        recommendedSites: ['중후판 프레임', '설비 구조물', '산업기계 부품', '두꺼운 필렛', '건설기계 프레임'],
        recommendedCombinations: [
            'TL-1800 + WGH 계열 + 포지셔너',
            'TL-2000 + WGH 계열 + 대형 지그',
            'TM-1800 + WGH 계열 검토 (작업반경 조건에 따라)'
        ],
        similarComparison: [
            '대형 구조물 구성은 더 큰 워크·긴 용접선·포지셔너 중심으로 검토합니다.',
            'WG 계열 표준 구성은 일반 MIG/MAG·중판 이하 조건에 더 적합합니다.',
            '용접전원·컨트롤러 페이지에서 WGH 계열 단독 구성도 확인할 수 있습니다.'
        ],
        cautionNote: '소재 두께, 용접 위치, 토치·와이어 송급·출력 조건은 현장별로 확인이 필요합니다. 임의 전류·속도 수치는 표기하지 않습니다.',
        consultationCriteria: ['작업물 사진·도면', '소재', '두께', '용접 길이', '필렛/对接 형태', '월 생산량', '현재 용접 문제'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/high-power/heavy-plate-frame/'
    },
    'large-structure': {
        slug: 'large-structure',
        name: '대형 구조물 용접 구성',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '고출력 용접 시스템',
        series: '대형 구조물 용접 구성',
        position: '대형 워크·장축 작업',
        tagline: '대형 구조물, 건설장비·농기계 프레임, 긴 용접선이 필요한 현장에 적용하는 TAWERS 고출력 구성입니다.',
        configType: 'TAWERS 대형 워크 고출력 구성',
        targetProblem: '대형 작업물 접근성 부족, 긴 용접선, 출력·작업반경 동시 요구',
        applicableMaterials: '구조용 강재, 중후판 (현장 조건에 따라 확인)',
        applicableThickness: '현장 소재·두께에 따라 확인',
        weldingProcess: 'MIG/MAG, 대형 프레임·구조물 용접',
        integration: 'TL-1800/TL-2000 · WGH 계열 · 포지셔너 · 대형 지그 · 안전설비',
        recommendedProcess: ['대형 프레임 용접', '장축 워크', '다면 용접 (포지셔너)', '구조물 필렛'],
        recommendedSites: ['대형 프레임', '건설장비 부품', '농기계 프레임', '대형 지그', '긴 용접선'],
        recommendedCombinations: [
            'TL-2000 + WGH 계열 + 포지셔너',
            'TL-1800 + WGH + 고출력 용접 시스템 + 대형 지그',
            'TL + WGH + 턴키 자동화 셀 검토'
        ],
        similarComparison: [
            '중후판 프레임 구성은 두꺼운 판재·프레임 중심에 더 초점을 둡니다.',
            '필렛 고속 구성은 생산성·고속 공법 중심으로 검토합니다.',
            '로봇 라인업 TL 시리즈 페이지에서 작업반경·페이로드 비교가 가능합니다.'
        ],
        consultationCriteria: ['작업물 사진·도면', '크기·중량', '소재·두께', '용접 위치·길이', '셀 공간', '포지셔너 필요 여부'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/high-power/large-structure/'
    },
    'fillet-high-output': {
        slug: 'fillet-high-output',
        name: '필렛 고속·고출력 구성',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '고출력 용접 시스템',
        series: '필렛 고속·고출력 구성',
        position: '고출력 + 생산성 중심',
        tagline: '중후판 필렛 용접에서 생산성과 품질을 함께 높이기 위해 검토하는 TAWERS 고출력 구성입니다.',
        configType: 'TAWERS 고출력·고속 필렛 구성',
        targetProblem: '중후판 필렛 생산성 부족, 고속 용접 시 품질 불안정, 후처리 부담',
        applicableMaterials: '연강, 구조용 강재 (현장 조건에 따라 확인)',
        applicableThickness: '중후판 필렛 (현장 조건에 따라 확인)',
        weldingProcess: 'MIG/MAG 필렛, 고출력·고속 용접 검토',
        integration: 'TL/TM 시리즈 · WGH 계열 · S-AWP · HD-Pulse · TAWERS 통합 컨트롤러',
        recommendedProcess: ['필렛 고속 용접', '중후판 반복 생산', '로봇 자동화 라인'],
        recommendedSites: ['필렛 용접 라인', '중후판 반복 생산', '대형 부품', '고속 용접 공정'],
        recommendedCombinations: [
            'TL + WGH + S-AWP',
            'WGH + HD-Pulse 검토',
            'TM-2000 + WGH + S-AWP (작업반경 조건에 따라)'
        ],
        similarComparison: [
            'S-AWP 단독 공법 페이지에서 저스패터·고속 용접 문제 해결을 확인할 수 있습니다.',
            '중후판 프레임 구성은 두께·구조물 중심, 대형 구조물 구성은 워크 크기·장축 중심입니다.'
        ],
        consultationCriteria: ['작업물 사진', '필렛 크기·길이', '소재·두께', '목표 UPH', '현재 스패터·품질 문제', '생산 라인 구성'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/high-power/fillet-high-output/'
    },
    'tl-wgh-integrated-cell': {
        slug: 'tl-wgh-integrated-cell',
        name: 'TL + WGH 통합 고출력 셀',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '고출력 용접 시스템',
        series: 'TL + WGH 통합 고출력 셀',
        position: '턴키형 고출력 자동화 셀',
        tagline: 'TL 시리즈, WGH, 고전류 토치, 지그·포지셔너, 안전설비를 하나의 TAWERS 고출력 자동화 셀로 구성하는 패키지입니다.',
        configType: 'TAWERS 통합 고출력 자동화 셀',
        targetProblem: '로봇·전원·지그·안전설비를 따로 구매해 연동이 어려운 경우, 중후판 셀 일괄 구축 필요',
        applicableMaterials: '중후판, 대형 구조용 강재 (현장 조건에 따라 확인)',
        applicableThickness: '현장 조건에 따라 확인',
        weldingProcess: 'MIG/MAG, CO₂, 중후판·대형 워크 용접',
        integration: 'TL 시리즈 · WGH · 고전류 토치 · 지그/포지셔너 · 안전펜스 · TAWERS 컨트롤러 · 시운전',
        recommendedProcess: ['고출력 자동화 셀', '중후판 라인 구축', '턴키 납품·시운전'],
        recommendedSites: ['고출력 자동화 셀', '중후판 라인', '대형 워크 셀', '턴키 프로젝트'],
        recommendedCombinations: [
            'TL-1800 + WGH + 포지셔너 + 안전펜스',
            'TL-2000 + WGH + 턴키 자동화 셀',
            '고출력 셀 + S-AWP + 스마트팩토리 연동 검토'
        ],
        similarComparison: [
            '턴키 로봇 자동화 셀은 범용 자동화 셀 구성 범위를 더 넓게 다룹니다.',
            '개별 구성(중후판 프레임, 대형 구조물)은 셀 전체가 아닌 핵심 장비 조합 중심입니다.'
        ],
        consultationCriteria: ['작업물 도면·사진', '셀 설치 공간', '소재·두께', '생산량', '안전·인터록 요구', '납기·시운전 범위'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/high-power/tl-wgh-integrated-cell/'
    }
};

function getHighPowerConfig(slug) {
    return HIGH_POWER_CONFIG_CATALOG[slug] || null;
}

function getHighPowerHierarchy() {
    return HIGH_POWER_HIERARCHY;
}

function buildHighPowerLineupCardsFromData() {
    var h = HIGH_POWER_HIERARCHY;
    var order = ['heavy-plate-frame', 'large-structure', 'fillet-high-output', 'tl-wgh-integrated-cell'];
    return order.map(function (key) {
        var c = h.configs[key];
        var cat = HIGH_POWER_CONFIG_CATALOG[key];
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

function buildHighPowerConfigDetailContent(slug) {
    var m = HIGH_POWER_CONFIG_CATALOG[slug];
    if (!m) return null;
    var h = HIGH_POWER_HIERARCHY;
    var sitesSummary = m.recommendedSites.slice(0, 3).join(' · ');
    return {
        pageType: 'highpower-config',
        parentSystem: {
            label: '상위 시스템',
            text: m.parentSystem,
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        hierarchy: [
            { label: '상위 구성', text: m.parentLineup, link: h.lineup.url },
            { label: '패키지', text: m.series }
        ],
        heroBadge: m.parentLineup,
        heroTitle: m.name,
        heroPosition: m.position,
        heroDescription: m.tagline,
        backLink: { url: h.lineup.url, label: '고출력 용접 시스템 보기' },
        cautionNote: m.cautionNote || null,
        summaryCards: [
            { title: '해결 문제', desc: m.targetProblem.split(',')[0] + ' 등' },
            { title: '구성 유형', desc: m.configType },
            { title: '적용 공정', desc: m.weldingProcess.split(',')[0] + ' 등' },
            { title: '추천 현장', desc: sitesSummary }
        ],
        specifications: {
            '구성 유형': m.configType,
            '해결 문제': m.targetProblem,
            '적용 소재': m.applicableMaterials,
            '적용 두께': m.applicableThickness,
            '적용 공정': m.weldingProcess,
            'TAWERS 연동': m.integration,
            '출력·전류': '현장 조건에 따라 상담 시 확인',
            '견적 방식': m.quoteMethod
        },
        applicationFields: m.recommendedSites,
        recommendedCombinations: m.recommendedCombinations,
        similarComparison: m.similarComparison,
        consultationCriteria: m.consultationCriteria,
        cta: {
            title: '이 고출력 구성이 현장에 맞는지 작업물 기준으로 검토해드립니다.',
            description: '작업물 사진, 소재, 두께, 용접 길이, 생산량을 알려주시면 TL+WGH 고출력 구성의 적용 가능 여부와 더 적합한 TAWERS 패키지를 함께 검토해드립니다.',
            lineupBtn: true
        }
    };
}

function buildHighPowerLineupDetailContent() {
    var h = HIGH_POWER_HIERARCHY;
    return {
        pageType: 'lineup',
        parentSystem: {
            label: '상위 시스템',
            text: 'TAWERS 용접로봇 시스템의 고출력 확장 구성',
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        parentNote: 'TAWERS 용접로봇 시스템의 고전류·중후판 대응 확장 구성입니다. 별도 독립 브랜드가 아닙니다.',
        heroBadge: 'TAWERS 고전류·중후판 구성',
        heroTitle: h.lineup.name,
        heroDescription: h.lineup.description,
        imageHint: '중후판 · 필렛 용접 · WGH 고출력 구성',
        lineupSectionTitle: '구성 비교 — 현장 조건별 고출력 패키지',
        lineupSectionDesc: '중후판 프레임, 대형 구조물, 필렛 고속, TL+WGH 통합 셀 — TAWERS 시스템 안에서 작업물·두께·생산 조건에 맞는 고출력 구성을 선택합니다.',
        summaryCards: [
            { title: '중후판 대응', desc: '두꺼운 소재·고전류 조건 검토' },
            { title: 'TL + WGH', desc: '롱암 로봇과 고출력 전원 연동' },
            { title: 'TAWERS 확장', desc: '통합 시스템 내 출력·공법 확장' },
            { title: '현장 맞춤', desc: '토치·지그·포지셔너 상담 후 확정' }
        ],
        selectionGuide: [
            { condition: '중후판 프레임·두꺼운 필렛', recommendation: '중후판 프레임 용접 구성' },
            { condition: '대형 구조물·긴 용접선', recommendation: '대형 구조물 용접 구성' },
            { condition: '필렛 고속·생산성 중심', recommendation: '필렛 고속·고출력 구성' },
            { condition: '셀 일괄 구축·턴키 납품', recommendation: 'TL + WGH 통합 고출력 셀' },
            { condition: 'WGH 전원 단독 검토', recommendation: '용접전원·컨트롤러 WGH 계열 페이지 참고' },
            { condition: '저스패터·고속 공법 병행', recommendation: 'S-AWP + WGH 조합 검토' }
        ],
        applicationFields: ['중후판 구조물', '대형 프레임', '건설기계 부품', '농기계·산업기계', '두꺼운 필렛 용접'],
        problems: [
            '중후판 용접 생산성이 낮은 현장',
            '고전류 조건에서 품질 편차 발생',
            '대형 작업물 용접에 출력·작업반경 부족',
            '두꺼운 소재 다층·장시간 용접 필요',
            '로봇·전원·지그를 개별 구매해 연동이 어려운 경우'
        ],
        specifications: {
            '구성 유형': 'TAWERS 시스템 고출력·중후판 확장',
            '주요 장비': 'TL 시리즈, WGH 계열, 고전류 토치, 지그/포지셔너',
            '적용 소재': '중후판, 대형 구조용 강재',
            '연계 공법': 'S-AWP, HD-Pulse 등 (현장 조건에 따라 확인)',
            '출력·전류': '현장 조건에 따라 상담 시 확인',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['작업물·두께 확인', '용접 조건·출력 검토', '고출력 패키지 선정', 'TL + WGH + 주변설비 설계', 'TAWERS 시스템 연동', '견적·납기·시운전'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '상위 통합 시스템' },
            { slug: 'welding-power-controller', name: '용접전원·컨트롤러 구성', desc: 'WGH 계열' },
            { slug: 'welding-robot-manipulator-lineup', name: '로봇 매니퓰레이터 라인업', desc: 'TL 시리즈' },
            { slug: 'turnkey-robot-automation-cell', name: '턴키 자동화 셀', desc: '통합 셀 구축' }
        ],
        cta: {
            title: '중후판·대형 작업물 상담',
            description: '소재 두께, 용접 길이, 월 생산량, 설치 공간을 알려주시면 TAWERS 고출력 구성을 제안드립니다.'
        }
    };
}
