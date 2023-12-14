
export interface IAuthenticationResponse{
     message:string,
     token:string|undefined
}
export interface IAddBlogServiceResponse{
     message:string,
}

interface UserProfile{
    name:string|undefined,
    email:string|undefined,
    blogs:string[],
    imgUrl:string,
    upvotes:number,
    city:string,
    country: string,
    college: string,
    position:string,
    totalblogs:number,
    months:number,
}
export interface IGetUserProfileResponse{
    message:string,
    userProfile:UserProfile
}

export interface IErrorResponse{
     statusCode:number,
     errMessage:string
}