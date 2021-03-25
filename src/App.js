import React from "react";
import logo from './logo.svg';
import './App.css';

function Todo({ todo}){
    return (
        <div className="todo">
            {todo.text}
        </div>
    );
};

function App() {
        const [todos, setTodos] = React.useState([
            { text: "Fazer as atividades da quinzena"},
            { text: "Estudar para PW3"},
            { text: "Marcar reunião para o TCC"},
            { text: "Realizar os exercícios"}
        ]);
  return (
    <div className="App">
     <div className="todo-list">
         {todos.map((todo, index) => ( // percorrer os todos e criando um todo para cada da lista
             <Todo 
                key={index}
                index={index}
                todo={todo} />
                ))}
         </div>
    </div>
  );
}

export default App;
