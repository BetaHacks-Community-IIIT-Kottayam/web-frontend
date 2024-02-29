import CountUp from 'react-countup';
import { BCountupProps } from '../../types/props.types';
import { FaUsers } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { BiSolidUpvote } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";


const CountUpCard = (props:BCountupProps) => {
              
              let Icon= ()=>{
                if(props.title==="Active Users"){
                  return <FaUsers className='bg-blue-100 p-4 rounded-full' color='#207EB8' style={{fontSize:'4.5rem',textAlign:'center',fontWeight:'bold'}} />
                }
                else if(props.title==="Blogs Posted"){
                  return <RiArticleFill className='bg-blue-100 p-4 rounded-full' color='#207EB8' style={{fontSize:'4.5rem',textAlign:'center',fontWeight:'bold'}} />
                }
                else if(props.title==="Upvotes"){
                  return <BiSolidUpvote className='bg-blue-100 p-4 rounded-full' color='#207EB8' style={{fontSize:'4.5rem',textAlign:'center',fontWeight:'bold'}} />
                }
                else if(props.title==="LinkedIn Followers"){
                  return <BsLinkedin className='bg-blue-100 p-4 rounded-full' color='#207EB8' style={{fontSize:'4.5rem',textAlign:'center',fontWeight:'bold'}} />
                }
                else if(props.title==="Community Members"){
                  return <MdGroupAdd className='bg-blue-100 p-4 rounded-full' color='#207EB8' style={{fontSize:'4.5rem',textAlign:'center',fontWeight:'bold'}} />
                }
                else{
                  return <FaUsers className='bg-blue-100 p-4 rounded-full text-4xl text-blue-700' />
                }
              
              };
  return (
          <div style={{borderRadius:'16px'}} className="py-6 px-4 flex flex-col items-center justify-center">
              <Icon/>
              <CountUp style={{marginTop:'10px',fontSize:'2.5rem',textAlign:'center',fontWeight:'bold'}} start={0} end={props.count} duration={2} separator="," />
              <h3 className="text-lg text-center font-semibold">{props.title}</h3>
          </div>
        );
}

export default CountUpCard