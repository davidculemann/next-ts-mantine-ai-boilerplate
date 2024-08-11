import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconUser } from "@tabler/icons-react";

export function UserAvatar({ user, ...props }) {
    return (
        <Avatar {...props}>
            {user.image ? (
                <AvatarImage alt="Picture" src={user.image} />
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{user.name}</span>
                    <IconUser />
                </AvatarFallback>
            )}
        </Avatar>
    );
}
