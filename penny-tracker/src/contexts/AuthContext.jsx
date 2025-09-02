import { useState, createContext } from "react";
import { supabase } from "../supabase/supabase-client";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    let navigate = useNavigate();

    async function handleSignUp(email, password) {
        const { data, error } = await supabase.auth.signUp({ email, password })
        if (error) { alert(error); throw error; }
        alert("An email confirmation has been sent!");
        setUser(data);
        return data;
    }

    async function handleSignIn(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) { alert(error); throw error; }
        setUser(data);
        alert("Login succesfull!");
        navigate("./");
    }

    async function handleSignUpGoogle() {
        const { data, error } = supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        if (error) { alert(error); throw error; }
        setUser(data);
        return data;
    }

    async function handleSignOut() {
        const { error } = supabase.auth.signOut();
        if (error) { alert(error); throw error; }
        setUser(null);
    }

    return (
        <AuthContext value={{ user, handleSignUp, handleSignIn, handleSignUpGoogle, handleSignOut }}>
            {children}
        </AuthContext >
    );
}

export default AuthProvider;
