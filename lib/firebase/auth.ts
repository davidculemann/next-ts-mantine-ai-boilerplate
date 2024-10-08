import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { auth } from "./firebase-config";

export async function createUser(formData: FormData) {
    const fields = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, fields.email, fields.password);
        return userCredential;
    } catch (error) {
        return error;
    }
}

export async function signIn(formData: FormData) {
    const fields = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    try {
        await signInWithEmailAndPassword(auth, fields.email, fields.password);
    } catch (error) {
        return error;
    }
}

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
        await signInWithRedirect(auth, provider);
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
}

export async function signOut() {
    try {
        return auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}
