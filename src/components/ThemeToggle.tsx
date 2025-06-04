"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="fixed right-4 top-4 size-[52px] rounded-full border border-zinc-200 bg-white/80 p-3 shadow-lg backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80" />
        );
    }

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("system");
        } else {
            setTheme("light");
        }
    };

    const getIcon = () => {
        if (theme === "light") {
            return <Sun className="size-5" />;
        } else if (theme === "dark") {
            return <Moon className="size-5" />;
        } else {
            return <Monitor className="size-5" />;
        }
    };

    const getLabel = () => {
        if (theme === "light") return "Switch to dark mode";
        if (theme === "dark") return "Switch to system theme";
        return "Switch to light mode";
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed right-4 top-4 rounded-full border border-zinc-200 bg-white/80 p-3 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:bg-zinc-800"
            aria-label={getLabel()}
            title={getLabel()}
        >
            {getIcon()}
        </button>
    );
}
