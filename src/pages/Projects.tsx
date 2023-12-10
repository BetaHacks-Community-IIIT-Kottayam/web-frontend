import React, { useState } from 'react';
import HorizontalCard from '../components/ui/HorizontalCard';
import { BHorizontalCard } from '../types/props.types';


const ProjectList = () => {
    const projects:BHorizontalCard[] = [
        {
          img: 'https://cdn.ttgtmedia.com/rms/onlineimages/what_is_a_blog_used_for-f_mobile.png',
          title: 'Article 1',
          excerpt: 'In TypeScript, if you have an object with certain properties (props) and you want to create a new object that contains only a subset of those properties, you can achieve this using the Pick utility type. The Pick utility type allows you to select specific properties from an existing type.',
          projectHead: 'Aditya',
          ongoing:true,
          date: '2023-12-04',
          forwardButton:'View More'
        },
        {
          img: 'https://cdn.ttgtmedia.com/rms/onlineimages/what_is_a_blog_used_for-f_mobile.png',
          title: 'Article 1',
          excerpt: 'In TypeScript, if you have an object with certain properties (props) and you want to create a new object that contains only a subset of those properties, you can achieve this using the Pick utility type. The Pick utility type allows you to select specific properties from an existing type.',
          projectHead: 'Aditya Shinde',
          ongoing:false,
          date: '2023-12-04',
          forwardButton:'View More'
        },
        {
          img: 'https://cdn.ttgtmedia.com/rms/onlineimages/what_is_a_blog_used_for-f_mobile.png',
          title: 'Article 1',
          excerpt: 'In TypeScript, if you have an object with certain properties (props) and you want to create a new object that contains only a subset of those properties, you can achieve this using the Pick utility type. The Pick utility type allows you to select specific properties from an existing type.',
          projectHead: 'Author 1',
          ongoing:true,
          date: '2023-12-04',
          forwardButton:'View More'
        },
        {
          img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
          title: 'Article 2',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          projectHead: 'Author 2',
          date: '2023-12-05',
          ongoing:false,
          forwardButton:'View More'
        },
        {
          img: 'https://images.squarespace-cdn.com/content/v1/5056c03584aedaeee9199a39/1512901729473-O70PDOI581WZL3DTM58B/how-blogging-works.jpg?format=1500w',
          title: 'Article 2',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          projectHead: 'Author 2',
          ongoing:false,
          date: '2023-12-05',
          forwardButton:'View More'
        },
        // Add more card data as needed
      ];
  const [selectedCategory, setSelectedCategory] = useState('ongoing');

  const filteredProjects = projects.filter((project) =>
    selectedCategory === 'ongoing' ? project.ongoing : !project.ongoing
  );

  return (
    <div className='mt-20 mb-8 ml-20 mr-20'>
      <div className="flex space-x-4">
        <button
          className={`${
            selectedCategory === 'ongoing' ? 'bg-blue-500' : 'bg-gray-500'
          } text-white px-4 py-2 rounded`}
          onClick={() => setSelectedCategory('ongoing')}
        >
          Ongoing
        </button>
        <button
          className={`${
            selectedCategory === 'completed' ? 'bg-blue-500' : 'bg-gray-500'
          } text-white px-4 py-2 rounded`}
          onClick={() => setSelectedCategory('completed')}
        >
          Accomplished
        </button>
      </div>
      <div className="mt-4">
        {filteredProjects.map((project, index) => (
          <HorizontalCard key={index} card={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
