import { TooltipProvider } from "@/components/ui/tooltip";
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
    return (
        <html lang="en">
            <head></head>
            <TooltipProvider>
                <body className={`${fontSans.className} flex min-h-screen w-full flex-col bg-muted/40`}>{children}</body>
            </TooltipProvider>
        </html>
    );
}
