import type { NextRequest } from "next/server";
import { auth } from "./lib/firebase/firebase";

type Path = "/signin" | "/signup" | "/dashboard" | "/";

const NO_AUTH_PATHS: Path[] = ["/signin", "/signup", "/"];
const AUTH_PATHS: Path[] = ["/dashboard"];

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("currentUser")?.value;
    console.log(currentUser, auth);

    const matchPath = (path: string, availablePaths: Path[]) => {
        for (const unauthPath of availablePaths) {
            if (path.startsWith(unauthPath)) {
                return true;
            }
        }
        return false;
    };

    if (currentUser && !matchPath(request.nextUrl.pathname, AUTH_PATHS)) {
        return Response.redirect(new URL("/", request.url));
    }

    if (!currentUser && !matchPath(request.nextUrl.pathname, NO_AUTH_PATHS)) {
        return Response.redirect(new URL("/signin", request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
