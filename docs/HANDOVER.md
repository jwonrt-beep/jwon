# 세한메카트로닉스 · 제이원로보틱스 홈페이지 인수인계

안녕하세요.  
세한메카트로닉스 / 제이원로보틱스 홈페이지 관리를 인수받으실 분께 안내드립니다.

두 사이트 모두 **GitHub에 올리면(push) 자동 반영**되는 구조입니다.  
아래 내용만 확인해 주시면 기본 운영이 가능합니다.

---

## 먼저 이것만 기억해 주세요

| 항목 | 세한메카트로닉스 | 제이원로보틱스 |
|------|------------------|----------------|
| 홈페이지 | https://www.shm21.kr | https://jwon-robo.com |
| 코드 저장소 | https://github.com/jwonrt-beep/sehan | https://github.com/jwonrt-beep/jwon |
| 반영 방식 | 파일 수정 → GitHub `main`에 push → 1~3분 뒤 사이트 반영 | 동일 |

**공통 주의**  
로컬 컴퓨터에만 저장하고 GitHub에 올리지 않으면, 실제 사이트에는 보이지 않습니다.

---

## 1. 인수 전 준비 사항

1. https://github.com 에서 무료 계정을 만들어 주세요. (이미 계정이 있으시면 그대로 사용하시면 됩니다.)
2. **GitHub 아이디 또는 가입 이메일**을 제게 알려 주세요.
3. 제가 **세한(`sehan`) · 제이원(`jwon`) 두 저장소**에 초대를 보내 드리면, 각각 초대를 수락해 주세요.

비밀번호나 주민번호 같은 정보는 필요하지 않습니다.  
**GitHub 계정만** 있으시면 됩니다.

---

## 2. 권한 받는 방법 (초대 수락)

제가 Collaborator 초대를 보낸 뒤:

1. GitHub에 가입하신 이메일을 확인하시거나
2. 아래 주소에 접속했을 때 표시되는 초대 안내에서
   - 세한: https://github.com/jwonrt-beep/sehan  
   - 제이원: https://github.com/jwonrt-beep/jwon  
3. **Accept invitation (수락)** 을 눌러 주세요.

수락이 완료되면 저장소가 열리며, 그때부터 수정·업로드가 가능합니다.  
**두 저장소 모두** 수락해 주셔야 두 사이트를 모두 관리하실 수 있습니다.

### 초대가 보이지 않을 때

- GitHub에 초대한 이메일과 같은 계정으로 로그인하셨는지 확인해 주세요.
- 스팸함도 함께 확인해 주세요.
- 그래도 보이지 않으면 제게 **「초대 재발송」**을 요청해 주시면 됩니다.

---

## 3. 역할 안내

### 제가 진행할 사항

- 두 저장소에 Collaborator로 초대 (Write 또는 Admin)
- (전권 인수인 경우) 도메인 관리 계정도 별도 전달  
  - 세한: `www.shm21.kr`  
  - 제이원: `jwon-robo.com`
- 인수인계 기간 중 문의 응대

### 인수받으실 분이 진행해 주실 사항

- GitHub 가입 후 아이디를 제게 알려 주시기
- **세한·제이원 초대 모두** 수락
- 이후 홈페이지 수정·이미지 추가·push

---

## 4. 사이트 수정 방법 (두 사이트 공통)

1. 파일 수정 또는 이미지 추가  
2. GitHub **main** 브랜치에 push  
3. 1~3분 뒤 해당 홈페이지에 반영  

GitHub 사이트의 **Actions** 메뉴에서 배포 성공 여부를 확인할 수 있습니다.

| 사이트 | 반영 확인 주소 |
|--------|----------------|
| 세한 | https://www.shm21.kr |
| 제이원 | https://jwon-robo.com |

---

## 5. 자주 수정하는 파일

### A. 세한메카트로닉스 (`sehan`)

| 목적 | 파일 |
|------|------|
| 메인 | `index.html` |
| 제품·설비 사진 | `products.html` + `assets/images/products/panasonic/` |
| 주소·전화 | `locations.html`, 각 페이지 하단(푸터) |
| 문의 | `contact.html` |
| 회사소개 | `company.html` |
| 인증 | `certifications.html` |
| 구축사례 | `cases.html` |
| 공통 디자인 | `css/style.css` |
| 제품 페이지 디자인 | `css/products.css` |

연락처를 변경하실 때는 `locations.html` / `contact.html`과 **각 페이지 푸터**를 함께 확인해 주세요.

### B. 제이원로보틱스 (`jwon`)

| 목적 | 파일·폴더 |
|------|-----------|
| 메인 | `index.html` |
| 회사소개 | `about/index.html` |
| 문의 | `contact/index.html` |
| 제품 목록 | `products/index.html` |
| 제품 상세(데이터) | `products/*-data.js`, `products/detail-content.js` |
| 제품 상세(화면) | `products/detail-renderer.js`, `products/detail.css` |
| 제품 이미지 | `assets/images/products/` (아래 6절 참고) |
| 자료 다운로드 | `downloads/index.html` + `assets/documents/` |
| 다운로드 목록 | `assets/documents/downloads.json` |
| 공통 디자인 | `styles.css` |
| 관리자(참고) | `admin/login.html`, `admin/` |

연락처·푸터를 바꾸실 때는 `contact/index.html`, `about/index.html`, `index.html` 하단을 함께 확인해 주세요.

