# 홈페이지 운영 인수인계서

**대상 사이트:** 세한메카트로닉스, 제이원로보틱스  
**문서 목적:** 홈페이지 운영·수정 권한의 인수인계  
**작성일:** 2026년 6월 11일

---

## 1. 개요

본 문서는 세한메카트로닉스 및 제이원로보틱스 홈페이지의 운영 권한을 인수인에게 이전하기 위한 인수인계 자료입니다.

두 사이트 모두 GitHub 저장소 기반으로 관리되며, `main` 브랜치에 반영(push) 시 실제 홈페이지에 자동 배포됩니다.

| 구분 | 세한메카트로닉스 | 제이원로보틱스 |
|------|------------------|----------------|
| 공개 URL | https://www.shm21.kr | https://jwon-robo.com |
| 코드 저장소 | https://github.com/jwonrt-beep/sehan | https://github.com/jwonrt-beep/jwon |
| 배포 방식 | GitHub push → 자동 반영 (약 1~3분) | 동일 |

---

## 2. 인수 절차

### 2.1 인수인 준비

| 순번 | 내용 | 비고 |
|------|------|------|
| 1 | GitHub 계정 보유 (신규 가입 또는 기존 계정) | https://github.com |
| 2 | GitHub 아이디 또는 가입 이메일을 인계자에게 통보 | — |
| 3 | 인계자가 발송한 Collaborator 초대 수락 | 세한·제이원 저장소 각각 수락 |

※ 별도 비밀번호·개인식별정보는 요구하지 않으며, GitHub 계정만으로 권한 이전이 가능합니다.

### 2.2 초대 수락

인계자가 Collaborator 초대 발송 후, 인수인은 아래 경로에서 초대를 수락합니다.

- 세한: https://github.com/jwonrt-beep/sehan  
- 제이원: https://github.com/jwonrt-beep/jwon  

초대가 확인되지 않는 경우

- 초대 대상 이메일과 동일 계정 로그인 여부 확인
- 스팸함 확인
- 필요 시 인계자에게 초대 재발송 요청

### 2.3 역할 구분

| 구분 | 인계자 | 인수인 |
|------|--------|--------|
| 권한 | 저장소 Collaborator 초대 (Write/Admin) | 초대 수락 |
| 도메인 | 전권 인수 시 도메인 계정 별도 전달 | 이후 DNS·도메인 관리 |
| 운영 | 인수인계 기간 중 문의 응대 | 수정·이미지 추가·push |

---

## 3. 배포·반영 기준

1. 소스 또는 이미지 수정  
2. GitHub `main` 브랜치 push  
3. 배포 완료 후 공개 URL에서 반영 확인  

배포 상태는 각 저장소의 **Actions** 메뉴에서 확인합니다.

| 사이트 | 반영 확인 URL |
|--------|----------------|
| 세한메카트로닉스 | https://www.shm21.kr |
| 제이원로보틱스 | https://jwon-robo.com |

※ 로컬에만 저장하고 push하지 않은 변경 사항은 공개 사이트에 반영되지 않습니다.

---

## 4. 주요 수정 대상 파일

### 4.1 세한메카트로닉스 (`sehan`)

| 구분 | 경로 |
|------|------|
| 메인 | `index.html` |
| 제품·설비 | `products.html`, `assets/images/products/panasonic/` |
| 주소·연락처 | `locations.html`, 각 페이지 푸터 |
| 문의 | `contact.html` |
| 회사소개 | `company.html` |
| 인증 | `certifications.html` |
| 구축사례 | `cases.html` |
| 공통 스타일 | `css/style.css` |
| 제품 스타일 | `css/products.css` |

※ 연락처 변경 시 `locations.html`, `contact.html`, 각 페이지 푸터를 일괄 확인합니다.

### 4.2 제이원로보틱스 (`jwon`)

| 구분 | 경로 |
|------|------|
| 메인 | `index.html` |
| 회사소개 | `about/index.html` |
| 문의 | `contact/index.html` |
| 제품 목록 | `products/index.html` |
| 제품 상세 데이터 | `products/*-data.js`, `products/detail-content.js` |
| 제품 상세 화면 | `products/detail-renderer.js`, `products/detail.css` |
| 제품 이미지 | `assets/images/products/` |
| 자료 다운로드 | `downloads/index.html`, `assets/documents/` |
| 다운로드 목록 | `assets/documents/downloads.json` |
| 공통 스타일 | `styles.css` |
| 관리자 | `admin/login.html`, `admin/` |

