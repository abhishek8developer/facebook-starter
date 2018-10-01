export function validatePostJobForm(Field,value){
    if(Field === 'email'){
        return validateEmail(value);
    }else if(Field === 'password'){
        return validatePassword(value)
    }else if(Field === 'phoneNumber'){
        return validatePhoneNo(value)
    }else if(Field === 'budget'){
        return validateBuget(value)
    }else if(Field === 'selectedServices'){
        return validateServices(value)
    }else{
        return validateTextInput(value)
    }
}

function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField) == false) {
        return 'Please enter a valid email address';
    }
    return true;
}

function validateTextInput(fieldValue){
    var checkValue = fieldValue.length <= 0
    if(checkValue){
        return 'Required field cannot be left blank';
    }
    return true;
}

function validatePassword(fieldValue){
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/;
    if(re.test(fieldValue)==false){
        return 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
    }
    return true;
}

function validatePhoneNo(fieldValue){
    if (/^\d{10}$/.test(fieldValue)) {
        return true
    } else {
        return "Invalid number must be ten digits"
    }
}

function validateBuget(fieldValue){
    if (/^\d{5}$/.test(fieldValue)) {
        return true
    } else {
        return "Invalid number, please fill required one"
    }
}

function validateServices(fieldValue){
    if (fieldValue.length > 0) {
        return true
    } else {
        return "Please select at-least one services"
    }
}