"use client";

import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { SideBar } from "@/components/layout/sidebar";
import { useAuthRedirect } from "@/lib/hooks/useAuthRedirect";
import { useUser } from "@/lib/hooks/useUser";
import Layout from "../root-layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    useAuthRedirect();
    const [user, loading, error] = useUser();

    if (loading) {
        return <Layout>Loading...</Layout>;
    }

    if (error || !user) {
        return <Layout>Access prohibited</Layout>;
    }

    return (
        <Layout>
            <Header />
            <SideBar />
            <span className="pl-14">{children}</span>
            <Footer />
        </Layout>
    );
}
