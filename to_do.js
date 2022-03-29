let listofTasks = [];

//Add to list function

function addTask(){
    let newTask = document.getElementById("Input").value;
    let newDate = document.getElementById("Inputdate").value;
    console.log(newTask);
    console.log(newDate);

    if (newTask === ''){
    alert("Please enter something to add!")
    } else {
        const list = document.createElement("li");
        console.log(list)
        const x = document.createTextNode(newTask + " " + newDate);
        console.log(x)
        list.appendChild(x);
        console.log(x)
        document.getElementById("myNewTaskList").appendChild(list);
        listofTasks.push(list);
        console.log(listofTasks);
    };
};

//Delete a Task

function deleteTask(){
    var removeTask = document.getElementsByTagName("lI");
    var i;
    for (i = 0; i < removeTask.length; i++) {
      var closeTask = document.createElement("NEW");
      var closeIcon = document.createTextNode("\u00D7");
      closeTask.className = "close";
      closeTask.appendChild(closeIcon);
      removeTask[i].appendChild(closeTask);
    }
    
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
};

// Sort through Tasks alphabetically

function sortThrough() {
let b = listofTasks.sort();
console.log(b);

};
