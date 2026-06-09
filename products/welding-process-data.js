// TAWERS → 용접 공법 소프트웨어 → 공법별 계층 데이터
var WELDING_PROCESS_HIERARCHY = {
    parentSystem: {
        name: 'TAWERS 용접로봇 시스템',
        slug: 'tawers-welding-robot-system',
        url: '/products/tawers-welding-robot-system/'
    },
    lineup: {
        name: '용접 공법 소프트웨어',
        slug: 'welding-process-software',
        url: '/products/welding-process-software/',
        description: 'TAWERS 시스템에서 스패터, 번스루, 블로홀, 고속 용접 등 현장 문제에 따라 선택하는 용접 공법 소프트웨어입니다. 단독 제품이 아니라 TAWERS 통합 시스템 안에서 용접 품질과 생산성을 개선하기 위한 공법·제어 솔루션으로 제안합니다.'
    },
    processes: {
        's-awp': {
            id: 's-awp',
            name: 'S-AWP / AWP4',
            position: '고속·저스패터 용접 공법',
            description: '스패터와 후처리 부담을 줄이면서 고속 용접 생산성을 높이기 위해 검토하는 TAWERS 용접 공법입니다. 반복 용접 라인과 자동차·판금 부품 현장에서 널리 제안합니다.',
            tags: ['저스패터', '고속용접', '생산성', '품질개선'],
            sites: ['자동차 부품', '판금 부품', '반복 용접 라인', '프레임 용접', '후처리 부담 현장'],
            badge: '저스패터·고속',
            highlight: true
        },
        'hbc': {
            id: 'hbc',
            name: 'HBC',
            position: '박판·고장력강 번스루 방지 공법',
            description: '박판·얇은 소재, 갭 편차, 고장력강 조건에서 번스루를 줄이기 위해 검토하는 TAWERS 용접 공법입니다. 박판 프레임과 갭 변동이 있는 워크에 적용합니다.',
            tags: ['박판', '번스루방지', '고장력강', '갭편차'],
            sites: ['박판 프레임', '고장력강 부품', '얇은 판재', '갭 편차 워크', '차체·브라켓'],
            badge: '박판·번스루 대응'
        },
        'zi-tech': {
            id: 'zi-tech',
            name: 'Zi-Tech',
            position: '아연도금강판 용접 공법',
            description: '아연도금강판 용접 시 스패터·블로홀·기공 문제를 줄이기 위해 검토하는 TAWERS 용접 공법입니다. 도금강판 부품과 자동차·전장 케이스 용접에 적용합니다.',
            tags: ['도금강판', '블로홀', '스패터', '아연도금'],
            sites: ['아연도금강판', '자동차 부품', '전장 케이스', '도금 판재', '블로홀 문제 현장'],
            badge: '도금강판 대응'
        },
        'basic-arc-process': {
            id: 'basic-arc-process',
            name: 'MTS-CO₂ / SP-MAG / HD-Pulse',
            position: '기본 아크 용접 공법',
            description: 'CO₂, MAG, 펄스 등 기본 아크 용접 조건에 맞춰 TAWERS 시스템에서 적용하는 표준 공법 구성입니다. 소재·두께·용접 조건에 따라 공법 패키지를 함께 검토합니다.',
            tags: ['CO₂', 'MAG', '펄스', '표준공법'],
            sites: ['일반 MIG/MAG', 'CO₂ 용접', '표준 프레임', '중후판 검토 현장', '범용 제조업'],
            badge: '기본·범용 공법'
        }
    }
};

