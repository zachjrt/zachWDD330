


class Task{
    complete = false
    name = ""
    taskIndex = 0

    constructor(complete, name, taskIndex){
        this.complete = complete
        this. name = name
        this.taskIndex = taskIndex
    }

   
    
}

class Handler{

    display = document.getElementById("listTodo")
    tasks = new Array()

    addTask(taskName, complete = false){
        let newTask = new Task(complete, taskName, `${this.tasks.length}`)
    
        this.tasks.push(newTask)
    
    }

    removeTask(taskIndex){
        for (let index in this.tasks) {
            if (this.tasks[index].id == taskIndex) {
                this.tasks.splice(index, 1)
            }
        }
    }

   displayAllTasks(){
       if (this.tasks.length > 0){
           this.tasks.forEach((task) => {
               let HTMLtasks = taskCreator.createHTML(task.complete, task.name, task.taskIndex)
               this.display.appendChild(HTMLtasks)
           })
       }
   }
}

class taskCreator{
    createHTML(complete, name, taskIndex){
        let newTask = document.createElement("div")
        newTask.id = id
        newTask.classList.add("taskInList")
        

        let nameOfTask = document.createElement("div")
        nameOfTask.textContent = name
        nameOfTask.classList.add("nameOfTask")

        let check = document.createElement("input")
        check.classList.add("checkBoxTask")
        check.type = "checkbox"
        if(complete){
            checkBox.checked = true
        }


        newTask.appendChild(check)
        newTask.appendChild(name)
        return newTask
    }
}





let allButton = document.getElementById("all")
let activeButton = document.getElementById("active")
let completedButton = document.getElementById("completed")

completedButton.addEventListener("click", () => {

})
activeButton.addEventListener("click", () => {
    
})
allButton.addEventListener("click", () => {
    
})

document.getElementById("addTask").addEventListener("click", () => {
    let newTaskName = document.getElementById("newTaskName").value

    if (newTaskName === ""){
        return
    }
    
    Handler.addTask(newTaskName)
    Handler.displayAllTasks()
    document.getElementById("List").appendChild(Handler.display)
})