// let input = document.getElementById('inp');

// list=[]

// input.addEventListener("keypress",(event)=>{
//     if (event.key === 'Enter') { // key code of the keybord key
//      console.log(input.value)
//      let item = `<div class="tags">
//       <input type="checkbox" name="select">
//       <p>${input.value}</p>
//       <span>...</span>
//   </div>`
//   let adding = document.getElementById('tag-container');
//   adding.innerHTML+=item;
//   input.value='';
//  }
// })

let editedId;
let isEditedTask = false;
const taskInput = document.querySelector(".input-tag input"),
taskBox  =document.querySelector('.task-box'),
filters  =document.querySelectorAll(".filters span"),
clearAll =document.querySelector(".clear-btn");

let todos= JSON.parse(localStorage.getItem("todo-list"));

// in the span section wherever there is active involved remove the active being present and
// Add the active class to the function to the clicked button

clearAll.addEventListener("click",()=>{
    todos.splice(0,todos.length);
    localStorage.setItem("todo-Item",JSON.stringify(todos));
    showTodo();
})

filters.forEach(btn=>{
    btn.addEventListener("click",()=>{
    })
})

filters.forEach(btn=>{
    btn.addEventListener("click",()=>{
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    })
})

function showTodo(filter) {
    let li = '';
    if(todos)
    {
        todos.forEach((todo, id) => {

let isCompleted = todo.status=="completed"?"checked":"";
if(filter==todo.status || filter== 'all')
{
            li += `<li class="task">
    
            <label for="${id}">
                <input onclick="updateStatus(this)" type="checkbox" id="${id}"${isCompleted} >
                <p class="${isCompleted}">${todo.name}</p>
            </label>
    
            <div class="settings">
                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                <ul class="task-menu">
                    <li onclick="editTask(${id},'${todo.name}')"><i class="uil uil-pen">Edit</i></li>
                    <li onclick="deleteTask(${id})"><i class="uil uil-trash">Delete</i></li>
                </ul>
            </div>
    
        </li>`
}
        });
        taskBox.innerHTML=li || `<span>Nothing to show</span>`;

    }    
}

showTodo("all");

function editTask(taskId,taskName)
{
    editedId=taskId;
    taskInput.value=taskName;
    isEditedTask=true;

}

function deleteTask(deleteId)
{
    todos.splice(deleteId,1);
    localStorage.setItem("todo-list",JSON.stringify(todos))
    showTodo("all");
}

function showMenu(selectedTask)
{
    let taskMenu =selectedTask.parentElement.lastElementChild;
    taskMenu.classList.add("show");
    document.addEventListener("click",e=>{
        if(e.target.tagName!="I" || e.target!=selectedTask){
            taskMenu.classList.remove("show");           
        }
    })
}

function updateStatus(selectedTask)
{
    // parent for the selectedTask is label and last child of the parent (label) is the tag containing the paragraph

    let taskName =selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked)
    {  
       taskName.classList.add("checked");
       todos[selectedTask.id].status="completed";
       console.log(taskName)

    }else{
        taskName.classList.remove("checked");
        todos[selectedTask.id].status="pending";
    }
    localStorage.setItem("todo-list",JSON.stringify(todos))
}

taskInput.addEventListener("keyup", e => {

    let userTask = taskInput.value.trim();

    if (e.key == 'Enter' && userTask) {

        if(!isEditedTask)
        {
            
        if (!todos) {
            todos = [];
        }
        
        let taskInfo = { name: userTask, status: "pending" };
        todos.push(taskInfo);

        }else{
            isEditedTask=false;
            todos[editedId].name=userTask;
        }

        // getting the item from the local storage If we take directly from the local storage 
        // We cannot again push another object into the todos 
        // therefore we must parse it before pushing the object ,So that it will be in a string format .

        taskInput.value = "";

        // before storing the data into the local storage we need to convert the objects into the strings so that we can convert it easily
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo("all");
    }
})