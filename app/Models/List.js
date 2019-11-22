import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get template() {
    return `
      <div class="col-3 bg-info rounded">
        <form>
            <div class="form-group text-center">
                <label for="formGroupExampleInput">
                    <h2>${this.name}</h2>
                </label>
                <div class="row">
                    <div class="col text-left">
                        <p>list item</p>
                    </div>
                    <div class="col text-right">
                        <i class="fas fa-trash-alt delete-btn rounded"></i>
                    </div>
                </div>
                <input type="text" class="form-control" id="addList" placeholder="Add Task...">
                <button class="btn btn-primary w-50 mt-2">Add</button>
            </div>
        </form>
      </div>
    `
  }
}
