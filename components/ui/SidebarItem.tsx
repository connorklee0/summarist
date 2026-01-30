"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useSidebar } from "@/app/context/SideBarContext";

interface SidebarItemProps {
  href?: string;
  icon: ReactNode;
  label: string;
  disabled?: boolean;
}

export default function SidebarItem({
  href = "",
  icon,
  label,
  disabled = false,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { toggleSidebar } = useSidebar();

  if (disabled) {
    return (
      <li className="sidebar--item cursor-not-allowed flex">
        {icon} {label}
      </li>
    );
  }

  return (
    <Link href={href} onClick={toggleSidebar}>
      <li className={`sidebar--item ${isActive ? "active" : ""} flex`}>
        {icon} {label}
      </li>
    </Link>
  );
}
