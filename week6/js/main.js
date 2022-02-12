
import Storage from "./ls.js"

class Task{

    constructor(content ="", taskIndex = Date.now(), complete = false){
        this.complete = complete
        this.content  = content 
        this.taskIndex = taskIndex
    }
    toggle(){
        this.complete = !this.complete
    }
    
    createElement(updateCallback, removeItemCallback) {

        let check = document.createElement('label');
        check.classList.add('checkBoxTask');
        let mark = document.createElement('span');

        let element = document.createElement('div');
        element.classList.add('nameOfTask');    

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        checkbox.addEventListener('click', (event) => {
            this.toggle();
            updateCallback();
        });

        this.complete ? checkbox.setAttribute('checked', 'true') : "";
        
        check.classList.add('checkmark');
        check.appendChild(checkbox);
        check.appendChild(mark);


        let content  = document.createElement('div');
        content.classList.add('taskName');
        content.innerHTML = this.content;
        let button = document.createElement('button');
        button.classList.add("removeTask");
        button.innerHTML = "<div>X</div>";
        button.addEventListener('click', (event) => removeItemCallback(this));
       
        
        element.appendChild(check);
        element.appendChild(content);
        element.appendChild(button);
        return element;
    }
    
}




class Handler{
    constructor() {
        this.listTodo = new TaskCreator();
     }

    Complete() {
        this.todoList.redrawList("Complete")
    }
   
    All() {
        this.todoList.redrawList("All")
    }
    Active() {
        this.todoList.redrawList("Active")
    }
    
    addTask(){
        let taskText = document.getElementById("newTaskName");
        this.listTodo.add(taskText.value);
        taskText.value =""
    }
}

class TaskCreator{
    constructor(name = 'todo') {
        this.LocalStorage = new Storage();
        this.name = name;
        let temporarylist = JSON.parse(this.LocalStorage.load(this.name));
        this.list = [];
        temporarylist?.forEach(x => {
            this.list.push(new Task(x.content,x.taskIndex,x.complete));
        })
        this.redrawList();
    }

    Uncompleted() {
        let count = 0;
        this.list.forEach(x => count += x.complete ? 0 : 1);
        return count;
    }

    remove(task) {
        const index = this.list.indexOf(task);
        if (index > -1) {
            this.list.splice(index, 1);
        }
        this.redrawList();
        this.save();
    }
    add(name) {
        let task = new Task(name = name);
        this.list.push(task);
        document.getElementById('listTodo').appendChild(task.createElement(this.save.bind(this), this.remove.bind(this)));
        this.save();
    }
    save() {
        this.LocalStorage.save(this.name, JSON.stringify(this.list));
        this.updateNum();
    }
  
    redrawList(filters){
        let container = document.getElementById("listTodo");
        container.textContent="";
        if (this.list) {
            this.list.forEach(x => {
                switch (filters) {
                    case "Complete":
                        if (x.complete) container.appendChild(x.createElement(this.save.bind(this), this.remove.bind(this)));
                        break;
                    case "Active":
                        if (!x.complete) container.appendChild(x.createElement(this.save.bind(this), this.remove.bind(this)));
                        break;
                    case "All":
                        container.appendChild(x.createElement(this.save.bind(this), this.remove.bind(this)));
                        break;
                    default:
                        container.appendChild(x.createElement(this.save.bind(this), this.remove.bind(this)));
                        break;
                }
            });
        }
        this.updateNum();
    }
    updateNum() {
        let numleft = this.Uncompleted();
        document.getElementById('left').innerHTML = `<p>${numleft} tasks left</p>`;
    }
}





let allButton = document.getElementById("all")
let activeButton = document.getElementById("active")
let completedButton = document.getElementById("completed")

completedButton.addEventListener("click", () => {
    console.log("complete filter")
    handler.Complete()
})
activeButton.addEventListener("click", () => {
    console.log("active filter")
    handler.Active()
})
allButton.addEventListener("click", () => {
    console.log("all filter")
    handler.All()
})

document.getElementById("addTask").addEventListener("click", () => {
    let newTaskName = document.getElementById("newTaskName").value

    if (newTaskName === ""){
        return
    }
    
    console.log("Add task")
    handler.addTask(newTaskName)
   
    
})


let handler = new Handler()
//let taskCreator = new TaskCreator()
//let storage = new Storage()