import { Footer } from "@/components/layout/app-footer";
import { SideBar } from "@/components/layout/app-sidebar";
import Layout from "@/components/layout/root-layout";

export const metadata = {
    title: "Vercel AI SDK - Next.js OpenAI Examples",
    description: "Examples of using the Vercel AI SDK with Next.js and OpenAI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            <SideBar />
            <span className="pl-14">{children}</span>
            <Footer />
        </Layout>
    );
}
