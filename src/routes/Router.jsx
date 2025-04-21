import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import JobDetails from "../components/JobDetails/JobDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddJob from "../components/AddJob/AddJob";
import MyPostedJob from "../components/MyPostedJob/MyPostedJob";
import MyBids from "../components/MyBids/MyBids";
import BidRequest from "../components/BidRequest/BidRequest";
import Update from "../components/Update/Update";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: '/jobDetail/:id',
                element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/jobDetail/${params.id}`)
            },
            {
                path: '/add-job',
                element: <PrivateRouter><AddJob></AddJob></PrivateRouter>
            },
            {
                path: '/my-post-job',
                element: <PrivateRouter> <MyPostedJob></MyPostedJob></PrivateRouter>
            },
            {
                path: '/update/:id',
                element: <PrivateRouter><Update></Update></PrivateRouter>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/jobDetail/${params.id}`)
            },
            {
                path: '/my-bids',
                element: <PrivateRouter><MyBids></MyBids></PrivateRouter>
            },
            {
                path: '/bid-request',
                element: <PrivateRouter><BidRequest></BidRequest></PrivateRouter>
            },
        ]
    }
])

export default router;