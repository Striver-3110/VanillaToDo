document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("add-todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

//   let todos = [
//     {
//       title: "lets do it",
//       completed: false,
//       index:0
//     },
//   ];

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

    const buttons = document.createElement("div")

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () =>deleteTodo(todoItem));

    const editButton = document.createElement("button");
    editButton.addEventListener("click", ()=>editTodo(todoItem, description))
    editButton.innerText = "Edit";


    const completeButton = document.createElement("button");
    completeButton.addEventListener("click", ()=>completeTodo(description));
    completeButton.innerText = "Complete";

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