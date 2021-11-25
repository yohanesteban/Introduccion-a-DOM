
const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        //prevenir que la pagina se recargue repetidamente
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
      todos.push(todoText);
      const todoList = document.getElementById('todo-list');
      const todostemplate = todos.map(t => '<li>' + t + '</li>');
    //   console.log(todostemplate);
    //   for(let i = 0; 1 < todos.length; i++) {     
       todoList.innerHTML = todostemplate.join('');
      const elementos = document.querySelectorAll('#todo-list li');
      elementos.forEach((elemento, i) => {
        elemento.addEventListener('click',() => {
          console.log (          elemento.parentNode 
            , i);

        })
      })
    }
  }