
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

const resultado3 = 5<6
const resultado4 = 5<5
const resultado5 = 5<5
const resultado6 = 5<4
const resultado7 = 5<3
const resultado8 = 5<34
const resultado9 = 5<2
const resultado10 = 5<6

const resultado11 = 5<1
const resultado12 = 5<63
console.log(resultado3,resultado4)


const edad = 5
if (edad > 5 && edad < 13) {
console.log('el niño puede jugar')
} else {
    console.log('no puede jugar')
}


let x = false;
while (x) {
    console.log(x)
   x = false
}

switch(lala) {
case 1: {
    console.log('yo soy el caso 1')
    break
    }

case 2: {
    console.log('chanchito feliz')
    break;
        }

case 3: {
    console.log('no hay chanchito feliz')
     break;
}
default: 
    console.log('no hay chanchito')
    break;
}      