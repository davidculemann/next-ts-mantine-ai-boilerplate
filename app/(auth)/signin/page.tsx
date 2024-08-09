"use client";

import { getDocTest } from "@/firebase";
import { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        // addDocTest();
        getDocTest();
    }, []);
    return <div>Login</div>;
}
