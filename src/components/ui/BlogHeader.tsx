import { UHeaderProps } from '../../types/props.types';
import { FaLinkedin, FaUser } from "react-icons/fa";
import { BiSolidUpvote } from "react-icons/bi";
import { useAppDispatch, useAuth } from '../../hooks/hooks';
import { upvoteBlogService } from '../../redux/features/system/contentService';

const BlogHeader = (props: UHeaderProps) => {
    const dispatch=useAppDispatch();
    const {isAuth}=useAuth();
    const upvoteHandler=()=>{
        dispatch(upvoteBlogService(props.id));
    }
    return <>
        <h1 className="mb-4 text-3xl font-bold">
            {props.title}
        </h1>

        <div className="mb-6 flex items-center">
            <p className="text-sm flex items-center font-bold uppercase text-red-500 dark:text-red-500">
                <FaUser size="1.3rem" className="pr-2" />
                {props.author}
            </p>
            <p onClick={upvoteHandler} className="ml-4 flex items-center font-bold text-sm text-green-600 rounded-full bg-gray-200 px-2 py-1 cursor-pointer">
                <BiSolidUpvote size='1.3rem' className="pr-1" />
                {props.upvotes} upvotes
            </p>
            <a href={props.linkedIn} target='_blank' className='ml-8 cursor-pointer'>
            <FaLinkedin size='1.6rem' color='blue' />
            </a>
        </div></>
}

export default BlogHeader;