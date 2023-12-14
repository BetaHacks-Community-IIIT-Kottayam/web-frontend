import { UButtonProps } from '../../types/props.types';

const Button=(props:UButtonProps)=>{
  return (
    <button onClick={props.onClick} className={`bg-${props.bg ? props.bg:'yellow-400'} text-gray-800 py-2 px-4 rounded-full text-sm  hover:bg-${props.bg ? props.bg:'yellow-500'} focus:outline-none focus:ring focus:border-blue-300`}>
            {props.name}
          </button>
  )
}

export default Button;