---

## 6. 제품·갤러리 사진

### A. 세한 — 제품·갤러리

**사이트에서 확인하는 위치**  
메뉴 「제품 및 시스템」 → 페이지를 맨 아래까지 스크롤  
→ 「실제 설비 및 적용 이미지」 가 갤러리입니다.

**파일을 넣는 위치**  
`assets/images/products/panasonic/`

```
hero.jpg
ts-tm-tl-series.jpg
system-configuration.jpg
co2-mag-mig-system.jpg
tig-system.jpg
positioner-external-axis.jpg
large-multi-robot.jpg
g3-controller-pendant.jpg
remote-tp-viewer.jpg
gallery/
  facility-01.jpg ~ facility-06.jpg
```

파일 이름을 바꾸시면 화면에 표시되지 않습니다.  
이미지를 추가·교체하신 뒤에는 꼭 GitHub에 push 해 주세요.

### B. 제이원 — 제품 이미지

**파일을 넣는 위치**  
`assets/images/products/`

| 폴더 | 용도 |
|------|------|
| `power/` | 용접전원·컨트롤러 |
| `highpower/` | 고출력 용접 |
| `jig/` | 지그·포지셔너 |
| `turnkey/` | 턴키 셀 |
| `tawers/` | TAWERS 시스템 |
| `smartfactory/` | 스마트팩토리 |
| `lineup/` | 로봇 라인업 소개 |
| `process/` | 용접 공정·소프트웨어 |
| `robots/` | 개별 로봇 모델 사진 |

**로봇 모델 사진 (`robots/`)**  
사진이 있는 모델만 갤러리가 표시됩니다.

| 모델 | 파일 예시 (이름 유지) |
|------|------------------------|
| TS-950 | `ts-950.jpg`, `ts-950-detail.jpg`, `ts-950-reach.jpg`, `ts-950-application.jpg`, `ts-950-field.jpg` |
| TM-1400 | `tm-1400.jpg` 등 동일 패턴 |
| TL-1800 | `tl-1800.jpg` 등 동일 패턴 |

그 외 모델(TS-800, TM-1100, TM-1600, TM-1800, TM-2000, TL-2000 등)은 **스펙 전용 페이지**로 구성되어 있어, 사진 없이도 정상 표시됩니다.

**자료 다운로드 PDF**  
- 파일: `assets/documents/`  
- 목록 등록: `assets/documents/downloads.json`  
- 예: `tawers-product-catalog.pdf`

파일 이름을 바꾸시면 화면에 표시되지 않을 수 있습니다.  
교체·추가 후 반드시 push 해 주세요.

---

## 7. 아직 비어 있을 수 있는 이미지 / 참고

### 세한

추후 넣으시면 됩니다.

- 메인: `images/hero-robot.jpg`
- 구축사례(`cases.html`): 시뮬레이션/사례 사진
- 인증(`certifications.html`): 인증서 스캔
- 사업장(`locations.html`): 시설/외관 사진

### 제이원

- 로봇 모델 중 사진이 없는 모델은 스펙 레이아웃으로 운영 중입니다. (사진이 생기면 `robots/`에 정해진 이름으로 넣고, 안내 후 코드에서 사진 모델로 등록하면 됩니다.)
- 관리자 페이지(`admin/`)의 문의·리드 데이터는 **브라우저 localStorage**에만 저장됩니다.  
  → 다른 PC/브라우저에서는 보이지 않으며, 서버에 쌓이는 CRM이 아닙니다.  
  → 실제 문의 대응은 메일·전화 등 별도 채널을 사용해 주세요.

**관리자 데모 계정 (참고)**  
- URL: https://jwon-robo.com/admin/login.html  
- 관리자: `admin` / `admin123`  
- 편집자: `editor` / `edit123`  
- 조회: `viewer` / `view123`

---

## 8. 도메인(주소)까지 인수받으실 경우

GitHub 권한만 있으셔도 **내용 수정·배포는 가능**합니다.  
주소·DNS까지 관리하시려면, 제가 도메인 등록 업체 계정도 함께 전달드리겠습니다.

| 사이트 | 도메인 |
|--------|--------|
| 세한 | www.shm21.kr |
| 제이원 | jwon-robo.com |

도메인 설정을 잘못 변경하시면 사이트가 열리지 않을 수 있으니,  
DNS 변경 전에는 **현재 설정을 캡처**해 두시기를 권장합니다.

---

## 9. 시작 체크리스트

### 공통

- [ ] GitHub 가입 완료
- [ ] 아이디/이메일을 제게 전달
- [ ] **세한(`sehan`) 초대** 수락 완료
- [ ] **제이원(`jwon`) 초대** 수락 완료
- [ ] 두 저장소가 열리는지 확인

### 세한

- [ ] 작은 수정 후 push 테스트
- [ ] https://www.shm21.kr 반영 확인
- [ ] (전권) 도메인 로그인 확인

### 제이원

- [ ] 작은 수정 후 push 테스트
- [ ] https://jwon-robo.com 반영 확인
- [ ] (전권) 도메인 로그인 확인

---

궁금하신 점이 있으시면 편하게 문의해 주세요.  
이 파일(`docs/HANDOVER.md`)만 확인하셔도 두 사이트 기본 운영은 가능합니다.
