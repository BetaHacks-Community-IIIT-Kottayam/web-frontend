import { Link } from 'react-router-dom';
import { BCardProps, BHorizontalCard } from '../../types/props.types';
import Button from './Button';
import { useAppDispatch } from '../../hooks/hooks';
import { newFetch } from '../../redux/features/system/contentSlice';

const BlogCard = (props: BCardProps) => {
  const dispatch=useAppDispatch();
  const newFetchHandler=()=>{
    dispatch(newFetch());
  }
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={`${props.blog.img}`} alt="Loading Image..." />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.blog.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.blog.para}</p>
        <Link to={props.blog.blogId} onClick={newFetchHandler}>
          <Button type='button' name='Read More &#187;' />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