var WELDING_PROCESS_CATALOG = {
    's-awp': {
        slug: 's-awp',
        name: 'S-AWP / AWP4',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 공법 소프트웨어',
        series: 'S-AWP / AWP4',
        position: '고속·저스패터 용접 공법',
        tagline: '스패터와 후처리 부담을 줄이면서 고속 용접 생산성을 높이기 위해 검토하는 TAWERS 용접 공법입니다.',
        solutionType: '고속·저스패터 용접 공법 소프트웨어',
        targetProblem: '스패터 과다, 후처리 시간 증가, 고속 용접 시 품질 불안정',
        applicableMaterials: '연강, 고장력강, 일반 판금 (현장 조건에 따라 확인)',
        applicableThickness: '현장 소재·두께에 따라 확인',
        weldingProcess: 'MIG/MAG, CO₂ 등 TAWERS 연동 아크 용접',
        integration: 'TAWERS 로봇 · WG 계열 · 통합 컨트롤러 · 토치/와이어 송급',
        recommendedProcess: ['반복 MIG/MAG 용접', '고속 생산 라인', '스패터 민감 부품', '판금·프레임 용접'],
        recommendedSites: ['자동차 부품', '판금 부품', '반복 용접 라인', '프레임 용접', '후처리 부담 현장'],
        recommendedCombinations: [
            'TM-1400 + WG 계열 + S-AWP',
            'TS-800 + WG 계열 + S-AWP + 소형 지그',
            'S-AWP + 표준 MIG/MAG 공법 패키지'
        ],
        similarComparison: [
            'HBC는 박판·번스루 문제가 핵심일 때 검토합니다.',
            'Zi-Tech는 아연도금강판·블로홀 문제에 더 적합합니다.',
            'HD-Pulse는 펄스 조건 중심의 기본 공법 패키지 검토 시 함께 비교합니다.'
        ],
        consultationCriteria: ['작업물 사진', '소재', '두께', '현재 스패터·후처리 문제', '월 생산량', '목표 용접 속도'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-process/s-awp/'
    },
    'hbc': {
        slug: 'hbc',
        name: 'HBC',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 공법 소프트웨어',
        series: 'HBC',
        position: '박판·고장력강 번스루 방지 공법',
        tagline: '박판·얇은 소재, 갭 편차, 고장력강 조건에서 번스루를 줄이기 위해 검토하는 TAWERS 용접 공법입니다.',
        solutionType: '박판·번스루 방지 용접 공법 소프트웨어',
        targetProblem: '박판 번스루, 갭 편차로 인한 품질 불량, 얇은 소재 뚫림',
        applicableMaterials: '박판 연강, 고장력강 (현장 조건에 따라 확인)',
        applicableThickness: '박판·얇은 소재 (현장 조건에 따라 확인)',
        weldingProcess: 'MIG/MAG, CO₂ 등 TAWERS 연동 아크 용접',
        integration: 'TS/TM 시리즈 · WG 계열 · TAWERS 통합 컨트롤러',
        recommendedProcess: ['박판 프레임 용접', '고장력강 부품', '갭 변동 워크', '얇은 판재 용접'],
        recommendedSites: ['박판 프레임', '고장력강 부품', '얇은 판재', '갭 편차 워크', '차체·브라켓'],
        recommendedCombinations: [
            'TS 또는 TM 시리즈 + HBC',
            'TM-1400 + WG 계열 + HBC',
            'HBC + 맞춤 지그 (갭 관리)'
        ],
        similarComparison: [
            'S-AWP는 스패터·고속 생산성 문제 해결에 더 적합합니다.',
            'Zi-Tech는 도금강판·블로홀 문제 중심으로 검토합니다.'
        ],
        cautionNote: '갭 편차, Fixture 정밀도, 토치 각도 등 현장 조건에 따라 적용 결과가 달라질 수 있어 상담 시 확인이 필요합니다.',
        consultationCriteria: ['작업물 사진', '소재', '두께', '갭 크기·편차', '번스루 발생 위치', '현재 용접 조건'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-process/hbc/'
    },
    'zi-tech': {
        slug: 'zi-tech',
        name: 'Zi-Tech',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 공법 소프트웨어',
        series: 'Zi-Tech',
        position: '아연도금강판 용접 공법',
        tagline: '아연도금강판 용접 시 스패터·블로홀·기공 문제를 줄이기 위해 검토하는 TAWERS 용접 공법입니다.',
        solutionType: '도금강판·블로홀 저감 용접 공법 소프트웨어',
        targetProblem: '도금강판 블로홀, 기공, 스패터, 용접 품질 편차',
        applicableMaterials: '아연도금강판, 도금 판재 (현장 조건에 따라 확인)',
        applicableThickness: '현장 소재·두께에 따라 확인',
        weldingProcess: 'MIG/MAG 등 TAWERS 연동 아크 용접',
        integration: 'TM 시리즈 · WG 계열 · TAWERS 통합 컨트롤러',
        recommendedProcess: ['아연도금강판 용접', '도금 부품 반복 용접', '전장·케이스 용접'],
        recommendedSites: ['아연도금강판', '자동차 부품', '전장 케이스', '도금 판재', '블로홀 문제 현장'],
        recommendedCombinations: [
            'TM-1400 + WG 계열 + Zi-Tech',
            'TM 시리즈 + Zi-Tech + 맞춤 지그',
            'Zi-Tech + S-AWP 조합 검토 (현장 조건에 따라)'
        ],
        similarComparison: [
            'S-AWP는 일반 저스패터·고속 용접 문제에 더 범용적으로 제안합니다.',
            'HBC는 박판·번스루 문제 중심으로 검토합니다.'
        ],
        consultationCriteria: ['작업물 사진', '도금강판 종류', '두께', '블로홀·기공 발생 위치', '현재 용접 문제', '생산량'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-process/zi-tech/'
    },
    'basic-arc-process': {
        slug: 'basic-arc-process',
        name: 'MTS-CO₂ / SP-MAG / HD-Pulse',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 공법 소프트웨어',
        series: 'MTS-CO₂ / SP-MAG / HD-Pulse',
        position: '기본 아크 용접 공법',
        tagline: 'CO₂, MAG, 펄스 등 기본 아크 용접 조건에 맞춰 TAWERS 시스템에서 적용하는 표준 공법 구성입니다.',
        solutionType: '기본 CO₂·MAG·펄스 용접 공법 패키지',
        targetProblem: '기본 용접 조건 표준화, 공정별 파라미터 적용, 범용 아크 용접 구성',
        applicableMaterials: '연강, 스테인리스 등 (현장 조건에 따라 확인)',
        applicableThickness: '현장 소재·두께에 따라 확인',
        weldingProcess: 'CO₂, MIG/MAG, 펄스 용접 등',
        integration: 'TAWERS 로봇 · WG/WGH 계열 · 통합 컨트롤러',
        recommendedProcess: ['일반 CO₂ 용접', '표준 MAG 용접', '펄스 조건 검토', '중후판 조건 (HD-Pulse 등)'],
        recommendedSites: ['일반 MIG/MAG', 'CO₂ 용접', '표준 프레임', '범용 제조업', '중후판 검토 현장'],
        recommendedCombinations: [
            'TM-1400 + WG 계열 + SP-MAG',
            'TL 시리즈 + WGH + HD-Pulse 검토',
            '기본 공법 + S-AWP/HBC/Zi-Tech 조합 검토'
        ],
        similarComparison: [
            'S-AWP, HBC, Zi-Tech는 특정 품질 문제 해결형 공법입니다.',
            '중후판·고출력 조건은 WGH 계열·고출력 용접 시스템과 함께 검토합니다.'
        ],
        consultationCriteria: ['작업물 사진', '소재', '두께', '용접 공정', '현재 용접 조건', '품질 목표'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-process/basic-arc-process/'
    }
};

function getWeldingProcess(slug) {
    return WELDING_PROCESS_CATALOG[slug] || null;
}

function getWeldingProcessHierarchy() {
    return WELDING_PROCESS_HIERARCHY;
}

function buildProcessLineupCardsFromData() {
    var h = WELDING_PROCESS_HIERARCHY;
    var order = ['s-awp', 'hbc', 'zi-tech', 'basic-arc-process'];
    return order.map(function (key) {
        var p = h.processes[key];
        var cat = WELDING_PROCESS_CATALOG[key];
        return {
            name: p.name,
            badge: p.badge,
            desc: p.description,
            tags: p.tags,
            models: p.name,
            problem: cat.targetProblem,
            seriesLinks: [{ name: p.name + ' 상세', url: cat.detailUrl }],
            detailLinks: [{ name: p.name, url: cat.detailUrl }],
            highlight: !!p.highlight,
            position: p.position
        };
    });
}

function buildProcessItemDetailContent(slug) {
    var m = WELDING_PROCESS_CATALOG[slug];
    if (!m) return null;
    var h = WELDING_PROCESS_HIERARCHY;
    var sitesSummary = m.recommendedSites.slice(0, 3).join(' · ');
    return {
        pageType: 'process-item',
        parentSystem: {
            label: '상위 시스템',
            text: m.parentSystem,
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        hierarchy: [
            { label: '상위 라인업', text: m.parentLineup, link: h.lineup.url },
            { label: '공법', text: m.series }
        ],
        heroBadge: m.series,
        heroTitle: m.name,
        heroPosition: m.position,
        heroDescription: m.tagline,
        backLink: { url: h.lineup.url, label: '용접 공법 소프트웨어 보기' },
        cautionNote: m.cautionNote || null,
        summaryCards: [
            { title: '해결 문제', desc: m.targetProblem.split(',')[0] + ' 등' },
            { title: '솔루션 유형', desc: m.solutionType },
            { title: '적용 공정', desc: m.weldingProcess.split(',')[0] + ' 등' },
            { title: '추천 현장', desc: sitesSummary }
        ],
        specifications: {
            '솔루션 유형': m.solutionType,
            '해결 문제': m.targetProblem,
            '적용 소재': m.applicableMaterials,
            '적용 두께': m.applicableThickness,
            '적용 공정': m.weldingProcess,
            'TAWERS 연동': m.integration,
            '추천 현장': m.recommendedSites.join(' · '),
            '견적 방식': m.quoteMethod
        },
        applicationFields: m.recommendedSites,
        recommendedCombinations: m.recommendedCombinations,
        similarComparison: m.similarComparison,
        consultationCriteria: m.consultationCriteria,
        cta: {
            title: '이 공법이 현장에 맞는지 작업물 기준으로 검토해드립니다.',
            description: '현재 용접 문제, 소재, 두께, 생산량을 알려주시면 해당 공법의 적용 가능 여부와 더 적합한 TAWERS 구성을 함께 검토해드립니다.',
            lineupBtn: true
        }
    };
}

function buildProcessLineupDetailContent() {
    var h = WELDING_PROCESS_HIERARCHY;
    return {
        pageType: 'lineup',
        parentSystem: {
            label: '상위 시스템',
            text: 'TAWERS 용접로봇 시스템의 용접 공법 구성',
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        heroBadge: 'S-AWP · HBC · Zi-Tech',
        heroTitle: h.lineup.name,
        heroDescription: h.lineup.description,
        imageHint: '스패터 · 번스루 · 블로홀 전후 비교',
        lineupSectionTitle: '공법 비교 — 현장 문제에 맞게 선택',
        lineupSectionDesc: 'S-AWP, HBC, Zi-Tech, 기본 아크 공법 — TAWERS 시스템 안에서 용접 품질 문제와 생산 조건에 맞는 공법을 선택합니다.',
        summaryCards: [
            { title: '문제 중심 제안', desc: '스패터·번스루·블로홀 등 문제별 공법' },
            { title: '품질·생산성', desc: '비드 품질과 UPH 동시 개선 검토' },
            { title: 'TAWERS 연동', desc: '로봇·전원·컨트롤러와 통합 적용' },
            { title: '소재별 대응', desc: '박판·도금강·고장력강 맞춤' }
        ],
        selectionGuide: [
            { condition: '스패터가 많다', recommendation: 'S-AWP / AWP4' },
            { condition: '박판이 자꾸 뚫린다', recommendation: 'HBC' },
            { condition: '도금강판에서 블로홀이 생긴다', recommendation: 'Zi-Tech' },
            { condition: '생산 속도를 높이고 싶다', recommendation: 'S-AWP / HD-Pulse 검토' },
            { condition: '기본 CO₂·MAG 조건 표준화', recommendation: 'MTS-CO₂ / SP-MAG' },
            { condition: '중후판 용접이 필요하다', recommendation: 'WGH + HD-Pulse / 고출력 구성 검토' }
        ],
        applicationFields: ['자동차 부품', '판금·박판', '도금강판', '고장력강', '반복 용접 라인'],
        problems: [
            '스패터로 인한 후처리 비용과 시간 증가',
            '박판·갭 편차로 번스루 발생',
            '도금강판 용접 시 블로홀·기공 문제',
            '고속 용접 시 품질 불안정',
            '소재별 용접 조건 표준화 필요'
        ],
        specifications: {
            '솔루션 유형': '용접 공법·제어 소프트웨어',
            '적용 방식': 'TAWERS 시스템 내 공법·파라미터 적용',
            '주요 공법': 'S-AWP, HBC, Zi-Tech, MTS-CO₂, SP-MAG, HD-Pulse',
            '선정 기준': '소재, 두께, 갭, 속도, 품질 이슈',
            '파라미터·세부 조건': '현장 조건에 따라 상담 시 확인',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['용접 문제·소재 확인', '현장 조건·두께 검토', '적합 공법 선정', 'TAWERS 시스템 연동 적용', '시운전·품질 확인', '양산 적용 지원'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '상위 통합 시스템' },
            { slug: 'welding-power-controller', name: '용접전원·컨트롤러 구성', desc: 'WG · WGH · 통합 제어' },
            { slug: 'high-power-welding-system', name: '고출력 용접 시스템', desc: '중후판 대응' }
        ],
        cta: {
            title: '현재 용접 문제를 알려주세요',
            description: '스패터, 번스루, 블로홀 등 겪고 계신 문제와 소재·두께 정보를 주시면 적합한 공법을 제안드립니다.'
        }
    };
}
