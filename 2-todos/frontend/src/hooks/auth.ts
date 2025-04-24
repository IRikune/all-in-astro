const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegex=/^[A-Za-z\s'-]{2,}$/;
const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export function checkValidEmail(data:string){
    if(!emailRegex.test(data)){
       return false
    }
    return true
}

export function checkValidName(data:string){
    if(!nameRegex.test(data)){
        return false
    }
    return true
}

export function checkValidPassword(data:string){
    if(!passwordRegex.test(data)){
        return false
    }
    return true
}
