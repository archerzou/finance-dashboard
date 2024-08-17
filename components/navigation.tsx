"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import NavButton from "@/components/nav-button";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

const navigation = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const router = useRouter();
  const pathname = usePathname();
  //   const isMobile = useMedia("(max-width: 1024px)", false);
  return (
    <nav
      className="hiddetn lg:flex items-center gap-x-2 
  overflow-x-auto"
    >
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};

export default navigation;
