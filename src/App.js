import {useState} from 'react';
import './App.css';
import Input from "./components/Input";
import Button from "./components/Button";
import Task from "./components/Task";

function App() {
    const [tasks, setTask] = useState([]);
    const [text, setText] = useState('');

    const createTask = () => {
        const task = {
            id: Date.now(),
            text: text,
            isDone: false
        }
        // console.log('DATA', task)
        setTask(tasks => [...tasks, task]);
        setText('');
    }

  return (
    <div className="wrapper">
      <h1>To-Do list</h1>
      <div className="createForm">
        <Input onChange={(event) => setText(event.target.value)} value={text}/>
        <Button onClick={createTask}/>
      </div>
        {
            tasks.map((task) => <Task key={task.id} data={task} />)
        }
    </div>
  );
}

export default App;
