document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("add-todo-form");
    const todoInput = document.getElementById("todo-input");

    
    form.addEventListener("submit",function(){
        const inputValue = todoInput.value.trim();

        if(inputValue === "")return;

        addTodo(inputValue);
    })

    function addTodo(inputValue){
        const todoContainer = document.getElementById("todo-list");

        todoContainer.innerHTML = "";
        const ul = document.createElement("ul");
        const li = document.createElement("li");

        const todoDescription = document.createElement("span");

        todoDescription.innerText = inputValue;

        const todoButtons = document.createElement("span");
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        const completeButton = document.createElement("button");
        completeButton.innerText = "Complete";

        todoButtons.append(deleteButton,editButton,completeButton)

        li.append(todoDescription,todoButtons);

        ul.appendChild(li);

    }
})