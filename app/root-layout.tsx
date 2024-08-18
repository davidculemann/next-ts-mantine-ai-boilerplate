"use client";

import "@/components/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/firebase/firebase";
import { NO_AUTH_PATHS, Path } from "@/middleware";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter as FontSans } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata = {
    title: "EasyCV",
    description: "Supercharge your career with AI.",
};

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 5 * 60 * 1000 } } });
    const router = useRouter();
    const pathName = usePathname() as Path;

    useEffect(() => {
        const checkAuth = () => {
            auth.onAuthStateChanged((user) => {
                console.log(user);
                if (user) {
                    if (NO_AUTH_PATHS.includes(pathName)) {
                        router.replace("/app");
                    }
                } else if (!NO_AUTH_PATHS.includes(pathName)) {
                    router.replace("/signin");
                }
            });
        };
        checkAuth();
    }, [pathName, router]);

    return (
        <html lang="en">
            <head></head>
            <body className={`${fontSans.className} flex min-h-screen w-full flex-col bg-muted/40`}>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <TooltipProvider>{children}</TooltipProvider>
                    </ThemeProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
