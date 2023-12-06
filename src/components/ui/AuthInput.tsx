import { UInputProps } from '../../types/util.types';

const AuthInput=(props:UInputProps)=>{
  return  <input
  className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
  type={props.type}
  placeholder={props.placeholder}
/>
}

export default AuthInput;