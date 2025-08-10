const tarefas = [
    { text: 'Task 1', completed: false },
    { text: 'Task 2', completed: false },
    { text: 'Task 3', completed: false }
];
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const container = document.querySelector("#diveinput");

// Add task
function add() {
    const tarefa = input.value;
    if (tarefa) {
        tarefas.push({
            text: tarefa,
            completed: false  // Default to not completed
        });
        input.value = "";
        mostrarnatela();
    }
}
// Render list with delete buttons
function mostrarnatela() {
    ul.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.checked = tarefa.completed;

        // Task text
        const tarefaSpan = document.createElement("span");
        tarefaSpan.textContent = tarefa.text;
        tarefaSpan.className = "task-text";

        // Button container
        const btnContainer = document.createElement("div");
        btnContainer.className = "btn-container";

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editTask(index, tarefaSpan);

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => {
            tarefas.splice(index, 1);
            mostrarnatela();
        };

        // Append buttons to container
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);

        // Set initial button visibility
        btnContainer.style.display = tarefa.completed ? "none" : "flex";

        // Checkbox change handler
        checkbox.addEventListener("change", function () {
            tarefa.completed = this.checked;
            li.classList.toggle("completed", this.checked);
            btnContainer.style.display = this.checked ? "none" : "flex";
            
        });

        // Build list item
        li.appendChild(checkbox);
        li.appendChild(tarefaSpan);
        li.appendChild(btnContainer);
        ul.appendChild(li);

        // Add completed class if needed
        if (tarefa.completed) {
            li.classList.add("completed");
        }
    });

    checkScrollbar();
}

//Função e lógica do botão de edição
function editTask(index, tarefaSpan) {
    const currentText = tarefas[index];
    tarefaSpan.innerHTML = `
    <div class="edit-container">
      <input type="text" class="edit-input" value="${currentText}">
      <button class="save-btn">✓</button>
    </div>
  `;

    const editInput = tarefaSpan.querySelector(".edit-input");
    const saveBtn = tarefaSpan.querySelector(".save-btn");

    editInput.focus();

    saveBtn.onclick = () => saveTask(index, editInput);

    editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") saveTask(index, editInput);
    });
}

// Salva as tarefas e funções
function saveTask(index, editInput) {
    const newText = editInput.value.trim();
    if (newText) {
        tarefas[index].text = newText; // Update text but keep completion status
        mostrarnatela();
    }
}
// Sombra caso o texto do Ul transborde para baixo
//Some quando o ul volta a não estar transbordado.
function checkScrollbar() {
    const hasScrollbar = ul.scrollHeight > ul.clientHeight;
    container.classList.toggle("divShadow", hasScrollbar);
}

// Ao clicar a tecla "ENTER" voce consegue botar a tarefa
// Não precisa do botão com isso no código.
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") add();
});

// Initial render
mostrarnatela();