import { UImgProps } from '../../types/props.types';

const BlogImage = (props:UImgProps) => {
    return (
        <img src={props.url}
        className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt={props.alt} />
    )
}

export default BlogImage;