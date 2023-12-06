import { UImgProps } from '../../types/util.types';

const AuthImage = (props:UImgProps) => {
    return (
        <img src={props.url}
        className={props.class} alt={props.alt} />
    )
}

export default AuthImage;