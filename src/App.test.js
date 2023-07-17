
    import React, { useState } from 'react';

    const WageCalculator = () => {
      const [employeeCategory, setEmployeeCategory] = useState('');
      const [employeeType, setEmployeeType] = useState('');
      const [hoursWorked, setHoursWorked] = useState(0);
      const [holidayHour, setHolidayHour] = useState(0);
      const [sleepTimes, setSleepTimes] = useState(0);
      const [extraSleepTimes, setExtraSleepTimes] = useState(0);
      const [wakingNightTimes, setWakingNightTimes] = useState(0);
      const [regularPay, setRegularPay] = useState('');
    
      const calculateWage = (event) => {
        event.preventDefault();
        const userPrompts = {
          employee_category: employeeCategory,
          employee_type: employeeType,
          hours_worked: hoursWorked,
          holiday_hour: holidayHour,
          sleep_times: sleepTimes,
          extra_sleep_Times: extraSleepTimes,
          waking_night_Times: wakingNightTimes,

         

        }
  
        
      }
}
          console.log(userPrompts)





   
  