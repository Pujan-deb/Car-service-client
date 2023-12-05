
import {
    createBrowserRouter,

} from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Users/Login";
import Registration from "../Pages/Users/Registration";
import Aboutus from "../Pages/Home/About/Aboutus";
import Error from "../Pages/Error";
import Booknow from "../Pages/Booking/Booknow";
import Allservices from "../Pages/Home/Services/Allservices";
import Checkoutpage from "../Pages/Checkout/Checkoutpage";
import Allbookings from "../Pages/Booking/Allbookings";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "registration",
                element: <Registration></Registration>
            },
            {
                path: "About",
                element: <Aboutus></Aboutus>
            },
            {
                path: "*",
                element: <Error></Error>
            },
            {
                path: "booknow/:id",
                element: <Booknow></Booknow>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "allservices",
                element: <Allservices></Allservices>
            },
            {
                path: "allbookings",
                element: <PrivateRoute><Allbookings></Allbookings></PrivateRoute>
            },
            {
                path: "checkout/:id",
                element: <PrivateRoute><Checkoutpage></Checkoutpage></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    },
]);
export default router;