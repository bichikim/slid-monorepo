---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

drawings:
  persist: false
css: unocss
layout: cover
title: Monorepo 는 왜 사용하는가?
---

# Monorepo 는 왜 사용하는가?

Nodejs & Web 개발 환경에서

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: cover
---

# 왜 필요한가? 🤷
<br>

## 2개 이상의 프로젝트 또는 환경에서 같은 코드를 공유하기 위해서
<br>

<div class="relative p-5">
  <div class="relative flex flex-row gap-4">
    <div class="bg-red top-0 p-5 text-4xl rounded-2xl grow-0">
      Web
    </div>
    <div class="bg-blue top-0 p-5 text-4xl rounded-2xl grow-0">
      Mobile
    </div>
    <div class="bg-green top-0 p-5 text-4xl rounded-2xl grow-0">
      TV
    </div>
    <div class="bg-gray top-0 p-5 text-4xl rounded-2xl grow-0">
      등등..
    </div>
  </div>
</div>
<div class="text-center text-3xl">사용</div>
<div class="relative p-5">
  <div class="relative flex flex-row gap-4 justify-end">
    <div class="bg-red top-0 p-5 text-4xl rounded-2xl grow-0">
      Utils
    </div>
    <div class="bg-blue top-0 p-5 text-4xl rounded-2xl grow-0">
      Hooks
    </div>
    <div class="bg-green top-0 p-5 text-4xl rounded-2xl grow-0">
      Components
    </div>
    <div class="bg-gray top-0 p-5 text-4xl rounded-2xl grow-0">
      등등..
    </div>
  </div>
</div>


<arrow v-click="1" x1="280" y1="420" x2="290" y2="320" color="white" width="3" arrowSize="1" />
<arrow v-click="2" x1="440" y1="420" x2="290" y2="320" color="white" width="3" arrowSize="1" />
<arrow v-click="3" x1="280" y1="420" x2="400" y2="320" color="white" width="3" arrowSize="1" />
<arrow v-click="4" x1="320" y1="440" x2="370" y2="440" color="white" width="3" arrowSize="1" />
<div v-click="5">
<arrow x1="490" y1="440" x2="530" y2="440" color="white" width="3" arrowSize="1" />
<arrow x1="280" y1="420" x2="150" y2="320" color="white" width="3" arrowSize="1" />
<arrow x1="440" y1="420" x2="150" y2="320" color="white" width="3" arrowSize="1" />
</div>
<div v-click="6">
<arrow x1="600" y1="420" x2="150" y2="320" color="white" width="3" arrowSize="1" />
<arrow x1="600" y1="420" x2="290" y2="320" color="white" width="3" arrowSize="1" />
<arrow x1="600" y1="420" x2="400" y2="320" color="white" width="3" arrowSize="1" />
</div>
<div v-click="7"></div>

<!--
우리는 Web Mobile Tv 등등 에 프로젝트 들이 Utils Hooks Components 등을 복잡하게 공유 하면서 사용 하고 싶습니다 
-->

---
layout: section
---

# 그런데 하필 왜 Monorepo 🦑 를
# 사용해야 하는가 ⁉️

다른 해결 방법도 많은데

## 📦 라이브러리 저장소와 버저닝이 용이 하다

<br>

## 🚪 디벤던시 폐쇄와 공유

<br>

## 📟 테스트가 편하다

<br>

## 👑 전역 (Root) 관리가 가능하다

<br>

---
layout: section
---

# 📦 라이브러리 저장소와
# 버저닝이 용이 하다

## 1. NPM 저장소를 사용하여 코드를 공유 하는 경우

<br>

## 2. 한 프로젝트안에 코드를 공유 할 경우

<br>

## 3. monorepo 를 사용 하는 경우

<!--
3 가지 경우에 대하여 알아 보겠습니다
-->

---
layout: statement
---

# 1. NPM 저장소를 사용하여
# 코드를 공유 하는 경우

<br>

