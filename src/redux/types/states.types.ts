export interface IAuthSliceState{
    isAuth:boolean,
    token:string|undefined,
    status:{
          isLoading:boolean,
          isError:boolean,
          errorMessage:string|undefined
    }
}


export interface ILoginFormState{
    email:string,
    password:string
}

export interface IRegisterFormState{
    email:string,
    password:string,
    mobile:string,
    name:string,
    cnfpassword:string,
}