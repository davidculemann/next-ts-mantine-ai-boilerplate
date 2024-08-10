import Image from "next/image";
import Link from "next/link";
import { siteLinks } from "../../config/site.config";

const ICON_MAP = {
    twitter: "https://simpleicons.org/icons/x.svg",
    github: "https://simpleicons.org/icons/github.svg",
    facebook: "https://simpleicons.org/icons/facebook.svg",
    linkedin: "https://simpleicons.org/icons/linkedin.svg",
};

export function Footer() {
    const links = Object.values(siteLinks);

    return (
        <footer className="py-6 md:px-8 md:py-0 border-t bg-background bottom-0 w-full">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground md:flex-row md:gap-2">
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
            <Image src={ICON_MAP[link.id]} alt={link.id} height={16} width={16} />
        </Link>
    );
}
