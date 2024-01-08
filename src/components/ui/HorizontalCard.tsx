import { Link } from 'react-router-dom';
import { BProjectProps } from '../../types/props.types';

const Horizontalprops = (props:BProjectProps) => {
  return <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2 relative">
        <div className="h-64 w-auto md:w-1/2">
          <img className="inset-0 h-fullprops w-full object-cover object-center" src={props.card.img} alt={props.card.title} />
        </div>
        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 className="font-semibold text-lg leading-tight truncate">{props.card.name}</h3>
          <p className="mt-2">{props.card.para}</p>
          <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            {props.card.author ? props.card.author :props.card.projectHead} &nbsp;&nbsp; &bull; {props.card.createdOn?.slice(0,10)}
          </p>
          <Link
            to={`v1/blogs/${props.card.blogId}`}
            className="text-blue-500 mt-2 flex items-center space-x-1 px-2 py-2"
            style={{ position: 'absolute', bottom: '8px', right: '8px' }}
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </div>
};

export default Horizontalprops;
