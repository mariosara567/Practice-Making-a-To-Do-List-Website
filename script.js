const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addToDoItem() {
  const itemText = todoInput.value;
  newToDoItem(itemText, false);
}

function newToDoItem(itemText, completed) {
  const todoItem = document.createElement("li");
  const todoText = document.createTextNode(itemText);
  todoItem.appendChild(todoText);

  if (completed) {
    todoItem.classList.add("completed");
  }

  todoList.appendChild(todoItem);
  todoItem.addEventListener("dblclick", toogleToDoItemState);
  todoInput.value = "";
}

function toogleToDoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}

function clearCompletedToDoItems() {
  const completedItems = todoList.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}

function emptyList() {
  const todoItems = todoList.children;
  while (todoItems.length > 0) {
    todoItems.item(0).remove();
  }
}

const myArray = [];
myArray.push("sesuatu");
myArray.push("lain");
alert(myArray[0]);

const todoInfo = {
  task: "belajar JavaScript",
  completed: false,
};

function saveList() {
  const toDos = [];

  for (let i = 0; i < todoList.children.length; i++) {
    const todo = todoList.children.item(i);

    const todoInfo = {
      task: todo.innerText,
      completed: todo.classList.contains("completed"),
    };

    toDos.push(todoInfo);
  }

  localStorage.setItem("todo", JSON.stringify(toDos));
}

function loadList() {
  if (localStorage.getItem("todo") != null) {
    const toDos = JSON.parse(localStorage.getItem("todo"));

    for (let i = 0; i < toDos.length; i++) {
      const todo = toDos[i];
      newToDoItem(todo.task, todo.completed);
    }
  }
}

loadList();
