import { UButtonProps } from '../../types/util.types';

function LargeButton(props:UButtonProps) {
  return <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
  <span className="ml-3">{props.name}</span>
</button>
}

export default LargeButton;