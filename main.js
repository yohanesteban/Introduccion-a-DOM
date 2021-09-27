window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = () => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        console.log(todoText);
}
}

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