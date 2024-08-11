import { z } from "zod";

type ValidPage = "home" | "about" | "contact" | "signin" | "signup" | "profile";

const PageSchema = z.object({
    title: z.string(),
    path: z.string().refine((path) => path.startsWith("/") && !/\s/.test(path), {
        message: "Path must start with '/' and contain no spaces",
    }),
});

type Page = z.infer<typeof PageSchema>;

export const pages: Record<ValidPage, Page> = {
    home: {
        title: "Home",
        path: "/",
    },
    about: {
        title: "About",
        path: "/about",
    },
    contact: {
        title: "Contact",
        path: "/contact",
    },
    signin: {
        title: "Signin",
        path: "/signin",
    },
    signup: {
        title: "Signup",
        path: "/signup",
    },
    profile: {
        title: "Profile",
        path: "/profile",
    },
};
