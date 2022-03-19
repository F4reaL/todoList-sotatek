const newTaskElement = document.getElementById('newTask');
const listTodoElement = document.querySelector('.list');
const newTodoTitleElement = newTaskElement.querySelector('#i-add');
const buttonAdd = newTaskElement.querySelector('#btn-add');
const newDesciptionElement = newTaskElement.querySelector('.todo__descript--text');
const newDueDateElement = newTaskElement.querySelector('.dueDate');
const newPiorityElement = newTaskElement.querySelector('.piority');
//Form todolist
const todoForm = document.getElementById('todoList');
const list = todoForm.querySelector('.list');
const removebtn = document.getElementsByClassName('button remove');

const app = {
    tasks: [{
        title: "Hello",
        desciption: "xin chao moi nguoi",
        due: "15 / 2 / 2022",
        piority: "normal"
    }],

    render: function() {
        let newList = this.tasks.map((task, index) => {
            return `<div class="list__item" data-index="${index}">
                        <input type="checkbox">
                        <p>${task.title}</p>
                        <button class="button detail">Detail</button>
                        <button class="button remove">Remove</button>
                   </div>`
        });

        list.innerHTML = newList;
    },

    //Xu ly su kien
    handleEvent: function() {
        const _this = this;
        buttonAdd.onclick = function() {
            // console.log(newDesciptionElement.value);
            // console.log(newDueDateElement.value);
            // console.log(newPiorityElement.value);
            _this.addNewTask(newTodoTitleElement.value, newDesciptionElement.value, newDueDateElement.value, newPiorityElement.value);
            _this.render();
        }
    },
    //Them moi task
    addNewTask: function(...infors) {
        // let task = infors.reduce((acc, infor)=>{

        // },{});
        let task = {};
        task.title = infors[0];
        task.desciption = infors[1];
        task.due = infors[2];
        task.piority = infors[3];
        this.tasks.push(task);
        console.log(this.tasks);


    },
    start: function() {
        this.render();

        this.handleEvent();

    }
}
app.start();