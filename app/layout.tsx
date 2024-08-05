import { SideBar } from "@/components/layout/SideBar";
import { ColorSchemeScript, createTheme, MantineColorsTuple, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Vercel AI SDK - Next.js OpenAI Examples",
    description: "Examples of using the Vercel AI SDK with Next.js and OpenAI.",
};

const defaultTheme: MantineColorsTuple = [
    "#eef3ff",
    "#dee2f2",
    "#bdc2de",
    "#98a0ca",
    "#7a84ba",
    "#6672b0",
    "#5c68ac",
    "#4c5897",
    "#424e88",
    "#364379",
];

const theme = createTheme({
    colors: {
        defaultTheme,
    },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body className={inter.className + " h-[100dvh] w-full"}>
                <MantineProvider theme={theme}>
                    <div className="h-full flex md:flex-row">
                        <SideBar />
                        <div className="flex-1 p-4">{children}</div>
                    </div>
                </MantineProvider>
            </body>
        </html>
    );
}
