import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext';
import {
  TodoForm,
  TodoItem
} from './components/index.js';

function App() {
  // we need a state for management of the values from context
  const [todos, setTodos] = useState([]);

  // this function is already declared in the context now we need to write its functionality
  const addTodo = (todo) => {
    setTodos((prev) => [{
      id: Date.now(),
      ...todo // spreading new object added
    }, ...prev]) //spreading prev todos 
  }


  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id == id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }
  // if we dont spread the array and directly change the state or mutate the object
  // React will not notice the changes and dont rerender the componenet
  // That is why it is advicable to return a new state object or array while necessary
  // Directly mutating state in React prevents re-renders because React relies on reference comparison to detect changes. Using the spread operator (...) ensures a new object or array is created, allowing React to update the UI correctly. 🚀


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  // to set the local storage everytime the todos array is changed
  // Not using same hook
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
