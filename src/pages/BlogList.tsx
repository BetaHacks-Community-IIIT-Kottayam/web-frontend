import { useEffect } from "react";
import BlogCard from "../components/ui/BlogCard";
import { useAppDispatch, useContent } from "../hooks/hooks";
import { getAllBlogsService } from "../redux/features/system/contentService";
import Overlay from "../components/ui/Overlay";
import ResponsePopup from "../components/ui/ResponsePopup";
import { retryFetch } from "../redux/features/system/contentSlice";
import { useSelector } from "react-redux";
import { selectSearchQuery } from "../redux/features/blog/searchSlice";

const BlogList = () => {
  const { blogs, isFetchedAll, status } = useContent();
  const dispatch = useAppDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const retryHandler = () => {
    dispatch(retryFetch());
  };
  useEffect(() => {
    if (!isFetchedAll) {
      dispatch(getAllBlogsService());
    }
  }, [isFetchedAll, status.isError]);

  const blogsStartWithSearchQuery = blogs?.filter((blog: { name: string }) =>
    blog.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const blogsIncludingSearchQuery = blogs?.filter(
    (blog) =>
      blog.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !blogsStartWithSearchQuery?.includes(blog)
  );

  let finalFilteredBlogs = (blogsStartWithSearchQuery || []).concat(
    blogsIncludingSearchQuery || []
  );

  const blogsToMap = searchQuery !== "" ? finalFilteredBlogs : blogs || [];

  return (
    <div className="flex flex-wrap gap-4 min-h-screen mt-20 mb-4 justify-center items-center w-screen">
      {status.isLoading && (
        <Overlay message="Fetching blogs, please wait...." />
      )}
      {status.isError && (
        <ResponsePopup
          type="error"
          text={status.errorMessage}
          onClose={retryHandler}
        />
      )}
      {blogsToMap?.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
