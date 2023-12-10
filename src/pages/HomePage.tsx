import backgroundImage from '../images/homeBack.jpg';
import HorizontalCard from '../components/ui/HorizontalCard';
import { BHorizontalCard } from '../types/props.types';

function HomePage() {
    const RecentBlogs:BHorizontalCard[] = [
        {
          img: 'https://cdn.ttgtmedia.com/rms/onlineimages/what_is_a_blog_used_for-f_mobile.png',
          title: 'Article 1',
          excerpt: 'In TypeScript, if you have an object with certain properties (props) and you want to create a new object that contains only a subset of those properties, you can achieve this using the Pick utility type. The Pick utility type allows you to select specific properties from an existing type.',
          author: 'Author 1',
          date: '2023-12-04',
          forwardButton:'Read More'
        },
        {
          img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
          title: 'Article 2',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'Author 2',
          date: '2023-12-05',
          forwardButton:'Read More'
        },
        {
          img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
          title: 'Article 2',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'Author 2',
          date: '2023-12-05',
          forwardButton:'Read More'
        },
        // Add more card data as needed
      ];
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
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen' style={containerStyle}>
            <div className='flex flex-col items-center justify-center w-full h-screen' style={backgroundImgStyle}>
                <h1 className="text-5xl font-bold text-white">BetaHacks Cyber Community</h1>
                <p className="text-lg italic mt-4 max-w-md text-center text-white">“As we’ve come to realize, the idea that security starts and ends with the purchase of a prepackaged firewall is simply misguided.” – Art Wittmann</p>
            </div>
        
            <div className="container mx-auto p-8 bg-gray-200">
                <h2 className="text-4xl font-bold mb-4">Recent Blogs</h2>
                {RecentBlogs.map((card,index)=>(
                    <HorizontalCard key={index} card={card}/>
                ))}
            </div>
            
        </div>
    );
}

export default HomePage;
