import React,{ useRef, useState, } from 'react'

function App() {
  const [arr, setArr] = useState([]); 
  const [text, setText] = useState('');

  const AddFn = () =>{
    setArr(() =>[...arr,text]); //need to copy the arr,sure the data be saved
    setText("") //and clear the input data
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        placeholder="Input wanna do thing " 
        value={text} 
        onChange={(event)=>setText(event.target.value)} 
      />
      <p>{text}</p>
      <br />
      <ul>
        {arr.map((item) => <li key={item.toString()}>{item}<br/></li>)}
      </ul>
      <button onClick={AddFn}>Add</button>
      <p></p>
    </div>
  )
}



export default App
