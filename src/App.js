import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; // * 함수가 동작하지 않는다.(=== return false)
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  return (
    <div>
      <div>Array length: {toDos.length}</div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div />
    </div>
  );
}

export default App;
