import { UTextProps } from '../../types/props.types';

const Code = (props:UTextProps) => {
  return  <p className="mb-6 p-4 rounded text-white border-l-4 border-neutral-800 bg-black p-2 dark:border-neutral-200 dark:bg-neutral-700 font-mono">
  <strong className="text-blue-500">Code: </strong>
  <p>{props.content}</p>
</p>

}

export default Code;