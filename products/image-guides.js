// 각 제품군 페이지에 넣을 사진 경로 + 준비 가이드
// 사진 파일을 아래 경로에 넣으면 자동으로 표시 (없으면 안내 카드 표시)
var PRODUCT_IMAGE_GUIDES = {
    'tawers-welding-robot-system': {
        hero: {
            src: '/assets/images/products/tawers/hero.jpg',
            label: 'TAWERS 통합 시스템 메인',
            role: 'hero',
            guide: [
                '로봇팔 · 용접전원 · 컨트롤러 · 토치가 함께 보이는 통합 시스템 전경',
                '현장에 설치된 TAWERS 용접 셀 (작업 중 또는 정지 상태)',
                '권장: 가로형 16:9, 밝고 선명한 현장 사진'
            ]
        },
        systemArchitecture: {
            src: '/assets/images/products/tawers/system-architecture.jpg',
            label: 'TAWERS 시스템 아키텍처',
            role: 'architecture',
            imageType: '개념 비교 이미지',
            guide: [
                '중앙에 TAWERS 용접로봇 시스템을 배치하고, 주변에 로봇 라인업, 용접전원·컨트롤러, 용접 공법, 고출력 구성, 지그·포지셔너, 턴키셀, 스마트팩토리 연동이 연결된 구조도',
                '고객이 TAWERS가 단일 장비가 아니라 상위 통합 시스템임을 한눈에 이해할 수 있는 이미지',
                '사진이 아니라 인포그래픽 또는 구조도 형태여도 좋음'
            ]
        },
        configurationFlow: {
            src: '/assets/images/products/tawers/configuration-flow.jpg',
            label: 'TAWERS 구성 선택 흐름',
            role: 'flow',
            imageType: '개념 비교 이미지',
            guide: [
                '작업물 확인 → 로봇 라인업 선택 → 용접전원·출력 선택 → 용접 공법 선택 → 지그·포지셔너 설계 → 턴키셀·스마트팩토리 연동 흐름',
                '고객이 어떤 순서로 TAWERS 시스템 구성이 결정되는지 이해할 수 있는 단계형 이미지',
                '인포그래픽형 이미지 권장'
            ]
        },
        systemMap: {
            src: '/assets/images/products/tawers/system-map.jpg',
            label: 'TAWERS 하위 구성 연결 맵',
            role: 'map',
            imageType: '개념 비교 이미지',
            guide: [
                'TAWERS → 로봇 라인업 → 모델 상세 → 용접 공법 → 지그·포지셔너 → 턴키셀 → 스마트팩토리로 연결되는 계층 구조',
                '제품군 목록에서 TAWERS가 상위 부모 시스템임을 보여주는 연결 맵'
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
            '용접 로봇 매니퓰레이터 라인업': { src: '/assets/images/products/tawers/mod-robot.jpg', fallback: '/assets/images/products/lineup/hero.jpg', guide: ['TS/TM/TL 로봇 3대 비교 또는 대표 로봇'] },
            '용접전원·컨트롤러 구성': { src: '/assets/images/products/tawers/mod-power.jpg', fallback: '/assets/images/products/power/hero.jpg', guide: ['용접전원 · 컨트롤러 · TAWERS 통합 시스템'] },
            '용접 공법 소프트웨어': { src: '/assets/images/products/tawers/mod-process.jpg', fallback: '/assets/images/products/process/hero.jpg', guide: ['용접 비드 품질, 스패터 비교 사진'] },
            '고출력 용접 시스템': { src: '/assets/images/products/tawers/mod-highpower.jpg', fallback: '/assets/images/products/highpower/hero.jpg', guide: ['중후판 용접, WGH 전원 장비'] },
            '지그·포지셔너 자동화': { src: '/assets/images/products/tawers/mod-jig.jpg', fallback: '/assets/images/products/jig/hero.jpg', guide: ['맞춤 지그 + 포지셔너 + 작업물'] },
            '턴키 로봇 자동화 셀': { src: '/assets/images/products/tawers/mod-turnkey.jpg', fallback: '/assets/images/products/turnkey/hero.jpg', guide: ['펜스 포함 완성된 자동화 셀 전경'] },
            '스마트팩토리 연동 솔루션': { src: '/assets/images/products/tawers/mod-smart.jpg', fallback: '/assets/images/products/smartfactory/hero.jpg', guide: ['모니터링 화면 + 설비 연동 장면'] }
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
        modelComparison: {
            src: '/assets/images/products/lineup/model-comparison.jpg',
            label: 'TS·TM·TL 모델 비교',
            role: 'compare',
            imageType: '개념 비교 이미지',
            guide: [
                'TS, TM, TL 시리즈를 한 화면에서 비교하는 이미지',
                '소형·표준형·대형 워크 대응 차이가 직관적으로 보이는 구성',
                '제품 단독 사진 또는 인포그래픽 모두 가능'
            ]
        },
        reachComparison: {
            src: '/assets/images/products/lineup/reach-comparison.jpg',
            label: '작업반경 비교',
            role: 'compare',
            imageType: '개념 비교 이미지',
            guide: [
                'TS-800 ~ TL-2000 작업반경 차이를 시각적으로 보여주는 이미지',
                '실제 수치가 들어갈 경우 정확한 수치만 사용',
                '수치 없이 개념 비교형으로 만들어도 됨'
            ]
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
        processSelectionMap: {
            src: '/assets/images/products/process/process-selection-map.jpg',
            label: '문제별 용접 공법 선택표',
            role: 'map',
            imageType: '개념 비교 이미지',
            guide: [
                '스패터 많음 → S-AWP / AWP4 · 박판 뚫림 → HBC · 도금강판 블로홀 → Zi-Tech',
                '생산 속도 → S-AWP / HD-Pulse · 중후판 고출력 → WGH 고출력 시스템',
                '현장 문제 기준 공법 선택 매트릭스 이미지'
            ]
        },
        gallery: [
            { src: '/assets/images/products/process/spatter-before-after.jpg', label: '스패터 개선', imageType: '개념 비교 이미지', guide: ['S-AWP 적용 전·후 스패터 비교 (실제 테스트 사진 또는 개념 비교)'] },
            { src: '/assets/images/products/process/burn-through.jpg', label: '번스루 방지', imageType: '개념 비교 이미지', guide: ['HBC 적용 박판 용접, 깨끗한 비드'] },
            { src: '/assets/images/products/process/galvanized.jpg', label: '도금강판', imageType: '개념 비교 이미지', guide: ['아연도금강판 용접, Zi-Tech 적용 장면'] }
        ],
        processImages: {
            'S-AWP / AWP4': { src: '/assets/images/products/process/s-awp.jpg', imageType: '개념 비교 이미지', guide: ['저스패터 고속 용접 비드', '스패터 적은 용접 결과'] },
            'HBC': { src: '/assets/images/products/process/hbc.jpg', imageType: '개념 비교 이미지', guide: ['박판 용접, 번스루 없는 안정적 비드'] },
            'Zi-Tech': { src: '/assets/images/products/process/zi-tech.jpg', imageType: '개념 비교 이미지', guide: ['도금강판 용접, 블로홀 없는 결과'] },
            'MTS-CO₂ / SP-MAG / HD-Pulse': { src: '/assets/images/products/process/basic-process.jpg', guide: ['일반 MAG/CO₂ 용접 현장'] }
        },
        seriesImages: {
            'S-AWP / AWP4': { src: '/assets/images/products/process/card-s-awp.jpg', imageType: '개념 비교 이미지', guide: ['S-AWP 적용 비드·스패터 비교'] },
            'HBC': { src: '/assets/images/products/process/card-hbc.jpg', imageType: '개념 비교 이미지', guide: ['HBC 박판 용접 결과'] },
            'Zi-Tech': { src: '/assets/images/products/process/card-zi-tech.jpg', imageType: '개념 비교 이미지', guide: ['도금강판 Zi-Tech 적용'] },
            'MTS-CO₂ / SP-MAG / HD-Pulse': { src: '/assets/images/products/process/card-basic.jpg', guide: ['기본 MAG/CO₂ 용접 현장'] }
        }
    },
    'high-power-welding-system': {
        hero: {
            src: '/assets/images/products/highpower/hero.jpg',
            label: '고출력 용접 메인',
            guide: ['중후판 필렛 용접 장면', 'TL 로봇 + WGH 전원 구성', '두꺼운 소재 용접 스파크/비드']
        },
        wghSystemMap: {
            src: '/assets/images/products/highpower/wgh-system-map.jpg',
            label: 'WGH 고출력 구성 맵',
            role: 'map',
            imageType: '개념 비교 이미지',
            guide: [
                'TAWERS 시스템 안에서 WGH 계열이 고출력·중후판 대응 구성으로 연결되는 구조도',
                'TL 로봇, WGH 전원, 포지셔너, 중후판 작업물이 함께 연결된 구조',
                'WGH가 TAWERS와 별개 브랜드가 아니라 고출력 확장 구성임을 표현'
            ]
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
            { src: '/assets/images/products/jig/custom-jig.jpg', label: '맞춤 지그', caseStudy: true, guide: ['작업물 형상에 맞춘 지그 제작 사례', '실제 현장 사진 준비 시 「실제 적용 사례」로 표시됩니다'] },
            { src: '/assets/images/products/jig/positioner.jpg', label: '회전 포지셔너', caseStudy: true, guide: ['포지셔너 회전 + 다면 용접 장면', '실제 현장 사진 준비 시 「실제 적용 사례」로 표시됩니다'] },
            { src: '/assets/images/products/jig/robot-jig-cell.jpg', label: '로봇+지그 연동', caseStudy: true, guide: ['로봇과 지그가 연동된 셀 전경', '실제 현장 사진 준비 시 「실제 적용 사례」로 표시됩니다'] }
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
        processFlow: {
            src: '/assets/images/products/turnkey/process-flow.jpg',
            label: '턴키 도입 프로세스',
            role: 'flow',
            imageType: '개념 비교 이미지',
            guide: [
                '상담 → 작업물 검토 → 로봇·지그 설계 → 제작/설치 → 시운전 → 교육/유지보수 흐름',
                '사진이 없으면 인포그래픽 형태로 구성 가능'
            ]
        },
        gallery: [
            { src: '/assets/images/products/turnkey/cell-layout.jpg', label: '셀 레이아웃', caseStudy: true, guide: ['셀 평면도 또는 조감도 스타일 현장 사진', '실제 현장 사진 준비 시 「실제 적용 사례」로 표시됩니다'] },
            { src: '/assets/images/products/turnkey/safety-fence.jpg', label: '안전펜스·인터록', caseStudy: true, guide: ['펜스, 안전 door, 인터록 장치', '실제 현장 사진 준비 시 「실제 적용 사례」로 표시됩니다'] },
            { src: '/assets/images/products/turnkey/commissioning.jpg', label: '시운전·교육', caseStudy: true, guide: ['엔지니어 시운전, 작업자 교육 장면', '실제 현장 사진 준비 시 「실제 적용 사례」로 표시됩니다'] }
        ],
        seriesImages: {
            '표준 용접 자동화 셀': { src: '/assets/images/products/turnkey/card-standard-cell.jpg', guide: ['TAWERS + 지그 + 펜스 표준 셀'] },
            '기존 공정 개조 셀': { src: '/assets/images/products/turnkey/card-retrofit.jpg', guide: ['기존 공정 + 로봇 추가·안전 보완'] },
            '대형·고출력 턴키 셀': { src: '/assets/images/products/turnkey/card-large-cell.jpg', guide: ['TL + WGH + 포지셔너 대형 셀'] },
            '시운전·교육 포함 One-Stop': { src: '/assets/images/products/turnkey/card-full-service.jpg', guide: ['시운전·교육·인수 장면'] }
        }
    },
    'smart-factory-integration': {
        hero: {
            src: '/assets/images/products/smartfactory/hero.jpg',
            label: '스마트팩토리 메인',
            imageType: '예시 이미지',
            guide: ['모니터링 대시보드 + 용접 설비', '데이터 화면과 현장 설비가 함께 보이는 구도']
        },
        gallery: [
            { src: '/assets/images/products/smartfactory/dashboard.jpg', label: '모니터링 대시보드 예시', imageType: '예시 이미지', guide: ['공정 상태, 용접 이력 화면 캡처 또는 연출'] },
            { src: '/assets/images/products/smartfactory/data-flow.jpg', label: '데이터 연동 구성 예시', imageType: '예시 이미지', guide: ['설비 → 데이터 → MES 흐름을 보여주는 이미지'] },
            { src: '/assets/images/products/smartfactory/quality-log.jpg', label: '품질 이력 관리 화면 예시', imageType: '예시 이미지', guide: ['용접 품질 데이터, 작업 이력 관리 화면'] }
        ],
        seriesImages: {
            '용접 품질 데이터 수집': { src: '/assets/images/products/smartfactory/card-quality-log.jpg', imageType: '예시 이미지', guide: ['용접 품질·이력 데이터 화면'] },
            '공정 모니터링 대시보드': { src: '/assets/images/products/smartfactory/card-monitoring.jpg', imageType: '예시 이미지', guide: ['실시간 공정·설비 모니터링'] },
            'MES·작업 이력·추적성': { src: '/assets/images/products/smartfactory/card-mes.jpg', imageType: '예시 이미지', guide: ['MES·작업 이력·추적 화면'] },
            '단계적 스마트공장 확장': { src: '/assets/images/products/smartfactory/card-phased.jpg', imageType: '예시 이미지', guide: ['PoC → 확장 로드맵·과제'] }
        }
    }
};

var ROBOT_MODEL_APPLICATION_GUIDES = {
    'ts-800': '소형 부품, 브라켓, 좁은 자동화 셀, 작은 지그 중심',
    'ts-950': '소형·중소형 부품, 작은 프레임, 공간절약형 셀 중심',
    'tm-1100': '중소형 부품, 작은 프레임, 표준 자동화 셀 중심',
    'tm-1400': '대표 표준형, 판금 프레임, 일반 제조업, 자동차 부품 중심',
    'tm-1600': '중형 프레임, 설비 부품, 넓은 표준 셀 중심',
    'tm-1800': '긴 용접선, 대형 프레임, 산업기계 부품 중심',
    'tm-2000': '넓은 작업반경, 장축 부품, 대형 구조물 중심',
    'tl-1800': '대형 워크, 산업기계 프레임, 농기계·건설장비 부품 중심',
    'tl-2000': '대형 장축 구조물, 넓은 작업셀, 긴 프레임 중심'
};

var MODULE_ID_TO_IMAGE_KEY = {
    'welding-robot-manipulator-lineup': '용접 로봇 매니퓰레이터 라인업',
    'welding-power-controller': '용접전원·컨트롤러 구성',
    'welding-process-software': '용접 공법 소프트웨어',
    'high-power-welding-system': '고출력 용접 시스템',
    'jig-positioner-automation': '지그·포지셔너 자동화',
    'turnkey-robot-automation-cell': '턴키 로봇 자동화 셀',
    'smart-factory-integration': '스마트팩토리 연동 솔루션'
};

var IMAGE_PREP_PRIORITY = {
    title: '이미지 준비 우선순위',
    description: '아래 순서대로 사진을 준비하면 TAWERS 통합 시스템 구조가 가장 빠르게 완성됩니다.',
    tiers: [
        {
            level: '1순위',
            label: 'TAWERS 부모 시스템 + 로봇 라인업 핵심',
            items: [
                'TAWERS hero · system-architecture · configuration-flow',
                '로봇 라인업 hero · model-comparison · reach-comparison',
                'TS/TM/TL 시리즈 대표 이미지'
            ]
        },
        {
            level: '2순위',
            label: '대표 모델 + 핵심 공법',
            items: [
                'TM-1400 · TS-950 · TL-1800 (각 5종 이미지)',
                'S-AWP · HBC · Zi-Tech 공법 이미지',
                'process-selection-map'
            ]
        },
        {
            level: '3순위',
            label: '전원·고출력·주변 설비',
            items: [
                'WG/WGH 용접전원 · wgh-system-map',
                '지그·포지셔너 실제 사례 · 턴키 셀 전경 · process-flow',
                '스마트팩토리 대시보드 예시'
            ]
        },
        {
            level: '4순위',
            label: '나머지 모델 상세',
            items: [
                'TS-800 · TM-1100 · TM-1600 · TM-1800 · TM-2000 · TL-2000',
                '각 모델 5종 (제품·현장·디테일·작업반경·추천 워크)'
            ]
        }
    ]
};

var LINEUP_SLUGS = [
    'tawers-welding-robot-system',
    'welding-power-controller',
    'welding-robot-manipulator-lineup',
    'welding-process-software',
    'high-power-welding-system',
    'jig-positioner-automation',
    'turnkey-robot-automation-cell',
    'smart-factory-integration'
];

var GUIDE_SLUG_ALIASES = {
    tawers: 'tawers-welding-robot-system',
    'tawers-welding-robot-system': 'tawers-welding-robot-system',
    'welding-robot': 'welding-robot-manipulator-lineup',
    'welding-robot-manipulator-lineup': 'welding-robot-manipulator-lineup',
    'tm-series': 'welding-robot-manipulator-lineup',
    'ts-series': 'welding-robot-manipulator-lineup',
    'tl-series': 'welding-robot-manipulator-lineup',
    'welding-power': 'welding-power-controller',
    'welding-power-controller': 'welding-power-controller',
    'welding-process': 'welding-process-software',
    'welding-process-software': 'welding-process-software',
    's-awp-awp4': 's-awp',
    'awp4': 's-awp',
    'standard-process': 'basic-arc-process',
    'mts-co2-sp-mag-hd-pulse': 'basic-arc-process',
    'wg-system': 'wg-series',
    'wgh-system': 'wgh-series',
    'high-power': 'high-power-welding-system',
    'high-power-welding-system': 'high-power-welding-system',
    'jig-positioner': 'jig-positioner-automation',
    'jig-positioner-automation': 'jig-positioner-automation',
    'turnkey': 'turnkey-robot-automation-cell',
    'turnkey-robot-automation-cell': 'turnkey-robot-automation-cell',
    'smart-factory': 'smart-factory-integration',
    'smart-factory-integration': 'smart-factory-integration'
};

var TAWERS_HERO_PRIORITY_BY_CONTEXT = {
    catalog: ['hero', 'systemMap', 'systemArchitecture'],
    'parent-detail': ['hero', 'systemArchitecture', 'configurationFlow'],
    compact: []
};

var MODEL_SLUGS = ['ts-800', 'ts-950', 'tm-1100', 'tm-1400', 'tm-1600', 'tm-1800', 'tm-2000', 'tl-1800', 'tl-2000'];
var POWER_SLUGS = ['wg-series', 'wgh-series', 'tawers-controller'];
var PROCESS_SLUGS = ['s-awp', 'hbc', 'zi-tech', 'basic-arc-process'];
var HIGHPOWER_SLUGS = ['heavy-plate-frame', 'large-structure', 'fillet-high-output', 'tl-wgh-integrated-cell'];
var JIG_SLUGS = ['custom-jig', 'rotary-positioner', 'slide-unit', 'integrated-setup'];
var TURNKEY_SLUGS = ['standard-welding-cell', 'retrofit-cell', 'large-turnkey-cell', 'full-service-delivery'];
var SMARTFACTORY_SLUGS = ['quality-data-log', 'process-monitoring', 'mes-traceability', 'phased-expansion'];

function escHtml(text) {
    var d = document.createElement('div');
    d.textContent = text || '';
    return d.innerHTML;
}

function normalizeImageSlot(slot) {
    if (!slot) return slot;
    var normalized = Object.assign({}, slot);
    if (normalized.fallback && !normalized.fallbackSrc) {
        normalized.fallbackSrc = normalized.fallback;
    }
    if (normalized.caseStudy && !normalized.imageType) {
        normalized.imageTypeOnLoad = '실제 적용 사례 이미지';
    }
    return normalized;
}

function renderImageSlotHtml(slot, sizeClass) {
    slot = normalizeImageSlot(slot);
    if (!slot) return '';
    var cls = 'pd-img-slot' + (sizeClass ? ' pd-img-slot--' + sizeClass : '');
    var guideItems = (slot.guide || []).map(function (g) {
        return '<li>' + escHtml(g) + '</li>';
    }).join('');
    var typeBadge = slot.imageType
        ? '<span class="pd-img-slot-type">' + escHtml(slot.imageType) + '</span>'
        : (slot.caseStudy
            ? '<span class="pd-img-slot-type pd-img-slot-type--pending">현장 사례 · 준비 중</span>'
            : '');
    var roleBadge = slot.role
        ? '<span class="pd-img-slot-role">' + escHtml(slot.role) + '</span>'
        : '';
    var meta = (slot.series || slot.modelName)
        ? '<div class="pd-img-slot-meta">' +
            (slot.series ? '<span>' + escHtml(slot.series) + '</span>' : '') +
            (slot.modelName ? '<strong>' + escHtml(slot.modelName) + '</strong>' : '') +
          '</div>'
        : '';
    var fallbackAttr = slot.fallbackSrc
        ? ' data-fallback-src="' + escHtml(slot.fallbackSrc) + '"'
        : '';
    var typeOnLoad = slot.imageTypeOnLoad
        ? escHtml(slot.imageTypeOnLoad).replace(/'/g, '&#39;')
        : '';
    var onloadExtra = typeOnLoad
        ? 'var b=this.closest(\'.pd-img-slot\').querySelector(\'.pd-img-slot-type--pending\');if(b){b.textContent=\'' + typeOnLoad + '\';b.classList.remove(\'pd-img-slot-type--pending\');}'
        : '';
    return (
        '<div class="' + cls + '" data-image-path="' + escHtml(slot.src) + '"' + fallbackAttr + '>' +
            '<img src="' + escHtml(slot.src) + '" alt="' + escHtml(slot.label || '') + '" loading="lazy"' +
                ' onload="this.closest(\'.pd-img-slot\').classList.add(\'has-photo\');' + onloadExtra + '"' +
                ' onerror="var s=this.closest(\'.pd-img-slot\');var fb=s.getAttribute(\'data-fallback-src\');if(fb&&!s.classList.contains(\'tried-fallback\')){s.classList.add(\'tried-fallback\');this.src=fb;return;}s.classList.add(\'no-photo\');this.style.display=\'none\'">' +
            '<div class="pd-img-slot-placeholder">' +
                '<div class="pd-img-slot-icon" aria-hidden="true">' +
                    '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
                        '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
                        '<circle cx="8.5" cy="8.5" r="1.5"/>' +
                        '<path d="M21 15l-5-5L5 21"/>' +
                    '</svg>' +
                '</div>' +
                typeBadge +
                roleBadge +
                '<span class="pd-img-slot-badge">📷 사진 준비</span>' +
                meta +
                '<strong class="pd-img-slot-label">' + escHtml(slot.label || '이미지') + '</strong>' +
                (slot.src ? '<code class="pd-img-slot-path">' + escHtml(slot.src) + '</code>' : '') +
                (slot.fallbackSrc ? '<code class="pd-img-slot-path pd-img-slot-path--fallback">대체: ' + escHtml(slot.fallbackSrc) + '</code>' : '') +
                (guideItems ? '<ul class="pd-img-slot-guide">' + guideItems + '</ul>' : '') +
            '</div>' +
        '</div>'
    );
}

function resolveGuideSlug(slug) {
    if (!slug) return slug;
    if (GUIDE_SLUG_ALIASES[slug]) return GUIDE_SLUG_ALIASES[slug];
    if (LINEUP_SLUGS.indexOf(slug) >= 0) return slug;
    if (MODEL_SLUGS.indexOf(slug) >= 0) return slug;
    if (POWER_SLUGS.indexOf(slug) >= 0) return slug;
    if (PROCESS_SLUGS.indexOf(slug) >= 0) return slug;
    if (HIGHPOWER_SLUGS.indexOf(slug) >= 0) return slug;
    if (JIG_SLUGS.indexOf(slug) >= 0) return slug;
    if (TURNKEY_SLUGS.indexOf(slug) >= 0) return slug;
    if (SMARTFACTORY_SLUGS.indexOf(slug) >= 0) return slug;
    return slug;
}

function resolveProductSlug(slug) {
    return resolveGuideSlug(slug);
}

function buildRobotModelImageGuide(slug) {
    if (typeof getRobotModel !== 'function') return null;
    var model = getRobotModel(slug);
    if (!model) return null;
    var appGuide = ROBOT_MODEL_APPLICATION_GUIDES[slug] || '해당 모델에 적합한 작업물·현장';
    var base = '/assets/images/products/robots/' + slug;
    return {
        hero: {
            src: base + '.jpg',
            label: model.name + ' 제품/현장 사진',
            role: 'product',
            series: model.series,
            modelName: model.name,
            guide: [
                model.name + ' 로봇 단독 제품 사진 (정면·측면)',
                '현장 설치 후 ' + model.name + ' 용접 작업 장면',
                '작업반경·로봇 크기가 보이는 각도'
            ]
        },
        gallery: [
            { src: base + '.jpg', label: '제품 단독', role: 'product', series: model.series, modelName: model.name, guide: [model.name + ' 로봇 단독 제품 사진 (정면·측면)'] },
            { src: base + '-field.jpg', label: '현장 적용', role: 'field', series: model.series, modelName: model.name, guide: ['해당 모델 현장 용접 장면', appGuide.split(',')[0] + ' 등'] },
            { src: base + '-detail.jpg', label: '로봇 디테일', role: 'detail', series: model.series, modelName: model.name, guide: ['로봇팔·토치·와이어 송급 클로즈업'] },
            { src: base + '-reach.jpg', label: '작업반경', role: 'reach', series: model.series, modelName: model.name, guide: ['해당 모델의 작업반경, 로봇 크기, 설치 공간 감각이 보이는 이미지 또는 인포그래픽'] },
            { src: base + '-application.jpg', label: '추천 워크', role: 'application', series: model.series, modelName: model.name, guide: [appGuide, '모델 포지션에 맞는 적용 현장 이미지'] }
        ]
    };
}

function withSmartFactoryExampleMeta(slot) {
    if (!slot) return slot;
    return Object.assign({}, slot, {
        imageType: slot.imageType || '예시 이미지',
        label: slot.label && slot.label.indexOf('예시') < 0 && slot.imageType === '예시 이미지'
            ? slot.label + ' (예시)'
            : slot.label
    });
}

function getModuleCardImage(moduleId) {
    var resolvedId = resolveProductSlug(moduleId);
    var tawers = PRODUCT_IMAGE_GUIDES['tawers-welding-robot-system'];
    if (!tawers || !tawers.moduleImages) return null;
    var key = MODULE_ID_TO_IMAGE_KEY[resolvedId] || MODULE_ID_TO_IMAGE_KEY[moduleId];
    if (!key) return null;
    var img = tawers.moduleImages[key];
    if (!img) return null;
    return normalizeImageSlot({
        src: img.src,
        fallbackSrc: img.fallback,
        label: key,
        guide: img.guide || []
    });
}

function pickTawersImageSlot(pageContext) {
    var g = PRODUCT_IMAGE_GUIDES['tawers-welding-robot-system'];
    if (!g) return null;
    var keys = TAWERS_HERO_PRIORITY_BY_CONTEXT[pageContext] || TAWERS_HERO_PRIORITY_BY_CONTEXT.catalog;
    for (var i = 0; i < keys.length; i++) {
        var slot = g[keys[i]];
        if (slot && slot.src) return slot;
    }
    return null;
}

function getTawersHeroImagePriority(pageContext) {
    return pickTawersImageSlot(pageContext || 'catalog');
}

function getProductImageGuide(slug) {
    slug = resolveGuideSlug(slug);
    if (PRODUCT_IMAGE_GUIDES[slug]) return PRODUCT_IMAGE_GUIDES[slug];

    if (MODEL_SLUGS.indexOf(slug) >= 0) {
        return buildRobotModelImageGuide(slug);
    }

    if (typeof getSmartFactoryConfig === 'function' && getSmartFactoryConfig(slug)) {
        var sf = getSmartFactoryConfig(slug);
        var sfGuide = PRODUCT_IMAGE_GUIDES['smart-factory-integration'];
        var sfImg = sfGuide && sfGuide.seriesImages ? sfGuide.seriesImages[sf.name] : null;
        return {
            hero: withSmartFactoryExampleMeta(sfImg || {
                src: '/assets/images/products/smartfactory/' + slug + '.jpg',
                label: sf.name + ' 연동 화면 예시',
                guide: [sf.name + ' 적용 (설비 + 대시보드)', '데이터·모니터링·이력 화면', 'TAWERS 설비 기반 스마트팩토리 연동']
            }),
            gallery: [
                withSmartFactoryExampleMeta({ src: '/assets/images/products/smartfactory/' + slug + '-dashboard.jpg', label: '대시보드 예시', guide: [sf.name + ' 모니터링·데이터 화면'] }),
                withSmartFactoryExampleMeta({ src: '/assets/images/products/smartfactory/' + slug + '-flow.jpg', label: '데이터 흐름 예시', guide: ['설비 → 데이터 연동'] })
            ]
        };
    }
    if (typeof getTurnkeyConfig === 'function' && getTurnkeyConfig(slug)) {
        var tk = getTurnkeyConfig(slug);
        var tkGuide = PRODUCT_IMAGE_GUIDES['turnkey-robot-automation-cell'];
        var tkImg = tkGuide && tkGuide.seriesImages ? tkGuide.seriesImages[tk.name] : null;
        var tkHeroFallback = tkGuide && tkGuide.hero ? tkGuide.hero.src : null;
        return {
            hero: normalizeImageSlot(tkImg || {
                src: '/assets/images/products/turnkey/' + slug + '.jpg',
                fallbackSrc: tkHeroFallback,
                label: tk.name + ' 현장 사진',
                caseStudy: true,
                guide: [tk.name + ' 적용 현장 (안전펜스 + 로봇 + 지그 셀)', '셀 레이아웃·시운전 장면', '실제 현장 사진 준비 시 「실제 적용 사례」로 표시됩니다']
            }),
            gallery: [
                { src: '/assets/images/products/turnkey/' + slug + '-field.jpg', label: '현장 적용', caseStudy: true, guide: [tk.name + ' 현장 셀'] },
                { src: '/assets/images/products/turnkey/' + slug + '-layout.jpg', label: '셀 레이아웃', caseStudy: true, guide: ['셀 구성·layout'] }
            ],
            processFlow: tkGuide ? tkGuide.processFlow : null
        };
    }
    if (typeof getJigConfig === 'function' && getJigConfig(slug)) {
        var jig = getJigConfig(slug);
        var jigGuide = PRODUCT_IMAGE_GUIDES['jig-positioner-automation'];
        var jigImg = jigGuide && jigGuide.seriesImages ? jigGuide.seriesImages[jig.name] : null;
        var jigHeroFallback = jigGuide && jigGuide.hero ? jigGuide.hero.src : null;
        return {
            hero: normalizeImageSlot(jigImg || {
                src: '/assets/images/products/jig/' + slug + '.jpg',
                fallbackSrc: jigHeroFallback,
                label: jig.name + ' 현장 사진',
                caseStudy: true,
                guide: [jig.name + ' 적용 현장 (지그·포지셔너 + 로봇)', '작업물 고정·회전·슬라이드 장면', '실제 현장 사진 준비 시 「실제 적용 사례」로 표시됩니다']
            }),
            gallery: [
                { src: '/assets/images/products/jig/' + slug + '-field.jpg', label: '현장 적용', caseStudy: true, guide: [jig.name + ' 현장 용접'] },
                { src: '/assets/images/products/jig/' + slug + '-setup.jpg', label: '셋업·지그', caseStudy: true, guide: ['작업물 셋업·지그 디테일'] }
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
                guide: [hp.name + ' 적용 현장 (TL + WGH 구성)', '중후판·대형 워크 용접 장면']
            },
            wghSystemMap: hpGuide ? hpGuide.wghSystemMap : null,
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
        var procType = procImg && procImg.imageType ? procImg.imageType : '개념 비교 이미지';
        return {
            hero: procImg || {
                src: '/assets/images/products/process/' + slug + '.jpg',
                label: wp.name + ' 적용 사진',
                imageType: procType,
                guide: [wp.name + ' 용접 비드·품질 결과', '적용 전·후 비교 (스패터/번스루/블로홀 등)']
            },
            processSelectionMap: processGuide ? processGuide.processSelectionMap : null,
            gallery: [
                { src: '/assets/images/products/process/' + slug + '-before-after.jpg', label: '적용 전·후', imageType: procType, guide: [wp.name + ' 적용 전후 비교 (개념 비교 이미지 준비 필요)'] },
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
                guide: [ps.name + ' 용접전원·컨트롤러 장비 사진', 'TAWERS 시스템 내 ' + ps.name + ' 연동 구성']
            },
            gallery: [
                { src: '/assets/images/products/power/' + slug + '-field.jpg', label: '현장 적용', guide: [ps.name + ' 현장 용접 장면'] },
                { src: '/assets/images/products/power/' + slug + '-detail.jpg', label: '장비 디테일', guide: ['전원·컨트롤러·연동 장치 클로즈업'] }
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
        process: g.processImages || {},
        systemArchitecture: g.systemArchitecture || null,
        configurationFlow: g.configurationFlow || null,
        systemMap: g.systemMap || null,
        modelComparison: g.modelComparison || null,
        reachComparison: g.reachComparison || null,
        processSelectionMap: g.processSelectionMap || null,
        wghSystemMap: g.wghSystemMap || null,
        processFlow: g.processFlow || null,
        imagePriority: IMAGE_PREP_PRIORITY
    };
}

window.renderImageSlotHtml = renderImageSlotHtml;
window.getModuleCardImage = getModuleCardImage;
window.getTawersHeroImagePriority = getTawersHeroImagePriority;
window.resolveProductSlug = resolveProductSlug;
window.resolveGuideSlug = resolveGuideSlug;
