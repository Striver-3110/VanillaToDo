document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("add-todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");


  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputValue = todoInput.value.trim();

    console.log(inputValue);
    if (inputValue === "") return;
    addTodo(inputValue);
    todoInput.value = ""
  });

  function addTodo(inputValue) {    

    const todoItem = document.createElement("li");

    todoItem.className = "item";

    const description = document.createElement("span");
    description.textContent = inputValue;
    description.classList.add("item-desc");

    const buttons = document.createElement("div")
    buttons.classList.add("buttons");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("btn-delete");
    deleteButton.classList.add("btn");
    deleteButton.addEventListener("click", () =>deleteTodo(todoItem));

    const editButton = document.createElement("button");
    editButton.addEventListener("click", ()=>editTodo(todoItem, description))
    editButton.innerText = "Edit";
    editButton.classList.add("btn-edit");
    editButton.classList.add("btn");


    const completeButton = document.createElement("button");
    completeButton.addEventListener("click", ()=>completeTodo(description));
    completeButton.innerText = "Complete";
    completeButton.classList.add("btn-complete");
    completeButton.classList.add("btn");

    buttons.append(deleteButton,editButton,completeButton);
    todoItem.append(description,buttons);

    todoList.append(todoItem);

    
  }

  function deleteTodo(todoItem){
    todoList.removeChild(todoItem);
  }
  function editTodo(todoItem, description){
    const editedValue = prompt("enter new description", description.value).trim();
    if(editedValue !== null){
        description.textContent = editedValue;
    }else{
        alert("Please enter some value!")
    }
  }
  function completeTodo(todoText){
    todoText.classList.add("completed");
  }
});