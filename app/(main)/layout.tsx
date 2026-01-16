import Search from "@/components/Main/Search";
import Sidebar from "../../components/Main/Sidebar";

import "./main.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col max-w-267.5">
        <Search />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
