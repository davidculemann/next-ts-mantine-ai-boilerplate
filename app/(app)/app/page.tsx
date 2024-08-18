"use client";

import { auth } from "@/lib/firebase/firebase";

export default function Page() {
    const user = auth.currentUser;
    console.log(user);
    return <div>Dashboard</div>;
}
