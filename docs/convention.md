# LinkInNest 개발 컨벤션

## 목차

- [프로젝트 구조](#프로젝트-구조)
- [폴더 구조](#폴더-구조)
- [네이밍 컨벤션](#네이밍-컨벤션)
- [코딩 스타일](#코딩-스타일)
- [컴포넌트 구조](#컴포넌트-구조)
- [스타일링 가이드](#스타일링-가이드)
- [상태 관리](#상태-관리)
- [API 규칙](#api-규칙)
- [타입 정의](#타입-정의)
- [Git 컨벤션](#git-컨벤션)

## 프로젝트 구조

LinkInNest는 Next.js App Router를 기반으로 하며, 페이지별 격리와 도메인 중심의 재사용 컴포넌트 구조를 사용합니다.

### 기본 원칙
- **페이지별 격리**: 각 페이지는 독립적인 폴더 구조
- **Props Drilling 금지**: 모든 컴포넌트에서 Container 직접 호출
- **도메인 중심 분리**: 재사용 컴포넌트는 UI/도메인별로 분리
- **로직과 UI 분리**: Container와 Hook으로 비즈니스 로직 관리

### 전체 구조

```
app/                          # Next.js App Router 페이지
├── login/
│   ├── page.tsx             # 로그인 페이지
│   ├── components/          # 페이지 전용 컴포넌트
│   │   ├── LoginLeft.tsx
│   │   └── LoginRight.tsx
│   └── logics/              # 페이지 전용 로직
│       ├── LoginContainer.ts # unstated-next Container
│       └── useUsers.ts      # 분리된 훅 (필요시)
├── dashboard/
│   ├── page.tsx
│   ├── components/
│   └── logics/
└── ...

shared/                       # 재사용 컴포넌트/훅
├── ui/                      # 범용 UI 컴포넌트/훅
│   ├── Button.tsx
│   ├── Modal.tsx
│   ├── Input.tsx
│   ├── useModal.ts          # UI 관련 훅
│   └── useToast.ts
└── domains/                 # 도메인별 재사용 컴포넌트/훅
    ├── folders/
    │   ├── FolderCard.tsx
    │   ├── FolderTree.tsx
    │   └── useFolders.ts    # 폴더 관련 비즈니스 로직
    ├── auth/
    │   ├── AuthModal.tsx
    │   ├── useAuth.ts
    │   └── useLogin.ts
    ├── links/
    │   ├── LinkCard.tsx
    │   └── useLinks.ts
    └── tags/
        ├── TagSelector.tsx
        └── useTags.ts

lib/                         # 외부 라이브러리 설정
├── supabase.ts
└── ...

types/                       # 타입 정의
├── database.types.ts
└── index.ts
```

## 폴더 구조

TODO: 폴더별 역할과 구조 설명

## 네이밍 컨벤션

TODO: 파일명, 변수명, 함수명 규칙

## 코딩 스타일

TODO: ESLint, Prettier 설정 및 규칙

## 컴포넌트 구조

TODO: 컴포넌트 작성 규칙

## 스타일링 가이드

TODO: Tailwind CSS 사용 규칙

## 상태 관리

TODO: unstated-next 사용 규칙

## API 규칙

TODO: Supabase 쿼리 작성 규칙

## 타입 정의

TODO: TypeScript 타입 작성 규칙

## Git 컨벤션

TODO: 브랜치, 커밋 메시지 규칙
