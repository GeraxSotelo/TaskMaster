import List from "../Models/List.js";
import _store from "../store.js"

//Public
class ListService {

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  constructor() {

  }

  addList(listData) {
    _store.State.lists.push(new List(listData))
    _store.saveState()
  }

  deleteList(listId) {
    _store.State.lists = _store.State.lists.filter(list => list.id != listId)
    _store.saveState()
  }

  addTask(task, listId) {
    debugger;
    let foundList = _store.State.lists.find(list => list.id == listId)
    if (task != "") {
      foundList.tasks.push(task);
    }
    _store.saveState()
  }

  deleteTask(listId) {
    let foundList = _store.State.lists.find(list => list.id == listId) //TODO complete logic
  }
}

const SERVICE = new ListService();
export default SERVICE;
