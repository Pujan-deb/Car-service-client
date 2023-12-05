import { useContext } from "react"
import { AuthContext } from "../../Authentication/Authuser/Authinfo"
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>;
    }
    if (user) {
        return children;
    }
    return <Navigate to={`/login`} state={{ from: location }} replace></Navigate>;
}
