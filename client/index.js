window.onload = function () {
  
  //initial fetch to get list,  once connected to db
  const getData = () => {
    fetch("/ToDoList/list")
    .then(response => response.json())
    .then(data =>{
      render(data);
    });
  }
  getData();
  

  //button function to create item
  const submitBtn = document.querySelector('#form-submit');
  submitBtn.addEventListener('click', addTodo, false);


  //we are going to display our todos here
  const todoListCont = document.querySelector('.todo-list-container');


  //function to render DOM 
  const render = (todosData) => {
    for (let i = 0; i < todosData.length; i++) {
      //move everything below to a function
      let todoDiv = document.createElement('div');
      todoDiv.setAttribute("id", i)
      todoDiv.setAttribute("class", "all")
      let itemText = document.createTextNode(todosData[i].item)
      let textNode = document.createTextNode(`${i+1}) ${todosData[i].item} / done? ${todosData[i].completed}`);
      let deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'delete';
      deleteBtn.addEventListener('click', function () {
        handleDelete(itemText);
      }, false);
      todoDiv.appendChild(textNode);
      todoDiv.appendChild(deleteBtn);
      todoListCont.appendChild(todoDiv);
    }
  }

   

  function handleDelete(str) {
    // console.log(str);
    fetch('/ToDoList/list', {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"item": str})
    })
    while (todoListCont.firstChild) {
      todoListCont.removeChild(todoListCont.firstChild)
    };
    getData();
  }



  function addTodo(event) {
    event.preventDefault(); //prevents the page from reloading
    // for(let k = 0; k < todos.length; k++){
    //   let removeAll = document.getElementById(k);
    //   todoListCont.removeChild(removeAll);
    // }

    while (todoListCont.firstChild) {
      todoListCont.removeChild(todoListCont.firstChild)
    };
    let addedItem = document.getElementById('text').value;
    //post to DB
    (async () => {
      const rawResponse = await fetch('/ToDoList/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({item: addedItem, completed: false})
      });
      const content = await rawResponse.json();
    
      console.log(content);
    })();
   
    //fetch again to GET updated DB
    getData();
  }
}