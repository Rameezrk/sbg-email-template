import React, {useState} from 'react'
import './App.css';
import EmailTemplates from './EmailTemplates.json'

// console.log(EmailTemplates)
const data = EmailTemplates


function App() {

  const [selected, setSelected] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerId, setCustomerId] = useState('')
  const [analystName, setAnalystName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  
  // let output = selected && data.filter(mail => mail.subject === selected)[0].text
  // console.log(output)

  let newDate = new Date(date).toLocaleDateString()

  // console.log(newDate)

  const mapObj = {
    CUSTOMER: customerName,
    ACCOUNTID: customerId,
    DATE: newDate,
    ANALYST: analystName,
    TIME: time
  }


  return (
    <div className="App">
      
      <h1>Email Template Responses</h1>
      <label>Select the templated response </label>
      <select onChange={(event) => {setSelected(event.target.value)}}>

        {data.map(item => (
          <option key={item.id} value={item.subject}>
            {item.subject}
          </option>
        ))}
      </select>

        {/* {JSON.stringify(selected)} */}

      <div><label>Analyst Name: </label>
      <select onChange={event => setAnalystName(event.target.value)}>
        <option>Select Analyst</option>
        <option>Rameez</option>
        <option>James</option>
      </select></div>
      
      <div><label>Customer Name: </label>
        <input type='text' 
        placeholder='Insert Customer name here'
        onChange={event => setCustomerName(event.target.value)}
        ></input>
      </div>

      <div><label>Customer ID: </label>
        <input type='text' 
        placeholder='Insert Customer ID here'
        onChange={event => setCustomerId(event.target.value)}
        ></input>
      </div>

      <div><label>Deadline Date: </label>
        <input 
        type='date' 
        onChange={event => setDate(event.target.value)}
        ></input>
      </div>

      <div><label>Calling time: </label>
        <input 
        type='time' 
        onChange={event => setTime(event.target.value)}
        ></input>
      </div>
      

      <button onClick={() => {navigator.clipboard.writeText(selected && data.filter(mail => mail.subject === selected)[0].text.replace(/\b(?:CUSTOMER|ACCOUNTID|DATE|ANALYST|TIME)\b/gi, matched => mapObj[matched]))}}
      >Copy Text</button>

    {/* {data.map((data) => {
      return  <ul key={data.id}>
                <li>{data.subject}</li>
              </ul>
    })} */}

   

    {/* <div> 
    {selected && data.filter(mail => mail.subject === selected)[0].text}
    </div> */}
    
    {/* <div><label>Subject Heading: </label>{selected}</div> */}

    <pre>{selected && data.filter(mail => mail.subject === selected)[0].text.replace(/\b(?:CUSTOMER|ACCOUNTID|DATE|ANALYST|TIME)\b/gi, matched => mapObj[matched])}</pre>
    
    {/* Need to get the handleclick to replace the output text 

    Need to add extra information onto the JSON which is straight forward 

    The line paragrah splits also need to happen before the button is clicked so the text is displayed
    more clearly  

     */}

     <div className='footer'>Created by <a target={'_blank'} rel="noreferrer noopener" href={'https://github.com/Rameezrk'}>Rameez Khawaja</a></div>
       
    </div>
  );
}

export default App;
