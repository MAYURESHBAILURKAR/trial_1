import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Posts from './components/Posts';

function App() {
  // const [text,setText]=useState("")
  // const [todos,setTodo]=useState([])
  
  // const handleSate=(e)=>{
  //   const word=e.target.value;
  //   setText(word)
  //   console.log(e.target.value)
  // }

  // const handleAdd=()=>{
  //   const newTodo={
  //     id:Date.now().toString(),
  //     title:text,
  //     status:false
  //   }
  //   setTodo([...todos,newTodo])
  //   setText("")
  // }
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          <input value={text}  onChange={handleSate} placeholder='Add something'/> */}
          {/* <h1>{text}</h1> */}
          {/* <button onClick={handleAdd}>ADD</button>
        </div>
        <ul>
          {
            todos.map(el=><li>{el.title}-{el.id}</li>)
          }
        </ul> */}
        <Posts/>
      </header>
    </div>
  );
}

export default App;
