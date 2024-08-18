import Image from "next/image";
import { Button } from "../ui/button";
import googleLogo from "/public/images/google.svg";

const providerLogos = {
    google: googleLogo,
};

export default function ProviderLoginButton({ provider, signInFn }) {
    const providerLogo = providerLogos[provider];
    return (
        <Button className="w-full" variant="outline" onClick={signInFn}>
            <span className="flex gap-2">
                <Image src={providerLogo} alt="Google Logo" width={18} height={18} />
                Sign in with {provider}
            </span>
        </Button>
    );
}
