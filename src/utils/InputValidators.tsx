export const validateEmailInput=(email:string)=>{

    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    
    return regex.test(email);
}
export const validateNameInput=(name:string)=>{

    const regex = new RegExp('[A-Za-z]+');

    return regex.test(name);
}
export const validateMobileInput=(mobile:string)=>{

    const regex = new RegExp('[5-9]{1}[0-9]{9}');

    return regex.test(mobile);
}