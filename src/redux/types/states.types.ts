export interface IAuthSliceState {
    isAuth: boolean,
    token: string | undefined,
    status:Status
    lastLocation: string
}
// IBlogSliceState index References{
//     0:Title,
//     1:Heading,
//     2:Paragraph/Excerpt,
//     3:Note,
//     4:Image,
//     5:Link,
//     6:Code
// }
export interface IBlogSliceState {
    index: number[],
    content:string[],
    status:Status,
    isAdded:boolean

}


export interface ILoginFormState {
    email: string,
    password: string
}
export interface IAddBlogState {
    index: number[],
    content: string[]
}

export interface IRegisterFormState {
    email: string,
    password: string,
    mobile: string,
    name: string,
    cnfPassword: string,
}

export interface IUserSliceState {
    userInfo: {
        name: string | undefined,
        email: string | undefined,
        blogs: string[],
        imgUrl: string,
        upvotes: number,
        city: string,
        country: string,
        college: string,
        position: string,
        totalblogs: number,
        months: number
    },
    status:Status
}
interface Status{
    isLoading: boolean,
    isError: boolean,
    errorMessage: any
}