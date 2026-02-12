import { sysGetTasks, sysAddTask, sysDeleteTask, sysToggleStatus } from './index.js';

const addtask_submit = document.getElementById("addtask_submit");
const addtask_input = document.getElementById("addtask_input");
const tasks_list = document.querySelector(".tasks_list");
const menu_btn = document.getElementById("menu_btn");
const menu_content = document.getElementById("menu_content");

sysAddTask("Click the Heart above :p");
sysAddTask("Click the Heart below hehe");
sysAddTask("Scroll down");
sysAddTask("review for the strawberry monster subject");
displayTasks();


// displayTasks();
menu_btn.addEventListener("click", e => {
    menu_content.classList.toggle("menu_hide");
    console.log(e);
})

function addTask(value){
    sysAddTask(value);
    console.log(`MSG: Added ${value}`);
    displayTasks();
}


function displayTasks(){
    tasks_list.innerHTML = ''; // remove everything inside task_list

    // special iterator
    let special_ctr = 0;

    // iterate through the array of elements
    // convert array's elements into a DOM element then push it to task_list
    sysGetTasks().forEach(element => {
        // special adding to DOM
        if(special_ctr == 1){
            console.log(element.task);
            // special task box
            let d_special = document.createElement('div');
            d_special.classList.add("special_task");
            // special clicker heart
            let d_click = document.createElement('div');
            d_click.id = "special_click";
            // special task img
            let d_clickimg = document.createElement('img');
            d_clickimg.classList.add("special_heart");
            d_clickimg.src = "assets/heart.png";
            // adding all tgt
            d_click.appendChild(d_clickimg);
            d_special.appendChild(d_click);
            tasks_list.prepend(d_special);
        }
        special_ctr += 1;
        // task container
        let _new = document.createElement('div');
        if(element.status){
            _new.classList.add("task");
            _new.classList.add("task_done");
        } else{
            _new.classList.add("task");
        }
        _new.id = element.id;

        //check button
        let _upper = document.createElement("div");
        _upper.classList.add("upper");
        let _taskDetails = document.createElement("div");
        _taskDetails.classList.add("task_details");
        let _dateP = document.createElement("p");
        _dateP.textContent = element.date;
        _taskDetails.appendChild(_dateP);
        let _hourP = document.createElement("p");
        _hourP.textContent = element.time;
        _taskDetails.appendChild(_hourP);

        let _doneImg = document.createElement("img");
        _doneImg.src = "assets/check.png";
        _doneImg.classList.add("checktask_button");
        _upper.appendChild(_taskDetails);
        _upper.appendChild(_doneImg);

        //content box
        let _newP = document.createElement('p');
        _newP.textContent = element.task;
        _newP.classList.add("task_content");

        //delete button
        let _delete = document.createElement('div');
        _delete.classList.add("delete");
        let _deleteImg = document.createElement("img");
        _deleteImg.src = "assets/x.png";
        _deleteImg.classList.add("deletetask_button");
        _delete.appendChild(_deleteImg);

        //appending all to container
        _new.appendChild(_upper);
        _new.appendChild(_newP);
        _new.appendChild(_delete);
        tasks_list.prepend(_new);
    });
}

tasks_list.addEventListener("click", event => {
    if(event.target.classList.contains("checktask_button")){
        let _taskContainer = event.target.parentElement.parentElement;
        let _wholeBox = event.target.parentElement.parentElement;
        _taskContainer.classList.toggle("task_done");
        sysToggleStatus(_taskContainer.id);
    }


    if(event.target.classList.contains("deletetask_button")){
        let _taskContainer = event.target.parentElement.parentElement;
        sysDeleteTask(_taskContainer.id);
        displayTasks();
    }
    
    if(event.target.id === "special_click" || event.target.classList.contains("special_heart")){
        const special_heart = document.querySelector(".special_heart");

	    if(special_heart){
            special_heart.classList.toggle("hide");
            console.log("clicked");
            
            // Add your blackout animation here
            createRows();
            document.querySelectorAll(".row").forEach(r => r.classList.add("show"));
            setTimeout(() => {
                window.location.href = "flower/flowers.html";
            }, 3000);
        }
        special_heart.classList.toggle("hide");
        console.log("clicked");
    }
});

/*
checktask_button.forEach(element => {
    element.addEventListener("click", event =>{
        
    });
});*/


// hello
// shadings when submit is being clicked
// getting value of textbox if clicked
addtask_submit.addEventListener("mouseover", event => {
    event.target.style.background = 'rgba(247, 188, 209, 0.9)';
});


addtask_submit.addEventListener("click", event => {
    event.target.style.background = 'rgba(238, 189, 206, 0.9)';
    if(addtask_input.value != ''){
        addTask(addtask_input.value);
        addtask_input.value = '';
    }else{
        console.warn("MSG: must have input!");
        displayTasks();
    }
    
    setTimeout(() => {
        event.target.style.background = 'rgba(254, 189, 213, 0.9)';
    }, 1000);
});


addtask_submit.addEventListener("mouseout", event => {
    event.target.style.background = 'rgba(254, 189, 213, 0.9)';
});

// for the special task



// for the blackout effect
const btn = document.getElementById("special_click");
const overlay = document.getElementById("row_overlay");
const totalRows = 16;           // adjust as needed
const rowHeight = 100 / totalRows; // height in vh

function createRows() {
  overlay.innerHTML = "";

  for (let i = 0; i < totalRows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    // exact position and size
    row.style.height = `${rowHeight}vh`;
    row.style.top = `${i * rowHeight}vh`;

    // delay for sliding effect
    row.style.animationDelay = `${i * 0.12}s`;

    overlay.appendChild(row);
  }
}

btn.addEventListener("click", () => {
  createRows();
  document.querySelectorAll(".row").forEach(r => r.classList.add("show"));
    setTimeout(() => {
        window.location.href = "flower/flowers.html";
    }, 3000); // timer for redirection after animation
});
