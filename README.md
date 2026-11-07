# 김진우의 개인 포트폴리오

Hugo Scroll 템플릿을 활용해 제작한 개인 포트폴리오 웹사이트입니다. 자기소개와 관심 분야, 앞으로의 학습 목표, 공군 해커톤 참여 경험을 소개합니다.

이 저장소의 목적은 이미 종료된 활동의 과정과 본인의 기여, 배운 점을 정리해 웹으로 공개하는 것입니다. 해커톤 결과물을 추가 개발하거나 그 성능을 검증하는 프로젝트가 아닙니다.

- **공개 사이트:** [김진우 포트폴리오](https://uuniz23.github.io/MyPortfolio/)
- **저장소:** [uuniz23/MyPortfolio](https://github.com/uuniz23/MyPortfolio)

## 주요 콘텐츠

### 자기소개

관심 분야와 관심을 갖게 된 계기, 경험을 통해 얻은 역량, 앞으로의 학습 및 활동 목표를 소개합니다.

### 공군 해커톤 활동

2025년 공군 창의·혁신 아이디어 공모 해커톤에서 팀 ‘해피버스데이’의 팀장으로 참여한 경험을 소개합니다.

- **활동 주제:** 서울시 교통혼잡 해소를 위한 버스노선 개편 아이디어 제안
- **활동 기간:** 2025년 5월 14일~7월 4일
- **종료:** 2025년 8월 7일 예선 탈락 확인
- **소개 내용:** 참여 목적, 아이디어 구체화 과정, 팀 내 역할과 본인의 기여, 활동 결과, 배운 점과 한계

활동 소개는 시스템 구현 자체보다 아이디어의 기획과 제안 경험을 중심으로 구성했습니다.

## 추가 기능

### 본문 이미지 확대 보기

본문의 이미지를 클릭하거나 이미지 버튼에 키보드 초점을 둔 뒤 **Enter 또는 Space**를 누르면 확대 창이 열립니다. 확대 창에는 이미지와 대체 설명이 함께 표시됩니다.

- **닫기 버튼, Esc 또는 창 바깥 클릭**으로 닫을 수 있습니다.
- 닫으면 원래 이미지 버튼으로 키보드 초점이 돌아갑니다.
- 모바일에서는 화면 폭에 맞게 표시하고 긴 이미지는 확대 창에서 스크롤해 읽을 수 있도록 구성했습니다.
- 확대 기능을 지원하지 않는 환경에서는 원래 본문 이미지를 유지합니다.

### 본문 색상 테마 선택

화면 오른쪽 아래의 **`color`** 버튼을 클릭하면 작은 선택 패널이 열립니다. 버튼에 마우스를 올리거나 패널을 여는 것만으로는 색상이 바뀌지 않으며, 패널 안의 색상 견본을 선택해야 적용됩니다.

| 이름 | 본문 배경 조합 |
|---|---|
| Default | 기존 사이트의 붉은색 / 밝은 베이지색 |
| Forest | 짙은 녹색 / 아이보리 |
| Ocean | 짙은 남색 / 옅은 하늘색 |
| Mono | 진회색 / 밝은 회색 |

- 두 색으로 나뉜 원형 견본 아래에 영어 테마 이름을 표시합니다.
- 선택에 따라 본문 섹션의 배경색과 글자·링크·구분선 색상을 함께 변경합니다.
- **첫 화면 배경 이미지와 첫 화면 디자인, 활동 자료 이미지 자체는 변경하지 않습니다.**
- 선택은 브라우저의 `localStorage`에 저장해 새로고침 후에도 복원합니다. 저장이 제한된 환경에서도 현재 페이지의 색상 선택은 동작하도록 구성했습니다.
- **Default**를 선택하면 기존 본문 색상으로 돌아갑니다.
- `color` 재클릭, 패널 바깥 클릭 또는 **Esc**로 닫을 수 있습니다.
- 키보드로 `color` 버튼을 실행하면 현재 선택된 항목으로 초점이 이동하며, 방향키로 색상 항목을 변경할 수 있습니다.
- 패널은 모바일 화면 폭에 맞춰 표시하며, 글꼴은 사이트 메뉴와 유사한 Open Sans Condensed 계열을 사용합니다.

## 사이트 구성

| 구분 | 사용 기술 및 구성 |
|---|---|
| 정적 사이트 생성 | Hugo |
| 기반 템플릿 | Hugo Scroll |
| 콘텐츠 작성 | Markdown |
| 화면 구성 및 디자인 수정 | Hugo 템플릿, CSS |
| 이미지 확대·색상 선택 | JavaScript, CSS, 브라우저 저장소 |
| 버전 관리 | Git, GitHub |
| 빌드·자동 배포 | GitHub Actions |
| 공개 호스팅 | GitHub Pages |
| 사이트 언어 | 한국어 |

## 주요 파일과 폴더

| 경로 | 용도 |
|---|---|
| `site/hugo.toml` | 사이트 제목, 언어, 연락처 등 기본 설정 |
| `site/pages.json` | GitHub Pages 배포용 설정 |
| `site/content/ko/` | 한국어 콘텐츠 |
| `site/content/ko/_index.md` | 첫 화면 구성 |
| `site/content/ko/homepage/` | 자기소개와 활동 소개 등 홈페이지 섹션 |
| `site/assets/` | Hugo에서 처리하는 이미지·스타일 자산 |
| `site/static/` | 공개 사이트에 그대로 제공하는 정적 파일 |
| `site/static/js/image-viewer.js` | 이미지 확대 창 및 키보드 조작 |
| `site/static/css/image-viewer.css` | 이미지 버튼·확대 창 스타일 |
| `site/static/js/color-select.js` | 색상 패널·선택·저장·복원 동작 |
| `site/static/css/color-select.css` | 색상 팔레트·원형 견본·선택 패널 스타일 |
| `site/static/css/color-select-labels.css` | 색상 선택 패널의 글꼴과 이름 표시 스타일 |
| `site/layouts/partials/custom_head.html` | 기능 파일 연결, 저장된 테마의 초기 복원, 섹션 색상 적용 |
| `site/layouts/` | 사용자 정의 템플릿 |
| `site/themes/template/` | 사이트에 사용하는 테마 |
| `.github/workflows/hugo-pages.yml` | 사이트 빌드·배포 워크플로 |
| `LICENSE` | 원본 테마 라이선스 |

색상 선택 관련 CSS·JavaScript는 내용 해시가 포함된 주소로 연결해 변경 전 파일이 브라우저 캐시에 남는 문제를 줄였습니다.

## 빌드 재현 및 확인 방법

이 사이트의 운영 방식은 GitHub Actions를 통한 GitHub Pages 배포입니다. 별도 로컬 배포는 필요하지 않습니다. 아래는 저장소에 기록된 자동 설치·빌드 절차를 이용하는 재현 방법입니다.

### 도구 버전과 설치 절차

[배포 워크플로](.github/workflows/hugo-pages.yml)는 다음 환경을 자동으로 준비합니다.

| 도구 | 지정 버전·설치 방식 |
|---|---|
| 실행 환경 | GitHub Actions의 `ubuntu-latest` |
| Python | `3.12` — `actions/setup-python`으로 설치 |
| Node.js / npm | Node.js `24` — `actions/setup-node`로 설치, npm 포함 |
| Go | `1.27.1` — `actions/setup-go`로 설치 |
| Hugo | Extended `0.167.0` — 공식 GitHub Releases의 Linux amd64 배포 파일 다운로드·압축 해제 후 PATH 등록 |
| Dart Sass | `1.105.0` — 공식 GitHub Releases의 Linux x64 배포 파일 다운로드·압축 해제 후 PATH 등록 |
| 추가 의존성 | `.github/pages_build.py --dependencies`로 필요한 npm 패키지 등을 설치 |

Hugo Scroll 테마는 `site/themes/template/`에 포함되어 있습니다. 의존성 준비와 빌드에는 저장소에 포함된 `.github/pages_build.py` 버전 `3.1`을 사용합니다. 세부 다운로드 명령과 설치 순서는 워크플로의 `Install Hugo and Sass`, `Prepare dependencies` 단계를 기준으로 합니다.

### GitHub Actions에서 재현하기

1. 이 공개 저장소를 열고 **Actions → Deploy Hugo to GitHub Pages → Run workflow**에서 `main`을 선택해 실행합니다. 실행에는 저장소의 쓰기 권한이 필요합니다. 권한이 없는 경우 저장소를 본인 계정으로 포크한 뒤, **Settings → Pages → Source**를 **GitHub Actions**로 설정하고 실행합니다. 포크에서는 워크플로 실행도 활성화합니다.
2. 워크플로가 저장소를 체크아웃하고 위 도구들을 설치합니다.
3. 저장소 루트에서 다음 명령을 순서대로 실행해 의존성을 준비하고 사이트를 빌드합니다. 아래 명령은 워크플로에 포함된 실제 명령이며, `SITE_BASE_URL`은 `actions/configure-pages`가 제공한 Pages 주소로 설정됩니다.

```bash
python .github/pages_build.py --dependencies
python .github/pages_build.py --build
```

4. `Build and fix project URL paths` 단계가 성공하면 루트의 `public/index.html`을 포함한 정적 사이트가 생성됩니다. 빌드 스크립트는 홈페이지 생성 여부를 검사하고 프로젝트 하위 경로를 보정합니다.
5. 생성 결과는 Pages 아티팩트로 업로드되고 `deploy` 작업에서 공개됩니다. 실행 상세 화면의 배포 주소를 열어 사이트를 확인합니다. 포크에서 재현한 경우 원본 주소가 아닌 해당 실행에 표시된 본인 Pages 주소를 사용합니다.

이 절차는 별도 서버를 설치해 운영하는 방식이 아니라, 저장소의 자동 설치·빌드·배포를 다시 실행하는 방식입니다. 수동 실행 외에도 `main` push가 같은 워크플로를 자동으로 시작합니다.

## 수정 및 재배포 방법

### 수정할 파일

- 첫 화면 제목과 문구: `site/content/ko/_index.md`
- 자기소개: `site/content/ko/homepage/about-me.md`
- 해커톤 활동 소개: `site/content/ko/homepage/Project.md`
- 기타 홈페이지 섹션: `site/content/ko/homepage/`의 해당 Markdown 파일
- 사이트 제목·언어·연락처: `site/hugo.toml`
- 화면 디자인: `site/layouts/`의 사용자 정의 템플릿 및 해당 스타일 파일
- 공개 이미지 등 정적 파일: `site/static/`
- 이미지 확대 동작·디자인: `site/static/js/image-viewer.js`, `site/static/css/image-viewer.css`
- 색상 선택 동작·영어 이름: `site/static/js/color-select.js`
- 색상 팔레트·견본·패널: `site/static/css/color-select.css`
- 색상 패널 글꼴: `site/static/css/color-select-labels.css`
- 기능 파일 연결·초기 테마 복원·본문 섹션의 명시적 색상 적용: `site/layouts/partials/custom_head.html`

팔레트 수정 시 `color-select.css`의 테마 변수·견본과 `custom_head.html`의 섹션 색상 조합을 함께 맞춥니다. 저장된 테마 식별자(`default`, `forest`, `ocean`, `mono`)는 색상 선택 스크립트와 초기 복원 코드에서 동일하게 사용합니다.

섹션 메뉴 노출은 해당 Markdown 파일의 `header_menu`, 순서는 `weight` 설정으로 관리합니다. 공개 사이트의 기준 주소는 `https://uuniz23.github.io/MyPortfolio/`이며, 정적 파일의 공개 경로에는 저장소 내부의 `site/static/`을 포함하지 않습니다.

### 커밋·push 및 반영 확인

1. 수정 사항을 확인하고 하나의 목적을 가진 작업 단위로 커밋합니다. 로컬 Git을 사용하는 경우 저장소 루트에서 다음과 같이 실행합니다. 아래 예시는 자기소개 파일을 수정한 경우입니다.

```bash
git switch main
git add site/content/ko/homepage/about-me.md
git commit -m "docs: 자기소개 내용 수정"
git push origin main
```

2. [Actions 실행 목록](https://github.com/uuniz23/MyPortfolio/actions)에서 해당 push로 시작된 **Deploy Hugo to GitHub Pages** 실행을 엽니다.
3. 실행 대상 브랜치가 `main`이고 커밋 SHA가 방금 push한 커밋과 일치하는지 확인합니다. `build`와 `deploy` 작업이 모두 성공해야 배포 완료입니다.
4. 실패한 경우 실패 단계의 로그를 확인하고, 원인을 수정해 다시 commit·push합니다. 이전 실행이 성공했다는 사실만으로 새 변경이 배포되었다고 판단하지 않습니다.
5. 성공 후 [공개 사이트](https://uuniz23.github.io/MyPortfolio/)를 새로고침하여 수정한 문구·이미지·메뉴가 실제로 반영되었는지 확인합니다. 변경한 링크를 누르고 목적지와 이미지 표시도 함께 확인합니다.
6. 이미지 확대 관련 변경은 클릭·키보드로 열기, 닫기·Esc, 원래 버튼으로 초점 복귀와 모바일 표시를 확인합니다.
7. 색상 선택 관련 변경은 `color` 패널 열기·닫기, 네 가지 테마 적용, 새로고침 후 선택 유지, Default 복원, 모바일 배치와 글자 대비를 확인합니다. 첫 화면 이미지가 유지되는지도 확인합니다.

GitHub 웹 편집기를 사용하는 경우에도 변경을 `main`에 커밋하면 같은 자동 배포가 실행됩니다. 위 기능 확인 항목은 배포 후 수행할 점검 절차이며, 자동 빌드 성공만으로 실제 브라우저 조작까지 검증된 것으로 보지 않습니다.

## 출처 및 제작 안내

### Hugo 및 원본 템플릿

- 정적 사이트 생성 도구: [Hugo](https://gohugo.io/)
- 기반 템플릿: [Hugo Scroll](https://github.com/janraasch/hugo-scroll)
- 원본 테마의 라이선스와 저작권 고지는 저장소의 `LICENSE` 및 관련 파일에 보존합니다.
- 원본 템플릿을 바탕으로 한국어 콘텐츠, 메뉴, 사이트 설정과 화면 디자인을 개인 포트폴리오에 맞게 수정했습니다.
- 본문 이미지 확대와 사전 구성 색상 테마 선택 기능을 추가했습니다.

### 이미지

사이트의 favicon과 첫 화면 배경 이미지 등 사이트 장식용 이미지는 제작자 김진우가 AI를 활용해 자체 생성한 이미지입니다.

### 기획서·요약서 발췌사진

- **출처 및 제작 주체:** 김진우와 해피버스데이 팀이 직접 공동 작성한 기획서·요약서에서 발췌한 사진입니다. 원본 문서와 발췌사진은 팀 공동 자산입니다.
- **이용 조건:** 포트폴리오 활동 소개를 위한 열람용으로 공개하며, 발췌사진의 이용을 금지합니다. 사진의 복제·재배포·수정·전재 및 다른 자료나 서비스에서의 재사용은 허용하지 않습니다.

### 시뮬레이션 코드

- **출처 및 제작 주체:** 김진우가 AI의 도움을 받아 단독으로 제작한 코드입니다. 팀 공동 작성 문서 및 발췌사진과 구분됩니다.
- **이용 조건:** 직접 작성한 시뮬레이션 코드는 누구나 별도 허락이나 사용료 없이 사용·복제·수정·배포할 수 있으며, 상업적 이용도 허용합니다. 출처 표시를 이용 조건으로 요구하지 않습니다.
- 위 허용 범위는 직접 작성한 코드에 한합니다. 사용된 외부 라이브러리·지도 서비스·제3자 자료에는 각 제공자의 라이선스와 이용 조건이 별도로 적용됩니다. 기획서·요약서 발췌사진에는 이 코드 이용 허용이 적용되지 않습니다.

### 콘텐츠 작성

자기소개와 활동 소개는 본인의 경험 및 활동 기록을 바탕으로 작성했습니다. 팀 활동에서는 공동 수행한 내용과 본인의 역할을 구분해 설명합니다. 포트폴리오 글의 정리·수정 과정에는 AI의 도움을 활용했습니다.
