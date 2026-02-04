import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "animate.css";

/**
 * 1. 외부 리소스 설정 (Link 태그)
 * 폰트, 파비콘 등 외부 CSS나 리소스를 HTML <head>에 주입할 때 사용합니다.
 */
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];

/**
 * 2. 전체 HTML 구조 (기본 레이아웃)
 * 모든 페이지의 공통적인 <html>, <head>, <body> 태그를 정의합니다.
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      {" "}
      {/* 언어 설정을 ko로 변경 추천 */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta /> {/* 각 페이지의 meta 함수에서 정의한 태그들이 여기에 들어갑니다 */}
        <Links /> {/* 위에서 정의한 links 함수의 내용이 여기에 들어갑니다 */}
      </head>
      <body>
        {children} {/* 실제 콘텐츠(AppLayout 등)가 렌더링되는 위치 */}
        <ScrollRestoration /> {/* 페이지 이동 시 스크롤 위치를 복원해주는 기능 */}
        <Scripts /> {/* React 실행을 위한 JS 스크립트 파일들 */}
      </body>
    </html>
  );
}

import { NavLink } from "react-router";

/**
 * 3. 앱 전용 레이아웃 컴포넌트
 * 헤더, 사이드바, 메인 영역 등 실제 서비스의 UI 틀을 구성합니다.
 */
function AppLayout() {
  const menus = [
    { name: "홈", path: "/" },
    { name: "프로젝트 1", path: "/project1" },
    { name: "프로젝트 2", path: "/project2" },
    { name: "프로젝트 3", path: "/project3" }
  ];

  return (
    <div className="flex flex-col h-screen w-full font-sans">
      {/* 상단 헤더 영역 */}
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md z-10">
        <div className="font-bold text-xl tracking-tight">ThinkPool App</div>
        <nav>
          <span className="text-gray-300 text-sm">환영합니다!</span>
        </nav>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* 왼쪽 사이드바 메뉴 영역 */}
        <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
          <div className="p-4 uppercase text-xs font-semibold text-gray-500 tracking-wider">메뉴</div>
          <nav className="flex-1 px-2 space-y-1">
            {menus.map((menu) => (
              <NavLink
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white" // 현재 활성화된 메뉴 스타일
                      : "text-gray-700 hover:bg-gray-200 hover:text-gray-900" // 일반 메뉴 스타일
                  }`
                }
              >
                {menu.name}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* 메인 콘텐츠 영역 (이곳에 각 페이지 내용이 표시됨) */}
        <main className="flex-1 overflow-y-auto bg-white p-8">
          <Outlet /> {/* 현재 URL 경로에 맞는 하위 페이지(Home 등)가 출력되는 핵심 위치! */}
        </main>
      </div>

      {/* 하단 푸터 영역 */}
      <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">&copy; 2026 ThinkPool Project. All rights reserved.</footer>
    </div>
  );
}

/**
 * 4. 메인 Export
 * Layout 컴포넌트 내부에서 AppLayout을 보여주도록 설정합니다.
 */
export default function App() {
  return <AppLayout />;
}

/**
 * 5. 에러 처리 페이지 (ErrorBoundary)
 * 잘못된 경로 접근(404)이나 코드 에러가 발생했을 때 보여주는 예외 화면입니다.
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "문제가 발생했습니다!";
  let details = "예기치 않은 오류가 발생했습니다.";
  let stack: string | undefined;

  // 404 에러와 같은 라우팅 응답 에러 처리
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "페이지를 찾을 수 없습니다" : "서버 오류";
    details = error.status === 404 ? "요청하신 페이지가 존재하지 않습니다." : error.statusText || details;
  }
  // 개발 모드에서만 상세 에러 메시지(Stack trace) 출력
  else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">{message}</h1>
      <p className="text-gray-600 mb-8">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto bg-gray-100 text-left rounded">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
