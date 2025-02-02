import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name
    this.color = data.color
    this.tasks = data.tasks || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get ListTemplate() {
    return `
      <div class="grid-item col-10 col-md-6 list-container m-1" style="background-color: ${this.color};">
          <i class="pin"></i>
          <form onsubmit="app.listController.addTask(event, '${this.id}')">
            <div class="form-group text-center">
                <label for="task">
                  <i class="delete-list-btn fas fa-times-circle" onclick="app.listController.deleteList('${this.id}')"></i>
                  <h2 class="handwriting">${this.name}</h2>
                </label>
                ${this.drawTask()}
                <input type="text" name="task" class="form-control" id="addList" placeholder="Add Task...">
                <button class="btn btn-primary w-50 mt-2">Add</button>
            </div>
          </form>
        </div>
    `
  }

  taskTemplate(task, index) {
    return `
    <div class="row pt-1 pb-1">
    <div class="col text-left">
    <input type="checkbox" name="task-checkbox${index}" class="task-checkbox"><p class="task-text handwriting d-inline">${task}</p>
    </div>
    <div class="col text-right">
      <i class="fas fa-trash-alt delete-item-btn rounded" onclick="app.listController.deleteTask('${this.id}', ${index})"></i>
    </div>
  </div>
    `
  }

  drawTask() {
    let template = ''
    this.tasks.map((task, i) => template += this.taskTemplate(task, i)) //grab each task value and its index
    return template
  }

}
