import Image from "next/image";
import logoImage from "/public/images/logo.svg";

export default function Logo() {
    return <Image src={logoImage} alt="logo" />;
}
