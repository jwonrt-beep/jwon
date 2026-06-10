// TAWERS → 용접전원·컨트롤러 구성 → 시리즈 계층 데이터
var POWER_CONTROLLER_HIERARCHY = {
    parentSystem: {
        name: 'TAWERS 용접로봇 시스템',
        slug: 'tawers-welding-robot-system',
        url: '/products/tawers-welding-robot-system/'
    },
    lineup: {
        name: '용접전원·컨트롤러 구성',
        slug: 'welding-power-controller',
        url: '/products/welding-power-controller/',
        description: 'TAWERS 시스템에서 용접전원 본체, 와이어 송급장치, 토치, 티칭 펜던트를 포함하는 용접전원·컨트롤러 통합 구성입니다. 일반 MIG/MAG 조건에는 WG 계열, 중후판·고전류 조건에는 WGH 계열을 검토하며, 로봇과 용접전원을 하나로 제어하는 TAWERS 통합 컨트롤러 구조를 기준으로 제안합니다.'
    },
    series: {
        'wg-series': {
            id: 'wg-series',
            name: 'WG 계열',
            position: '표준·범용 MIG/MAG 용접전원',
            description: '일반 MIG/MAG, CO₂, 스테인리스 MIG 등 표준 아크 용접 조건에 폭넓게 대응하는 TAWERS 용접전원 구성입니다. 소형 부품부터 표준 프레임 용접까지 TS·TM 시리즈와 함께 가장 범용적으로 제안합니다.',
            tags: ['표준형', 'MIG/MAG', '범용', 'TAWERS연동'],
            sites: ['자동차 부품', '판금 부품', '일반 프레임', '반복 생산 공정', '표준 용접셀'],
            badge: '표준·범용형',
            highlight: true
        },
        'wgh-series': {
            id: 'wgh-series',
            name: 'WGH 계열',
            position: '고출력·중후판 용접전원',
            description: '중후판, 대형 구조물, 고전류 용접이 필요한 현장에 검토하는 TAWERS 고출력 용접전원 구성입니다. TL 시리즈와 함께 두꺼운 소재·긴 용접선·대형 워크 조건에 적용합니다.',
            tags: ['고출력', '중후판', '고전류', '대형워크'],
            sites: ['중후판 구조물', '대형 프레임', '건설장비 부품', '산업기계 프레임', '두꺼운 필렛 용접'],
            badge: '고출력·중후판'
        },
        'tawers-controller': {
            id: 'tawers-controller',
            name: 'TAWERS 통합 컨트롤러',
            position: '로봇·용접전원 일체 제어',
            description: '로봇 동작과 용접 조건을 하나의 시스템으로 제어하는 TAWERS 통합 컨트롤러 구조입니다. 용접전원 일체형 아크 용접 로봇의 핵심으로, 티칭 펜던트·와이어 송급·토치 구성과 연동됩니다.',
            tags: ['통합제어', '일체형', '티칭펜던트', '시스템연동'],
            sites: ['TAWERS 자동화 셀', '반복 용접 라인', '로봇+전원 통합 구성', '턴키 자동화 프로젝트'],
            badge: '통합 제어'
        }
    }
};

