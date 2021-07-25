import React, {useState} from 'react'
import './App.css';
import EmailTemplates from './EmailTemplates.json'


console.log(EmailTemplates)
const data = EmailTemplates



function App() {

  const [selected, setSelected] = useState('')

  let output = selected && data.filter(mail => mail.subject === selected)[0].text
  console.log(output)

  let handleClick = () => {
    const mapObj = {
      laborum: "Kind Regards",
      est: "TEST"
    }
  
    
  output.split('\n').map(function(item) {
    return ({item})
  })
    

    let replaceOutput = output.replace(/\b(?:laborum|est)\b/gi, matched => mapObj[matched])
    console.log(replaceOutput)

    
  }

  return (
    <div className="App">
      <h1>Hello World</h1>


      <h1>Email Template Responses</h1>
      <label>Select the templated response </label>
      <select onChange={(event) => {setSelected(event.target.value)}}>

        {data.map(item => (
          <option key={item.id} value={item.subject}>
            {item.subject}
          </option>
        ))}
      </select>

        {JSON.stringify(selected)}

      <div><label>Analyst Name: </label>
      <select>
        <option>Rameez Khawaja</option>
        <option>James Whisker</option>
      </select></div>
      
      <div><label>Customer Name: </label>
        <input type='text' placeholder='Insert Customer name here'></input>
      </div>

      <div><label>Customer ID: </label>
        <input type='text' placeholder='Insert Customer ID here'></input>
      </div>

      <div><label>Deadline Date: </label>
        <input type='date' ></input>
      </div>

      <button onClick={handleClick}>Convert Text</button>

    {/* {data.map((data) => {
      return  <ul key={data.id}>
                <li>{data.subject}</li>
              </ul>
    })} */}

   

    <div>
    {selected && data.filter(mail => mail.subject === selected)[0].text}
    </div>
    

    {/* <div>{newOutput}</div> */}

    {/* npm i -D prettier */} 

  
    {/* <select onChange={e=> console(e)}/> */}

    {/* <pre>{JSON.stringify(someObject,null, 2)}</pre> */}

    {/* const greetWithTemplate= (custmer)=>{return `Hello ${customer}`} */}

    {/* I also want the specific inputs and names to be populated on the text.  */}

       
    </div>
  );
}

export default App;
