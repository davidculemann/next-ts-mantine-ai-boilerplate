import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { siteLinks } from "../../config/site.config";

const ICON_MAP = {
    twitter: <TwitterLogoIcon />,
    github: <GitHubLogoIcon />,
    linkedin: <LinkedInLogoIcon />,
};

export function Footer() {
    const links = Object.values(siteLinks);

    return (
        <footer className="py-6 md:px-8 md:py-0 border-t bg-background bottom-0 w-full mt-auto">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground md:flex-row md:gap-2">
                    EasyCV
                    <div>© 2024 David Culemann</div>
                </div>
                <span className="link-wrapper flex gap-4    ">
                    {links.map((link) => (
                        <SocialLink key={link.id} link={link} />
                    ))}
                </span>
            </div>
        </footer>
    );
}

function SocialLink({ link }) {
    return (
        <Link href={link} target="_blank" rel="noreferrer" className="font-medium">
            {ICON_MAP[link.id]}
        </Link>
    );
}
