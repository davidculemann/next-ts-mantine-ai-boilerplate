import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";

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
