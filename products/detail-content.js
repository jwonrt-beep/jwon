// 제품군 상세 페이지 콘텐츠 (정적 – 배포 환경에서 항상 사용)
const PRODUCT_DETAIL_CONTENT = {
    'tawers-welding-robot-system': {
        pageType: 'system',
        heroBadge: '용접전원 일체형 아크 용접 로봇',
        heroTitle: 'TAWERS 용접로봇 시스템',
        heroDescription: '로봇 제어와 용접전원을 하나로 통합한 아크 용접 자동화 시스템입니다. 고속 용접, 저스패터, 안정적인 비드 품질이 필요한 제조 현장에 맞춰 로봇, 용접전원, 컨트롤러, 토치 구성을 제안합니다.',
        imageHint: '로봇팔 · 용접전원 · 컨트롤러 · 토치 통합 시스템',
        summaryCards: [
            { title: '통합 제어', desc: '로봇과 용접전원을 하나의 시스템으로 제어' },
            { title: '저스패터 용접', desc: '스패터와 후처리 부담을 줄이는 용접 품질' },
            { title: '고속 생산 대응', desc: '반복 용접 공정의 생산성 향상' },
            { title: '현장 맞춤 구성', desc: '작업물, 소재, 두께, 생산량에 따른 시스템 제안' }
        ],
        systemSection: {
            title: '로봇팔부터 용접전원까지 하나의 시스템으로 구성',
            description: '로봇만 공급하는 것이 아니라 용접 공정에 필요한 핵심 장비를 현장 조건에 맞춰 하나의 자동화 시스템으로 구성합니다.',
            components: ['로봇팔', '용접전원', '컨트롤러', '티칭 펜던트', '토치', '와이어 송급 장치', '지그/포지셔너', '안전설비']
        },
        subConfigSection: {
            title: '현장 조건에 따라 로봇 라인업과 용접 공법을 함께 선택합니다',
            items: [
                { title: '로봇 매니퓰레이터', desc: 'TS, TM, TL 시리즈 중 작업반경과 설치 공간에 맞춰 선택', link: 'welding-robot-manipulator-lineup' },
                { title: '용접전원·컨트롤러', desc: 'WG, WGH 계열 등 용접 조건과 출력에 맞춰 구성', link: 'high-power-welding-system' },
                { title: '용접 공법 소프트웨어', desc: 'S-AWP, HBC, Zi-Tech 등 현장 문제에 맞춰 적용', link: 'welding-process-software' },
                { title: '지그·포지셔너', desc: '작업물 고정, 회전, 위치 제어를 위한 주변 설비 구성', link: 'jig-positioner-automation' }
            ]
        },
        recommendations: [
            { title: '소형 부품 자동화', desc: 'TS 시리즈 + WG 계열 + S-AWP' },
            { title: '표준 프레임 용접', desc: 'TM 시리즈 + WG 계열 + S-AWP' },
            { title: '대형 구조물 용접', desc: 'TL 시리즈 + WGH 계열' },
            { title: '박판 용접', desc: 'TS 또는 TM 시리즈 + HBC' },
            { title: '도금강판 용접', desc: 'TM 시리즈 + Zi-Tech' },
            { title: '중후판 용접', desc: 'TL 시리즈 + WGH 계열 + 고출력 구성' }
        ],
        applicationFields: ['자동차 부품 용접', '판금 부품 용접', '산업기계 프레임', '농기계·건설장비 부품', '스테인리스 제품', '아연도금강판', '중후판 구조물'],
        problems: [
            '스패터가 많아 후처리 시간이 오래 걸리는 현장',
            '작업자별 용접 품질 편차가 큰 현장',
            '숙련 용접공 확보가 어려운 현장',
            '박판 용접 시 번스루가 발생하는 현장',
            '도금강판 용접 시 블로홀 문제가 있는 현장',
            '중후판 용접 생산성을 높이고 싶은 현장'
        ],
        specifications: {
            '시스템 유형': '용접전원 일체형 아크 용접 로봇',
            '적용 공정': 'MIG/MAG, CO₂, 스테인리스 MIG 등',
            '구성 요소': '로봇, 용접전원, 컨트롤러, 토치, 와이어 송급 장치',
            '적용 소재': '연강, 스테인리스, 고장력강, 아연도금강판 등',
            '추천 현장': '자동차 부품, 판금, 프레임, 구조물 용접',
            '제안 방식': '작업물·소재·두께·생산량 기준 맞춤 구성',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['작업물 사진·도면 확인', '소재·두께·용접 조건 검토', '적합 로봇 모델 및 공법 선정', '지그·포지셔너·안전설비 구성 검토', '견적 및 납기 안내', '설치·시운전·교육 진행'],
        cta: {
            title: '작업물 사진만 있어도 상담 가능합니다',
            description: '소재, 두께, 용접 길이, 월 생산량, 현재 용접 문제를 알려주시면 현장 조건에 맞는 TAWERS 용접로봇 시스템을 제안드립니다.'
        }
    },

    'welding-robot-manipulator-lineup': {
        pageType: 'lineup',
        heroBadge: 'TS · TM · TL 시리즈',
        heroTitle: '용접 로봇 매니퓰레이터 라인업',
        heroDescription: '작업물 크기와 설치 공간에 따라 선택하는 용접 로봇 라인업입니다. 소형 워크, 표준 프레임, 대형 구조물까지 현장 조건에 맞춰 TS, TM, TL 시리즈를 제안합니다.',
        imageHint: 'TS · TM · TL 로봇팔 라인업 비교',
        summaryCards: [
            { title: '작업물 기준 선택', desc: '소형 부품부터 대형 구조물까지 라인업 분리' },
            { title: '설치 공간 대응', desc: '컴팩트 TS부터 롱암 TL까지 공간별 제안' },
            { title: 'TAWERS 연동', desc: '통합 시스템 안에서 매니퓰레이터 선택' },
            { title: '현장 맞춤 모델', desc: '작업반경·페이로드 기준 모델 선정' }
        ],
        lineupCards: [
            {
                name: 'TS 시리즈',
                badge: '소형·공간절약형',
                desc: '좁은 작업 공간과 소형 부품 용접에 적합한 컴팩트 아크 용접 로봇',
                tags: ['소형', '공간절약', '정밀용접'],
                models: 'TS-800, TS-950'
            },
            {
                name: 'TM 시리즈',
                badge: '표준 범용형',
                desc: '소형 부품부터 중대형 프레임까지 폭넓게 대응하는 표준형 아크 용접 로봇',
                tags: ['표준형', '범용', '프레임용접'],
                models: 'TM-1100, TM-1400, TM-1600, TM-1800, TM-2000',
                highlight: true
            },
            {
                name: 'TL 시리즈',
                badge: '대형 워크 대응',
                desc: '긴 작업반경이 필요한 대형 프레임, 산업기계 부품, 구조물 용접에 적합한 롱암 타입 로봇',
                tags: ['대형작업', '장축', '구조물'],
                models: 'TL-1800, TL-2000'
            }
        ],
        selectionGuide: [
            { condition: '소형 부품, 좁은 공간', recommendation: 'TS 시리즈' },
            { condition: '일반 제조업, 표준 프레임 용접', recommendation: 'TM 시리즈' },
            { condition: '대형 프레임, 넓은 작업반경', recommendation: 'TL 시리즈' },
            { condition: '중후판·고출력 조건', recommendation: 'TL 시리즈 + WGH 계열 검토' }
        ],
        applicationFields: ['자동차 소부품', '판금 부품', '일반 프레임', '산업기계 부품', '대형 구조물'],
        problems: [
            '설치 공간이 좁아 로봇 도입이 어려운 현장',
            '작업물 크기가 다양해 모델 선택이 어려운 경우',
            '대형 프레임 용접에 작업반경이 부족한 경우',
            '로봇만 따로 구매해 시스템 연동이 맞지 않는 경우'
        ],
        specifications: {
            '라인업 구성': 'TS(소형) · TM(표준) · TL(대형) 시리즈',
            '선정 기준': '작업물 크기, 작업반경, 설치 공간, 페이로드',
            '시스템 연동': 'TAWERS 용접로봇 시스템 내 매니퓰레이터 선택',
            '제안 방식': '현장 조건 기반 모델·구성 제안',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['작업물·설치 공간 확인', '작업반경·페이로드 검토', 'TS/TM/TL 모델 선정', 'TAWERS 시스템 연동 구성', '견적·납기 안내', '설치·시운전'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '통합 시스템 상세보기' },
            { slug: 'welding-process-software', name: '용접 공법 소프트웨어', desc: '공법·품질 솔루션' }
        ],
        cta: {
            title: '작업물 크기와 설치 공간을 알려주세요',
            description: '작업물 사진, 설치 가능 공간, 용접 길이를 알려주시면 TS/TM/TL 중 적합한 라인업을 제안드립니다.'
        }
    },

    'welding-process-software': {
        pageType: 'process',
        heroBadge: '문제 해결형 용접 공법',
        heroTitle: '용접 공법 소프트웨어',
        heroDescription: '스패터, 번스루, 블로홀, 고속 용접 등 현장 문제에 맞춰 적용하는 용접 공법 솔루션입니다. 작업물 소재와 용접 조건에 따라 적합한 공법을 함께 제안합니다.',
        imageHint: '스패터 · 번스루 · 블로홀 전후 비교',
        summaryCards: [
            { title: '문제 중심 제안', desc: '현장 용접 문제에 맞춰 공법 선택' },
            { title: '품질·생산성', desc: '비드 품질과 UPH 동시 개선' },
            { title: 'TAWERS 연동', desc: '통합 시스템 내 공법 적용' },
            { title: '소재별 대응', desc: '박판·도금강·고장력강 등 맞춤' }
        ],
        processCards: [
            { name: 'S-AWP / AWP4', desc: '고속·저스패터 용접 공법', problem: '스패터, 후처리, 생산성' },
            { name: 'HBC', desc: '박판·고장력강 번스루 방지 솔루션', problem: '박판 뚫림, 갭 편차, 비드 안정성' },
            { name: 'Zi-Tech', desc: '아연도금강판 스패터·블로홀 저감 솔루션', problem: '도금강판 기공, 블로홀, 스패터' },
            { name: 'MTS-CO₂ / SP-MAG / HD-Pulse', desc: 'CO₂, MAG, 펄스 용접 조건에 맞춘 공법', problem: '용접 품질, 고속 용접, 안정적인 용입' }
        ],
        selectionGuide: [
            { condition: '스패터가 많다', recommendation: 'S-AWP / AWP4' },
            { condition: '박판이 자꾸 뚫린다', recommendation: 'HBC' },
            { condition: '도금강판에서 블로홀이 생긴다', recommendation: 'Zi-Tech' },
            { condition: '생산 속도를 높이고 싶다', recommendation: 'S-AWP / HD-Pulse' },
            { condition: '중후판 용접이 필요하다', recommendation: 'WGH 고출력 시스템과 함께 검토' }
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
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['용접 문제·소재 확인', '현장 조건·두께 검토', '적합 공법 선정', 'TAWERS 시스템 연동 적용', '시운전·품질 확인', '양산 적용 지원'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '통합 시스템' },
            { slug: 'high-power-welding-system', name: '고출력 용접 시스템', desc: '중후판 대응' }
        ],
        cta: {
            title: '현재 용접 문제를 알려주세요',
            description: '스패터, 번스루, 블로홀 등 겪고 계신 문제와 소재·두께 정보를 주시면 적합한 공법을 제안드립니다.'
        }
    },

    'high-power-welding-system': {
        pageType: 'extension',
        heroBadge: 'TAWERS 고전류·중후판 구성',
        heroTitle: '고출력 용접 시스템',
        heroDescription: '중후판, 대형 구조물, 고전류 용접이 필요한 제조 현장을 위한 고출력 용접 자동화 구성입니다. TAWERS 시스템의 확장 구성으로 WGH 계열을 검토하며, 대형 워크와 두꺼운 소재의 생산성을 고려합니다.',
        imageHint: '중후판 · 필렛 용접 · WGH 고출력 구성',
        parentNote: 'TAWERS 용접로봇 시스템의 고전류·중후판 대응 확장 구성입니다.',
        summaryCards: [
            { title: '중후판 대응', desc: '두꺼운 소재의 안정적 용접' },
            { title: '고전류 용접', desc: 'WGH 계열 고출력 구성' },
            { title: '대형 구조물', desc: 'TL 시리즈와 함께 검토' },
            { title: 'TAWERS 연동', desc: '통합 시스템 내 출력 확장' }
        ],
        systemSection: {
            title: 'TAWERS 시스템 안에서 고출력 구성을 확장합니다',
            description: '별도 브랜드가 아닌, TAWERS 아크 용접 자동화 시스템의 고전류·중후판 대응 구성입니다. TL 시리즈 로봇과 WGH 계열 용접전원을 함께 검토합니다.',
            components: ['TL 시리즈 로봇', 'WGH 고출력 용접전원', '고전류 토치', '와이어 송급', '지그/포지셔너', '안전설비']
        },
        recommendations: [
            { title: '중후판 프레임', desc: 'TL 시리즈 + WGH 계열' },
            { title: '대형 구조물', desc: 'TL + WGH + 맞춤 지그' },
            { title: '필렛 고속 용접', desc: 'WGH + S-AWP 공법 검토' }
        ],
        applicationFields: ['중후판 구조물', '대형 프레임', '건설기계 부품', '조선·중공업 부품', '두꺼운 필렛 용접'],
        problems: [
            '중후판 용접 생산성이 낮은 현장',
            '고전류 조건에서 품질 편차 발생',
            '대형 작업물 용접에 출력 부족',
            '두꺼운 소재 다층 용접 필요'
        ],
        specifications: {
            '구성 유형': 'TAWERS 시스템 고출력·중후판 확장',
            '주요 장비': 'WGH 계열, TL 시리즈 로봇',
            '적용 소재': '중후판, 대형 구조용 강재',
            '연계 공법': 'S-AWP, HD-Pulse 등',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['작업물·두께 확인', '용접 조건·출력 검토', 'TL + WGH 구성 제안', 'TAWERS 시스템 연동 설계', '견적·납기', '설치·시운전'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '상위 통합 시스템' },
            { slug: 'welding-robot-manipulator-lineup', name: '로봇 매니퓰레이터 라인업', desc: 'TL 시리즈' }
        ],
        cta: {
            title: '중후판·대형 작업물 상담',
            description: '소재 두께, 용접 길이, 월 생산량을 알려주시면 TAWERS 고출력 구성을 제안드립니다.'
        }
    },

    'jig-positioner-automation': {
        pageType: 'peripheral',
        heroBadge: '맞춤 자동화 구성',
        heroTitle: '지그·포지셔너 자동화',
        heroDescription: '작업물 고정, 회전, 위치 제어를 위한 지그와 포지셔너를 현장 조건에 맞춰 구성합니다. 로봇 용접 품질과 작업 효율을 높이는 핵심 주변 설비입니다.',
        imageHint: '회전 포지셔너 · 작업물 고정 지그',
        summaryCards: [
            { title: '작업물 고정', desc: '용접 품질을 위한 정밀 지그' },
            { title: '회전·위치 제어', desc: '포지셔너 기반 접근성 향상' },
            { title: '현장 맞춤 설계', desc: '작업물 형상별 맞춤 제작' },
            { title: '로봇 연동', desc: 'TAWERS·턴키 셀과 통합' }
        ],
        systemSection: {
            title: '로봇 용접 품질을 결정하는 주변 설비',
            description: '로봇 성능만큼 중요한 것이 작업물 고정과 위치 제어입니다. 현장 조건에 맞춰 지그·포지셔너를 설계·제작합니다.',
            components: ['맞춤 지그', '회전 포지셔너', '슬라이드 유닛', '클램핑 시스템', '센서·인터록', '로봇 연동 인터페이스']
        },
        applicationFields: ['프레임 용접', '원형·곡면 작업물', '다면 용접', '대형 구조물', '반복 생산 라인'],
        problems: [
            '작업물 고정 불량으로 용접 품질 편차',
            '다면 용접 시 접근성 부족',
            '작업자마다 셋업 시간 차이',
            '로봇 도입 후 지그 미구비'
        ],
        specifications: {
            '제공 범위': '지그·포지셔너 설계·제작·연동',
            '설계 기준': '작업물 형상, 용접 위치, 생산 수량',
            '연계': 'TAWERS, 턴키 자동화 셀',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['작업물 도면·사진 확인', '용접 위치·접근성 검토', '지그·포지셔너 설계', '제작·로봇 연동', '시운전', '양산 지원'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '통합 시스템' },
            { slug: 'turnkey-robot-automation-cell', name: '턴키 자동화 셀', desc: '통합 셀 구성' }
        ],
        cta: {
            title: '작업물 도면만 있어도 상담 가능합니다',
            description: '작업물 형상, 용접 위치, 월 생산량을 알려주시면 지그·포지셔너 구성을 제안드립니다.'
        }
    },

    'turnkey-robot-automation-cell': {
        pageType: 'peripheral',
        heroBadge: '설계·설치·시운전',
        heroTitle: '턴키 로봇 자동화 셀',
        heroDescription: '로봇만 공급하는 것이 아니라 작업물, 지그, 안전펜스, 컨트롤러, 시운전까지 현장에 맞춰 통합 구성하는 자동화 셀 솔루션입니다.',
        imageHint: '안전펜스 · 로봇 · 지그 · 통합 셀',
        summaryCards: [
            { title: 'One-Stop', desc: '설계부터 시운전까지 일괄' },
            { title: '현장 맞춤', desc: '공정·작업물 기준 셀 설계' },
            { title: '안전·인터록', desc: '펜스·안전설비 포함' },
            { title: '빠른 가동', desc: '시운전·교육까지 지원' }
        ],
        systemSection: {
            title: '로봇 자동화 셀 전체를 통합 구성합니다',
            description: 'TAWERS 시스템, 지그·포지셔너, 안전펜스, 컨트롤러, 시운전을 하나의 프로젝트로 진행합니다.',
            components: ['TAWERS 로봇 시스템', '지그·포지셔너', '안전펜스', '컨트롤러', '인터록', '시운전·교육']
        },
        applicationFields: ['신규 자동화 라인', '기존 공정 개조', '소형·중형 셀', '다품종 셋업', 'PoC·파일럿 라인'],
        problems: [
            '로봇만 도입해 주변 설비 미비',
            '벤더별 분리 발주로 일정 지연',
            '시운전·교육 미흡',
            '안전설비 미구비'
        ],
        specifications: {
            '제공 범위': '설계·제작·설치·시운전·교육',
            '구성': '로봇, 지그, 펜스, 컨트롤, 공법',
            '제안 방식': '현장·작업물 기준 턴키',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['현장·공정 분석', '셀 레이아웃 설계', '장비·지그 제작', '설치·배선', '시운전·티칭', '교육·인수'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '핵심 로봇 시스템' },
            { slug: 'jig-positioner-automation', name: '지그·포지셔너', desc: '주변 설비' }
        ],
        cta: {
            title: '턴키 자동화 셀 상담',
            description: '작업물, 공정, 월 생산량, 현재 이슈를 알려주시면 통합 자동화 셀을 제안드립니다.'
        }
    },

    'smart-factory-integration': {
        pageType: 'peripheral',
        heroBadge: '생산 데이터 연동',
        heroTitle: '스마트팩토리 연동 솔루션',
        heroDescription: '로봇 용접 설비와 생산 데이터를 연동해 공정 모니터링, 작업 이력, 품질 데이터 관리까지 확장할 수 있는 스마트팩토리형 자동화 솔루션입니다.',
        imageHint: '설비 · 모니터링 대시보드 · 데이터 연동',
        summaryCards: [
            { title: '공정 모니터링', desc: '용접 설비 상태 실시간 확인' },
            { title: '작업 이력', desc: '로트·작업별 이력 관리' },
            { title: '품질 데이터', desc: '용접 품질 데이터 축적' },
            { title: '단계적 확장', desc: '기존 설비부터 단계 구축' }
        ],
        systemSection: {
            title: '용접 자동화에서 스마트팩토리로 확장',
            description: '로봇 용접 셀을 기반으로 MES·품질·이력 데이터 연동을 단계적으로 구축합니다.',
            components: ['용접 설비 데이터', '공정 모니터링', '작업 이력', '품질 로그', '대시보드', 'MES 연동']
        },
        applicationFields: ['용접 자동화 라인', '품질 추적 필요 공정', '다품종 생산', '국책·스마트공장 과제', '데이터 기반 공정 개선'],
        problems: [
            '용접 품질 데이터가 남지 않음',
            '공정 상태를 실시간 파악하기 어려움',
            '작업 이력·추적성 부족',
            '스마트공장 과제 대응 필요'
        ],
        specifications: {
            '솔루션 유형': '스마트팩토리·데이터 연동',
            '연계 대상': 'TAWERS 용접 설비, 생산 시스템',
            '기능': '모니터링, 이력, 품질 데이터',
            '구축 방식': '단계별 확장',
            '견적 방식': '현장 조건별 별도 산정'
        },
        process: ['현장·데이터 요구 확인', '연동 범위 정의', 'PoC·파일럿', '시스템 구축', '운영·교육', '확장 지원'],
        relatedLinks: [
            { slug: 'tawers-welding-robot-system', name: 'TAWERS 용접로봇 시스템', desc: '핵심 설비' },
            { slug: 'turnkey-robot-automation-cell', name: '턴키 자동화 셀', desc: '통합 셀' }
        ],
        cta: {
            title: '스마트팩토리 연동 상담',
            description: '현재 설비 현황과 데이터 관리 목표를 알려주시면 연동 범위와 단계를 제안드립니다.'
        }
    }
};

function getProductDetailContent(slug) {
    const aliases = {
        tawers: 'tawers-welding-robot-system',
        'tm-series': 'welding-robot-manipulator-lineup',
        'ts-series': 'welding-robot-manipulator-lineup',
        'tl-series': 'welding-robot-manipulator-lineup'
    };
    return PRODUCT_DETAIL_CONTENT[aliases[slug] || slug] || null;
}

function getCatalogProduct(slug) {
    if (!window.productManager) return null;
    return window.productManager.findProductBySlug(slug);
}

function resolveSlugFromUrl() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('p')) return params.get('p');
    const parts = window.location.pathname.split('/').filter(Boolean);
    const idx = parts.indexOf('products');
    if (idx >= 0 && parts[idx + 1] && parts[idx + 1] !== 'index.html' && parts[idx + 1] !== 'detail.html') {
        return parts[idx + 1];
    }
    return null;
}
