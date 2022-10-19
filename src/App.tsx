import { useEffect, useState } from 'react';
import List from './List';


const initialTodos = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
]

function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [task, setTask] = useState('');
  
  const handleCreate = () =>{
    const newTodo = {
      id: Date.now(),
      task,
    }

    setTodoList([...todoList, newTodo]);
    setTask('');
  }

  useEffect(()=>{
    console.log("<App/> rendering...");
    
  });

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <List todoList={todoList} />
    </>
  )
}

export default App;