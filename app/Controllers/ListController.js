import ListService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ''
  _store.State.lists.forEach(list => template += list.template)
  document.querySelector("#lists").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  addList(event) {
    debugger;
    event.preventDefault()
    let formData = event.target
    let listData = {
      name: formData.name.value
    }

    ListService.addList(listData)
    _drawLists()
    formData.reset()
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
