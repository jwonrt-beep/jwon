// 각 제품군 페이지에 넣을 사진 경로 + 준비 가이드
// 사진 파일을 아래 경로에 넣으면 자동으로 표시됩니다 (없으면 안내 카드 표시)
var PRODUCT_IMAGE_GUIDES = {
    'tawers-welding-robot-system': {
        hero: {
            src: '/assets/images/products/tawers/hero.jpg',
            label: 'TAWERS 통합 시스템 메인',
            guide: [
                '로봇팔 · 용접전원 · 컨트롤러 · 토치가 함께 보이는 통합 시스템 전경',
                '현장에 설치된 TAWERS 용접 셀 (작업 중 또는 정지 상태)',
                '권장: 가로형 16:9, 밝고 선명한 현장 사진'
            ]
        },
        gallery: [
            {
                src: '/assets/images/products/tawers/system-overview.jpg',
                label: '시스템 전체 구성',
                guide: ['로봇+전원+지그+펜스가 한 화면에 보이는 셀 전경', '고객이 "전체 시스템"을 한눈에 이해할 수 있는 각도']
            },
            {
                src: '/assets/images/products/tawers/welding-quality.jpg',
                label: '용접 품질·비드',
                guide: ['깨끗한 용접 비드 클로즈업', '스패터가 적은 S-AWP 적용 전후 비교도 가능']
            },
            {
                src: '/assets/images/products/tawers/field-installation.jpg',
                label: '현장 설치·시운전',
                guide: ['제이원로보틱스 현장 설치·시운전 장면', '작업자·엔지니어가 로봇을 가동하는 모습']
            }
        ],
        recImages: {
            '소형 부품 자동화': { src: '/assets/images/products/tawers/rec-small-parts.jpg', guide: ['TS 로봇 + 소형 지그 + 자동차 소부품 용접 장면'] },
            '표준 프레임 용접': { src: '/assets/images/products/tawers/rec-frame.jpg', guide: ['TM 로봇 + 판금 프레임 용접 장면'] },
            '대형 구조물 용접': { src: '/assets/images/products/tawers/rec-large.jpg', guide: ['TL 로봇 + 대형 프레임/구조물 용접'] },
            '박판·고장력강 용접': { src: '/assets/images/products/tawers/rec-thin-plate.jpg', guide: ['박판 프레임 용접, HBC 적용 현장'] },
            '도금강판 용접': { src: '/assets/images/products/tawers/rec-galv.jpg', guide: ['아연도금강판 부품 용접 장면'] },
            '중후판 고출력 용접': { src: '/assets/images/products/tawers/rec-heavy.jpg', guide: ['중후판 필렛 용접, WGH 고출력 구성'] }
        },
        moduleImages: {
            '용접 로봇 매니퓰레이터 라인업': { src: '/assets/images/products/tawers/mod-robot.jpg', guide: ['TS/TM/TL 로봇 3대 비교 또는 대표 로봇'] },
            '용접전원·컨트롤러 구성': { src: '/assets/images/products/tawers/mod-power.jpg', guide: ['용접전원 · 컨트롤러 · TAWERS 통합 시스템'] },
            '용접 공법 소프트웨어': { src: '/assets/images/products/tawers/mod-process.jpg', guide: ['용접 비드 품질, 스패터 비교 사진'] },
            '고출력 용접 시스템': { src: '/assets/images/products/tawers/mod-highpower.jpg', guide: ['중후판 용접, WGH 전원 장비'] },
            '지그·포지셔너 자동화': { src: '/assets/images/products/tawers/mod-jig.jpg', guide: ['맞춤 지그 + 포지셔너 + 작업물'] },
            '턴키 로봇 자동화 셀': { src: '/assets/images/products/tawers/mod-turnkey.jpg', guide: ['펜스 포함 완성된 자동화 셀 전경'] },
            '스마트팩토리 연동 솔루션': { src: '/assets/images/products/tawers/mod-smart.jpg', guide: ['모니터링 화면 + 설비 연동 장면'] }
        }
    },
    'welding-power-controller': {
        hero: {
            src: '/assets/images/products/power/hero.jpg',
            label: '용접전원·컨트롤러 메인',
            guide: [
                '용접전원 · 컨트롤러 · TAWERS 통합 시스템 전경',
                '로봇과 용접전원이 함께 보이는 셀 사진',
                '권장: 가로형, 장비 구성이 잘 보이는 각도'
            ]
        },
        gallery: [
            { src: '/assets/images/products/power/wg-unit.jpg', label: 'WG 용접전원', guide: ['WG 계열 표준 용접전원 장비'] },
            { src: '/assets/images/products/power/wgh-unit.jpg', label: 'WGH 용접전원', guide: ['WGH 계열 고출력 전원 장비'] },
            { src: '/assets/images/products/power/controller.jpg', label: '통합 컨트롤러', guide: ['TAWERS 통합 컨트롤러 · 티칭 펜던트'] }
        ],
        seriesImages: {
            'WG 계열': { src: '/assets/images/products/power/card-wg-series.jpg', guide: ['WG 용접전원 + 표준 용접 현장'] },
            'WGH 계열': { src: '/assets/images/products/power/card-wgh-series.jpg', guide: ['WGH 고출력 전원 + 중후판 용접'] },
            'TAWERS 통합 컨트롤러': { src: '/assets/images/products/power/card-tawers-controller.jpg', guide: ['통합 컨트롤러 · 티칭 펜던트 · 로봇 연동'] }
        }
    },
    'welding-robot-manipulator-lineup': {
        hero: {
            src: '/assets/images/products/lineup/hero.jpg',
            label: '로봇 라인업 메인',
            guide: ['TS · TM · TL 3시리즈가 함께 보이거나 대표 모델', '로봇팔 형태가 잘 보이는 제품 사진', '권장: 가로형, 배경 단순']
        },
        gallery: [
            { src: '/assets/images/products/lineup/ts-series.jpg', label: 'TS 시리즈', guide: ['TS-800 또는 TS-950 제품/현장 사진', '소형·컴팩트한 로봇 강조'] },
            { src: '/assets/images/products/lineup/tm-series.jpg', label: 'TM 시리즈', guide: ['TM-1400 등 표준형 로봇 현장 사진', '일반 프레임 용접 장면'] },
            { src: '/assets/images/products/lineup/tl-series.jpg', label: 'TL 시리즈', guide: ['TL 롱암 로봇 + 대형 작업물', '넓은 작업반경이 보이는 각도'] }
        ],
        seriesImages: {
            'TS 시리즈': { src: '/assets/images/products/lineup/card-ts.jpg', guide: ['TS 로봇 단독 또는 소형 부품 용접'] },
            'TM 시리즈': { src: '/assets/images/products/lineup/card-tm.jpg', guide: ['TM 로봇 + 표준 프레임 용접'] },
            'TL 시리즈': { src: '/assets/images/products/lineup/card-tl.jpg', guide: ['TL 롱암 + 대형 구조물'] }
        }
    },
    'welding-process-software': {
        hero: {
            src: '/assets/images/products/process/hero.jpg',
            label: '용접 공법 메인',
            guide: ['용접 비드 품질 클로즈업', '스패터 전후 비교 또는 깨끗한 비드 사진', '현장 용접 장면']
        },
        gallery: [
            { src: '/assets/images/products/process/spatter-before-after.jpg', label: '스패터 개선', guide: ['S-AWP 적용 전·후 스패터 비교'] },
            { src: '/assets/images/products/process/burn-through.jpg', label: '번스루 방지', guide: ['HBC 적용 박판 용접, 깨끗한 비드'] },
            { src: '/assets/images/products/process/galvanized.jpg', label: '도금강판', guide: ['아연도금강판 용접, Zi-Tech 적용 장면'] }
        ],
        processImages: {
            'S-AWP / AWP4': { src: '/assets/images/products/process/s-awp.jpg', guide: ['저스패터 고속 용접 비드', '스패터 적은 용접 결과'] },
            'HBC': { src: '/assets/images/products/process/hbc.jpg', guide: ['박판 용접, 번스루 없는 안정적 비드'] },
            'Zi-Tech': { src: '/assets/images/products/process/zi-tech.jpg', guide: ['도금강판 용접, 블로홀 없는 결과'] },
            'MTS-CO₂ / SP-MAG / HD-Pulse': { src: '/assets/images/products/process/basic-process.jpg', guide: ['일반 MAG/CO₂ 용접 현장'] }
        },
        seriesImages: {
            'S-AWP / AWP4': { src: '/assets/images/products/process/card-s-awp.jpg', guide: ['S-AWP 적용 비드·스패터 비교'] },
            'HBC': { src: '/assets/images/products/process/card-hbc.jpg', guide: ['HBC 박판 용접 결과'] },
            'Zi-Tech': { src: '/assets/images/products/process/card-zi-tech.jpg', guide: ['도금강판 Zi-Tech 적용'] },
            'MTS-CO₂ / SP-MAG / HD-Pulse': { src: '/assets/images/products/process/card-basic.jpg', guide: ['기본 MAG/CO₂ 용접 현장'] }
        }
    },
    'high-power-welding-system': {
        hero: {
            src: '/assets/images/products/highpower/hero.jpg',
            label: '고출력 용접 메인',
            guide: ['중후판 필렛 용접 장면', 'TL 로봇 + WGH 전원 구성', '두꺼운 소재 용접 스파크/비드']
        },
        gallery: [
            { src: '/assets/images/products/highpower/wgh-unit.jpg', label: 'WGH 용접전원', guide: ['WGH 계열 고출력 전원 장비'] },
            { src: '/assets/images/products/highpower/heavy-plate.jpg', label: '중후판 용접', guide: ['두꺼운 판재 필렛/对接 용접'] },
            { src: '/assets/images/products/highpower/large-frame.jpg', label: '대형 구조물', guide: ['건설장비·산업기계 대형 프레임 용접'] }
        ],
        seriesImages: {
            '중후판 프레임 용접 구성': { src: '/assets/images/products/highpower/card-heavy-plate.jpg', guide: ['중후판 프레임 + TL + WGH'] },
            '대형 구조물 용접 구성': { src: '/assets/images/products/highpower/card-large-structure.jpg', guide: ['대형 구조물 + 포지셔너'] },
            '필렛 고속·고출력 구성': { src: '/assets/images/products/highpower/card-fillet.jpg', guide: ['필렛 고속 용접 장면'] },
            'TL + WGH 통합 고출력 셀': { src: '/assets/images/products/highpower/card-integrated-cell.jpg', guide: ['고출력 자동화 셀 전경'] }
        }
    },
    'jig-positioner-automation': {
        hero: {
            src: '/assets/images/products/jig/hero.jpg',
            label: '지그·포지셔너 메인',
            guide: ['회전 포지셔너 + 작업물 + 로봇이 함께 보이는 장면', '맞춤 지그에 작업물이 고정된 모습']
        },
        gallery: [
            { src: '/assets/images/products/jig/custom-jig.jpg', label: '맞춤 지그', guide: ['작업물 형상에 맞춘 지그 제작 사례'] },
            { src: '/assets/images/products/jig/positioner.jpg', label: '회전 포지셔너', guide: ['포지셔너 회전 + 다면 용접 장면'] },
            { src: '/assets/images/products/jig/robot-jig-cell.jpg', label: '로봇+지그 연동', guide: ['로봇과 지그가 연동된 셀 전경'] }
        ],
        seriesImages: {
            '맞춤 지그': { src: '/assets/images/products/jig/card-custom-jig.jpg', guide: ['맞춤 지그 + 작업물 고정 장면'] },
            '회전 포지셔너': { src: '/assets/images/products/jig/card-rotary.jpg', guide: ['회전 포지셔너 + 다면 용접'] },
            '슬라이드 유닛': { src: '/assets/images/products/jig/card-slide.jpg', guide: ['슬라이드 + 대형 워크 이동'] },
            '클램핑·센서·로봇 연동 통합': { src: '/assets/images/products/jig/card-integrated.jpg', guide: ['센서·클램핑·로봇 연동 셀'] }
        }
    },
    'turnkey-robot-automation-cell': {
        hero: {
            src: '/assets/images/products/turnkey/hero.jpg',
            label: '턴키 자동화 셀 메인',
            guide: ['안전펜스 + 로봇 + 지그 + 컨트롤러가 포함된 완성 셀 전경', '현장 납품·가동 중인 셀 사진']
        },
        gallery: [
            { src: '/assets/images/products/turnkey/cell-layout.jpg', label: '셀 레이아웃', guide: ['셀 평면도 또는 조감도 스타일 현장 사진'] },
            { src: '/assets/images/products/turnkey/safety-fence.jpg', label: '안전펜스·인터록', guide: ['펜스, 안전 door, 인터록 장치'] },
            { src: '/assets/images/products/turnkey/commissioning.jpg', label: '시운전·교육', guide: ['엔지니어 시운전, 작업자 교육 장면'] }
        ]
    },
    'smart-factory-integration': {
        hero: {
            src: '/assets/images/products/smartfactory/hero.jpg',
            label: '스마트팩토리 메인',
            guide: ['모니터링 대시보드 + 용접 설비', '데이터 화면과 현장 설비가 함께 보이는 구도']
        },
        gallery: [
            { src: '/assets/images/products/smartfactory/dashboard.jpg', label: '모니터링 대시보드', guide: ['공정 상태, 용접 이력 화면 캡처 또는 연출'] },
            { src: '/assets/images/products/smartfactory/data-flow.jpg', label: '데이터 연동', guide: ['설비 → 데이터 → MES 흐름을 보여주는 이미지'] },
            { src: '/assets/images/products/smartfactory/quality-log.jpg', label: '품질 이력', guide: ['용접 품질 데이터, 작업 이력 관리 화면'] }
        ]
    }
};

