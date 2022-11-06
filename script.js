const emailForm = document.getElementById("Email-form");
const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;


emailForm.addEventListener("submit", () =>{
    let input = emailForm.querySelector("input");
    if (!emailRegEx.test(input.value)){
        emailForm.classList.add("invalid");
    }
    else{
        emailForm.classList.remove("invalid");
    }
})