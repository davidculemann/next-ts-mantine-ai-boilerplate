import Image from "next/image";
import logoImage from "/public/images/logo.svg";

export default function Logo({ className }: { readonly className?: string }) {
    return <Image src={logoImage} alt="logo" className={className} />;
}
