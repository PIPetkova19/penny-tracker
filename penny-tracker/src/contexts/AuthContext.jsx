import { useState, createContext, useEffect } from "react";
import { supabase } from "../supabase/supabase-client";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [expense, setExpense] = useState([]);
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //function that checks if there is an active session on INITIAL load
        const getSession = async () => {
            setIsLoading(true);
            const { data: { session } } = await supabase.auth.getSession();
            //if there is no session the user is set to null
            setUser(session?.user ?? null);
            setIsLoading(false);
        };
        getSession();
    }, []);

    useEffect(() => {
        if (user) {
            fetchExpenses();
        }
    }, [user]);//!

    async function handleSignUp(email, password) {
        try {
            setIsLoading(true);

            const { data: existingUser, error: fetchError } = await supabase
                .from('myUsers')
                .select('email')
                .eq('email', email)
                .single();

            if (existingUser) {
                alert("User already registered!");
                return null;
            }

            else {
                const { data, error } = await supabase.auth.signUp({ email, password });
                if (error) {
                    alert(error.message);
                    throw error;
                }

                await supabase.from('myUsers').insert([{ id: data.user.id, email }]);
                setUser(data.user);
                alert("An email confirmation has been sent!");
                return data.user;
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleSignIn(email, password) {
        try {
            setIsLoading(true);
            const { data, error } = await supabase.auth.signInWithPassword({ email, password })
            if (error) { alert(error); throw error; }
            alert("Login succesfull!");
            setUser(data.user);
            navigate("/");
        }
        catch (error) {
            alert(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    async function handleSignUpGoogle() {
        try {
            setIsLoading(true);
            const { data, error } = supabase.auth.signInWithOAuth({
                provider: 'google',
            })
            if (error) { alert(error); throw error; }
            setUser(data.user);
            return data;
        }
        catch (error) {
            alert(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    async function handleSignOut() {
        try {
            setIsLoading(true);
            const { error } = supabase.auth.signOut();
            if (error) { alert(error); throw error; }
            setUser(null);
        }
        catch (error) {
            alert(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    //forgotten password
    async function handleResetPass(email) {
        try {
            setIsLoading(true);
            const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: 'http://localhost:5173/updateUser',
            })
            alert("Email with link has been sent!");
            if (error) { alert(error); throw error; }
        }
        catch (error) {
            alert(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    async function handleUpdateUser(password) {
        try {
            setIsLoading(true);
            const { data, error } = await supabase.auth.updateUser({ password })
            if (error) { alert(error); throw error; }
            setUser(data.user);
            navigate("/login")
        }
        catch (error) {
            alert(error); throw error;
        }
        finally {
            setIsLoading(false);
        }
    }


    async function handleAddExpense(expenseTitle, expenseAmount, expenseDate, expenseCategory) {
        try {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('expenses')
                .insert([{
                    title: expenseTitle,
                    amount: expenseAmount,
                    date: expenseDate ? expenseDate.toISOString() : null,
                    category: expenseCategory,
                    user_id: user.id
                }]);

            if (error) {
                alert(error.message);
                throw error;
            }
            alert("Expense had been added!");
        }
        catch (error) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function fetchExpenses() {
       const { data, error } = await supabase
            .from('expenses')
            .select('*')
            .eq('user_id', user.id)
            .order('date', { ascending: false });

        if (error) {
            console.log(error);
            return;
        }
        setExpense(data);
    }

    return (
        <AuthContext value={{
            user, handleSignUp, handleSignIn, handleSignUpGoogle, handleSignOut,
            handleResetPass, handleUpdateUser,
            handleAddExpense, expense
        }}>
            {children}
        </AuthContext >
    );
}

export default AuthProvider;
