import Layout from "@/components/layout/root-layout";

export default function AuthLayout({ children }: { readonly children: React.ReactNode }) {
    return (
        <Layout>
            <span className="m-auto">{children}</span>
        </Layout>
    );
}
