import { IActivity } from "./states.types"

export interface IAuthenticationResponse {
     message: string,
     token: string | undefined
}
export interface IAddBlogServiceResponse {
     message: string,
}
export interface IUploadImgBlogServiceResponse {
     imageUrl: string,
}
export interface IBlogCard {
     name: string,
     para: string,
     img: string,
     blogId: string,
     author?: string,
     createdOn?: string
}
export interface IBlogCardResponse {
     blogs: IBlogCard[],
     message: string
}

interface UserProfile {
     name: string | undefined,
     email: string | undefined,
     country?: string,
     upvotes: number,
     imgUrl: string,
     totalblogs: number,
     activity: IActivity[],
     months: number,
     city?: string,
     college?: string,
     position?: string,
}
export interface IGetUserProfileResponse {
     message: string,
     userProfile: UserProfile
}
export interface ISendOtpResponse {
     message: string,
     error?:any,
     data?:any
}
export interface IVerifyOtpOtpResponse {
     message: string,
}

export interface IGetBlog {
     name: string,
     author: string,
     upvotes: number,
     createdOn: string,
     createdBy: string,
     index: number[],
     linkedIn: string,
     content: string[],
}
export interface IGetBlogResponse {
     message: string,
     blog: IGetBlog
}

export interface IErrorResponse {
     statusCode: number,
     errMessage: string,
     message?:string
}