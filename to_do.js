
//Add Task and date to a list

let arObj = []; 

let obj = {
  name: "Input",
  date: "Inputdate"
};

function addTask(){
  let newTask = document.getElementById("Input").value;
  let newDate = document.getElementById("Inputdate").value;
  obj.name = newTask;
  obj.date = newDate;
  console.log(obj);

  const list = document.createElement("li");
  const x = document.createTextNode(newTask + " " + newDate);
  list.appendChild(x)
  document.getElementById("myNewTaskList").appendChild(list);
  console.log(myNewTaskList);

  arObj.push(obj.name);
};

// Sort through Tasks alphabetically
// ? = then
// : = else

function sortThrough() {
  // arObj.push(obj);
  let sorted = arObj.sort((a, b) => (a.name < b.name) ? 1 : -1);
  console.log(sorted);
  document.getElementById("myNewTaskList").innerHTML = sorted;

  const list = document.createElement("li");
  const x = document.createTextNode(sorted);
  list.appendChild(x)
  document.getElementById("myNewTaskList").appendChild(list);
  console.log(myNewTaskList);


};




//Delete a Task

// function deleteTask(){
//     var removeTask = document.getElementsByTagName("lI");
//     var i;
//     for (i = 0; i < removeTask.length; i++) {
//       var closeTask = document.createElement("NEW");
//       var closeIcon = document.createTextNode("\u00D7");
//       closeTask.className = "close";
//       closeTask.appendChild(closeIcon);
//       removeTask[i].appendChild(closeTask);
//     }
    
//     var close = document.getElementsByClassName("close");
//     var i;
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
// };

// // Strike through a task

let btn = document.querySelector('.theBtn');
btn.addEventListener('click', () => {

let p = document.querySelector('#thePara');

console.log(p);

p.classlist += " completedTask"

});

class ToDoItem {

  id;
  task;
  complete;
  dueDate;

  constructor(id,task,dueDate){

    this._id = id;
    this._task = task;
    this._dueDate = dueDate;
    this._complete = false;

  }

}

const createElement = (todo) => {

  return ' 
  <li id="${todo._id}">' + todo.task + '</li>
  
  '


}







// Old code 

// //Add to list function

// function addTask(){
//     let newTask = document.getElementById("Input").value;
//     let newDate = document.getElementById("Inputdate").value;

//     if (newTask === ''){
//     alert("Please enter something to add!")
//     } else {
//         const list = document.createElement("li");
//         console.log(list)
//         const x = document.createTextNode(newTask + " " + newDate);
//         console.log(x)
//         list.appendChild(x);
//         console.log(x)
//         document.getElementById("myNewTaskList").appendChild(list);
  
//         console.log(listofTasks);
//     };
// };