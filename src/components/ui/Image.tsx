import React, { useEffect } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { MdDelete } from 'react-icons/md';
import { UInputImgProps } from '../../types/props.types';
import { useAppDispatch, useBlog } from '../../hooks/hooks';
import { uploadImgBlogService } from '../../redux/features/blog/blogService';


const Image = (props:UInputImgProps) => {
  const dispatch=useAppDispatch();
  const {images}=useBlog();
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [isUploaded, setIsUploaded] = React.useState<Boolean>(false);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file as any);
  };
  const uploadHandler=(event:any)=>{
    event.preventDefault();
    if(!selectedFile){
      return;
    }
    // Create FormData object
    const formData = new FormData();
    formData.append('file', selectedFile as any);
    //create a random string for file name
    const fileName=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    formData.append('fileName', fileName);

    dispatch(uploadImgBlogService({formData}));
    setIsUploaded(true);
  }

  

  return   <div className="col-span-full">
  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
    Image
    <MdDelete size='1rem' onClick={props.onDelete} className='inline ml-12 cursor-pointer' />
  </label>
  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
    <div className="text-center">
      <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
      {!isUploaded && <div>
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
        >
          <span>Select a file</span>
          <input id="file-upload" onChange={handleFileChange} name="file-upload" type="file" className="sr-only" />
        </label>
        <p className="pl-1">or drag and drop</p>
      </div>
      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p></div>}
      <p>{selectedFile && selectedFile.name}</p>
   {isUploaded ? <button disabled className='text-green-500 mt-4 bg-white px-4 py-2 rounded-md text-sm text-center font-semibold'>Uploaded</button>
   :<button onClick={uploadHandler} className="ml-6 mt-4 bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">Upload</button>
}
    </div>
  </div>
</div>
}

export default Image;