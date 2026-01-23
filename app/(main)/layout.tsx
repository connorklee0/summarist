import Search from "@/components/Main/Search";
import SideBar from "@/components/Main/SideBar";

import "./main.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="fixed">
        <SideBar />
      </div>

      <div className="flex-1">
        <Search />
        <main className="flex justify-start w-full">{children}</main>
      </div>
    </div>
  );
}
