var todoList = {
  todos: [],
  displayTodos: function(){
    if ( this.todos.length === 0 ) console.log("Your todos list is empty");
    else {
      console.log("My Todos:");
      this.todos.forEach(function(todo){
        var completed = todo.completed ? "(✔)" : "( )";
        console.log(completed + " " + todo.todoText);
      });
    }
  },
  addToDo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeToDo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function(position){
    var allComplete = this.todos.every(function(todo){
      return todo.completed;
    });
    this.todos.forEach(function(todo){
      todo.completed = allComplete ? false : true;
    });
    view.displayTodos();
  },
  deleteToDo: function(position){
    this.todos.splice(position, 1);
    view.displayTodos();
  }
};

var todosDisplay = document.getElementById("todos");
var displayToggleButton = document.getElementById("toggle");

displayToggleButton.addEventListener('click', function(){
  todoList.toggleAll();
});

var add = document.getElementById("add");
add.addEventListener('click', function(){
  var addTodo = document.getElementById("addtodo");
  todoList.addToDo(addTodo.value);
  addTodo.value = "";
  view.displayTodos();
});



var view = {
  displayTodos: function(){
    var list = document.querySelector('ul');
    list.innerHTML = "";
    todoList.todos.forEach(function(todo, i){
      var newtodo = document.createElement('li');
      var completed = todo.completed ? "(✔)" : "( )";
      newtodo.id = i;
      newtodo.textContent = completed + " " + todo.todoText;
      newtodo.appendChild(this.createDelete());
      list.appendChild(newtodo);
    }, this);
  },
  createDelete: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "x";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function(){
    var list = document.querySelector('ul');
    list.addEventListener('click', function(e){
        var clicked = e.target;
        if ( clicked.className === "deleteButton") {
          todoList.deleteToDo(+clicked.parentNode.id);
        }
      });
  }
};

view.setUpEventListeners();

