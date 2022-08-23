import './Task.css';

function Task({data}) {
    return (
        <div className="container">
            <input type="checkbox" />
            <p>{data.text}</p>
            <img className="trash-icon" src={require('../assets/icons/trash.png')}/>
        </div>
    );
}

export default Task;
