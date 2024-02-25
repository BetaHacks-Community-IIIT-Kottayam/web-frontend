import { useState } from 'react';
import { UImgProps } from '../../types/props.types';

const BlogImage = (props: UImgProps) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoaded = () => {
        setLoading(false);
    };

    const handleImageError = () => {
        setLoading(false);
        // You can also handle the error state here if needed
    };

    return (
        <div className="relative">
            {loading && (
                <div className='flex flex-col  justify-center items-center bg-white w-1/2 h-[15vh] dark:invert'>
                    <div className='flex space-x-2'>
                        <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                        <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                        <div className='h-4 w-4 bg-black rounded-full animate-bounce'></div>
                    </div>
                    <p className='text-sm text-gray-800 pt-2'>Loading image...</p>
                </div>
            )}
                <img
                    src={props.url}
                    className={`mb-6 w-full max-h-[70vh] rounded-lg shadow-lg dark:shadow-black/20 ${loading ? 'hidden' : ''}`}
                    alt={props.alt}
                    onLoad={handleImageLoaded}
                    onError={handleImageError}
                />

        </div>
    );
};

export default BlogImage;
