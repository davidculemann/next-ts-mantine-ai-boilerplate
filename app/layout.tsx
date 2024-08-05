import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Vercel AI SDK - Next.js OpenAI Examples",
    description: "Examples of using the Vercel AI SDK with Next.js and OpenAI.",
};

const theme = createTheme({
    /** Put your mantine theme override here */
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body className={inter.className}>
                <MantineProvider theme={theme}>{children} </MantineProvider>
            </body>
        </html>
    );
}
