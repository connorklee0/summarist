import type { Metadata } from "next";
import "./globals.css";
import ModalProvider from "@/app/context/ModalContext";
import { AuthProvider } from "./context/AuthContext";

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
        <AuthProvider>
          <ModalProvider>{children}</ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
