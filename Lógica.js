//estado da aplicação
const tarefas =  ['Estudar HTML', 'Estudar CSS', 'Estudar JS']


//alteradores do estado da aplicação
function add(){
    const input = document.querySelector ("input");
    const tarefa = input.value
    tarefas.push(tarefa);
    input.value = ""
    refresh()

}
//mostrar estado da aplicação na tela
function refresh(){
    const ul = document.querySelector("ul");
    ul.innerHTML = null

    tarefas.forEach(function (tarefa){
        const li = document.createElement("li")
        li.innerText = tarefa
        ul.appendChild(li)
    })
}

//iniciar
refresh()