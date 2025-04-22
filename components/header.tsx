"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from '@/components/ThemeContext';
import TestButton from "./TestButton";

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  console.log('Header renderizado, tema actual:', theme);
  return (
    <header className="h-16 border-b bg-background text-foreground flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="border-b flex items-center justify-center h-[70px]">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={60}
            height={60}
            className="w-15 h-15"
          />
        </div>
        <h1 className="text-xl font-semibold">{pathname}</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full md:w-[200px] pl-8 rounded-md border border-input bg-background text-foreground"
          />
        </div>
        <Button className="hidden sm:flex gap-1 bg-[#0f172a] hover:bg-[#1e293b]">
          <Plus size={16} className="text-white" />
          <span className="text-white ">New Product</span>
        </Button>
        <Button size="icon" className="sm:hidden bg-[#0f172a] hover:bg-[#1e293b]">
          <Plus size={16} className="text-white" />
        </Button>
        <TestButton />

      </div>
    </header>
  );
}