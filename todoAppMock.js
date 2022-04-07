/* ----- Todo App ----- */

//------------------------Class----------------------

class TodoItem {

    _id;
    _task;
    _complete;
    _dueDate;

    constructor(id, task, dueDate) {

        this._id = id;
        this._task = task;
        this._dueDate = dueDate;
        this._complete = false;
    }
}// end of class

// --- constants --- //

const showRoom = document.querySelector('#showroom');

// --- constants end --- //


const createElement = (todo) => {

    return `
    <li id="${todo._id}" class="white todoItem">
        <span>${todo._task}</span>
        <span>${todo._complete}</span>
        <span>${todo._dueDate}</span>
        <button class="del">Delete</button> 
    </li>

    `;
}

let objects = [
    new TodoItem('001', "make coffee", new Date()),
    new TodoItem('002', "make shoes", new Date()),
    new TodoItem('003', "make tea", new Date()),
    new TodoItem('004', "make code", new Date())
    ,new TodoItem('005', "make code", new Date())
]


// create elem for each todo in array
const populateElements = () => {

    objects.forEach(todoItem => {

        showRoom.innerHTML += createElement(todoItem);

    });
}


// populate on refresh
document.addEventListener('DOMContentLoaded', () => {

    populateElements();
})


// delete funciton
showRoom.addEventListener('click', (e) => {

    if (e.target.classList.contains('del')) {
        
        let delId = e.target.parentElement.id;
        // let delElem = e.target.parentElement;
    
        objects.forEach( (todo, i) => {
            
            if (todo._id == delId) {
                
                objects.splice(i, 1);
            }
        });

        /*showRoom.innerHTML = "";
        populateElements();*/
        e.target.parentElement.remove()
        console.log(objects)

    } 
})

// param 1 : event
// param 2 : callback
// param 3 : enable event capturing

showRoom.addEventListener('dblclick', (e) => {

    let todoElems = document.querySelectorAll('.todoItem');

    todoElems.forEach(element => {
        
        element.addEventListener('dblclick', (e) => {
            element.classList.add('completedTask')
        })
    });

}, true)

