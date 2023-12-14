import { useEffect } from "react";
import BlogCard from "../components/ui/BlogCard";
import { useAppDispatch, useContent } from "../hooks/hooks";
import { getAllBlogsService } from "../redux/features/system/contentService";
import Overlay from "../components/ui/Overlay";
import ResponsePopup from "../components/ui/ResponsePopup";
import { retryFetch } from "../redux/features/system/contentSlice";
const BlogList=()=> {
  const {blogs,isFetchedAll,status}=useContent();
  const dispatch=useAppDispatch();
  const retryHandler=()=>{
         dispatch(retryFetch());
  }
  console.log(blogs);
  useEffect(() => {
      if(!isFetchedAll){
         dispatch(getAllBlogsService());
      }
  }, [isFetchedAll,status.isError])

  return <div className="flex flex-wrap gap-4 min-h-screen mt-20 mb-4 justify-center items-center w-screen">
   {status.isLoading && <Overlay message="Fetching blogs, please wait...." />}
   {status.isError && <ResponsePopup type='error' text={status.errorMessage} onClose={retryHandler} />}
  {blogs?.map((blog, index) => (
    <BlogCard key={index} blog={blog} />
  ))}
</div>;
}

export default BlogList