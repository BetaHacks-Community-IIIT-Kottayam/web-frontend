import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LoadingPage from "./LoadingPage";
import ProtectedRoutes from "./ProtectedRoutes";

const LazyHomePage = lazy(() => import('../../pages/HomePage'));
const LazyBlogList = lazy(() => import('../../pages/BlogList'));
const LazyBlog = lazy(() => import('../../pages/Blog'));
const LazyProjects = lazy(() => import('../../pages/Projects'));
const LazyLoginPage = lazy(() => import('../../pages/LoginPage'));
const LazySignupPage = lazy(() => import('../../pages/RegisterPage'));
const LazyBlogAdder = lazy(() => import('../../pages/BlogAdderPage'));
const LazyProfile = lazy(() => import('../../pages/Profile'));
const LazyAbout = lazy(() => import('../../pages/About'));



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        id: 'root',
        children: [
            {
                index: true, element: (
                    <Suspense fallback={<LoadingPage />}>
                        <LazyHomePage />
                    </Suspense>
                )
            },
            {
                path: 'v1/blogs', element: (
                    <Suspense fallback={<LoadingPage />}>
                        <LazyBlogList />
                    </Suspense>
                )
            },
            {
                path: 'v1/blogs/id', element: (
                    <Suspense fallback={<LoadingPage />}>
                        <LazyBlog />
                    </Suspense>
                )
            },
            {
                path: 'v1/projects', element: (
                    <Suspense fallback={<LoadingPage />}>
                        <LazyProjects />
                    </Suspense>
                )
            },
            {
                path: 'v1/blog-adder', element: (
                    <Suspense fallback={<LoadingPage />}>
                        <LazyBlogAdder />
                    </Suspense>
                )
            },
            {
                path: 'v1/user',
                element: <ProtectedRoutes />,
                children: [
                    {
                        path: 'profile', element: (
                            <Suspense fallback={<LoadingPage />}>
                                <LazyProfile />
                            </Suspense>
                        )
                    }
                ]
            },
            {
                path: 'about-community', element: (
                    <Suspense fallback={<LoadingPage />}>
                        <LazyAbout />
                    </Suspense>
                )
            },
        ]
    },
    {
        path: '/auth',
        id: 'auth',
        children: [
            {
                path: 'v1/login', element: (
                    <Suspense fallback={<LoadingPage />}>
                        <LazyLoginPage />
                    </Suspense>
                )
            },
            {
                path: 'v1/register', element: (
                    <Suspense fallback={<LoadingPage />}>
                        <LazySignupPage />
                    </Suspense>
                )
            },
        ]
    }
]);

const PageRoutes = () => {
    return <RouterProvider router={router} />
}

export default PageRoutes;