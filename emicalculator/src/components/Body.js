import React, { useEffect, useState } from 'react'
import InputComp from './InputComp'
import SliderComp from './SliderComp';
import { tenureConfig } from './utils/constants';

const Body = () => {
  
  const [principle,setPrinciple] =useState(0);
  const [intrest,setInsert] =useState(0);
  const [processingFee,setProcessingFee] =useState(0);
  const [downPayment,setDownPayment] =useState(0);
  const [emi,setEmi] =useState(0);
  const [tenure,setTenure] =useState(12);
  
  const calculateDP = (emi) => {
    if (!principle) return;

    const downPaymentPercent = 100 - (emi / calculateEmi(0)) * 100;
    return Number((downPaymentPercent / 100) * principle).toFixed(0);
  };

  const downPaymentUpdate =(e)=>{
    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    const dp = calculateDP(emi);
    setDownPayment(dp);
  }

  const emiUpdate =(e)=>{
    if (!principle) return;
    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    const emi = calculateEmi(dp);
    setEmi(emi);
  }

  const calculateEmi =(downpayment)=>{
        // EMI amount = [P x R x (1+R)^N]/[(1+R)^N-1]
        if (!principle) return;

        const loanAmt = principle - downpayment;
        const rateOfInterest = intrest / 100;
        const numOfYears = tenure / 12;
    
        const EMI =
          (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
          ((1 + rateOfInterest) ** numOfYears - 1);
    
        return Number(EMI / 12).toFixed(0);
  }

  useEffect(()=>{
    if (!(principle > 0)) {
      setDownPayment(0);
      setEmi(0);
    }

    const emi = calculateEmi(downPayment);
    setEmi(emi);
  },[tenure,principle]);

  return (

    <div>
        <div className='inputContainer'>
            <InputComp label="Enter Principle Amount" value={principle} onValueChange ={setPrinciple}/>
            <InputComp label="Enter Intrest Rate (in %)" value={intrest} onValueChange ={setInsert}/>
            <InputComp label="Enter Processing fee (in %)" value={processingFee} onValueChange ={setProcessingFee}/>         
        </div>

        <div>
            <SliderComp
            label="Down Payment"
            value={downPayment}
            onValueChange={emiUpdate}
            minVal={0}
            maxVal={principle}/>

            <SliderComp
            label="EMI"
            value={emi}
            onValueChange={downPaymentUpdate}
            minVal={calculateEmi(principle)}
            maxVal={calculateEmi(0)}/>

        </div>
        <div className='tenureConatiner'>
         {tenureConfig.map((tenureDuration)=>{
            return <span className={`tenure ${tenure === tenureDuration ? "selected" : ""}`} onClick={()=>setTenure(tenureDuration)}>{tenureDuration}</span>
            })
          }
        </div>
    </div>
  )
}

export default Body