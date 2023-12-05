import React,{lazy,Suspense} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LoadingPage from "./LoadingPage";

const LazyHomePage=lazy(()=>import('../../pages/HomePage'));
const LazyBlogList=lazy(()=>import('../../pages/BlogList'));
const LazyBlog=lazy(()=>import('../../pages/Blog'));

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
            {path:'v1/blogs',element:(
                <Suspense fallback={<LoadingPage/>}>
                    <LazyBlogList />
                </Suspense>
            )},
            {path:'v1/blogs/id',element:(
                <Suspense fallback={<LoadingPage/>}>
                <LazyBlog />
            </Suspense>
            )}
        ]
    },
]);

const PageRoutes = () => {
    return <RouterProvider router={router} />
}

export default PageRoutes;