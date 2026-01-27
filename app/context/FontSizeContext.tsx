"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FontSizeContextType {
  fontSize: string;
  setFontSize: (size: string) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(
  undefined
);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState("text-base");

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within FontSizeProvider");
  }
  return context;
}
