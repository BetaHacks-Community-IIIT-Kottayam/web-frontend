import BlogCard from "../components/ui/BlogCard";
import { BHorizontalCard } from "../types/util.types";
const BlogList=()=> {
  const Blogs:BHorizontalCard[] = [
    {
      img: 'https://cdn.ttgtmedia.com/rms/onlineimages/what_is_a_blog_used_for-f_mobile.png',
      title: 'Article 1',
      excerpt: 'In TypeScript, if you have an object with certain properties (props) and you want to create a new object that contains only a subset of those properties, you can achieve this using the Pick utility type.',
      date: '2023-12-04',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
      title: 'Article 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-12-05',
      forwardButton:'Read More'
    },
    // Add more card data as needed
  ];
  return <div className="flex flex-wrap gap-4 mt-20 mb-4 justify-center items-center w-screen">
  {Blogs.map((card, index) => (
    <BlogCard key={index} card={card} />
  ))}
</div>;
}

export default BlogList