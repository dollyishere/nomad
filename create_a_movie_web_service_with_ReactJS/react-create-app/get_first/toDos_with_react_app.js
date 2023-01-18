import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return
    } 
    setToDos(currentArray => [...currentArray, toDo])
    setToDo("")
  }
  const deleteBtn = (targetIndex) => {
    console.log(targetIndex)
    setToDos(toDos.filter((_, currentIndex) => currentIndex !== targetIndex))
    console.log(toDos)
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do"/>
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.reverse().map(
          (item, index) => 
          <li key={index}>
            {item} 
            <button
              onClick={() => deleteBtn(index)}
              >
              x
            </button>
          </li>
          )}
      </ul>
    </div>
    
  )
}

export default App;