import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store/store";
import { selectAuth } from "../redux/features/auth/authSlice";


export const useAppDispatch=()=>useDispatch<AppDispatch>();

export const useAuth=()=>useSelector(selectAuth);