export interface IAuthenticationResponse{
     message:string,
     token:string|undefined
}

export interface IErrorResponse{
     statusCode:number,
     errMessage:string
}