"use client";

import Link from "next/link";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingButton } from "../ui/loading-button";

export function SignupForm() {
    return (
        <div className="w-full max-w-md">
            <form>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
                        <CardDescription>Enter your details to create a new account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" name="username" type="text" placeholder="username" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="name@example.com" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" type="password" placeholder="password" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <LoadingButton className="w-full">Sign Up</LoadingButton>
                    </CardFooter>
                </Card>
                <div className="mt-4 text-center text-sm">
                    Have an account?
                    <Link className="underline ml-2" href="signin">
                        Sign In
                    </Link>
                </div>
            </form>
        </div>
    );
}
