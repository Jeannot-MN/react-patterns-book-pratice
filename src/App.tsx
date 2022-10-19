import { useEffect, useMemo, useState } from 'react';
import List from './List';


const initialTodos = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
]

function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [task, setTask] = useState('');
  const [term, setTerm] = useState('');

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task,
    }

    setTodoList([...todoList, newTodo]);
    setTask('');
  }

  const handleSearch = () => {
    setTerm(task);
  }

  useEffect(() => {
    console.log("<App/> rendering...");

  });

  const filteredTodoList = useMemo(() => todoList.filter(todo => {
    console.log("Filtering...");
    return todo.task.toLocaleLowerCase().includes(term.toLocaleLowerCase());
  }), [term, todoList]);

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List todoList={filteredTodoList} />
    </>
  )
}

export default App;