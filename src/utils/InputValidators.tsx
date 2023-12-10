
export const validateEmailInput=(email:string)=>{

    const regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}
export const validateNameInput=(name:string)=>{
    if(name.length<3) return false;

    const regex=/^[a-zA-Z-' ]+$/;

    return regex.test(name);
}
export const validateMobileInput=(mobile:string)=>{

    const regex = /^[5-9]\d{9}$/;

    return regex.test(mobile);
}