import Search from "@/components/Main/Search";
import Sidebar from "@/components/Main/Sidebar";

import "./main.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="fixed">
        <Sidebar />
      </div>

      <div className="flex-1">
        <Search />
        <main className="flex justify-start w-full">{children}</main>
      </div>
    </div>
  );
}
