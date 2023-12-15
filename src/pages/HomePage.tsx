import backgroundImage from '../images/homeBack.jpg';
import HorizontalCard from '../components/ui/HorizontalCard';
import { BHorizontalCard } from '../types/props.types';
import { useAppDispatch, useContent } from '../hooks/hooks';
import LoadingPage from '../components/page-components/LoadingPage';
import { useEffect } from 'react';
import { getRecentBlogsService } from '../redux/features/system/contentService';

function HomePage() {
    const containerStyle = {
        height: '200vh',
        marginTop: '4vh',
    };
    const backgroundImgStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        height: '65vh',
        marginBottom: '5vh'
    };
    const {recentBlogs,status,isFetchedRecent}=useContent();
    const dispatch=useAppDispatch();
    useEffect(() => {
        if (!isFetchedRecent) {
            dispatch(getRecentBlogsService());
        }
    }, [isFetchedRecent, status.isError]);
    return (
        <div className='flex flex-col items-center w-full min-h-screen' style={containerStyle}>
            <div className='flex flex-col items-center justify-center w-full h-screen' style={backgroundImgStyle}>
                <h1 className="text-5xl font-bold text-white">BetaHacks Cyber Community</h1>
                <p className="text-lg italic mt-4 max-w-md text-center text-white">“As we’ve come to realize, the idea that security starts and ends with the purchase of a prepackaged firewall is simply misguided.” – Art Wittmann</p>
            </div>
        
            <div className="container mx-auto p-8 bg-gray-200">
                <h2 className="text-4xl font-bold mb-4">Recent Blogs</h2>
                {!isFetchedRecent && status.isLoading && <LoadingPage/>}
                {recentBlogs?.map((card,index)=>(
                    <HorizontalCard key={index} card={card}/>
                ))}
            </div>
            
        </div>
    );
}

export default HomePage;
