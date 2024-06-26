const forms = document.querySelectorAll(".forms");
    pwShowHide = document.querySelectorAll(".eye-icon");
    links = document.querySelectorAll(".link");

pwSowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password =>{
            if(pwField.type === "password"){
                pwField.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        });
    });
})

links.forEach(link =>{
    link.addEventListener("click", e =>{
        e.preventDefault();

        forms.forEach(form =>{
            form.classList.remove("show");
        });

        link.parentElement.classList.add("show");
    });
})