import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import TodoCreateComponent from './components/todo_create';
import TodoListComponent from './components/todo_list';

function App() {
  return (
    <div className="App container mt-5">
       <TodoCreateComponent />
       <TodoListComponent />
    </div>
  );
}

export default App;