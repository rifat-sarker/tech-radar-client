import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState([])
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email, password)
        setLoading(true);
    }
     const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true);
    }

    const authInfo = {
        user,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;