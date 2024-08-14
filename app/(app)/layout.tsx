import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { SideBar } from "@/components/layout/sidebar";
import Layout from "../root-layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            <Header />
            <SideBar />
            <span className="pl-14">{children}</span>
            <Footer />
        </Layout>
    );
}