function getProductImageGuide(slug) {
    var aliases = {
        tawers: 'tawers-welding-robot-system',
        'ts-800': 'model', 'ts-950': 'model', 'tm-1100': 'model', 'tm-1400': 'model',
        'tm-1600': 'model', 'tm-1800': 'model', 'tm-2000': 'model', 'tl-1800': 'model', 'tl-2000': 'model',
        'wg-series': 'power', 'wgh-series': 'power', 'tawers-controller': 'power',
        's-awp': 'process', 'hbc': 'process', 'zi-tech': 'process', 'basic-arc-process': 'process',
        'heavy-plate-frame': 'highpower', 'large-structure': 'highpower', 'fillet-high-output': 'highpower', 'tl-wgh-integrated-cell': 'highpower',
        'custom-jig': 'jig', 'rotary-positioner': 'jig', 'slide-unit': 'jig', 'integrated-setup': 'jig'
    };
    var key = aliases[slug] === 'model' ? slug : aliases[slug] === 'power' ? slug : aliases[slug] === 'process' ? slug : aliases[slug] === 'highpower' ? slug : aliases[slug] === 'jig' ? slug : (aliases[slug] || slug);
    if (PRODUCT_IMAGE_GUIDES[key]) return PRODUCT_IMAGE_GUIDES[key];
    if (typeof getJigConfig === 'function' && getJigConfig(slug)) {
        var jig = getJigConfig(slug);
        var jigGuide = PRODUCT_IMAGE_GUIDES['jig-positioner-automation'];
        var jigImg = jigGuide && jigGuide.seriesImages ? jigGuide.seriesImages[jig.name] : null;
        return {
            hero: jigImg || {
                src: '/assets/images/products/jig/' + slug + '.jpg',
                label: jig.name + ' 현장 사진',
                guide: [
                    jig.name + ' 적용 현장 (지그·포지셔너 + 로봇)',
                    '작업물 고정·회전·슬라이드 장면',
                    'TAWERS 셀 내 지그·포지셔너 연동 구성'
                ]
            },
            gallery: [
                { src: '/assets/images/products/jig/' + slug + '-field.jpg', label: '현장 적용', guide: [jig.name + ' 현장 용접'] },
                { src: '/assets/images/products/jig/' + slug + '-setup.jpg', label: '셋업·지그', guide: ['작업물 셋업·지그 디테일'] }
            ]
        };
    }
    if (typeof getHighPowerConfig === 'function' && getHighPowerConfig(slug)) {
        var hp = getHighPowerConfig(slug);
        var hpGuide = PRODUCT_IMAGE_GUIDES['high-power-welding-system'];
        var hpImg = hpGuide && hpGuide.seriesImages ? hpGuide.seriesImages[hp.name] : null;
        return {
            hero: hpImg || {
                src: '/assets/images/products/highpower/' + slug + '.jpg',
                label: hp.name + ' 현장 사진',
                guide: [
                    hp.name + ' 적용 현장 (TL + WGH 구성)',
                    '중후판·대형 워크 용접 장면',
                    '고출력 용접 비드·스파크 결과'
                ]
            },
            gallery: [
                { src: '/assets/images/products/highpower/' + slug + '-field.jpg', label: '현장 적용', guide: [hp.name + ' 현장 용접'] },
                { src: '/assets/images/products/highpower/' + slug + '-cell.jpg', label: '셀 구성', guide: ['로봇+전원+지그 통합 구성'] }
            ]
        };
    }
    if (typeof getWeldingProcess === 'function' && getWeldingProcess(slug)) {
        var wp = getWeldingProcess(slug);
        var processGuide = PRODUCT_IMAGE_GUIDES['welding-process-software'];
        var procImg = processGuide && processGuide.seriesImages ? processGuide.seriesImages[wp.name] : null;
        return {
            hero: procImg || {
                src: '/assets/images/products/process/' + slug + '.jpg',
                label: wp.name + ' 적용 사진',
                guide: [
                    wp.name + ' 용접 비드·품질 결과 사진',
                    '적용 전·후 비교 (스패터/번스루/블로홀 등)',
                    'TAWERS 시스템 현장 적용 장면'
                ]
            },
            gallery: [
                { src: '/assets/images/products/process/' + slug + '-before-after.jpg', label: '적용 전·후', guide: [wp.name + ' 적용 전후 비교'] },
                { src: '/assets/images/products/process/' + slug + '-field.jpg', label: '현장 적용', guide: ['현장 용접 장면'] }
            ]
        };
    }
    if (typeof getPowerSeries === 'function' && getPowerSeries(slug)) {
        var ps = getPowerSeries(slug);
        var lineupGuide = PRODUCT_IMAGE_GUIDES['welding-power-controller'];
        var seriesImg = lineupGuide && lineupGuide.seriesImages ? lineupGuide.seriesImages[ps.name] : null;
        return {
            hero: seriesImg || {
                src: '/assets/images/products/power/' + slug + '.jpg',
                label: ps.name + ' 제품/현장 사진',
                guide: [
                    ps.name + ' 용접전원·컨트롤러 장비 사진',
                    'TAWERS 시스템 내 ' + ps.name + ' 연동 구성',
                    '현장 설치 후 용접 작업 장면'
                ]
            },
            gallery: [
                { src: '/assets/images/products/power/' + slug + '-field.jpg', label: '현장 적용', guide: [ps.name + ' 현장 용접 장면'] },
                { src: '/assets/images/products/power/' + slug + '-detail.jpg', label: '장비 디테일', guide: ['전원·컨트롤러·연동 장치 클로즈업'] }
            ]
        };
    }
    if (typeof getRobotModel === 'function' && getRobotModel(slug)) {
        return {
            hero: {
                src: '/assets/images/products/robots/' + slug + '.jpg',
                label: getRobotModel(slug).name + ' 제품/현장 사진',
                guide: [
                    getRobotModel(slug).name + ' 로봇 단독 제품 사진 (정면·측면)',
                    '현장 설치 후 ' + getRobotModel(slug).name + ' 용접 작업 장면',
                    '작업반경·로봇 크기가 보이는 각도'
                ]
            },
            gallery: [
                { src: '/assets/images/products/robots/' + slug + '-field.jpg', label: '현장 적용', guide: ['해당 모델 현장 용접 장면'] },
                { src: '/assets/images/products/robots/' + slug + '-detail.jpg', label: '로봇 디테일', guide: ['로봇팔·토치·와이어 송급 클로즈업'] }
            ]
        };
    }
    return null;
}

function getGuideLookup(slug) {
    var g = getProductImageGuide(slug);
    if (!g) return {};
    return {
        hero: g.hero,
        gallery: g.gallery || [],
        rec: g.recImages || {},
        module: g.moduleImages || {},
        series: g.seriesImages || {},
        process: g.processImages || {}
    };
}
