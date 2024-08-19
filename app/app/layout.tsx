"use client";

import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header/header";
import { SideBar } from "@/components/layout/sidebar";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { useAuthRedirect } from "@/lib/hooks/useAuthRedirect";
import { useUser } from "@/lib/hooks/useUser";
import Layout from "../root-layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    useAuthRedirect();
    const [user] = useUser();

    if (!user) {
        return (
            <Layout>
                <LoadingSpinner className="m-auto" size={60} />
            </Layout>
        );
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
