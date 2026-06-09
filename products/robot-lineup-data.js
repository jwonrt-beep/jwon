// TAWERS → 로봇 매니퓰레이터 라인업 → 시리즈 → 모델 계층 데이터
var ROBOT_LINEUP_HIERARCHY = {
    parentSystem: {
        name: 'TAWERS 용접로봇 시스템',
        slug: 'tawers-welding-robot-system',
        url: '/products/tawers-welding-robot-system/'
    },
    lineup: {
        name: '용접 로봇 매니퓰레이터 라인업',
        slug: 'welding-robot-manipulator-lineup',
        url: '/products/welding-robot-manipulator-lineup/',
        description: 'TAWERS 시스템에서 작업물 크기, 설치 공간, 용접 범위에 따라 선택하는 로봇팔 라인업입니다. 소형 워크용 TS 시리즈, 표준 범용형 TM 시리즈, 대형 워크용 TL 시리즈를 현장 조건에 맞춰 제안합니다.'
    },
    series: {
        'ts-series': {
            id: 'ts-series',
            name: 'TS 시리즈',
            position: '소형·공간절약형 용접 로봇',
            description: '좁은 작업 공간과 소형 부품 용접에 적합한 컴팩트 아크 용접 로봇 라인업입니다. 자동차 소부품, 판금 부품, 브라켓, 반복 용접 공정에 효율적으로 적용할 수 있습니다.',
            models: ['ts-800', 'ts-950'],
            tags: ['소형', '공간절약', '정밀용접', '반복용접'],
            sites: ['자동차 소부품', '소형 판금 부품', '브라켓', '작은 지그', '협소한 자동화 셀'],
            badge: '소형·공간절약형'
        },
        'tm-series': {
            id: 'tm-series',
            name: 'TM 시리즈',
            position: '표준·범용형 용접 로봇',
            description: '소형 부품부터 중대형 프레임까지 폭넓게 대응하는 표준형 아크 용접 로봇 라인업입니다. 작업반경과 현장 공간에 따라 다양한 모델 구성이 가능하며, 일반 제조업과 프레임 용접 현장에 가장 범용적으로 제안할 수 있습니다.',
            models: ['tm-1100', 'tm-1400', 'tm-1600', 'tm-1800', 'tm-2000'],
            tags: ['표준형', '범용', '프레임용접', '판금용접', '일반제조업'],
            sites: ['일반 제조업', '판금 부품', '기계 프레임', '자동차 부품', '스테인리스 제품', '반복 생산 공정'],
            badge: '표준·범용형',
            highlight: true
        },
        'tl-series': {
            id: 'tl-series',
            name: 'TL 시리즈',
            position: '대형·장축형 용접 로봇',
            description: '긴 작업반경이 필요한 대형 프레임, 산업기계 부품, 구조물 용접에 적합한 롱암 타입 아크 용접 로봇 라인업입니다. 대형 워크와 넓은 작업셀 구성에 적합합니다.',
            models: ['tl-1800', 'tl-2000'],
            tags: ['대형작업', '장축', '구조물', '롱암', '대형프레임'],
            sites: ['산업기계 프레임', '건설장비 부품', '농기계 부품', '대형 지그', '대형 구조물', '넓은 작업셀'],
            badge: '대형·장축형'
        }
    }
};

