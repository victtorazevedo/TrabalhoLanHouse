const usuarios = [
    {
        login: 'enzo',
        pass: '123'
    },
    {
        login: 'jairo',
        pass: '123'
    },
    {
        login: 'victor',
        pass: '123'
    },
    {
        login: 'ryan',
        pass: '123'
    },
    
]


let botao = document.getElementById('botao')
botao.addEventListener('click',function logar(){

    let pegaUsuario = document.getElementById('login').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }
    }
    if(validaLogin == true){
        alert('ok')
        location.href ="catalogo.html"
    }
    else{
        alert('error')
    }

    } )