import logo from './assets/investment-calculator-logo.png';
import Head from './components/Head';

import UserForm from './components/UserForm';
import Table from './components/Table';
import React, { useState } from 'react';
function App() {
  const resetUI = () => {
    setShow(false);
  };
  const [tabData, setTabData] = useState([]);
  const [show, setShow] = useState(false);
  const calculateHandler = (userInput) => {
    

    const yearlyData = []; 

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    let totalInterest = 0;
    let investedCap = currentSavings;
   
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      investedCap += yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
     
        year: i + 1,
        totalSavings: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest,
        investedCap,
      });
    }
    totalInterest = 0;
    setTabData(yearlyData);
    setShow(true);
   
  };
  const headArr = [
    ' Year',
    'Total Savings',
    'Interest (Year)',
    'Total Interest',
    'Invested Capital',
  ];
  const title = 'Investment Calculator';
  return (
    <div>
      <Head title={title} logo={logo} />

      <UserForm onSub={calculateHandler} onResetTable={resetUI} />
      {show ? (
        <Table tableData={tabData} head={headArr} />
      ) : (
        <p style={{ textAlign: 'center' }}>No invesment calculated yet.</p>
      )}

     
    </div>
  );
}

export default App;
