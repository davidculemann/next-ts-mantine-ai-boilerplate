import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "./useUser";

type PublicPath = "/signin" | "/signup" | "/";
type ProtectedPath = "/app" | "/app/dashboard";

const AUTH_PATHS: PublicPath[] = ["/signin", "/signup"];
const PROTECTED_PATHS: ProtectedPath[] = ["/app", "/app/dashboard"];

export function useAuthRedirect() {
    const router = useRouter();
    const pathName = usePathname();
    const [user, loading] = useUser();

    useEffect(() => {
        if (!loading) {
            if (AUTH_PATHS.includes(pathName as PublicPath) && user) {
                router.replace("/app");
            } else if (PROTECTED_PATHS.includes(pathName as ProtectedPath) && !user) {
                router.replace("/signin");
            }
        }
    }, [loading, pathName, router, user]);
}
