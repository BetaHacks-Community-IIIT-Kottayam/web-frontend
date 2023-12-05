import { UTextProps } from '../../types/util.types';

const SubHeading=(props:UTextProps)=> {
  return <p className="mb-6">
  <strong>{props.content}</strong>
</p>
}

export default SubHeading;