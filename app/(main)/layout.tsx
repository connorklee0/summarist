import Search from "@/components/Main/Search";
import SideBar from "@/components/Main/SideBar";
import { FontSizeProvider } from "../context/FontSizeContext";
import { SidebarProvider } from "../context/SideBarContext";

import "./main.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <FontSizeProvider>
        <div className="flex min-h-screen w-full">
          <SideBar />

          <div className="flex-1 flex flex-col w-full md:ml-60">
            <Search />
            <main className="flex md:justify-start w-full">{children}</main>
          </div>
        </div>
      </FontSizeProvider>
    </SidebarProvider>
  );
}
