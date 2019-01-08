window.onload = function() {

   
    
const todos = [
     {item: 'do laundry', completed: false},
     {item: 'take out garbage', completed: false},
     ];

     

//button function
const submitBtn = document.querySelector('#form-submit');
    submitBtn.addEventListener('click', addTodo, false);


  //we are going to display our todos here
  const todoListCont = document.querySelector('.todo-list-container');


  for (let i = 0; i < todos.length; i++) {
    //move everything below to a function
    let todoDiv = document.createElement('div');
    todoDiv.setAttribute("id", i)
    let textNode = document.createTextNode(todos[i].item);
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'delete';
    deleteBtn.addEventListener('click', function() {
      handleDelete(i);
    }, false);
    todoDiv.appendChild(textNode);
    todoDiv.appendChild(deleteBtn);
    todoListCont.appendChild(todoDiv);
  }
  
  
  function handleDelete(i) {
    todos.splice(i, 1);
    let remove = document.getElementById(i)
    todoListCont.removeChild(remove);
    console.log('i', i);
    console.log(todos)
  }
 
 

  function addTodo(event) {
    event.preventDefault(); //prevents the page from reloading
    let addedItem = document.getElementById('text').value
    todos.push({item: addedItem, completed: false})
    let i = todos.length-1
    let todoDiv = document.createElement('div');
    todoDiv.setAttribute("id", i)
    let textNode = document.createTextNode(todos[i].item);
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'delete';
    deleteBtn.addEventListener('click', function() {
      handleDelete(i);
    }, false);
    todoDiv.appendChild(textNode);
    todoDiv.appendChild(deleteBtn);
    todoListCont.appendChild(todoDiv);
    console.log(todos)
    document.getElementById('text').value = '';
   }


}