※ 연락처 변경 시 `contact/index.html`, `about/index.html`, `index.html` 푸터를 일괄 확인합니다.

---

## 5. 이미지·자료 관리

### 5.1 세한메카트로닉스

**게재 위치:** 메뉴 「제품 및 시스템」 하단 「실제 설비 및 적용 이미지」

**저장 경로:** `assets/images/products/panasonic/`

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

※ 파일명 변경 시 화면 미표시. 교체·추가 후 push 필수.

**추후 보완 가능 항목**

| 구분 | 경로·대상 |
|------|-----------|
| 메인 | `images/hero-robot.jpg` |
| 구축사례 | `cases.html` 관련 이미지 |
| 인증 | `certifications.html` 인증서 스캔 |
| 사업장 | `locations.html` 시설·외관 사진 |

### 5.2 제이원로보틱스

**저장 경로:** `assets/images/products/`

| 폴더 | 용도 |
|------|------|
| `power/` | 용접전원·컨트롤러 |
| `highpower/` | 고출력 용접 |
| `jig/` | 지그·포지셔너 |
| `turnkey/` | 턴키 셀 |
| `tawers/` | TAWERS 시스템 |
| `smartfactory/` | 스마트팩토리 |
| `lineup/` | 로봇 라인업 |
| `process/` | 용접 공정·소프트웨어 |
| `robots/` | 개별 로봇 모델 |

**로봇 모델 사진 (`robots/`)**

사진이 등록된 모델만 갤러리가 표시됩니다.

| 모델 | 파일명 규칙 |
|------|-------------|
| TS-950 | `ts-950.jpg`, `ts-950-detail.jpg`, `ts-950-reach.jpg`, `ts-950-application.jpg`, `ts-950-field.jpg` |
| TM-1400 | `tm-1400.jpg` 등 동일 패턴 |
| TL-1800 | `tl-1800.jpg` 등 동일 패턴 |

그 외 모델(TS-800, TM-1100, TM-1600, TM-1800, TM-2000, TL-2000 등)은 스펙 전용 페이지로 운영되며, 사진 없이도 정상 표시됩니다.

**자료 다운로드**

| 구분 | 경로 |
|------|------|
| PDF 파일 | `assets/documents/` |
| 목록 설정 | `assets/documents/downloads.json` |
| 예시 | `tawers-product-catalog.pdf` |

※ 파일명 변경 시 미표시 가능. 교체·추가 후 push 필수.

---

## 6. 제이원 관리자 페이지 참고

| 항목 | 내용 |
|------|------|
| URL | https://jwon-robo.com/admin/login.html |
| 관리자 | `admin` / `admin123` |
| 편집자 | `editor` / `edit123` |
| 조회 | `viewer` / `view123` |

※ 관리자 화면의 문의·리드 데이터는 브라우저 localStorage에만 저장됩니다.  
다른 PC·브라우저에서는 조회되지 않으며, 서버형 CRM이 아닙니다.  
실무 문의 대응은 메일·전화 등 별도 채널을 사용합니다.

---

## 7. 도메인 인수 (전권 이전 시)

GitHub Collaborator 권한만으로도 콘텐츠 수정·배포는 가능합니다.  
도메인·DNS까지 관리하는 전권 인수의 경우, 인계자가 도메인 등록 업체 계정을 별도 전달합니다.

| 사이트 | 도메인 |
|--------|--------|
| 세한메카트로닉스 | www.shm21.kr |
| 제이원로보틱스 | jwon-robo.com |

※ DNS 변경 전 현행 설정 캡처를 권장합니다. 잘못된 변경 시 사이트 접속이 중단될 수 있습니다.

---

## 8. 인수 확인 체크리스트

| 순번 | 확인 항목 | 세한 | 제이원 |
|------|-----------|:----:|:------:|
| 1 | GitHub 계정 준비 및 아이디·이메일 통보 | ○ | ○ |
| 2 | Collaborator 초대 수락 | ○ | ○ |
| 3 | 저장소 접근 확인 | ○ | ○ |
| 4 | 소규모 수정 후 push 테스트 | ○ | ○ |
| 5 | 공개 URL 반영 확인 | ○ | ○ |
| 6 | (전권) 도메인 계정 로그인 확인 | ○ | ○ |

---

## 9. 문의

인수인계 관련 문의는 인계자에게 연락 바랍니다.  
본 문서(`docs/HANDOVER.md`)를 기준으로 두 사이트 기본 운영이 가능합니다.