var POWER_SERIES_CATALOG = {
    'wg-series': {
        slug: 'wg-series',
        name: 'WG 계열',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접전원·컨트롤러 구성',
        series: 'WG 계열',
        position: '표준·범용 MIG/MAG 용접전원',
        tagline: '일반 MIG/MAG, CO₂, 스테인리스 MIG 조건에 폭넓게 대응하는 TAWERS 표준 용접전원 구성입니다.',
        configType: '표준 MIG/MAG 용접전원',
        controlStructure: 'TAWERS 통합 컨트롤러 연동',
        outputRange: '현장 조건에 따라 확인',
        weldingProcess: 'MIG/MAG, CO₂, 스테인리스 MIG 등',
        materialThickness: '박판~중판 (현장 조건에 따라 확인)',
        installType: 'TAWERS 로봇 시스템 내 통합 설치',
        integration: '로봇 · 용접전원 · 티칭 펜던트 · 와이어 송급 · 토치',
        recommendedProcess: ['MIG/MAG 아크 용접', 'CO₂ 용접', '스테인리스 MIG 용접', '판금·프레임 반복 용접'],
        recommendedWelding: ['S-AWP', 'HBC', 'Zi-Tech', '일반 MIG/MAG 공법'],
        recommendedSites: ['자동차 부품', '판금 부품', '일반 프레임', '소형·중형 워크', '표준 용접셀'],
        recommendedCombinations: [
            'TS/TM 시리즈 + WG 계열 + S-AWP',
            'TM-1400 + WG 계열 + 맞춤 지그',
            'TS-800 + WG 계열 + 소형 지그'
        ],
        similarComparison: [
            'WGH 계열은 중후판·고전류 조건이 필요할 때 WG 대신 검토합니다.',
            'TAWERS 통합 컨트롤러는 WG 계열 전원과 함께 로봇·용접을 하나로 제어하는 구조입니다.'
        ],
        consultationCriteria: ['작업물 사진', '소재', '두께', '용접 길이', '월 생산량', '현재 용접 문제', '로봇 모델(검토 중)'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-power/wg-series/'
    },
    'wgh-series': {
        slug: 'wgh-series',
        name: 'WGH 계열',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접전원·컨트롤러 구성',
        series: 'WGH 계열',
        position: '고출력·중후판 용접전원',
        tagline: '중후판, 대형 구조물, 고전류 용접이 필요한 현장에 검토하는 TAWERS 고출력 용접전원 구성입니다.',
        configType: '고출력 MIG/MAG 용접전원',
        controlStructure: 'TAWERS 통합 컨트롤러 연동',
        outputRange: '현장 조건에 따라 확인',
        weldingProcess: 'MIG/MAG, CO₂, 중후판 필렛·对接 용접 등',
        materialThickness: '중후판·대형 구조물 (현장 조건에 따라 확인)',
        installType: 'TAWERS 로봇 시스템 내 통합 설치',
        integration: 'TL 시리즈 · 고전류 토치 · 와이어 송급 · 지그/포지셔너',
        recommendedProcess: ['중후판 MIG/MAG 용접', '대형 프레임 용접', '필렛 고속 용접', '구조물 용접'],
        recommendedWelding: ['S-AWP', 'HD-Pulse', '고출력 MIG/MAG 공법'],
        recommendedSites: ['중후판 구조물', '대형 프레임', '건설장비 부품', '산업기계 프레임', '두꺼운 필렛 용접'],
        recommendedCombinations: [
            'TL-1800 + WGH 계열 + 포지셔너',
            'TL-2000 + WGH 계열 + 고출력 용접 시스템',
            'TM-1800 + WGH 계열 검토 + 대형 지그'
        ],
        similarComparison: [
            'WG 계열은 일반 MIG/MAG·표준 프레임 조건에 더 범용적으로 제안합니다.',
            '고출력 용접 시스템 페이지에서 TL 시리즈와 함께 구성하는 확장 사례를 확인할 수 있습니다.'
        ],
        cautionNote: '출력·전류·토치·와이어 송급 구성은 작업물 두께와 용접 조건에 따라 상담 시 확인이 필요합니다.',
        consultationCriteria: ['작업물 사진', '소재', '두께', '용접 길이', '월 생산량', '현재 용접 문제', '설치 공간'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-power/wgh-series/'
    },
    'tawers-controller': {
        slug: 'tawers-controller',
        name: 'TAWERS 통합 컨트롤러',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접전원·컨트롤러 구성',
        series: 'TAWERS 통합 컨트롤러',
        position: '로봇·용접전원 일체 제어',
        tagline: '로봇 동작과 용접 조건을 하나의 시스템으로 제어하는 TAWERS 통합 컨트롤러 구조입니다.',
        configType: '용접전원 일체형 통합 제어',
        controlStructure: '로봇 · 용접전원 · 공법 · 주변장치 통합 제어',
        outputRange: '연동 용접전원(WG/WGH)에 따라 확인',
        weldingProcess: 'MIG/MAG, CO₂, 스테인리스 MIG 등 (연동 전원 기준)',
        materialThickness: '연동 로봇·전원 구성에 따라 확인',
        installType: 'TAWERS 시스템 셀 내 통합',
        integration: '로봇팔 · 용접전원 · 티칭 펜던트 · 토치 · 와이어 송급 · 공법 소프트웨어',
        recommendedProcess: ['반복 용접 자동화', '로봇+전원 통합 셀', '다축 용접 프로그래밍', '생산 라인 자동화'],
        recommendedWelding: ['S-AWP', 'HBC', 'Zi-Tech', 'TAWERS 공법 패키지'],
        recommendedSites: ['TAWERS 자동화 셀', '반복 생산 라인', '턴키 프로젝트', '로봇+전원 통합 구성'],
        recommendedCombinations: [
            'TAWERS 통합 컨트롤러 + TM-1400 + WG 계열',
            'TAWERS 통합 컨트롤러 + TL-1800 + WGH 계열',
            'TAWERS 통합 컨트롤러 + S-AWP + 맞춤 지그'
        ],
        similarComparison: [
            'WG/WGH 계열은 용접 출력·소재 조건에 따라 선택하는 전원 구성입니다.',
            '로봇 매니퓰레이터 라인업에서 작업반경·페이로드에 맞는 로봇 모델을 함께 검토합니다.'
        ],
        consultationCriteria: ['작업물 사진', '현재 설비 구성', '소재·두께', '생산량', '자동화 목표', '연동 필요 시스템'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-power/tawers-controller/'
    }
};

function getPowerSeries(slug) {
    return POWER_SERIES_CATALOG[slug] || null;
}

function getPowerControllerHierarchy() {
    return POWER_CONTROLLER_HIERARCHY;
}

function getPowerLineupCatalog() {
    return {
        name: POWER_CONTROLLER_HIERARCHY.lineup.name,
        slug: POWER_CONTROLLER_HIERARCHY.lineup.slug,
        description: POWER_CONTROLLER_HIERARCHY.lineup.description,
        badge: 'WG · WGH · 통합 컨트롤러',
        categories: ['용접전원', 'TAWERS 구성']
    };
}

function buildPowerLineupCardsFromData() {
    var h = POWER_CONTROLLER_HIERARCHY;
    var order = ['wg-series', 'wgh-series', 'tawers-controller'];
    return order.map(function (key) {
        var s = h.series[key];
        var seriesLinks = [{ name: s.name, url: POWER_SERIES_CATALOG[key].detailUrl }];
        return {
            name: s.name,
            badge: s.badge,
            desc: s.description,
            tags: s.tags,
            models: s.name,
            seriesLinks: seriesLinks,
            highlight: !!s.highlight,
            position: s.position
        };
    });
}

function buildPowerSeriesDetailContent(slug) {
    var m = POWER_SERIES_CATALOG[slug];
    if (!m) return null;
    var h = POWER_CONTROLLER_HIERARCHY;
    var sitesSummary = m.recommendedSites.slice(0, 3).join(' · ');
    return {
        pageType: 'power-series',
        parentSystem: {
            label: '상위 시스템',
            text: m.parentSystem,
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        hierarchy: [
            { label: '상위 라인업', text: m.parentLineup, link: h.lineup.url },
            { label: '구성', text: m.series }
        ],
        heroBadge: m.series,
        heroTitle: m.name,
        heroPosition: m.position,
        heroDescription: m.tagline,
        backLink: { url: h.lineup.url, label: '용접전원·컨트롤러 구성 보기' },
        cautionNote: m.cautionNote || null,
        summaryCards: [
            { title: '구성 유형', desc: m.configType },
            { title: '제어 구조', desc: m.controlStructure },
            { title: '적용 공정', desc: m.weldingProcess.split(',')[0] + ' 등' },
            { title: '추천 현장', desc: sitesSummary }
        ],
        specifications: {
            '구성 유형': m.configType,
            '제어 구조': m.controlStructure,
            '출력·전류': m.outputRange,
            '적용 공정': m.weldingProcess,
            '적용 소재 두께': m.materialThickness,
            '설치 방식': m.installType,
            '시스템 연동': m.integration,
            '추천 공법': m.recommendedWelding.join(' · '),
            '견적 방식': m.quoteMethod
        },
        applicationFields: m.recommendedSites,
        recommendedCombinations: m.recommendedCombinations,
        similarComparison: m.similarComparison,
        consultationCriteria: m.consultationCriteria,
        cta: {
            title: '이 구성이 현장에 맞는지 작업물 기준으로 검토해드립니다.',
            description: '작업물 사진, 소재, 두께, 생산량, 현재 용접 문제를 알려주시면 WG/WGH·통합 컨트롤러 구성의 적용 가능 여부를 함께 검토해드립니다.',
            lineupBtn: true
        }
    };
}

function buildPowerLineupDetailContent() {
    var h = POWER_CONTROLLER_HIERARCHY;
    return {
        pageType: 'lineup',
        parentSystem: {
            label: '상위 시스템',
            text: 'TAWERS 용접로봇 시스템의 용접전원·컨트롤러 구성',
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        heroBadge: 'WG · WGH · 통합 컨트롤러',
        heroTitle: h.lineup.name,
        heroDescription: h.lineup.description,
        imageHint: '용접전원 · 송급장치 · 티칭 펜던트 · 로봇 연동',
        lineupSectionTitle: '구성 비교 — WG / WGH / 통합 컨트롤러',
        lineupSectionDesc: '표준 WG, 고출력 WGH, TAWERS 통합 컨트롤러 — 용접전원·송급·제어가 하나의 장비 세트처럼 연결된 구성입니다. TAWERS 통합 셀 전경과 구분하여 장비 단위로 확인합니다.',
        summaryCards: [
            { title: '용접전원 세트', desc: '본체·송급·와이어 릴·토치' },
            { title: '통합 제어', desc: '로봇과 용접전원을 하나로 제어' },
            { title: 'TAWERS 연동', desc: '로봇·공법·지그와 함께 구성' },
            { title: '현장 맞춤', desc: '출력·토치·와이어 송급 상담 후 확정' }
        ],
        selectionGuide: [
            { condition: '일반 MIG/MAG, 판금·프레임 용접', recommendation: 'WG 계열' },
            { condition: '중후판, 대형 구조물, 고전류', recommendation: 'WGH 계열' },
            { condition: '로봇+전원 통합 자동화 셀', recommendation: 'TAWERS 통합 컨트롤러 + WG/WGH' },
            { condition: 'TS/TM + 표준 용접 조건', recommendation: 'WG 계열 + S-AWP 검토' },
            { condition: 'TL + 중후판·대형 워크', recommendation: 'WGH 계열 + 고출력 구성 검토' }
        ],
        applicationFields: ['자동차 부품', '판금 프레임', '일반 제조업', '중후판 구조물', '대형 프레임', 'TAWERS 자동화 셀'],
        problems: [
            '로봇과 용접전원이 따로 동작해 연동이 어려운 경우',
            '중후판 용접 시 출력이 부족한 경우',
            '용접 조건 변경 시 품질 편차가 큰 경우',
            '티칭·프로그래밍과 용접 설정이 분리된 경우'
        ],
        specifications: {
            '구성 라인업': 'WG(표준) · WGH(고출력) · TAWERS 통합 컨트롤러',
            '선정 기준': '소재, 두께, 용접 공정, 생산량, 로봇 모델',
            '시스템 연동': 'TAWERS 용접로봇 시스템 내 전원·제어 구성',
            '출력·전류': '현장 조건에 따라 상담 시 확인',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['작업물·소재·두께 확인', '용접 공정·생산량 검토', 'WG/WGH·컨트롤러 구성 선정', 'TAWERS 시스템 연동 설계', '견적·납기 안내', '설치·시운전'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '상위 통합 시스템' },
            { slug: 'high-power-welding-system', name: '고출력 용접 시스템', desc: 'WGH 중후판 확장 구성' },
            { slug: 'welding-process-software', name: '용접 공법 소프트웨어', desc: 'S-AWP · HBC · Zi-Tech' }
        ],
        cta: {
            title: '용접 조건과 작업물을 알려주세요',
            description: '소재, 두께, 용접 길이, 월 생산량을 알려주시면 WG/WGH·통합 컨트롤러 중 적합한 TAWERS 구성을 제안드립니다.'
        }
    };
}
