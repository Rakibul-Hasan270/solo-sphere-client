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
import AllJobs from "../components/AllJobs/AllJobs";
// import PrivateRouter from "./PrivateRouter";

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
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/jobDetail/${params.id}`)
            },
            {
                path: '/add-job',
                element: <AddJob></AddJob>
            },
            {
                path: '/my-post-job',
                element: <MyPostedJob></MyPostedJob>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/jobDetail/${params.id}`)
            },
            {
                path: '/my-bids',
                element: <MyBids></MyBids>
            },
            {
                path: '/bid-request',
                element: <BidRequest></BidRequest>
            },
            {
                path: '/allJobs',
                element: <AllJobs></AllJobs>
            }
        ]
    }
])

export default router;