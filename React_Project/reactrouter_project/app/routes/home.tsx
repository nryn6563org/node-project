import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "내 프로젝트 리스트" }, { name: "description", content: "React Router로 만든 프로젝트 목록입니다." }];
}

export default function Home() {
  // 임시 데이터 (나중에 API로 불러올 수 있습니다)
  const projects = [
    { id: 1, title: "포트폴리오 웹사이트", date: "2024-01-20" },
    { id: 2, title: "할 일 관리 앱", date: "2024-02-15" },
    { id: 3, title: "AI 채팅 봇", date: "2024-03-05" }
  ];

  return (
    <main>
      <header className="p-4 flex gap-1 text-black">
        <h1>🚀 나의 프로젝트 리스트</h1>
        <p>React Router v7으로 구축된 프로젝트입니다.</p>
      </header>
    </main>
  );
}
