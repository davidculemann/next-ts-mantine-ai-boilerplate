"use client";

import { Center, Stack, Tooltip, UnstyledButton, rem } from "@mantine/core";
import {
    IconCalendarStats,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconGauge,
    IconHome2,
    IconLogout,
    IconSettings,
    IconSwitchHorizontal,
    IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import classes from "../styles/NavbarMinimal.module.css";
import Logo from "/public/images/logo.svg";

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    { icon: IconHome2, label: "Home" },
    { icon: IconGauge, label: "Dashboard" },
    { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
    { icon: IconCalendarStats, label: "Releases" },
    { icon: IconUser, label: "Account" },
    { icon: IconFingerprint, label: "Security" },
    { icon: IconSettings, label: "Settings" },
];

export function SideBar() {
    const [active, setActive] = useState(2);

    const links = mockdata.map((link, index) => (
        <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />
    ));
    console.log(classes);
    return (
        <nav className={classes.navbar + " h-full"}>
            <Center>
                <Image src={Logo} alt="logo" />
            </Center>

            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>

            <Stack justify="center" gap={0}>
                <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
                <NavbarLink icon={IconLogout} label="Logout" />
            </Stack>
        </nav>
    );
}
