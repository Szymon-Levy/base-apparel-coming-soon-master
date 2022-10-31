const EmailForm = document.getElementById("Email-form");

EmailForm.addEventListener("submit", () =>{
    let input = EmailForm.querySelector("input");
    if (input.value == false){
        EmailForm.classList.add("invalid");

    }
    else{
        EmailForm.classList.remove("invalid");
    }
})