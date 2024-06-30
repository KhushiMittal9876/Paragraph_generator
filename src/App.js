import React,{ useState } from 'react'
import Data from './Data';

function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);

  const handleSubmit = (e) =>{
  e.preventDefault();
  let amount = parseInt(count);// convert string value of count to a integer number
   
  if(count <= 0){
    amount = 1;
  }
  if(count > 8){
    amount = 8;
  }
  setText(Data.slice(0,amount))
  }


  return (
    <>
    <div className='Main'>
      <h1 className='title'>Random Paragraph Generator</h1>
      <form className='loremform' onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Paragraphs: 
        </label>
        <input type="number" name='amount' id='amount' value={count}
         onChange={(e)=>setCount(e.target.value) } 
        />
        <button type='submit' className='btn'>Get Me!</button>
      </form>
    </div>
    <article className='loremtext'>
       {text.map((item,index)=>{
        return <p key={index}>{item}</p>
       })}
      </article>
    </>
  )
}

export default App
