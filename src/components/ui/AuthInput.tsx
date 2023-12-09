import { UInputProps } from '../../types/util.types';

const AuthInput=(props:UInputProps)=>{
  return  <input
  className={`w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-${props.bg===`0`?`gray-200`:props.bg}placeholder-gray-600 text-sm focus:outline-none focus:border-${props.bg===`0`?`gray-400`:props.bg} focus:bg-white`}
  type={props.type}
  placeholder={props.placeholder}
  autoComplete='on'
/>
}

export default AuthInput;