<h2 v-click="1" class="inline-block">라이브러리 코드 <strong class="c-red">변경</strong> →&nbsp</h2>
<h2 v-click="2" class="inline-block"><strong class="c-red">빌드</strong> →&nbsp</h2>
<h2 v-click="3" class="inline-block">원격지 (npm) <strong class="c-red">배포</strong> →&nbsp</h2>
<h2 v-click="4" class="inline-block">원격지 배포된 것 프로젝트로 <strong class="c-red">다운로드</strong> (npm install) →&nbsp</h2>
<h2 v-click="5" class="inline-block"><strong class="c-red">사용</strong> →&nbsp</h2>
<h2 v-click="6" class="inline-block">라이브러리 다시 <strong class="c-red">업데이트 필요</strong> 😓 →&nbsp</h2>
<h2 v-click="7" class="inline-block">라이브러리 <strong class="c-red">코드 변경</strong> →&nbsp</h2>
<h2 v-click="8" class="inline-block"><strong class="c-red">빌드</strong> →&nbsp</h2>
<h2 v-click="9" class="inline-block">원격지 (npm) <strong class="c-red">배포</strong> →&nbsp</h2><br>
<h2 v-click="10" class="inline-block">... <span class="text-6xl">🤬</span></h2>

<!--
계속 코드 변경이 필요 할때 마다 반복해서 배포하고 그걸 다시 다운 받고 사용 해야 합니다
인터그래이션 테스트는 할 수가 없습니다
-->

---
layout: statement
---

# 2. 한 프로젝트안에 코드를
# 공유 할 경우

<br>

<h2 v-click="1" class="inline-block">라이브러리 코드 <strong class="c-red">변경</strong> →&nbsp</h2>
<h2 v-click="2" class="inline-block"><strong class="c-red">사용</strong> →&nbsp</h2>
<h2 v-click="3" class="inline-block">특정 프로젝트 또는 환경은 <strong class="c-red">이전 버전</strong>이 필요하거나 <strong class="c-red">이전 동작</strong>이 필요하다 →&nbsp</h2>
<h2 v-click="4" class="inline-block">해결 방법 ❌😵😇 </h2>

<!--
원격지 배포는 할 필요가 없어지지만 반대로 여러 프로젝트가 각각 다른 라이브러리 버전을 요구할 경우 해결할 방법이 없다 버전 관리를 할 수 없다
두 프로젝트가 같이 있을 경우 문제가 있다면 사용 불가
-->

---
layout: statement
---

# 3. monorepo 를 사용 하는 경우

<br>

<h2 v-click="1" class="inline-block">라이브러리 코드 <strong class="c-red">변경</strong> →&nbsp</h2>
<h2 v-click="2" class="inline-block"><strong class="c-red">빌드 </strong>(필요시, 워치 가능) →&nbsp</h2>
<h2 v-click="3" class="inline-block"><strong class="c-red">사용</strong> →&nbsp</h2>
<h2 v-click="4" class="inline-block">라이브러리 다시 <strong class="c-red">업데이트 필요</strong> →&nbsp</h2>
<h2 v-click="5" class="inline-block">라이브러리 <strong class="c-red">코드 변경</strong> →&nbsp</h2>
<h2 v-click="6" class="inline-block"><strong class="c-red">빌드 </strong>(필요시, 워치 가능) →&nbsp</h2>
<h2 v-click="7" class="inline-block"><strong class="c-red">사용</strong>... →&nbsp</h2>

<!--
원격지 배포 없이 **“설치”** 할 수 있다 버저닝을 할 수 있다
!!실제 코드 변경 시현!!
-->

---
layout: section
---

# 🚪 디벤던시 폐쇄와 공유

<div class="m-auto rounded-full bg-green c-black text-4xl p-4xl relative" style="width: 530px; height: 400px">
Root 패키지
<div class="rounded-full bg-blue flex" style="width: 220px; height: 220px"><span class="m-auto">내부 패키지1</span></div>
<div class="rounded-full bg-blue flex absolute top-30 left-67" style="width: 220px; height: 220px"><span class="m-auto">내부 패키지2</span></div>
<div v-click="1">
<div class="rounded-full bg-red flex absolute top-70 left-50" style="width: 80px; height: 80px"><span class="m-auto">유틸</span></div>
<arrow x1="220" y1="300" x2="150" y2="270" color="white" width="3" arrowSize="1" />
<arrow x1="260" y1="295" x2="300" y2="270" color="white" width="3" arrowSize="1" />
</div>
</div>

<!--
예를 들어 내부 패키지1 과 내부 패키지2 가 서로 분리 되기 때문에 Vue2 와 Vue3 를 모두 한 모노레포에서 사용할 수 있다

그럼에도 내부 패키지 1, 2 는 같은 유틸리티를 사용하며 이 유틸리티는 사용 중에 재 빌드되어 Vue2 Vue3 용으로 코드 분기되어 사용가능 하다

만약 모노레포에 서버 코드가 있을 경우 그래프큐엘 스키마 공유 같은 것 들도 할 수 있고 서버가 배포되기 전에 프론트엔드 작업을 할 수 도 있습니다
-->

---
layout: section
---

