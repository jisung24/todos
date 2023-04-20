import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [todos, setTodos] = useState("");
  let [todoList, setTodoList] = useState([]);
  let handleSubmit = (e) => {
    e.preventDefault();
    // 새로고침 방지!
    console.log(todos);
    setTodoList([...todoList, todos]);
  };

  let handleChange = (e) => {
    const { name, value } = e.target;
    setTodos({ ...todos, [name]: value });
    console.log(todos);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <button>ADD</button>
      </form>

      <ul>
        {todoList.map((v) => (
          <li> {v.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
