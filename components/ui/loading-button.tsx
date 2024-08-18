"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconLoader } from "@tabler/icons-react";
import React from "react";
import { useFormStatus } from "react-dom";

function Loader({ text }: { readonly text: string }) {
    return (
        <div className="flex items-center space-x-2">
            <IconLoader className="mr-2 h-4 w-4 animate-spin" />
            <p>{text}</p>
        </div>
    );
}

interface LoadingButtonProps {
    children: React.ReactNode;
    loadingText?: string;
    className?: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
    loading?: boolean;
    onClick?: () => void;
}

export function LoadingButton({
    children,
    loadingText = "Loading",
    loading,
    className,
    onClick = () => {},
    variant,
}: Readonly<LoadingButtonProps>) {
    const status = useFormStatus();
    return (
        <Button
            type="submit"
            aria-disabled={status.pending || loading}
            disabled={status.pending || loading}
            className={cn(className)}
            onClick={onClick}
            variant={variant}
        >
            {status.pending || loading ? <Loader text={loadingText} /> : children}
        </Button>
    );
}
