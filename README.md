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

## 사이트 구성

| 구분 | 사용 기술 및 구성 |
|---|---|
| 정적 사이트 생성 | Hugo |
| 기반 템플릿 | Hugo Scroll |
| 콘텐츠 작성 | Markdown |
| 화면 구성 및 디자인 수정 | Hugo 템플릿, CSS |
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
| `site/layouts/` | 사용자 정의 템플릿 |
| `site/themes/template/` | 사이트에 사용하는 테마 |
| `.github/workflows/hugo-pages.yml` | 사이트 빌드·배포 워크플로 |
| `LICENSE` | 원본 테마 라이선스 |

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

GitHub 웹 편집기를 사용하는 경우에도 변경을 `main`에 커밋하면 같은 자동 배포가 실행됩니다.

## 출처 및 제작 안내

### Hugo 및 원본 템플릿

- 정적 사이트 생성 도구: [Hugo](https://gohugo.io/)
- 기반 템플릿: [Hugo Scroll](https://github.com/janraasch/hugo-scroll)
- 원본 테마의 라이선스와 저작권 고지는 저장소의 `LICENSE` 및 관련 파일에 보존합니다.
- 원본 템플릿을 바탕으로 한국어 콘텐츠, 메뉴, 사이트 설정과 화면 디자인을 개인 포트폴리오에 맞게 수정했습니다.

### 이미지

사이트의 favicon과 첫 화면 배경 이미지 등 사이트 장식용 이미지는 제작자 김진우가 AI를 활용해 자체 생성한 이미지입니다.

### 콘텐츠 작성

자기소개와 활동 소개는 본인의 경험 및 활동 기록을 바탕으로 작성했습니다. 팀 활동에서는 공동 수행한 내용과 본인의 역할을 구분해 설명합니다. 포트폴리오 글의 정리·수정 과정에는 AI의 도움을 활용했습니다.
