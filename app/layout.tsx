import type { Metadata } from "next";
import "./globals.css";
import ModalProvider from "@/components/modals/providers";
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
