import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";

export function useUser() {
    return useAuthState(auth);
}
