import { IBlogCard } from "../redux/types/response.types"

export interface UButtonProps{
    name:string,
    type?:string,
    onClick?:any,
    bg?:string,
}
export interface UTextProps{
    content:string
}
export interface UOverlayProps{
    message:string
}
export interface UImgProps{
    url:string,
    alt:string,
    class?:string
}
export interface UHeaderProps{
    title:string,
    author:string,
    upvotes:number
}
export interface UInputProps{
    type:string,
    label?:string,
    name?:string,
    id?:string,
    rows?:number,
    cols?:number,
    bg?:string,
    placeholder:string
}
export interface BResponsePopupProps{
    type:string
    onClose?:any
    text?:any
}
export interface BHorizontalCard{
    img:string,
    title:string,
    excerpt:string,
    author?:string,
    projectHead?:string,
    ongoing?:boolean,
    date:string,
    forwardButton:string
}

export interface BProjectProps{
    key:number,
    card:BHorizontalCard
}
export interface BCardProps{
    key:number,
    blog:IBlogCard
}