# 📟 테스트가 편하다

<br>

## 1. 인터그레이션 테스트

<br>

## 2. 환경별 호환성 테스트

<!--
인터그레이션 테스트 시현

환경별 호환성 테스트 시현
-->

---
layout: section
---

# 👑 전역 (Root) 관리가 가능하다

<br>

## 1. 전역에서 모든 프로젝트 내부에 있는 것을 통합하여 문서화 가능

<h4 class="c-gray"> Vuepress, storybook, jest test, cypress test 등 </h4>

<br>

## 2. 팀단위  lint (코드 컨벤션) 사용 및 추가 팀만의 lint 작성 가능

<br>

## 3. 전역 git ignore docker ignore 등 가능

<br>

## 4. 버저닝 와 디팬던시 관리
<h4 class="c-gray"> Lerna 를 통해서 </h4>

## 5. 전체 실행 가능
<h4 class="c-gray"> Pnpm 를 통해서 </h4>

<!-- 
각 항목 시현
-->

---
layout: section
---

# Monorepo 를
# 적용 했을 경우 문제점 🤬

## 1. 의존성 설치가 느리다

<br>

## 2. 의존성 충돌이 생긴다

<br>

## 3. 빌드와 배포시 의존성 문제

<br>

## 4. 라이브러리 사용전에 빌드가 필요하다


<!--
1. 의존성이 각 프로젝트마다 있기 때문에 모두 다운 받고 설치하야 해서 시간이 걸린다
2. 의존성이 호이스트 되면 서로 버전에 대해 충동이 생긴다
3. 1 내부 패키지가 2 내부 패키지를 사용하고 2가 3 내부 패키지를 사용 하면 3, 2, 1 순으로 빌드해야 최종 1을 빌드 할 수 있다
4. 라이브러리를 바로 사용 할 수 없는 ts 파일 이거나 각 모듈 동작 환경 등 여러 환경용으로 빌드가 필요한 경우 빌드를 사용전에 해야한다
-->

---
layout: section
---

# Monorepo 를
# 적용 했을 경우 문제점 해결 방법 🤩

## 1. link 방식으로 설치하는 Pnpm 사용
<br>

## 2. 호이스트를 하지 않는 Pnpm 사용
<br>

## 3. 알아서 디팬던시를 확인하고 순서대로 빌드 하는 도구 사용
<h4 class="c-gray"> Lerna and Pnpm </h4>
<br>

## 4. Pnpm parallel watch 사용

<!--
1. 의존성 설치가 느리다
2. 의존성 충돌이 생긴다
3. 빌드와 배포시 의존성 문제
4. 라이브러리 사용전에 빌드가 필요하다
-->

---
layout: section
---

# 다양한 모노레포 방법

## Pnpm + Lerna
<h4 class="c-gray">최대한 기존 디펜던시 해결 방법 이용</h4>
<br>

## [Nx](https://github.com/nrwl/nx?utm_source=monorepo.tools)
<h4 class="c-gray">조금 React 에 특화된 요소가 있다</h4>
<br>

## [Rushjs](https://rushjs.io/)
<h4 class="c-gray">Microsoft 에서 관리하고 있다</h4>
<br>

## [Turbo](https://github.com/vercel/turbo)
<h4 class="c-gray">빌드와 통합되어 있다 가장 빠르다고 주장한다</h4>
<br>

<!--
Pnpm + Lerna 심플하고 기존에 사용하던 storybook 들을 그냥 사용 가능
-->
---
layout: section
---

# 참조 자료

#### [monorepo.tools](https://monorepo.tools)

---
layout: section
---

# 결론

## 세팅은 복잡하고 문제 점이 있지만
## 세팅은 하면 되고 문제점은 모두 해결 방법이 있다
## 오늘 부터 <strong class="c-red">모노레포</strong>를 시작 하세요

---
layout: section
---

# 이 발표자료는 무엇으로 만들어 졌죠?

## <img class="inline-block" width="90" height="90" src="https://vitejs.dev/logo-with-shadow.png">Vite + <img class="inline-block" width="70" height="70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png?20170919082558"> Vue + <img class="inline-block bg-white p-1 rounded" width="80" height="80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/600px-Markdown-mark.svg.png"> MD = <img class="inline-block" width="70" height="70" src="https://d33wubrfki0l68.cloudfront.net/273aa82ec83b3e4357492a201fb68048af1c3e6a/8f657/logo.svg">Slidev

<!--
이 발표 자료는 파워포인트로 제작 되지 않았습니다
-->



---
layout: end
---