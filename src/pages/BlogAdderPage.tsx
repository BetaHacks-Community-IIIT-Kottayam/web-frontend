import Note from '../components/ui/Note';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import { MdDelete } from "react-icons/md";
import Button from '../components/ui/Button';
import Image from '../components/ui/Image';
import { useAppDispatch, useBlog } from '../hooks/hooks';
import { addContent, addIndex, editContent, flushBlog, removeElement, retrySubmit } from '../redux/features/blog/blogSlice';
import { addNewBlogService } from '../redux/features/blog/blogService';
import Overlay from '../components/ui/Overlay';
import ResponsePopup from '../components/ui/ResponsePopup';
import { useEffect, useState } from 'react';
const BlogAdder = () => {
  const { index, content,images, status,isAdded } = useBlog();
  const dispatch = useAppDispatch();
  const [errors,setErrors]=useState([false]);
  const changeHandler = (event: any, i: any) => {
    dispatch(editContent({
      i,
      value: event.target.value
    }));
  }
  const AddHeading = () => {
    dispatch(addContent(''));
    dispatch(addIndex(1));
  }
  const AddParagraph = () => {
    dispatch(addContent(''));
    dispatch(addIndex(2));
  }
  const AddNote = () => {
    dispatch(addContent(''));
    dispatch(addIndex(3));
  }
  const AddImage = () => {
    dispatch(addContent(''));
    dispatch(addIndex(4));
  }
  const AddLink = () => {
    dispatch(addContent(''));
    dispatch(addIndex(5));
  }
  const AddCode = () => {
    dispatch(addContent(''));
    dispatch(addIndex(6));
  }
  const retrySubmitHandler=()=>{
    dispatch(retrySubmit());
  }
  const removeElementHandler = (i: number) => {
    dispatch(removeElement(i));
  }
  const submitBlogHandler = (event:any) => {
    event.preventDefault();
    let j=0;
    const finalContent=content.map(data=>data);
    for(let i=0;i<index.length;i++){
      if(index[i]===4){
        console.log(images[j]);
        finalContent[i]=images[j];
        j++;
      }
    }
    console.log(finalContent);
    const arr=finalContent.map(data=>(data===''));
    let isInputEmpty=false;
    for(const i of arr){
      if(i){
        isInputEmpty=true;
        break;
      }
    }
    if(isInputEmpty){
      setErrors(arr);
      return;
    }
    const blog = {
      index,
      content:finalContent
    }
    dispatch(addNewBlogService(blog));
  }
  const resetHandler=(event:any)=>{
    event.preventDefault();
    dispatch(flushBlog());
  }
  useEffect(() => {
    setTimeout(() => {
      if(isAdded){
         dispatch(flushBlog());
      }
    }, 2000);
  }, [isAdded,status.isError])
  
  return (
    <form className="mx-auto max-w-[100%] mt-24 min-h-screen mb-10">
      {status.isLoading && <Overlay message='Processing request, please wait......' />}
      {isAdded && <ResponsePopup type='success' />}
      {status.isError && <ResponsePopup type='error' text={status.errorMessage} onClose={retrySubmitHandler} />}
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <Note content=' Your blog will be displayed in the sequence of tags selected in the form below.' />
          {index.map((i, index) => (
            <div onChange={(e) => { changeHandler(e, index) }} className="mt-10 grid grid-cols-1 gap-x-6 ">
              {i === 0 && <Input onDelete={()=>{removeElementHandler(index)}} type='text' id='title' placeholder='Blog Title' name='title' label='Title' />}
              {i === 1 && <Input onDelete={()=>{removeElementHandler(index)}} type='text' id='heading' placeholder='Enter new heading' name='heading' label='Heading' />}
              {i === 2 && <Textarea onDelete={()=>{removeElementHandler(index)}} type='text'
                placeholder='Enter paragraph content here'
                label='Excerpt'
                rows={8}
                id='para'
                name='para'
              />}
              {i === 3 && <Input onDelete={()=>{removeElementHandler(index)}} type='text' id='note' placeholder='Enter note' name='note' label='Note' />}
              {i === 4 && <Image onDelete={()=>{removeElementHandler(index)}} />}
              {i === 5 && <Input onDelete={()=>{removeElementHandler(index)}} type='text' id='link' placeholder='Enter new link' name='link' label='Link' />}
              {i === 6 && <Textarea onDelete={()=>{removeElementHandler(index)}} type='text'
                placeholder='Enter code here'
                label='Code'
                rows={8}
                id='code'
                name='code'
              />}
              {errors[index] && <p className="block text-red-500 text-xs mt-1">*This field is required.</p>}
            </div>
          ))}
          <div className="flex items-center mt-8 justify-center gap-6 text-blue-700 p-4">
            <p className='block text-sm font-medium leading-6 text-gray-900'>Click to add:</p>
            <span onClick={AddHeading} className='text-blue-500 hover:text-blue-700 cursor-pointer'>Heading</span>
            <span onClick={AddParagraph} className='text-blue-500 hover:text-blue-700 cursor-pointer'>Paragraph</span>
            <span onClick={AddNote} className='text-blue-500 hover:text-blue-700 cursor-pointer'>Note</span>
            <span onClick={AddImage} className='text-blue-500 hover:text-blue-700 cursor-pointer'>Image</span>
            <span onClick={AddLink} className='text-blue-500 hover:text-blue-700 cursor-pointer'>Link</span>
            <span onClick={AddCode} className='text-blue-500 hover:text-blue-700 cursor-pointer'>Code</span>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6 w-full">
          <Button name='Reset' type='reset' bg='gray' onClick={resetHandler} />
          <Button name='Submit' onClick={submitBlogHandler} />
        </div>
      </div>
    </form>
  );
};

export default BlogAdder;
