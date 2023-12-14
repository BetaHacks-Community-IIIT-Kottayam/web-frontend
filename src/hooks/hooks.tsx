import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store/store";
import { selectAuth } from "../redux/features/auth/authSlice";
import { selectUser } from "../redux/features/user/userSlice";
import { selectBlog } from "../redux/features/blog/blogSlice";


export const useAppDispatch=()=>useDispatch<AppDispatch>();

export const useAuth=()=>useSelector(selectAuth);

export const useBlog=()=>useSelector(selectBlog);

export const useProfile=()=>useSelector(selectUser);