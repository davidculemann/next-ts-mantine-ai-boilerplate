import { Auth } from "firebase/auth";

export interface FirebaseAuth {
    email: string;
    password: string;
    auth: Auth;
}
