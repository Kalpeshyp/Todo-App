// let todo = [];

// if (localStorage.getItem("todo")) {
//   todo = JSON.parse(localStorage.getItem("todo"));
//   updateDisplay();
// } else {
//   todo = [];
// }


// function getTodo(event) {
//    if (document.getElementById("todo-input").value == "") {
//      alert("Enter your todo");
//      return false;
//    }
//   todo.push(document.getElementById("todo-input"));
//   updateDisplay();
//   document.getElementById("todo-input").value = "";
//   event.preventDefault();
// }

// function removeTodo(index) {
//   todo.splice(index, 1);
//   updateDisplay();
// }

// function updateDisplay() {
//   document.getElementById("todo-container").innerHTML = "";

//   todo.map((todo, index) => {
//     const todoDiv = document.createElement("div");
//     const p = document.createElement("p");
//     p.innerText = todo;
//     const del = document.createElement("button");
//     del.innerText = "❌";
//     del.addEventListener("click", () => {
//       removeTodo(index);
//     });
//     todoDiv.appendChild(p);
//     todoDiv.appendChild(del);
//     document.getElementById("todo-container").appendChild(todoDiv);
//   });
//   localStorage.setItem("todo", JSON.stringify(todo));
// }




let todos;
if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
    updateDisplay();
} else {
    todos = [];
    console.log(todos);

}

function getTodo(event) {
    if (document.getElementById('todo-input').value == "") { alert('Enter your todo'); return false }

    todos.push(document.getElementById('todo-input').value);
    updateDisplay();

    document.getElementById('todo-input').value = "";

    event.preventDefault();



}

function removeTodo(index) {
    todos.splice(index, 1);
    updateDisplay();

}
function updateDisplay() {

    document.getElementById('todo-container').innerHTML = "";

    todos.map((todo, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todoDiv'
        const p = document.createElement('p');
        p.innerText = todo;
        const del = document.createElement('button');
        del.className = 'b1'
        del.innerText = 'Delete';
        del.addEventListener('click', () => { removeTodo(index) });
        todoDiv.appendChild(p);
        todoDiv.appendChild(del);
        document.getElementById('todo-container').appendChild(todoDiv);

    });


    localStorage.setItem('todos', JSON.stringify(todos));
}

