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
        setTask(tasks => [...tasks, task]);
        setText('');
    }

    const changeIsDone = (id) => {
        tasks.map((task) => {
            if (task.id === id ) {
                task.isDone = !task.isDone
            }
            console.log(tasks)
        })
    }

  return (
    <div className="wrapper">
      <h1>To-Do list</h1>
      <div className="createForm">
        <Input onChange={(event) => setText(event.target.value)} value={text}/>
        <Button onClick={createTask} text="Press"/>
      </div>
        {
            tasks.map((task) => <Task key={task.id} data={task} makeCheck={(id) => changeIsDone(id)}/>)
        }
    </div>
  );
}

export default App;
