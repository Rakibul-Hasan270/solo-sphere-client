import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signIn',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Register></Register>
            }
        ]
    }
])

export default router;