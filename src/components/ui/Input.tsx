import { MdDelete } from 'react-icons/md';
import { UInputProps } from '../../types/props.types';

const Input=(props: UInputProps) => {
  return <div className="sm:col-span-4">
    <label htmlFor={props.id} className="block text-sm font-medium leading-6 text-gray-900">
      {props.label}
    {props.label!=='Title' && props.id!=='linkedIn' && <MdDelete size='1rem' onClick={props.onDelete} className='inline ml-12 cursor-pointer' />}  
      </label>
    <div className="mt-2">
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  </div>
}

export default Input;