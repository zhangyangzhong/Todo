import React,{ useRef, useState, useEffect} from 'react'

function App() {
  const [arr, setArr] = useState([]); 
  const [text, setText] = useState('');


  const removeFN = (index) =>{
    console.log(index)
    setArr(function(prev){  //透過獲取index值,並且使用一個function取得oldValue
      return prev.filter((item,id) => id !== index)  //if id = false  return 
    })
  }

  const AddFn = () =>{
    setArr((prev) =>[...prev, text]); //need to copy the arr,sure the data be saved
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
      <button onClick={AddFn}>Add</button>
      <p>{text}</p>
      <br />
      <ul>    
        {arr.map((item,index) => <div key={item.toString()} style={{display:'flex'}}>
            <li>{index +1}.{item}</li>
            <button onClick={()=> removeFN(index)}>-</button>
          </div>)
        }      
      </ul>
    </div>
  )
}



export default App
