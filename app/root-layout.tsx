"use client";

import "@/components/styles/globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/firebase/firebase";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { onAuthStateChanged } from "firebase/auth";
import { Inter as FontSans } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata = {
    title: "Vercel AI SDK - Next.js OpenAI Examples",
    description: "Examples of using the Vercel AI SDK with Next.js and OpenAI.",
};

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 5 * 60 * 1000 } } });

    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("user", user);
            if (user) {
                if (["/signin", "/signup"].includes(pathName)) {
                    router.push("/");
                }
            } else router.push("/signin");
        });
        return () => unsubscribe();
    }, [router, pathName]);

    return (
        <html lang="en">
            <head></head>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <body className={`${fontSans.className} flex min-h-screen w-full flex-col bg-muted/40`}>{children}</body>
                </TooltipProvider>
            </QueryClientProvider>
        </html>
    );
}
