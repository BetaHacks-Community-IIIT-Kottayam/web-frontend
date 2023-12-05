import { UTextProps } from '../../types/util.types';

const Paragraph=(props:UTextProps)=> {
  return <p className="mb-6">
  {props.content}
</p>
}

export default Paragraph;