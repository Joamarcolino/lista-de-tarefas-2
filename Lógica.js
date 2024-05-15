const tarefas = ['Estudar HTML','Estudar CSS',' Estudar JV']

function add() {
const input = document.querySelector("input")
const tarefa = input.value 
tarefas.push(tarefa)
input.value = ""
refresh()


}
function refresh(){
const ul = document.querySelector("ul")
ul.innerHTML = null

tarefas.forEach(function(tarefa) {
    const li = document.createElement("li")
    li.innerText = tarefa
    ul.appendChild(li)
})


input.value = ""

console.log

}