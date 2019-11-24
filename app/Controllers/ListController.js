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
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00bd56',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          position: 'center',
          title: 'Deleted!',
          showConfirmButton: false,
          timer: 450
        })
        ListService.deleteList(listId)
        _drawLists()
      }
    })
  }

  addTask(event, listId) { /***************ADD TASK***************/
    event.preventDefault()
    ListService.addTask(event.target.task.value, listId)
    _drawLists()
  }

  deleteTask(listId, taskIndex) { /***************DELETE TASK***************/
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00bd56',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          position: 'center',
          title: 'Deleted!',
          showConfirmButton: false,
          timer: 500
        })
        ListService.deleteTask(listId, taskIndex)
        _drawLists()
      }
    })
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