var ROBOT_MODEL_CATALOG = {
    'ts-800': {
        slug: 'ts-800',
        name: 'TS-800',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 로봇 매니퓰레이터 라인업',
        series: 'TS 시리즈',
        seriesSlug: 'ts-series',
        position: '컴팩트 소형 모델',
        tagline: '좁은 공간에서 소형 부품을 반복 용접하는 현장에 적합한 컴팩트 용접 로봇입니다.',
        axisStructure: '6축 다관절',
        payload: '8kg',
        maxReach: '841mm',
        minReach: '159mm',
        workRange: '682mm',
        repeatability: '±0.05mm 이내',
        bodyWeight: '약 55kg',
        installType: '바닥 / 천장 / 벽면',
        recommendedProcess: ['MIG/MAG 아크 용접', 'CO₂ 용접', '스테인리스 MIG 용접', '소형 부품 반복 용접'],
        recommendedWelding: ['S-AWP', 'HBC', '일반 MIG/MAG 공법'],
        recommendedSites: ['자동차 소부품', '소형 판금 부품', '브라켓', '작은 지그', '협소한 자동화 셀'],
        recommendedCombinations: ['TS-800 + WG 계열 + S-AWP', 'TS-800 + HBC', 'TS-800 + 소형 맞춤 지그'],
        similarComparison: [
            'TS-950은 TS-800보다 넓은 작업범위가 필요한 소형·중소형 워크에 적합합니다.',
            'TM-1100은 TS 시리즈보다 더 큰 표준형 작업셀 구성이 필요한 경우 검토합니다.'
        ],
        consultationCriteria: ['작업물 사진', '작업물 도면', '소재', '두께', '용접 길이', '월 생산량', '설치 가능 공간', '현재 용접 문제'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-robot/ts-800/'
    },
    'ts-950': {
        slug: 'ts-950',
        name: 'TS-950',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 로봇 매니퓰레이터 라인업',
        series: 'TS 시리즈',
        seriesSlug: 'ts-series',
        position: '소형 확장 모델',
        tagline: 'TS-800보다 넓은 작업범위가 필요한 소형·중소형 부품 용접 현장에 적합합니다.',
        axisStructure: '6축 다관절',
        payload: '8kg',
        maxReach: '971mm',
        minReach: '190mm',
        workRange: '781mm',
        repeatability: '±0.05mm 이내',
        bodyWeight: '약 56kg',
        installType: '바닥 / 천장 / 벽면',
        recommendedProcess: ['MIG/MAG 아크 용접', 'CO₂ 용접', '스테인리스 MIG 용접', '소형·중소형 부품 반복 용접'],
        recommendedWelding: ['S-AWP', 'HBC', '일반 MIG/MAG 공법'],
        recommendedSites: ['소형 프레임', '자동차 부품', '판금 부품', '반복 생산 공정', '소형 자동화 셀'],
        recommendedCombinations: ['TS-950 + WG 계열 + S-AWP', 'TS-950 + HBC', 'TS-950 + 소형/중소형 지그'],
        similarComparison: [
            'TS-800은 더 좁은 공간과 작은 워크에 적합합니다.',
            'TM-1100은 더 큰 작업반경과 표준형 셀 구성이 필요할 때 검토합니다.'
        ],
        consultationCriteria: ['작업물 사진', '작업물 도면', '소재', '두께', '용접 길이', '월 생산량', '설치 가능 공간', '현재 용접 문제'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-robot/ts-950/'
    },
    'tm-1100': {
        slug: 'tm-1100',
        name: 'TM-1100',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 로봇 매니퓰레이터 라인업',
        series: 'TM 시리즈',
        seriesSlug: 'tm-series',
        position: '컴팩트 표준형',
        tagline: '작은 부품과 중소형 워크를 표준 자동화 셀에서 용접하기 좋은 모델입니다.',
        axisStructure: '6축 다관절',
        payload: '6kg',
        maxReach: '1,163mm',
        minReach: '418mm',
        workRange: '745mm',
        repeatability: '±0.08mm 이내',
        bodyWeight: '약 156kg',
        installType: '바닥 / 천장',
        recommendedProcess: ['MIG/MAG 아크 용접', 'CO₂ 용접', '스테인리스 MIG 용접', '중소형 부품 용접'],
        recommendedWelding: ['S-AWP', 'HBC', 'Zi-Tech', '일반 MIG/MAG 공법'],
        recommendedSites: ['중소형 부품', '작은 프레임', '판금 용접', '협소한 표준 용접셀'],
        recommendedCombinations: ['TM-1100 + WG 계열', 'TM-1100 + S-AWP', 'TM-1100 + 소형/중형 지그'],
        similarComparison: [
            'TS-950은 더 작은 공간과 소형 워크에 적합합니다.',
            'TM-1400은 더 범용적인 표준형 구성이 필요할 때 검토합니다.'
        ],
        consultationCriteria: ['작업물 사진', '작업물 도면', '소재', '두께', '용접 길이', '월 생산량', '설치 가능 공간', '현재 용접 문제'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-robot/tm-1100/'
    },
    'tm-1400': {
        slug: 'tm-1400',
        name: 'TM-1400',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 로봇 매니퓰레이터 라인업',
        series: 'TM 시리즈',
        seriesSlug: 'tm-series',
        position: '대표 표준형',
        tagline: '가장 범용적으로 제안하기 좋은 표준형 아크 용접 로봇입니다. 일반 제조업, 판금, 프레임 용접에 폭넓게 적용할 수 있습니다.',
        axisStructure: '6축 다관절',
        payload: '6kg',
        maxReach: '1,437mm',
        minReach: '404mm',
        workRange: '1,033mm',
        repeatability: '±0.08mm 이내',
        bodyWeight: '약 170kg',
        installType: '바닥 / 천장',
        recommendedProcess: ['MIG/MAG 아크 용접', 'CO₂ 용접', '스테인리스 MIG 용접', '프레임 용접', '판금 용접'],
        recommendedWelding: ['S-AWP', 'HBC', 'Zi-Tech', '일반 MIG/MAG 공법'],
        recommendedSites: ['일반 제조업', '판금', '기계 프레임', '자동차 부품', '반복 생산 공정'],
        recommendedCombinations: ['TM-1400 + WG 계열 + S-AWP', 'TM-1400 + HBC', 'TM-1400 + Zi-Tech', 'TM-1400 + 맞춤 지그'],
        similarComparison: [
            'TM-1100은 더 좁은 공간과 작은 워크에 적합합니다.',
            'TM-1600은 TM-1400보다 넓은 작업범위가 필요할 때 검토합니다.',
            'TM-1800은 긴 용접선과 대형 프레임 작업에 적합합니다.'
        ],
        consultationCriteria: ['작업물 사진', '작업물 도면', '소재', '두께', '용접 길이', '월 생산량', '설치 가능 공간', '현재 용접 문제', '자동화 목표'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-robot/tm-1400/'
    },
    'tm-1600': {
        slug: 'tm-1600',
        name: 'TM-1600',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 로봇 매니퓰레이터 라인업',
        series: 'TM 시리즈',
        seriesSlug: 'tm-series',
        position: '중형 워크 대응',
        tagline: 'TM-1400보다 넓은 작업반경이 필요하지만, 대형 장축 모델까지는 필요하지 않은 중형 워크에 적합합니다.',
        axisStructure: '6축 다관절',
        payload: '4kg',
        maxReach: '1,639mm',
        minReach: '513mm',
        workRange: '1,126mm',
        repeatability: '±0.08mm 이내',
        bodyWeight: '약 180kg',
        installType: '바닥 / 천장',
        recommendedProcess: ['MIG/MAG 아크 용접', 'CO₂ 용접', '스테인리스 MIG 용접', '중형 프레임 용접'],
        recommendedWelding: ['S-AWP', 'HBC', 'Zi-Tech', '일반 MIG/MAG 공법'],
        recommendedSites: ['중형 프레임', '설비 부품', '중형 판금 구조물', '일반 제조업 확장형 셀'],
        recommendedCombinations: ['TM-1600 + WG 계열', 'TM-1600 + S-AWP', 'TM-1600 + 중형 지그'],
        similarComparison: [
            'TM-1400은 더 범용적인 표준형 모델입니다.',
            'TM-1800은 더 긴 작업반경과 장축 구성이 필요할 때 검토합니다.'
        ],
        cautionNote: '가반중량이 4kg으로 표기되어 있어 토치 구성, 케이블 구성, 주변 장치 선택 시 실제 적용성 확인이 필요합니다.',
        consultationCriteria: ['작업물 사진', '작업물 도면', '소재', '두께', '용접 길이', '월 생산량', '설치 가능 공간', '현재 용접 문제'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-robot/tm-1600/'
    },
    'tm-1800': {
        slug: 'tm-1800',
        name: 'TM-1800',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 로봇 매니퓰레이터 라인업',
        series: 'TM 시리즈',
        seriesSlug: 'tm-series',
        position: '장축 표준형',
        tagline: '긴 용접선과 넓은 작업반경이 필요한 대형 프레임 용접에 적합한 장축 표준형 모델입니다.',
        axisStructure: '6축 다관절',
        payload: '6kg',
        maxReach: '1,809mm',
        minReach: '430mm',
        workRange: '1,379mm',
        repeatability: '±0.08mm 이내',
        bodyWeight: '약 215kg',
        installType: '바닥 / 천장',
        recommendedProcess: ['MIG/MAG 아크 용접', 'CO₂ 용접', '스테인리스 MIG 용접', '대형 프레임 용접', '긴 용접선 작업'],
        recommendedWelding: ['S-AWP', 'Zi-Tech', 'WGH 계열 검토', '일반 MIG/MAG 공법'],
        recommendedSites: ['대형 프레임', '산업기계 부품', '긴 용접선', '넓은 지그 구성'],
        recommendedCombinations: ['TM-1800 + WG 계열 + S-AWP', 'TM-1800 + WGH 계열 검토', 'TM-1800 + 포지셔너'],
        similarComparison: [
            'TM-1600은 중형 워크에 적합합니다.',
            'TM-2000은 TM 시리즈 중 더 넓은 작업반경이 필요할 때 검토합니다.',
            'TL-1800은 대형 워크와 높은 가반중량 조건에 적합합니다.'
        ],
        consultationCriteria: ['작업물 사진', '작업물 도면', '소재', '두께', '용접 길이', '월 생산량', '설치 가능 공간', '현재 용접 문제'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-robot/tm-1800/'
    },
    'tm-2000': {
        slug: 'tm-2000',
        name: 'TM-2000',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 로봇 매니퓰레이터 라인업',
        series: 'TM 시리즈',
        seriesSlug: 'tm-series',
        position: '대형 작업반경 모델',
        tagline: 'TM 시리즈 중 넓은 작업반경이 필요한 대형 워크와 구조물 용접에 적합합니다.',
        axisStructure: '6축 다관절',
        payload: '6kg',
        maxReach: '2,011mm',
        minReach: '550mm',
        workRange: '1,461mm',
        repeatability: '±0.10mm 이내',
        bodyWeight: '약 217kg',
        installType: '바닥 / 천장',
        recommendedProcess: ['MIG/MAG 아크 용접', 'CO₂ 용접', '스테인리스 MIG 용접', '대형 구조물 용접', '장축 워크 용접'],
        recommendedWelding: ['S-AWP', 'Zi-Tech', 'WGH 계열 검토', '일반 MIG/MAG 공법'],
        recommendedSites: ['대형 구조물', '긴 프레임', '넓은 지그 구성', '장축 부품'],
        recommendedCombinations: ['TM-2000 + WG 계열', 'TM-2000 + WGH 계열 검토', 'TM-2000 + 대형 지그/포지셔너'],
        similarComparison: [
            'TM-1800은 긴 작업반경이 필요한 장축 표준형 모델입니다.',
            'TL-2000은 대형 워크와 롱암 구성이 더 필요한 경우 검토합니다.'
        ],
        consultationCriteria: ['작업물 사진', '작업물 도면', '소재', '두께', '용접 길이', '월 생산량', '설치 가능 공간', '현재 용접 문제'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-robot/tm-2000/'
    },
    'tl-1800': {
        slug: 'tl-1800',
        name: 'TL-1800',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 로봇 매니퓰레이터 라인업',
        series: 'TL 시리즈',
        seriesSlug: 'tl-series',
        position: '대형 워크 대응 롱암 모델',
        tagline: '긴 작업반경과 8kg 가반중량이 필요한 대형 워크 용접 현장에 적합합니다.',
        axisStructure: '6축 다관절',
        payload: '8kg',
        maxReach: '1,801mm',
        minReach: '383mm',
        workRange: '1,418mm',
        repeatability: '±0.08mm 이내',
        bodyWeight: '약 215kg',
        installType: '바닥 / 천장',
        recommendedProcess: ['MIG/MAG 아크 용접', 'CO₂ 용접', '스테인리스 MIG 용접', '대형 프레임 용접', '중후판 용접 검토'],
        recommendedWelding: ['S-AWP', 'WGH 계열', '고출력 용접 시스템', '일반 MIG/MAG 공법'],
        recommendedSites: ['산업기계 프레임', '건설장비 부품', '농기계 부품', '대형 지그', '대형 워크'],
        recommendedCombinations: ['TL-1800 + WGH 계열', 'TL-1800 + 포지셔너', 'TL-1800 + 고출력 용접 시스템'],
        similarComparison: [
            'TM-1800은 장축 표준형 모델입니다.',
            'TM-2000은 넓은 작업반경 중심의 TM 시리즈 모델입니다.',
            'TL-2000은 더 넓은 작업범위가 필요한 대형 워크에 적합합니다.'
        ],
        consultationCriteria: ['작업물 사진', '작업물 도면', '소재', '두께', '용접 길이', '월 생산량', '설치 가능 공간', '현재 용접 문제'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-robot/tl-1800/'
    },
    'tl-2000': {
        slug: 'tl-2000',
        name: 'TL-2000',
        parentSystem: 'TAWERS 용접로봇 시스템',
        parentLineup: '용접 로봇 매니퓰레이터 라인업',
        series: 'TL 시리즈',
        seriesSlug: 'tl-series',
        position: '대형 장축 모델',
        tagline: '넓은 작업범위가 필요한 대형 구조물 용접에 적합한 장축형 모델입니다.',
        axisStructure: '6축 다관절',
        payload: '6kg',
        maxReach: '1,999mm',
        minReach: '491mm',
        workRange: '1,508mm',
        repeatability: '±0.15mm 이내',
        bodyWeight: '약 216kg',
        installType: '바닥 / 천장',
        recommendedProcess: ['MIG/MAG 아크 용접', 'CO₂ 용접', '스테인리스 MIG 용접', '대형 구조물 용접', '장축 워크 용접'],
        recommendedWelding: ['S-AWP', 'WGH 계열', '고출력 용접 시스템', '일반 MIG/MAG 공법'],
        recommendedSites: ['대형 구조물', '대형 프레임', '장축 부품', '넓은 작업셀', '긴 용접선'],
        recommendedCombinations: ['TL-2000 + WGH 계열', 'TL-2000 + 포지셔너', 'TL-2000 + 턴키 자동화 셀'],
        similarComparison: [
            'TL-1800은 8kg 가반중량이 필요한 대형 워크에 적합합니다.',
            'TM-2000은 TM 시리즈 안에서 넓은 작업반경이 필요한 경우 검토합니다.'
        ],
        cautionNote: '반복정밀도는 ±0.15mm 이내로 표기되어 있어, 초정밀 소형부품보다는 대형 워크와 넓은 작업범위 대응 중심으로 설명해주세요.',
        consultationCriteria: ['작업물 사진', '작업물 도면', '소재', '두께', '용접 길이', '월 생산량', '설치 가능 공간', '현재 용접 문제'],
        quoteMethod: '현장 조건별 별도 산정',
        detailUrl: '/products/welding-robot/tl-2000/'
    }
};

function getRobotModel(slug) {
    return ROBOT_MODEL_CATALOG[slug] || null;
}

function getRobotSeries(seriesSlug) {
    return ROBOT_LINEUP_HIERARCHY.series[seriesSlug] || null;
}

function getRobotLineupHierarchy() {
    return ROBOT_LINEUP_HIERARCHY;
}

function buildLineupCardsFromData() {
    var h = ROBOT_LINEUP_HIERARCHY;
    var order = ['ts-series', 'tm-series', 'tl-series'];
    return order.map(function (key) {
        var s = h.series[key];
        var modelLinks = s.models.map(function (slug) {
            var m = ROBOT_MODEL_CATALOG[slug];
            return { name: m.name, url: m.detailUrl };
        });
        return {
            name: s.name,
            badge: s.badge,
            desc: s.description,
            tags: s.tags,
            models: s.models.map(function (slug) { return ROBOT_MODEL_CATALOG[slug].name; }).join(', '),
            modelLinks: modelLinks,
            highlight: !!s.highlight,
            position: s.position
        };
    });
}

function buildModelDetailContent(slug) {
    var m = ROBOT_MODEL_CATALOG[slug];
    if (!m) return null;
    var h = ROBOT_LINEUP_HIERARCHY;
    var sitesSummary = m.recommendedSites.slice(0, 3).join(' · ');
    return {
        pageType: 'model',
        parentSystem: {
            label: '상위 시스템',
            text: m.parentSystem,
            link: h.parentSystem.url,
            linkText: 'TAWERS 시스템 보기'
        },
        hierarchy: [
            { label: '상위 라인업', text: m.parentLineup, link: h.lineup.url },
            { label: '시리즈', text: m.series },
            { label: '모델', text: m.name }
        ],
        heroBadge: m.series,
        heroTitle: m.name,
        heroPosition: m.position,
        heroDescription: m.tagline,
        cautionNote: m.cautionNote || null,
        summaryCards: [
            { title: '가반중량', desc: m.payload },
            { title: '최대 도달거리', desc: m.maxReach },
            { title: '반복정밀도', desc: m.repeatability },
            { title: '추천 현장', desc: sitesSummary }
        ],
        specifications: {
            '축 구조': m.axisStructure,
            '가반중량': m.payload,
            '최대 도달거리': m.maxReach,
            '최소 도달거리': m.minReach,
            '전후 작업범위': m.workRange,
            '반복정밀도': m.repeatability,
            '본체 중량': m.bodyWeight,
            '설치 방식': m.installType,
            '추천 공정': m.recommendedProcess.join(' · '),
            '추천 공법': m.recommendedWelding.join(' · '),
            '견적 방식': m.quoteMethod
        },
        applicationFields: m.recommendedSites,
        recommendedCombinations: m.recommendedCombinations,
        similarComparison: m.similarComparison,
        consultationCriteria: m.consultationCriteria,
        cta: {
            title: '이 모델이 현장에 맞는지 작업물 기준으로 검토해드립니다.',
            description: '작업물 사진, 소재, 두께, 생산량, 현재 용접 문제를 알려주시면 해당 모델의 적용 가능 여부와 더 적합한 구성이 있는지 함께 검토해드립니다.',
            lineupBtn: true
        }
    };
}
