import backgroundImage from '../images/homeBack.jpg';
import HorizontalCard from '../components/ui/HorizontalCard';
import { BHorizontalCard } from '../types/props.types';
import { useAppDispatch, useContent } from '../hooks/hooks';
import LoadingPage from '../components/page-components/LoadingPage';
import { useEffect } from 'react';
import { getRecentBlogsService } from '../redux/features/system/contentService';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import CountUpCard from '../components/ui/CountUpCard';
import { useGetStatsServiceQuery } from '../redux/features/system/contentAPI';

function HomePage() {
    const { recentBlogs, status, isFetchedRecent } = useContent();
    const {data:stats,isLoading,isError,refetch}=useGetStatsServiceQuery();
    console.log(stats);
    console.log(isLoading);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!isFetchedRecent && !status.isError) {
            dispatch(getRecentBlogsService());
        }
    }, [isFetchedRecent, status.isError]);
    return (
        <div className='relative flex flex-col items-center w-full min-h-screen'>
            <div className='px-4 md:px-16 lg:px-24 flex flex-wrap-reverse items-center justify-between w-full mt-28'>
                <div className='flex flex-col mt-4 mx-auto '>
                    <h1 className="text-2xl sm:text-3xl md:4xl mx-auto w-3/4 md:w-full lg:text-5xl font-bold">Connect with the <br /> <span className='text-[#207EB8]'>BetaHacks.</span></h1>
                    <p className="text-sm md:text-md mx-auto w-3/4 md:w-full lg:text-lg my-2 max-w-md">Welcome to our Cyber Community, where bytes unite and connections ignite!</p>
                </div>
                <img src={h2} className='w-3/4 md:w-[50%] mx-auto' />
            </div>
            {isLoading? <LoadingPage/>
            :<div className="w-fu3/4 md:w-full my-12 px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-5 gap-8">
                <CountUpCard title="Active Users" count={stats?.userCount?stats.userCount:0} />
                <CountUpCard title="Blogs Posted" count={stats?.blogCount?stats.blogCount:0} />
                <CountUpCard title="Upvotes" count={stats?.upvoteCount?stats.upvoteCount:0} />
                <CountUpCard title="LinkedIn Followers" count={200} />
                <CountUpCard title="Community Members" count={80} />
            </div>}
            <div className='px-4 md:px-16 my-8 lg:px-24 flex flex-wrap items-center justify-between w-full'>
                <img src={h1} className='w-3/4 md:w-[50%] mx-auto' />
                <div className='flex flex-col justify-center items-center'>
                    <p className="text-sm md:text-md lg:text-lg mb-4 italic mt-4 max-w-md text-center">“As we’ve come to realize, the idea that security starts and ends with the purchase of a prepackaged firewall is simply misguided.” – Art Wittmann</p>
                    <Link to='/v1/user/blog-adder'>
                        <Button type='button' name='+Add blog' />
                    </Link>
                </div>
            </div>

            <div className="container h-auto mx-auto p-8 bg-gray-200">
                <h2 className="text-4xl font-bold mb-4">Recent Blogs</h2>
                {!isFetchedRecent && status.isLoading && <LoadingPage />}
                {status.isError && <div className='text-red-500'>Error while loading recent blogs</div>}
                {recentBlogs?.map((card, index) => (
                    <HorizontalCard key={index} card={card} />
                ))}
            </div>

        </div>
    );
}

export default HomePage;
