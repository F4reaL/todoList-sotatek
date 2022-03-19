const newTaskElement = document.getElementById('newTask');
const listTodoElement = document.querySelector('.list');
const newTodoTitleElement = newTaskElement.querySelector('#i-add');
const buttonAdd = newTaskElement.querySelector('#btn-add');
const newDesciptionElement = newTaskElement.querySelector('.task__descript--text');
const newDueDateElement = newTaskElement.querySelector('.dueDate');
const newPiorityElement = newTaskElement.querySelector('.piority');
//Form todolist
const todoList = document.getElementById('todoList');
const list = todoList.querySelector('.list');
const listItems = document.getElementsByClassName('list__item');

const app = {
    // isOpened: false,
    currentIndex: -1,
    tasks: [{
        title: "Hello",
        desciption: "xin chao moi nguoi",
        due: "1999-03-20",
        piority: "normal"
    }],

    render: function() {
        let newList = this.tasks.map((task, index) => {
            return `<div class="list__item" >
                        <div class="item" data-index="${index}">
                            <input class="checkbox" type="checkbox">
                            <p>${task.title}</p>
                            <button class="button btn-detail">Detail</button>
                            <button class="button btn-remove">Remove</button>
                         </div>
                        <div class="details close" isopened=false>
                            <input class="task__title" class="error" type="text" id="i-update" placeholder="${task.title}">
                            <div class="message"></div>
                            <div class="task__descipt">
                            <label for="">Desciption</label>
                            <textarea class="task__descript--text" name="Text1" cols="40" rows="6">${task.desciption}</textarea>
                        </div>
                         <div class="task__infor">
                             <div class="task__infor--field">
                                <label for="">Due Date</label>
                                <input type="date" value="${task.due}">
                            </div>
                            <div class="task__infor--field">
                            <label for="">Piority</label>
                                <select id="${index}" name="piority" id="">
                                    <option value="low">Low</option>
                                    <option value="normal">Normal</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                </div>
                <button class="button" id="btn-add">Update</button>
            </div>
        </div>`
        });

        list.innerHTML = newList;
        this.fixValueForSelect();
    },

    //Xu ly cac the select
    fixValueForSelect: function() {
        this.tasks.forEach((task, index) => {
            document.getElementById(index).value = task.piority;
        })
    },

    //Xu ly su kien
    handleEvent: function() {
        const _this = this;

        //Them moi task khi click button add
        buttonAdd.onclick = function() {
            _this.addNewTask(newTodoTitleElement.value, newDesciptionElement.value, newDueDateElement.value, newPiorityElement.value);
            _this.render();
        }


        list.onclick = function(e) {
            //Xoa task khi click remove
            if (e.target.closest('.btn-remove')) {
                _this.currentIndex = e.target.closest('.btn-remove').parentElement.getAttribute('data-index');
                console.log(e.target.closest('.btn-remove').parentElement);
                _this.deleteTask();
            }

            //Hien thi thong tin task
            if (e.target.closest('.btn-detail')) {
                _this.currentIndex = e.target.closest('.btn-detail').parentElement.getAttribute('data-index');
                const detailElement = listItems[_this.currentIndex].querySelector('.details');
                let isOpened = Array.from(detailElement.classList).indexOf('open');

                if (isOpened < 0) {
                    _this.showDetail(detailElement);
                } else {
                    _this.hideDetail(detailElement);
                }
            }

        }


    },

    //Them moi task
    addNewTask: function(...infors) {
        let task = {};
        task.title = infors[0];
        task.desciption = infors[1];
        task.due = infors[2];
        task.piority = infors[3];
        this.tasks.push(task);
        console.log(this.tasks);
    },

    //Xoa task
    deleteTask: function() {
        //Xoa task voi currentIndex
        this.tasks.splice(this.currentIndex, 1);
        //Hien thi lai danh sach
        this.render();
    },

    //Hien thi thong tin chi tiet cua task
    showDetail: function(detailElement) {
        if (detailElement) {
            detailElement.classList.remove('close');
            detailElement.classList.add('open');
        }
    },

    //Dong hien thi detail
    hideDetail: function(detailElement) {
        if (detailElement) {
            detailElement.classList.remove('open');
            detailElement.classList.add('close');
        }
    },
    start: function() {

        this.handleEvent();

        this.render();


    }
}
app.start();