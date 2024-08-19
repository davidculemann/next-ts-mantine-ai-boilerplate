"use client";

import "@/components/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { config } from "@/config/app.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter as FontSans } from "next/font/google";

export const metadata = {
    title: config.appName,
    description: config.appDescription,
};

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 5 * 60 * 1000 } } });

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
