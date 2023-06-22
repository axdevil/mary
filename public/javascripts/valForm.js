const form = document.querySelector('form')
const errors = document.querySelector('#errors')

form.addEventListener('submit', (event) => {
    errors.innerHTML = ""
    //TEXTOS
    form.querySelectorAll('input[type="text"]').forEach(text => {
        if(text.value.length < 3){
            replaceClass(text.parentElement,true)
            addError(text.labels[0].textContent + " debe contener minimo tres caracteres",event)
        }else{
            replaceClass(text.parentElement,false)
        }
    })
    //CORREO
    const email = form.querySelector('#email')
    if(!email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        replaceClass(email.parentElement,true)
        addError("El correo es invalido",event)
    }else{
        replaceClass(email.parentElement,false)
    }
    //CONTRASEÑAS
    const pass = form.querySelector('#password')
    const confirmPass = form.querySelector('#confirmPassword')
    if(pass.value.length < 6){
        replaceClass(pass.parentElement,true)
        addError(pass.labels[0].textContent + " debe contener minimo seis caracteres",event)
    }else{
        replaceClass(pass.parentElement,false)
    }
    if(confirmPass.value != pass.value){
        replaceClass(confirmPass.parentElement,true)
        addError("La contraseña no coincide",event)
    }else{
        replaceClass(confirmPass.parentElement,false)
    }

})

function replaceClass(tag,error){
    if(error){
        tag.classList.replace("textBlack","textAlert")
    }else{
        tag.classList.replace("textAlert","textBlack")
    }
    return
}

function addError(msg,event){
    errors.innerHTML += '<span class="notError">' + msg + '</span>'
    event.preventDefault()
}