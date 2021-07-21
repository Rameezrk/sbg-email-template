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

    {data.map((data) => {
      return  <ul key={data.id}>
                <li>{data.subject}</li>
              </ul>
    })}

    
    {/* <div>
    //This is where I want the select value data.text to be displayed here  
    </div> */}
   
       
    </div>
  );
}

export default App;
