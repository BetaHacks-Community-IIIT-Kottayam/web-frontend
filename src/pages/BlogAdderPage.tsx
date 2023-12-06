import React from 'react';
import Note from '../components/ui/Note';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import Image from '../components/ui/Image';
const BlogAdder = () => {
  return (
    <form className="mx-auto max-w-2xl mt-24 mb-10">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <Note content=' Your blog will be displayed in the sequence of tags selected in the form below.' />
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <Input type='text' id='title' placeholder='Blog Title' name='title' label='Title' />
            <Textarea type='text'
              placeholder='Enter paragraph content here'
              label='Excerpt'
              rows={8}
              id='para'
              name='para'
            />
            <Image />
          </div>
          <div className="flex items-center justify-center gap-6 text-blue-700 p-4">
              <p className='block text-sm font-medium leading-6 text-gray-900'>Click to add:</p>
              <span className='text-blue-500 hover:text-blue-700 cursor-pointer'>Heading</span>
              <span className='text-blue-500 hover:text-blue-700 cursor-pointer'>Paragraph</span>
              <span className='text-blue-500 hover:text-blue-700 cursor-pointer'>Note</span>
              <span className='text-blue-500 hover:text-blue-700 cursor-pointer'>Image</span>
              <span className='text-blue-500 hover:text-blue-700 cursor-pointer'>Link</span>
              <span className='text-blue-500 hover:text-blue-700 cursor-pointer'>Code</span>
            </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6 w-full">
          <Button name='Cancel' type='button' bg='transparent' />
          <Button name='Submit' type='submit' />
        </div>
      </div>
    </form>
  );
};

export default BlogAdder;
