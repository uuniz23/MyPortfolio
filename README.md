# 김진우의 개인 포트폴리오

Hugo Scroll 테마를 활용해 제작한 개인 포트폴리오입니다. 자기소개와 관심 분야, 2025년 공군 창의·혁신 아이디어 공모 해커톤 활동을 소개합니다.

- **공개 사이트:** [김진우 포트폴리오](https://uuniz23.github.io/MyPortfolio/)
- **저장소:** [uuniz23/MyPortfolio](https://github.com/uuniz23/MyPortfolio)

## 1. 주요 콘텐츠

### 자기소개
관심 분야와 관심을 갖게 된 계기, 앞으로의 학습 및 활동 목표를 소개합니다.

### 공군 해커톤 활동
2025년 팀 ‘해피버스데이’의 팀장으로 참여한 아이디어 기획·제안 활동입니다.

- **주제:** 서울시 교통혼잡 해소 대책
- **활동 기간:** 2025년 5월 14일~7월 4일
- **결과 확인:** 2025년 8월 7일 예선 탈락 확인
- **최종 결과물:** 교통 빅데이터 기반 버스노선 개편 방안을 담은 기획서·요약서
- **소개 내용:** 문제 인식, 자료 조사, 아이디어 구체화, 본인의 기여, 결과와 회고

이 활동은 시스템 개발보다 해결 아이디어의 기획과 제안을 중심으로 진행했습니다. 시뮬레이션은 AI의 도움과 샘플 데이터 등을 활용한 보조 자료이며, 실제 교통혼잡 개선 효과를 검증한 결과가 아닙니다. 세부 데이터의 성격과 한계는 활동 본문 및 각 자료의 설명을 참고해 주세요.

## 2. 기술 구성

| 구분 | 사용 기술 |
|---|---|
| 정적 사이트 생성 | Hugo |
| 테마 | Hugo Scroll 기반 |
| 글 작성 | Markdown |
| 디자인 수정 | Hugo 템플릿, CSS |
| 보조 시뮬레이션 | HTML, CSS, JavaScript |
| 버전 관리 | Git, GitHub |
| 자동 배포 | GitHub Actions, GitHub Pages |

배포 도구의 정확한 버전과 실행 절차는 `.github/workflows/hugo-pages.yml`을 기준으로 확인합니다. 이전 점검에서 Hugo 버전은 `0.167.0`으로 확인했으며, 이후 변경했다면 워크플로의 현재 값이 우선합니다.

## 3. 주요 폴더 구조

```text
MyPortfolio/
├── .github/
│   ├── workflows/hugo-pages.yml     # 빌드·배포 워크플로
│   └── pages_build.py              # 배포 준비 보조 스크립트
├── site/
│   ├── hugo.toml                   # 사이트·언어·테마 설정
│   ├── pages.json                  # GitHub Pages 배포용 설정
│   ├── content/ko/
│   │   ├── _index.md               # 첫 화면 설정
│   │   └── homepage/
│   │       ├── index.md            # 섹션 콘텐츠 묶음 설정
│   │       ├── opener.md           # 시작 안내
│   │       ├── about-me.md         # 자기소개
│   │       └── Project.md          # 해커톤 활동 소개
│   ├── assets/                     # Hugo가 처리하는 이미지·스타일 자산
│   ├── static/
│   │   ├── images/                 # 본문 이미지
│   │   └── simulations/hackathon/  # 보조 시뮬레이션
│   ├── layouts/                    # 사용자 정의 템플릿
│   └── themes/template/            # 배포에 사용하는 테마
├── LICENSE                         # 원본 테마 라이선스
└── README.md
```

위 구조는 주요 파일만 표시한 것입니다. 파일명은 대소문자를 구분하며, 콘텐츠를 추가·삭제했다면 실제 저장소 구조에 맞춰 사용합니다.

## 4. 로컬 실행 준비

### 사전 준비

1. Git을 설치합니다.
2. 배포 워크플로와 호환되는 Hugo를 설치합니다. Sass 기반 테마를 처리할 수 있도록 Hugo Extended 사용을 권장합니다.
3. 워크플로에서 별도 Sass 도구 등을 설치한다면, 로컬에서도 동일한 도구와 버전을 준비합니다.
4. 워크플로에 Node.js 또는 패키지 설치 단계가 있다면 해당 버전과 절차를 따릅니다.

Hugo 설치 방법은 [Hugo 공식 설치 안내](https://gohugo.io/installation/)를 참고합니다. 운영체제별로 설치 방법이 다르므로 배포에 사용하는 버전과 일치하는지 확인합니다.

```bash
git --version
hugo version
```

### 저장소 내려받기

```bash
git clone https://github.com/uuniz23/MyPortfolio.git
cd MyPortfolio
```

이미 저장소가 있다면 새로 복제하지 않고, 로컬 변경 사항을 확인한 뒤 최신 변경을 가져옵니다.

```bash
git status
git switch main
git pull origin main
```

커밋하지 않은 수정이 있다면 먼저 커밋하거나 임시 보관합니다. 충돌이 발생하면 강제 덮어쓰기 대신 충돌 내용을 확인합니다.

### 로컬 미리보기

저장소 루트에서 다음 명령을 사용합니다.

```bash
cd site
hugo server --config hugo.toml,pages.json --baseURL http://localhost:1313/ --appendPort=false
```

실행 후 터미널에 표시되는 주소로 접속합니다. 종료는 `Ctrl+C`입니다.

**경로 주의:** 본문에 `/MyPortfolio/`로 시작하는 절대 경로를 작성했다면, 루트 주소로 실행한 로컬 미리보기에서는 해당 이미지나 링크가 동작하지 않을 수 있습니다. 배포 경로에 맞춰 확인하려면 다음처럼 실행합니다.

```bash
hugo server --config hugo.toml,pages.json --baseURL http://localhost:1313/MyPortfolio/ --appendPort=false
```

접속 주소는 `http://localhost:1313/MyPortfolio/`입니다. 시작 로그의 주소와 실제 파일 응답을 함께 확인합니다.

### 빌드 확인

`site/`에서 실행합니다.

```bash
hugo --config hugo.toml,pages.json
```

기본 출력 위치는 `site/public/`입니다. 이 폴더는 생성 결과이므로 원본 콘텐츠 대신 수정하지 않습니다. 로컬에서 별도 빌드 스크립트가 필요하면 워크플로의 실제 단계를 함께 확인합니다.

> 위 실행 명령은 현재 알려진 폴더·설정 구성을 기준으로 작성했습니다. 이 README 작성 과정에서 직접 실행 검증하지는 않았습니다. 처음 적용할 때 정상 실행을 확인하고, 필요한 도구 설치 및 명령을 실제 환경에 맞춰 확정해 주세요.

## 5. 콘텐츠 수정 방법

### 첫 화면과 사이트 정보

- `site/hugo.toml`: 사이트 제목, 소개, 언어, 연락처 등의 설정
- `site/content/ko/_index.md`: 첫 화면 제목·부제목·배경
- `site/layouts/partials/custom_head.html`: 사용자 정의 CSS·아이콘 연결

언어 설정은 실제 콘텐츠 위치와 일치시킵니다.

```toml
defaultContentLanguage = "ko"

[languages]
  [languages.ko]
    weight = 10
    label = "한국어"
    contentDir = "content/ko"
```

기존 설정 구역을 수정하며, 같은 구역을 중복 선언하지 않습니다.

### 활동 글

`site/content/ko/homepage/Project.md`의 본문을 수정합니다. 파일 상단의 설정은 제목·표시 순서·메뉴 노출을 제어합니다.

```yaml
---
title: "HACKATHON"
weight: 4
header_menu: true
---
```

`homepage/index.md`의 `headless: true`는 콘텐츠 묶음 설정이므로 유지합니다.

### 이미지

본문용 이미지는 `site/static/images/`에 추가하고 Markdown에서 연결합니다.

```markdown
![이미지의 실제 내용을 설명하는 대체 텍스트](/MyPortfolio/images/example.png)
```

`site/static/`은 공개 URL에 포함하지 않습니다. 파일명·확장자의 대소문자를 정확히 맞추고, 그림 아래에는 자료의 의미와 출처를 설명합니다.

`site/assets/`는 Hugo가 처리하는 자산을 위한 위치입니다. 파일을 넣는 것만으로 동일한 경로의 공개 URL이 자동 제공되는 것은 아니며, 템플릿이나 Hugo 자산 처리 기능을 통해 사용합니다.

### 보조 시뮬레이션

HTML과 필요한 파일을 `site/static/simulations/hackathon/`에 저장합니다.

```markdown
[초기 시뮬레이션 실행](/MyPortfolio/simulations/hackathon/first-sim.html)
```

브라우저에서 실행되는 정적 HTML·JavaScript는 공개할 수 있지만, GitHub Pages 자체에서 별도 백엔드 서버를 실행할 수는 없습니다. API 키·비밀번호·개인정보를 코드에 포함하지 않습니다.

iframe을 사용할 때는 제목과 직접 열기 링크를 제공하고, 모바일 크기·키보드 이동·애니메이션 제어를 확인합니다. Markdown 안의 HTML 출력 허용 설정을 변경할 때는 신뢰할 수 있는 코드만 게시합니다.

## 6. 커밋과 자동 배포

관련 파일을 하나의 목적 단위로 묶어 커밋합니다. 아래는 특정 활동 글과 이미지 한 개를 수정한 예시입니다.

```bash
git status
git diff
git add site/content/ko/homepage/Project.md site/static/images/example.png
git commit -m "docs: 해커톤 활동 설명과 증빙 이미지 보완"
git push origin main
```

예시 경로는 실제로 변경한 파일로 바꿉니다. `git add` 전에 개인정보와 의도하지 않은 파일이 포함되지 않았는지 확인합니다.

`main`에 push한 뒤에는 다음 순서로 확인합니다.

1. GitHub의 Actions에서 배포 워크플로 실행 결과 확인
2. 실패했다면 실패 단계의 오류 로그 확인
3. 성공했다면 공개 사이트에서 변경 내용 확인
4. 이미지·자료 링크·시뮬레이션 실행 확인

GitHub Pages의 배포 소스는 이 저장소의 워크플로 방식에 맞춰 GitHub Actions를 사용합니다. 설정 파일이 여러 개이므로 사이트 기본 주소를 변경할 때는 `site/hugo.toml`뿐 아니라 `site/pages.json`과 배포 절차도 확인합니다. `baseURL`에는 `#site-head` 같은 페이지 내부 앵커를 넣지 않습니다.

## 7. 게시 전 점검

- 이름·자기소개·활동 메뉴를 쉽게 찾을 수 있는가?
- 아이디어 제안과 실제 구현·검증 결과를 구분했는가?
- 팀 공동 작업과 본인의 기여를 구분했는가?
- 기획서 이미지에 팀원의 연락처·생년월일 등 개인정보가 없는가?
- 이미지에 의미 있는 대체 설명이 있는가?
- 외부 자료와 AI 활용 부분의 출처·성격을 밝혔는가?
- 이미지와 시뮬레이션 링크가 실제로 열리는가?
- 모바일·확대 화면에서 가로 넘침이나 글자 잘림이 없는가?
- 키보드로 링크·버튼에 접근하고 빠져나올 수 있는가?
- 사용하지 않는 데모 페이지가 직접 주소로도 공개되지 않는가?
- 변경 내용을 커밋하고 배포 결과를 확인했는가?

## 8. 출처와 이용 안내

### 원본 테마

- [Hugo Scroll](https://github.com/janraasch/hugo-scroll)
- 원본 테마의 라이선스와 저작권 고지는 저장소의 `LICENSE` 및 관련 고지를 확인합니다.
- 테마 코드를 사용하더라도 개인 작성 글·팀 산출물·외부 이미지·공공데이터의 권리와 이용 조건이 모두 동일해지는 것은 아닙니다.

### 팀 산출물과 공공자료

기획서·요약서는 팀 공동 작성 자료이며, 개인의 역할은 활동 본문에 구분해 설명합니다. 공공데이터·지도·외부 이미지는 실제 사용한 자료의 제공처와 이용 조건에 따릅니다. 단순히 조사한 자료와 시뮬레이션에 직접 사용한 자료는 구분합니다.

외부 자료를 사용했다면 활동 본문이나 자료 인접 위치에 **정확한 자료명·제공처·원본 링크·이용 조건**을 기재합니다. 출처를 확인하지 못한 자료의 이용 허락을 임의로 가정하지 않습니다.

### AI 활용

활동의 보조 시뮬레이션 제작 및 포트폴리오 글의 정리·수정 과정에서 AI의 도움을 활용했습니다. AI로 작성·수정한 내용은 원본 기록과 대조하고, 공개 전 사실관계·기능·개인정보·출처를 확인합니다. 아이디어 제안의 기대 효과나 샘플 데이터의 결과를 실제 검증 성과로 표현하지 않습니다.
