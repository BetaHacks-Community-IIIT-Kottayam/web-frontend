import Note from "../components/ui/Note";
import Paragraph from "../components/ui/Paragraph";
import SubHeading from "../components/ui/SubHeading";
import BlogImage from "../components/ui/BlogImage";
import BlogHeader from "../components/ui/BlogHeader";
import { useAppDispatch, useContent } from "../hooks/hooks";
import { useEffect } from "react";
import { getBlogService } from "../redux/features/system/contentService";
import { useNavigate, useParams } from "react-router-dom";
import Overlay from "../components/ui/Overlay";
import ResponsePopup from "../components/ui/ResponsePopup";
import Code from "../components/ui/Code";
import { resetStatus } from "../redux/features/system/contentSlice";
import { userLogout } from "../redux/features/auth/authSlice";
const Blog = () => {
    const { currentBlog, status, isFetched } = useContent();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const navigate=useNavigate();
    const errorPopHandler=()=>{
        if(status.errorMessage.message==='Unauthorized'){
            dispatch(resetStatus());
            dispatch(userLogout());
            navigate('/auth/v1/login');
        }
    }
    useEffect(() => {
        if (!isFetched) {
            dispatch(getBlogService(id ? id : ''));
        }
    }, [isFetched, status.isError]);
    return (
        <div className="container min-h-screen mt-32 mx-auto w-[100vw] overflow-hidden">
            {status.isLoading && <Overlay message="Fetching blog, please wait...." />}
            {status.isError && <ResponsePopup type="error" text={status.errorMessage} onClose={errorPopHandler} />}
            <section className="px-4">
                {currentBlog?.index.map((i, index) => (
                    <div>
                        {i === 0 && <BlogHeader title={currentBlog.name} id={id}
                            author={currentBlog.author} upvotes={currentBlog.upvotes} linkedIn={currentBlog.linkedIn} />}
                        {i === 1 && <SubHeading content={currentBlog.content[index]} />}
                        {i === 2 && <Paragraph content={currentBlog.content[index]} />}
                        {i === 3 && <Note content={currentBlog.content[index]} />}
                        {i === 4 && <BlogImage url={currentBlog.content[index]} alt="Loading image.." />}
                        {i === 5 && <a href={currentBlog.content[index]} target="_blank" className="w-full text-blue-500 hover:underline" ><p className="mb-6 whitespace-normal break-words">{currentBlog.content[index]}</p></a>}
                        {i === 6 && <Code content={currentBlog.content[index]} />}

                    </div>
                ))}
            </section>
        </div>
    );
};

export default Blog;
