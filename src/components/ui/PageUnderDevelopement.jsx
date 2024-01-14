import React from 'react';
import thinkingAvatar from '../../images/avatar-thinking-6-svgrepo-com.svg';
import studyTable from '../../images/study-student-svgrepo-com.svg';

const PageUnderDevelopement = ({type}) => {
    const imgToShow = (type === 'study' ? studyTable : thinkingAvatar);
  return (
    <div className='flex justify-center flex-col text-center h-[85vh]'>
        <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
      <img src={imgToShow} className="rounded-full h-28 w-28" alt="Thinking Avatar" />
    </div>
      <p className='mt-8 w-1/2 mx-auto'>{type==='study'?"We're diligently working on enhancing your study experience. Exciting study materials are on the way! Stay tuned for updates.":"We are working on bringing you an awesome content. Please check back later!"}</p>

    </div>
  );
}

export default PageUnderDevelopement;
