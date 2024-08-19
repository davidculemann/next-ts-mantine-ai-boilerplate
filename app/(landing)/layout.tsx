import { Footer } from "@/components/layout/footer";
import Layout from "../root-layout";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            {children}
            <Footer />
        </Layout>
    );
}
