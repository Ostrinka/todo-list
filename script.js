const button = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todo-list-item";
  li.textContent = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  })
})