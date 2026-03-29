// all elements

const name = document.querySelector("#username");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");

//show error
const showError = (inp,message)=>{
    const parent = inp.parentElement;
    parent.classList = "form-control error";
    const small = parent.querySelector("small")
    const success = parent.querySelectorAll("i")[0];
    const error = parent.querySelectorAll("i")[1];
    small.innerText = message;
    error.style.visibility = 'visible';
    success.style.visibility = 'hidden';
}
//show success
const showSuccess = (inp,message)=>{
    const parent = inp.parentElement;
    parent.classList = "form-control success";
    const small = parent.querySelector("small")
    const success = parent.querySelectorAll("i")[0];
    const error = parent.querySelectorAll("i")[1];
    small.innerText = message;
    error.style.visibility = 'hidden';
    success.style.visibility = 'visible';
}

// check empty inputs
const checkEmpty = (inputs)=>{
    inputs.forEach((input)=>{
        if(input.value === ''){
            showError(input,"this field is required")
        }else{
            showSuccess(input,"this field matches")
        }
    })
}

// checkemail
const checkEmail= (input)=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(input.value)){
        showSuccess(input,"email macthes")
    }
    else {
        showError(input,"email is invalid")
    }
}

// checkpassword length
const checkPass = (input,min,max) => {
    if(input.value.length < min){ 
        showError(input,"pass must contain at least "+ min+" charachters")
    }
    else if(input.value.length > max){
        showError(input,"can not be more than "+max+" charachters")
    }
    else {
        showSuccess(input,"password macthes")
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    checkEmpty([name,email,pass,confirmPass]);
    checkEmail(email);
    checkPass(pass,6,20);
    let par = document.querySelector("#par")
    par.innerHTML = "submitted success"
})