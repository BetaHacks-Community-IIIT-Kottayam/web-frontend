export interface UButtonProps{
    name:string,
    type:string,
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
    placeholder:string
}