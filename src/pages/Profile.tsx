import React, { useEffect } from "react";
import { useAppDispatch, useProfile } from "../hooks/hooks";
import { getUserProfile, uploadProfileImage } from "../redux/features/user/userService";
import Overlay from "../components/ui/Overlay";
import { Link } from "react-router-dom";
import { newFetch } from "../redux/features/system/contentSlice";
import Button from "../components/ui/Button";
import ResponsePopup from "../components/ui/ResponsePopup";
import { flushBlog } from "../redux/features/blog/blogSlice";
import { flushUser } from "../redux/features/user/userSlice";
import { userLogout } from "../redux/features/auth/authSlice";

const Profile = () => {
    const { userInfo, status } = useProfile();
    const dispatch = useAppDispatch();
    const newFetchHandler = () => {
        dispatch(newFetch());
    }
    const logoutHandler = () => {
        dispatch(flushBlog());
        dispatch(flushUser());
        dispatch(userLogout());
    }
    useEffect(() => {
        if (!userInfo.email && !status.isError) {
            dispatch(getUserProfile());
        }
    });
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file as any);
    };
    const uploadHandler = (event: any) => {
        event.preventDefault();
        if (!selectedFile) {
            return;
        }
        // Create FormData object
        const formData = new FormData();
        formData.append('file', selectedFile as any);
        //create a random string for file name
        const fileName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        formData.append('fileName', fileName);

        dispatch(uploadProfileImage({ formData }));
        setSelectedFile(null);
    }

    return (
        <div>
            {status.isError && <ResponsePopup type="error" onClose={logoutHandler} text='Error loading profile' />}
            {status.isLoading ?
                <Overlay message="Processing your request, please wait...." />
                : <>
                    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
                    <div className="flex flex-col mt-16 px-4 items-center justify-center min-h-screen bg-gray-900">
                        <div className="container m-4">
                            <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
                                {/* Profile card */}
                                <div className="flex flex-col top-0 z-10">
                                    <div className="bg-gray-800 border border-gray-800 shadow-lg rounded-2xl p-4">
                                        <div className="flex-none sm:flex">
                                            <div className="flex relative h-32 w-32 sm:mb-0 mb-3">
                                                <img src={userInfo.imgUrl ? userInfo.imgUrl : 'https://previews.123rf.com/images/triken/triken1608/triken160800028/61320729-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration.jpg'} alt="profile Img" className="w-32 h-32 object-cover rounded-2xl" />
                                                <label htmlFor="file-upload"
                                                    className="absolute -right-2 bottom-2 -ml-3 text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                    </svg>
                                                    <input id="file-upload" onChange={handleFileChange} name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                {selectedFile && <div className="block md:hidden">
                                                    <p className="text-white text-center">{selectedFile && selectedFile.name}</p>
                                                    <button onClick={uploadHandler} className="ml-6 mt-4 bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">Upload</button>

                                                </div>}

                                            </div>
                                            <div className="flex-auto sm:ml-5 justify-evenly">
                                                <div className="flex items-center justify-between sm:mt-2">
                                                    <div className="flex items-center">
                                                        <div className="flex flex-col">
                                                            <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">{userInfo.name?.toUpperCase()}</div>
                                                            {/* <div className="flex-auto text-gray-400 my-1">
                                                                <span className="mr-3">Full Stack Developer</span><span className="mr-3 border-r border-gray-600 max-h-0"></span><span>Latur, INDIA</span>
                                                            </div>
                                                            <div className="flex-auto text-gray-400 my-1">
                                                                <span className="mr-3">Indian Institute of Information Technology Kottayam</span><span className="mr-3 border-gray-600 max-h-0"></span>
                                                            </div> */}
                                                            <div className="flex-auto text-gray-400 my-1">
                                                                <span className="mr-3">{userInfo.email}</span><span className="mr-3 border-gray-600 max-h-0"></span>
                                                            </div>
                                                            {selectedFile && <div className="hidden md:block">
                                                                <p className="text-white ml-6">{selectedFile && selectedFile.name}</p>

                                                                <button onClick={uploadHandler} className="ml-6 mt-4 bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">Upload</button>

                                                            </div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-12 gap-4 ">
                                    <div className="col-span-12 sm:col-span-4">
                                        <div className="p-4 relative bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 absolute bottom-4 right-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                            </svg>
                                            <div className="flex justify-between items-center ">
                                                <img className="w-7 filter grayscale" src="https://v1.tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3b72656960a6ae5ad8b85928d0.svg" alt="taiwind css" />
                                            </div>
                                            <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">{userInfo.totalblogs ? userInfo.totalblogs : 0}</div>
                                            <div className="text-sm text-gray-500">Blogs posted</div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <div className="p-4 relative bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 absolute bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                            </svg>
                                            <div className="flex justify-between items-center ">
                                                <i className="fab fa-behance text-xl text-gray-400"></i>
                                            </div>
                                            <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">{userInfo.upvotes ? userInfo.upvotes : 0}</div>
                                            <div className="text-sm text-gray-500">Upvotes gained</div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <div className="p-4 relative bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 absolute bottom-4 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <div className="flex justify-between items-center ">
                                                <i className="fab fa-codepen text-xl text-gray-400"></i>
                                            </div>
                                            <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">{userInfo.months ? userInfo.months : 0}</div>
                                            <div className="text-sm text-gray-500">Months on Betahacks</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Activity */}
                                <div className="flex flex-col">
                                    <div className="bg-gray-800 border border-gray-800 shadow-lg rounded-2xl p-4">
                                        <div className="flex justify-between px-8">
                                            <h3 className="text-2xl font-semibold text-gray-200 mb-2">Activity</h3>
                                            <Link to='/v1/user/blog-adder'>
                                                <Button type='button' name='+Add blog' />
                                            </Link>
                                        </div>
                                        <div className="flex-none sm:flex mt-4">
                                            <div className="flex-auto sm:ml-5 justify-between">
                                                <div className="flex items-center justify-between sm:mt-2">
                                                    <div className="flex flex-row items-center">
                                                        <div className="flex flex-col">
                                                            {userInfo.activity ?
                                                                userInfo.activity.map((blog, index) => (
                                                                    <div key={index} className="bg-gray-800 border border-gray-800 shadow-lg rounded-2xl p-4 w-full flex justify-between items-center mb-4">
                                                                        <h3 className="text-lg font-semibold text-gray-200 mb-2 ">{blog.name}</h3>
                                                                        <Link onClick={newFetchHandler} to={`/v1/blogs/${blog.blogId}`} className="text-blue-500 hover:underline ml-4">View</Link>
                                                                    </div>
                                                                ))
                                                                :
                                                                <div className="bg-gray-800 text-white border border-gray-800 shadow-lg rounded-2xl p-4 w-full flex justify-between items-center mb-4">
                                                                    No activity yet
                                                                </div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            }
        </div>
    );
};

export default Profile;
