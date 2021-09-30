
const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        //prevenir que la pagina se recargue se recargue
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
       document.querySelectorAll('#todo-list li');
       elementos.ForEach(elemento,i) => {
         console.log(elemento,i);
       }
      }
    }
// }

// window.onload = ( ) => {
//     const form = document.getElementById('todo-form');
//     form.Onsubmit = (e) => {
//         const todo = document.getElementById('todo');
//         const todoText = todo,value;
//         todo,value = '';
    // }
// }
function iterar(arg1) {
    for(let i = 0; i < arg1.length; i++) {
        console.log(arg1[i]);
    }  
}
const numeros = [1,2,'hola',4,5]
const nombres = ['pedro','juan','felipe','chanchito feliz','chanchito triste']
iterar(nombres)
iterar(numeros)


function suma(a, b) {
    return a + b;
}

const resultadosuma1 = suma(1,2)
const resultadosuma2 = suma(5,6)
const resultadosuma3 = suma(resultadosuma1,resultadosuma2)
console.log('resultado',resultadosuma3);
