import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header/header";
import Layout from "../root-layout";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            <Header landing />
            {children}
            <Footer />
        </Layout>
    );
}
