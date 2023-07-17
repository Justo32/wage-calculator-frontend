import './App.css';
import React, { useState } from 'react';

  
function App() {
    const [employeeCategory, setEmployeeCategory] = useState('');
    const [employeeType, setEmployeeType] = useState('');
    const [hoursWorked, setHoursWorked] = useState(0);
    const [holidayHour, setHolidayHour] = useState(0);
    const [sleepTimes, setSleepTimes] = useState(0)
    const [extraSleepTimes, setExtraSleepTimes] = useState(0);
    const [wakingNightTimes, setWakingNightTimes] = useState(0);

     const calculateWage = (event) => {
      event.preventDefault();
      const userPrompts = {
        employee_category: employeeCategory,
        employee_type: employeeType,
        hours_worked: parseInt(hoursWorked), // CONVERT STRING TO NUMBER
        holiday_hour: parseInt(holidayHour), // CONVERT STRING TO NUMBER
        sleep_times: parseInt(sleepTimes),   // CONVERT STRING TO NUMBER
        extra_sleep_times: parseInt(extraSleepTimes), // CONVERT STRING TO NUMBER
        waking_night_times: parseInt(wakingNightTimes), // CONVERT STRING TO NUMBER
      }
      console.log(userPrompts);
      // BELOW IT WILL BE THE CONNECTION WITH THE BACKEND   
      fetch('http://127.0.0.1:5000/calculate-wage', { // The address of the Python Flask Server is at http://127.0.0.1:5000/calculate-wage
        method: 'POST', // We make a POST request to the Python Flask Server
        headers: { // We set the HTTP header as application/json because we will always work with values in JSON format
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPrompts) // Here we send the userPrompts in JSON format to Python Flask Server
      
      })
        .then(response => response.json()) // First we make sure that the response is in JSON Format
        .then(data => alert(`Your total wage for this month is ${data.total_wage}.`)) // Then we get from the JSON object value of key total_wage and display it to the user
        .catch(error => alert('Error:', error)); // In case of error we display the error to the user
      // END OF THE CONNECTION WITH THE BACKEND PYTHON FLASK SERVER
    
    }
     
  
  return (
  
  <div className="container">
      <div className="left_side">
        <div className="calculator-box">
          <img className="dancing-image" src="https://i5.walmartimages.com/asr/f426d1fd-da00-412f-8b5b-303b5726e8ae_1.0c1ff7ffbd1f007fc8f35008f0abfde0.jpeg" alt="Calculator"/>
        </div>
      </div>
      <div className="right_side">
        <h1>Wage Calculator</h1>
        <h5>This calculation is based on a full time hours of 150 and part time hours of 80</h5>
        <form id="wageForm" onSubmit ={calculateWage}>
      
          <select id="employeeCategory" required=""value= {employeeCategory}
            onChange={(e) => setEmployeeCategory(e.target.value)}>
            <option value=""disabled selected>Employee Category</option>
            <option value="house-keeper">House-keeper</option>
            <option value="support-worker">Support-Worker</option>
            <option value="senior-support-worker">Senior-Support-Worker</option>
            <option value="deputy-manager">Deputy-Manager</option>
        
          </select>
          
           <select id="employeeType" required=""  value= {employeeType}
            onChange={(e) => setEmployeeType(e.target.value)}>
            <option value="" disabled selected>Employee Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
          
          </select>
          <input type="number" id="hoursWorked" placeholder="Hours Worked" required min="0" step="any"
          value={hoursWorked}
          onChange ={(e) => setHoursWorked(e.target.value)}/>
          <input type="number" id="holidayHour" placeholder="Holiday Hour" min="0" step="any"
           value={holidayHour}
           onChange ={(e) => setHolidayHour(e.target.value)}/>
          <input type="number" id="sleepTimes" placeholder="Sleep Times" min="0"
           value={sleepTimes}
           onChange ={(e) => setSleepTimes(e.target.value)}/>
          <input type="number" id="extraSleepTimes" placeholder="Extra Sleep Times" min="0"
           value={extraSleepTimes}
           onChange ={(e) => setExtraSleepTimes(e.target.value)}/>
          <input type="number" id="wakingNightTimes" placeholder="Waking Night Times" min="0"
           value={wakingNightTimes}
           onChange ={(e) => setWakingNightTimes(e.target.value)}/>  
          <button type="submit">Calculate wage</button>
          <p>{employeeCategory}</p>
          <p>{employeeType}</p>
        </form>
       
        <p id="result"></p>
         <script src="main.js"></script>
        <footer className="dancing-footer"> 
           <h2>THIS PROJECT IS DONE BY J.T</h2>
        </footer>
      </div>
  </div>
      
    
     
  );
}

export default App;
