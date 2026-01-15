import type { Metadata } from "next";
import "./globals.css";
import ModalProvider from "@/components/modals/providers";

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
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
