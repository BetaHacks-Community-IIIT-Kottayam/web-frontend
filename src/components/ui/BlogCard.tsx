import { Link } from 'react-router-dom';
import { BCardProps, BHorizontalCard } from '../../types/props.types';
import Button from './Button';

const BlogCard = (props: BCardProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={`${props.card.img}`} alt="Loading Image..." />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.card.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.card.excerpt}</p>
        <Link to='id'>
          <Button type='button' name='Read More &#187;' />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
