const tarefas = ['Estudar JS','Estudar CSS','Estudar HTML']

//bota a tarefa na tela e depois tira todos os valores do input.
function add(){
    const input = document.querySelector("input")
    const tarefa = input.value
    tarefas.push(tarefa)

    input.value = ""
    mostranatela()
}
//mostra os valores atuais e tarefas atuais na tela após o clique do botão
function mostranatela(){
    const ul = document.querySelector("ul")
    ul.innerHTML = null

    tarefas.forEach(function(tarefa){
        const li = document.createElement("li")
        li.innerText = tarefa
        ul.appendChild(li)
        
    })
}
//pega o evento "Enter" e bota algo na lista ao seu clique sem precisar do button.
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        add();
    }
});

mostranatela()