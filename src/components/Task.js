import './Task.css';

function Task({data, makeCheck}) {
    console.log('data', data)
    return (
        <div className={data.isDone ? "containerDone" : "container"}>
            <input type="checkbox" checked={data.isDone} onChange={() => makeCheck(data.id)}/>
            <p>{data.text}</p>
            <img className="trash-icon" src={require('../assets/icons/trash.png')}/>
        </div>
    );
}

export default Task;
