import type { Metadata } from "next";
import "./globals.css";
import { store } from "./store";
import { Provider } from "react-redux";
import Auth from "@/components/Auth";

export const metadata: Metadata = {
  title: "Summarist",
  description: "FES Bootcamp Advanced Internship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Provider store={store}><Auth />{children}</Provider>
      </body>
    </html>
  );
}
