import Search from "@/components/Main/Search";
import SideBar from "@/components/Main/SideBar";
import { FontSizeProvider } from "../context/FontSizeContext";
import "./main.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FontSizeProvider>
      <div className="flex min-h-screen w-full">
        <div className="fixed left-0 top-0 h-screen w-64 max-md:-translate-x-full">
          <SideBar />
        </div>

        <div className="flex-1 md:ml-64">
          <Search />
          <main className="flex justify-start w-full">{children}</main>
        </div>
      </div>
    </FontSizeProvider>
  );
}
