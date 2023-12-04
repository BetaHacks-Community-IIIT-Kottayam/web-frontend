import React,{lazy,Suspense} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import BlogList from "../../pages/BlogList";
import LoadingPage from "./LoadingPage";

const LazyHomePage=lazy(()=>import('../../pages/HomePage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        id: 'root',
        children: [
            {index:true,element:(
                <Suspense fallback={<LoadingPage/>}>
                    <LazyHomePage/>
                </Suspense>
            )},
            {path:'blogs',element:<BlogList/>},

        ]
    },
    {path:'spin',element:<LoadingPage/>}
]);

const PageRoutes = () => {
    return <RouterProvider router={router} />
}

export default PageRoutes;