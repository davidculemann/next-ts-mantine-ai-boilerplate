import Layout from "../root-layout";

export default function AuthLayout({ children }: { readonly children: React.ReactNode }) {
    return (
        <Layout>
            <span className="m-auto">{children}</span>
        </Layout>
    );
}
