"use client";

import { pages } from "@/config/pages";
import { signOut } from "@/lib/firebase/auth";
import { IconHome, IconInfoCircle, IconLogin, IconMail, IconSettings, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../shared/easycv-logo";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function SideBar() {
    const pathName = usePathname();
    const pagesArray = Object.entries(pages);

    return (
        <aside className="fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background sm:flex">
            <span className="border-b flex align-middle justify-center w-14 h-14">
                <Logo className="w-8" />
            </span>
            <nav className="flex flex-col items-center gap-4 px-2 py-4">
                {pagesArray.map(([name, { path }]) => (
                    <PageLink key={name} href={path} selected={path === pathName} icon={name} label={name} />
                ))}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                <Button size="icon" variant="outline" onClick={signOut}>
                    <IconLogin className="h-5 w-5" />
                </Button>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <IconSettings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    );
}

function PageLink({ href, selected, icon, label }) {
    return (
        <Link
            href={href}
            className={`flex h-9 w-9 items-center justify-center transition-colors ${
                selected ? "bg-primary text-primary-foreground rounded-full font-semibold" : "hover:text-foreground rounded-lg"
            } md:h-8 md:w-8`}
        >
            {renderIcon(icon)}
            <span className="sr-only">{label}</span>
        </Link>
    );
}

function renderIcon(icon: string) {
    switch (icon) {
        case "home":
            return <IconHome className="h-5 w-5" />;
        case "about":
            return <IconInfoCircle className="h-5 w-5" />;
        case "contact":
            return <IconMail className="h-5 w-5" />;
        case "profile":
            return <IconUser className="h-5 w-5" />;
        default:
            return null;
    }
}
