# My Todo List

## Overview

회원가입 및 로그인 기능이 제공 되는 Todo List 애플리케이션입니다.

데모 영상은 [여기](https://youtu.be/CsxWluFf8vE)에서 확인하실 수 있습니다.

## Features

#### 1. Sign Up

- 사용자는 이메일을 사용해 회원 가입이 가능합니다.
- 이메일은 `@` 을 포함해야 하며, 비밀번호는 8자 이상이어야 합니다.

#### 2. Sign In

- 가입한 정보로 로그인을 할 수 있습니다.
- 로그인이 완료되면 JWT 토큰이 발급되고 `local storage` 에 저장되고 `/todo` 페이지로 이동합니다.

#### 3. CRUD To Do

- 사용자는 본인의 할 일 목록을 조회, 추가, 수정, 삭제할 수 있습니다.

#### 4. Etc

- 토큰 존재 여부에 따라 그에 맞는 페이지로 이동합니다.

## Dependency

- [x] react
- [x] axios
- [x] styled-components
- [x] react-router-dom
- [x] react-icons

## Getting Started

1. `Clone` the repository

   ```markdown
   $ git clone https://github.com/SeolJaeHyeok/wanted-pre-onboarding-fe.git
   ```

2. `Install` dependencies

   ```markdown
   $ npm install
   ```

3. `Set` environment variables

   1. 내려받은 프로젝트의 `src` 폴더 안에 `.env` 파일을 생성합니다.

   2. `.envTemplate` 파일에 존재하는 환경 변수 이름과 같은 이름의 환경 변수(`API_URL`)를 생성합니다.

   3. 환경 변수 값에 해당하는 `API_URL`의 주소는 [여기](https://github.com/walking-sunset/selection-task)에서 확인하실 수 있습니다.

4. `start` the project

   ```markdown
   $ npm start
   ```
