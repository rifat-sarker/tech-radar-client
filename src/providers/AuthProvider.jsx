import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [user , setUser] = useState([])
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password)
    }
     const signIn = (email, password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn = ()=> {
        return signInWithPopup(auth,provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        googleLogIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;