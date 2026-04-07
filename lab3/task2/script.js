const input = document.getElementById("todo-input");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  createTodoItem(text, false);

  input.value = "";
  input.focus();
}

function createTodoItem(text, isDone) {
  const li = document.createElement("li");
  li.className = "item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isDone;

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.type = "button";
  deleteBtn.setAttribute("aria-label", "Delete task");
  deleteBtn.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3h6l1 2h5v2H3V5h5l1-2zm1 7h2v9h-2v-9zm4 0h2v9h-2v-9zM7 10h2v9H7v-9z"/>
    </svg>
  `;

  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    const items = document.querySelectorAll(".item span");
    todoList.removeChild(li);
  });
  deleteAll
 

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  if (isDone) li.classList.add("done");

  todoList.appendChild(li);
}


createTodoItem("First item", true);
createTodoItem("Second item", false);
createTodoItem("Third item", false);
