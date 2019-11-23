import ListService from "../Services/ListService.js";
import _store from "../store.js"
import List from "../Models/List.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ''
  _store.Lists.forEach(list => template += list.ListTemplate)
  document.querySelector("#lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  addList(event) { /***************ADD LIST***************/
    event.preventDefault()
    let formData = event.target
    let listData = {
      name: formData.name.value
    }

    ListService.addList(listData)
    _drawLists()
    formData.reset()
  }


  deleteList(listId) { /***************DELETE LIST***************/
    ListService.deleteList(listId)
    _drawLists()
  }

  addTask(event, listId) { /***************ADD TASK***************/
    event.preventDefault()
    ListService.addTask(event.target.task.value, listId)
    _drawLists()
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
