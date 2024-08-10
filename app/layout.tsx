import { Footer } from "@/components/layout/Footer";
import { SideBar } from "@/components/layout/SideBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Vercel AI SDK - Next.js OpenAI Examples",
    description: "Examples of using the Vercel AI SDK with Next.js and OpenAI.",
};

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head></head>
            <TooltipProvider>
                <body className={fontSans.className}>
                    <SideBar />
                    {children}
                    <Footer />
                </body>
            </TooltipProvider>
        </html>
    );
}
