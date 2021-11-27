
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

//   new promise ((resolve.reject) => {
//     setTimeOut( => resolve(2), 1000)
// }
// .then(x => console.log(x))  
// .catch(e => console.error(encode))  

// Promise.resolve(2)
// Promise { <state>: "fulfilled", <value>: 2 }

// Promise.resolve(2)          .then(valor => console.log(valor))
// 2 debugger eval code:1:45
// Promise { <state>: "fulfilled", <value>: undefined }
// ​
// <state>: "fulfilled"
// ​
// <value>: undefined

// Promise.resolve(2)          .then(valor => valor + 1) .then(valor =>console.log(valor) )
// 3 debugger eval code:1:70
// Promise { <state>: "fulfilled", <value>: undefined }

// Promise.resolve(2)          .then(valor => valor + 1000000000) .then(valor =>console.log(valor) )
// 1000000002 debugger eval code:1:79
// Promise { <state>: "fulfilled", <value>: undefined }

// Promise.resolve(10)
// Promise { <state>: "fulfilled", <value>: 10 }

// Promise.resolve(2)  .then(valor =>console.log(valor) )
// 2 debugger eval code:1:42
// Promise { <state>: "fulfilled", <value>: undefined }

// Promise.resolve(2)          .then(valor => valor + 1) .then(valor =>console.log(valor) )
// 3 debugger eval code:1:70
// Promise { <state>: "fulfilled", <value>: undefined }
// ​
// <state>: "fulfilled"
// ​
// <value>: undefined

// .catch(e => console.error (e))