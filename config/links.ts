import { z } from "zod";

export const siteLinks: Record<string, LinkSchema> = {
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
