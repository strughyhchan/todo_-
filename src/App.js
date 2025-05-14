
import './App.css';
import { useState } from "react";


function App() {
  const [toDo,setToDo] = useState("");
  const[toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  //삭제기능
  const handleDelete = (deleteIndex) => {
    setToDos(currentArray => 
      currentArray.filter((_, index)=>index !== deleteIndex)
      //배열 새로생성성
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
  //리스트와 엑스버튼튼
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
//완료
export default App;
