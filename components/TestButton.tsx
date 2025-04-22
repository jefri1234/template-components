"use client";

import { useTheme } from '@/components/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export default function TestButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button size="icon" onClick={toggleTheme}>
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </Button>
  );
}