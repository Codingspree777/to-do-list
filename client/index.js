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
  
  
  //function to render DOM 
  const render = (todosData) =>{
    for (let i = 0; i < todosData.length; i++) {
      //move everything below to a function
      let todoDiv = document.createElement('div');
      todoDiv.setAttribute("id", i)
      todoDiv.setAttribute("class", "all")
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
  }

  render(todos)
    
    function handleDelete(i) {
      todos.splice(i, 1);
      let remove = document.getElementById(i)
      console.log("remove", remove)
      todoListCont.removeChild(remove);
      console.log('i', i);
      console.log(todos);
    }
   
   
  
    function addTodo(event) {
      event.preventDefault(); //prevents the page from reloading
      // for(let k = 0; k < todos.length; k++){
      //   let removeAll = document.getElementById(k);
      //   todoListCont.removeChild(removeAll);
      // }

      while(todoListCont.firstChild){
        todoListCont.removeChild(todoListCont.firstChild)
      };
      let addedItem = document.getElementById('text').value;
      //post to DB
      //fetch again to GET updated DB
      todos.push({item: addedItem, completed: false});
      render(todos);
      
     }
  
     
  }
  