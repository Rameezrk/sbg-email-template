import React from 'react'
import './App.css';
import EmailTemplates from './EmailTemplates.json'


console.log(EmailTemplates)
const data = EmailTemplates

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>


      <h1>Email Template Responses</h1>
      <label>Select the templated response </label>
      <select>
        {data.map(item => (
          <option key={item.id} value={item.subject}>
            {item.subject}
          </option>
        ))}
      </select>

      <div><label>Analyst Name: </label>
      <select>
        <option>Rameez Khawaja</option>
        <option>James Whisker</option>
      </select></div>
      
      <div><label>Customer Name: </label>
        <input placeholder='Insert Customer name here'></input>
      </div>

      <div><label>Customer ID: </label>
        <input placeholder='Insert Customer ID here'></input>
      </div>

    {data.map((data) => {
      return  <ul key={data.id}>
                <li>{data.subject}</li>
              </ul>
    })}

    
    {/* <div>
    //This is where I want the select value data.text to be displayed here  
    </div> */}
   
    {/* I also want the specific inputs and names to be populated on the text.  */}

       
    </div>
  );
}

export default App;
