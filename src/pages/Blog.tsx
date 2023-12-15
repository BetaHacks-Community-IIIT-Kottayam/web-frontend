import Note from "../components/ui/Note";
import Paragraph from "../components/ui/Paragraph";
import SubHeading from "../components/ui/SubHeading";
import BlogImage from "../components/ui/BlogImage";
import BlogHeader from "../components/ui/BlogHeader";
import { useAppDispatch, useContent } from "../hooks/hooks";
import { useEffect } from "react";
import { getBlogService } from "../redux/features/system/contentService";
import { useParams } from "react-router-dom";
import Overlay from "../components/ui/Overlay";
import ResponsePopup from "../components/ui/ResponsePopup";
import Code from "../components/ui/Code";
const Blog = () => {
    const { currentBlog, status, isFetched } = useContent();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    useEffect(() => {
        if (!isFetched) {
            dispatch(getBlogService(id ? id : ''));
        }
    }, [isFetched, status.isError]);
    return (
        <div className="container min-h-screen mt-32 mx-auto">
            {status.isLoading && <Overlay message="Fetching blog, please wait...." />}
            {status.isError && <ResponsePopup type="error" text={status.errorMessage} />}
            <section className="px-4">
                {currentBlog?.index.map((i, index) => (
                    <div>
                        {i === 0 && <BlogHeader title={currentBlog.name}
                            author={currentBlog.author} upvotes={currentBlog.upvotes} />}
                        {i === 1 && <SubHeading content={currentBlog.content[index]} />}
                        {i === 2 && <Paragraph content={currentBlog.content[index]} />}
                        {i === 3 && <Note content={currentBlog.content[index]} />}
                        {i === 4 && <BlogImage url={currentBlog.content[index]} alt="Loading image.." />}
                        {i === 5 && <a href={currentBlog.content[index]} target="_blank" className="text-blue-500 hover:underline" ><p className="mb-6">{currentBlog.content[index]}</p></a>}
                        {i === 6 && <Code content={currentBlog.content[index]} />}

                    </div>
                ))}
            </section>
        </div>
    );
};

export default Blog;
