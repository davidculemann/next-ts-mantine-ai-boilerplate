import { z } from "zod";
import { config } from "./app.config";

export const siteLinks: Record<string, LinkSchema> = {
    email: { url: `mailto:${config.appEmail}`, id: "email" },
    twitter: {
        url: "https://twitter.com/shadcn",
        id: "twitter",
    },
    github: { url: "https://github.com/your-username", id: "github" },
    linkedin: { url: "https://www.linkedin.com/in/your-linkedin-profile", id: "linkedin" },
};

type LinkSchema = z.infer<typeof LinkSchema>;

const LinkSchema = z.object({
    id: z.string(),
    url: z.string().url(),
});
