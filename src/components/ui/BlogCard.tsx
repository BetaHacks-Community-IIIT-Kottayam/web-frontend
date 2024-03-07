import { Link } from "react-router-dom";
import { BCardProps, BHorizontalCard } from "../../types/props.types";
import Button from "./Button";
import { useAppDispatch } from "../../hooks/hooks";
import { newFetch } from "../../redux/features/system/contentSlice";

const BlogCard = (props: BCardProps) => {
  const dispatch = useAppDispatch();
  const newFetchHandler = () => {
    dispatch(newFetch());
  };

  const highlightSearchQuery = (text: string, query: string) => {
    if (!query) {
      return text;
    }

    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <mark
          className="bg-yellow-300 text-gray-700 p-1 rounded-md"
          key={index}
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-lg w-full h-[30vh]"
          src={`${props.blog.img}`}
          alt="Loading Image..."
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {highlightSearchQuery(props.blog.name, props.query)}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {highlightSearchQuery(props.blog.para, props.query)}
        </p>
        <Link to={props.blog.blogId} onClick={newFetchHandler}>
          <Button type="button" name="Read More &#187;" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
