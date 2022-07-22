function showPassword(){
    const eye = document.getElementById("eye")
    const eyeSlash = document.getElementById("eye-slash")
    const fieldPassword = document.getElementById("field-password")
    //document.getElementById serve para capturar um id do html e usar no javascript
 
    if(eye.style.display == 'none'){
        eye.style.display = 'block'
        eyeSlash.style.display = 'none'
        fieldPassword.type = 'text'
    }else{
        eye.style.display = 'none'
        eyeSlash.style.display = 'block'
        fieldPassword.type = 'password'
    }
}