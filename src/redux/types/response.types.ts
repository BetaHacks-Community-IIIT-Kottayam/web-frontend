export interface BHorizontalCard{
    img:string,
    title:string,
    excerpt:string,
    author:string|any,
    date:string|any,
    forwardButton:string
}

export interface BCardProps{
    key:number,
    card:BHorizontalCard
}