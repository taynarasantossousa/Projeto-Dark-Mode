var titulo = document.getElementById("titulo")
var btn = document.querySelector("#btn")
/* titulo.innerText = "Tay" serve para alterar o conteudo */

function disparaAlerta(){
   var body = document.querySelector("body")
body.classList.add("dark-mode")

if(btn.innerText == "Ativar"){  
   btn.innerText = "Desativar"
}else {
   btn.innerText = "Ativar"

}
}

btn.addEventListener("click", disparaAlerta)