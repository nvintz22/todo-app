import React from 'react';
import '../App.css';
import TodoApp from './appTodo/TodoList';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <div className="App-header">
       <TodoApp />
       <Footer />
      </div>
    </div>
  );
}

export default App;
