/*this function gets the task from input*/
function get_todos() {
    /*creating an array of tasks that are inputed*/
    var todos= new Array;
    /*pulling tasks that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*if input is not null, then JSON.parse will communicate with the web browser to make the task a JS object*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*this function adds the inputed task to the get_todos function array*/
function add() {
    /*this takes the inputed task and creates variable of it*/
    var task = document.getElementById('task').value;
    var todos = get_todos();
    /*adding new task to end of array*/
    todos.push(task);
    /*converting task input to JSON string*/
    localStorage.setItem('todo',JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    
    return false;
}

/*the function keeps the tasks permanetly displayed on the screen*/
function show() {
    /*this sets the task that was retrieved as a variable*/
    var todos = get_todos();
    /*this sets up each task as an unordered list*/
    var html = '<ul>';
    /*this displays a task to the list in the order that its inputed*/
    for (var i=0; i<todos.length; i++) {
        /*this also displays the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class = "del" id="'+ i + '">x</button><li>';
    };
    html += '<ul>';
    /*displaying tasks as list*/
    document.getElementById('todos').innerHTML=html;
    var buttons=document.getElementsByClassName('del');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', del);
    };
}
/*displays the inputed task when the 'add item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*keeping inputs displayed permanently on screen*/
show();


/*creating function to remove an item from the todo array*/
function del() {
    var id = this.getAttribute('id');
    var todos=get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    
    return false;
}
