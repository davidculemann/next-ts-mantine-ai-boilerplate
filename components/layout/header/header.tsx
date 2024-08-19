import Logo from "@/components/shared/logo";
import { ThemeToggle } from "../theme-toggle";
import Avatar from "./avatar";

export default function Header({ landing }: { landing?: boolean }) {
    return (
        <header className={`sticky top-0 flex h-14 items-center gap-4 px-4 md:px-6 ${landing ? "" : "border-b bg-background "}`}>
            {landing && <Logo className="h-10" />}
            <div className="flex flex-row-reverse w-full gap-2">
                <Avatar landing={landing} />
                <ThemeToggle />
            </div>
        </header>
    );
}
