import { z } from "zod";

type ValidPage = "dashboard" | "about" | "contact" | "profile";

const PageSchema = z.object({
    title: z.string(),
    path: z.string().refine((path) => path.startsWith("/") && !/\s/.test(path), {
        message: "Path must start with '/' and contain no spaces",
    }),
});

type Page = z.infer<typeof PageSchema>;

export const pages: Record<ValidPage, Page> = {
    dashboard: {
        title: "Dashboard",
        path: "/app",
    },
    about: {
        title: "About",
        path: "/about",
    },
    contact: {
        title: "Contact",
        path: "/contact",
    },
    profile: {
        title: "Profile",
        path: "/app/profile",
    },
};
