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

export interface BCardProps{
    key:number,
    card:BHorizontalCard
}