/*  To Do List - a CRUD app made with JS
 *
 *  Functions: 
 *    - task creation
 *    - reading tasks created
 *    - edit a task
 *    - delete a task
 *    * literally, CRUD
 *
 *  Naming conventions:
 *    * pascalCase - for function names
 *    * undercase - for variable names
 *
 */

class Task{
  static ctr = 0;

  constructor(task){
    this.id = Task.ctr;
    this.task = task;
    this.status = false;

    let _present = new Date();
    let _month = _present.getMonth() + 1;
    let _date = _present.getDate();
    let _year = _present.getFullYear();
    this.date = `${_month}/${_date}/${_year}`;

    let _hour = _present.getHours();
    let _mins = _present.getMinutes();
    this.time = `${_hour}:`+`${_mins}`.padStart(2,"0");
    Task.ctr += 1;
  }
}


let tasks_arr = [];


export function sysAddTask(task_content){
  if(task_content != ''){
    let new_task = new Task(task_content);
    tasks_arr.push(new_task);
  }
}


export function sysGetTasks(){
  return tasks_arr;
}


export function sysToggleStatus(task_id){
  tasks_arr.forEach(element => {
    if(element.id == task_id){
      element.status = (element.status) ? false : true;
      console.warn(`SYS: toggled post_id${element.id} with text "${element.task}" and made it ${element.status}`);
      return;
    }
  });
}


export function sysDeleteTask(task_id){
  let matched_index = 0;

  tasks_arr.forEach(element => {
    if(element.id == task_id){
      console.warn(`SYS: found post_id${task_id} for deletion`);
      // pop the index it's in
      tasks_arr.splice(matched_index, 1); 
      return;
    }
    
    matched_index += 1;
  });
}



// for CLI debugging
/*
console.log('start');

addTask('say hi'); // 1
addTask('say make brownies'); // 2
addTask('eat crinkles'); // 3
addTask('say hello'); // 4
addTask('');

showTasks();
deleteTask(3);
editTask(1, 'tephL is goated');
showTasks();
*/
