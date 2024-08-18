"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signinUser, signInWithGoogle } from "@/lib/firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LoadingButton } from "../ui/loading-button";
import googleLogo from "/public/images/google.svg";

export function SigninForm() {
    return (
        <div className="w-full max-w-md">
            <form action={signinUser}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
                        <CardDescription>Enter your details to sign in to your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="text" placeholder="username or email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" type="password" placeholder="password" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3">
                        <LoadingButton className="w-full">Sign in</LoadingButton>
                        <Button className="w-full" variant="outline" onClick={signInWithGoogle}>
                            <span className="flex gap-2">
                                <Image src={googleLogo} alt="Google Logo" width={18} height={18} />
                                Sign in with Google
                            </span>
                        </Button>
                    </CardFooter>
                </Card>
                <div className="mt-4 text-center text-sm">
                    Don't have an account?
                    <Link className="underline ml-2" href="signup">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    );
}
