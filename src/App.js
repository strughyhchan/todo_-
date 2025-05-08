
import './App.css';
import { useState } from "react";


function App() {
  const [toDo,setToDo] = useState("");
  const[toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  
  const handleDelete = (deleteIndex) => {
    setToDos(currentArray => 
      currentArray.filter((_, index)=>index !== deleteIndex)

    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  };
  
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
        onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder="Write your to do...">

        </input>
        <button className="addButton">Add To Do</button>
      </form>
      <hr />
      <ul className="todoList">
        {toDos.map((item,index) =>( 
          <li key={index} className="todoItem">
            {item}
            <button className="Dij"
            onClick={()=> handleDelete(index)}>
              ❌
            </button>
            </li>
          ))}
      </ul>
    </div>
     
  );
}

export default App;
