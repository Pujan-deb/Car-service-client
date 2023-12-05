import { createContext, useEffect, useState } from "react"
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const AuthContext = createContext(null);
const auth = getAuth(app)
export default function Authinfo({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            setLoading(false)

        })
        return () => {
            unsubscribe()
        }
    }, [])

    const Signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const Signout = () => {
        return signOut(auth).then(() => { console.log("signout") }).catch((error) => { console.log(error.message) })
    }

    const userinfo = { Signup, login, user, Signout, loading }
    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    )
}
