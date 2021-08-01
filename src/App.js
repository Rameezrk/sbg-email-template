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
  

  let newDate = new Date(date).toLocaleDateString()

  // console.log(newDate)

  const mapObj = {
    SBGCUSTOMER: customerName,
    ACCOUNTID: customerId,
    DATE: newDate,
    ANALYST: analystName,
    SBGTIME: time
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

       

      <div><label>Analyst Name: </label>
      <select onChange={event => setAnalystName(event.target.value)}>
        <option>Select Analyst</option>
        <option>Rameez</option>
        <option>James</option>
        <option>Sophia</option>
        <option>Amelia</option>
        <option>Adam</option>
        <option>Gabrielle</option>
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
      

      <button onClick={() => {navigator.clipboard.writeText(selected && data.filter(mail => mail.subject === selected)[0].text.replace(/\b(?:SBGCUSTOMER|ACCOUNTID|DATE|ANALYST|SBGTIME)\b/gi, matched => mapObj[matched]))}}
      >Copy Text</button>

    <pre>{selected && data.filter(mail => mail.subject === selected)[0].text.replace(/\b(?:SBGCUSTOMER|ACCOUNTID|DATE|ANALYST|SBGTIME)\b/gi, matched => mapObj[matched])}</pre>
    

     <div className='footer'>Created by <a target={'_blank'} rel="noreferrer noopener" href={'https://github.com/Rameezrk'}>Rameez Khawaja</a></div>
       
    </div>
  );
}

export default App;
