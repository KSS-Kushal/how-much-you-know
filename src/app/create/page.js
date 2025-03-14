"use client";
import React,{useState} from 'react';
import { Button } from "@material-tailwind/react";
import {data} from '../data';
import MyChoice from '../../components/myChoice';

const Create=()=>{
  const [currentIndex, setCurrentIndex] =useState(0);
  const [questionAnswer,setQuestionAnswer]=useState([]);
 
  const handleNext = () => {
    const size = data().length;
  console.log (size)
    setCurrentIndex(prev=>(Math.min(prev+1,size-1)))
    
  };

  const onSelectAnswer = (item) =>{
   setQuestionAnswer(prev=>[...prev,item]);
  }

  const handleSubmit =async()=>{
    const payload={
      name:localStorage.getItem('name'),
      questionAnswer
    }
    const res=await fetch('/api/questionAnswer',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(payload)
    })
     const data=await res.json();
     console.log(data);
  }
  
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-screen">
       <div className="flex flex-col items-center justify-center gap-3">
         <p >
           {currentIndex}
         </p>
          <MyChoice question={data()[currentIndex]?.question} option={data()[currentIndex]?.option} onSelectAnswer={onSelectAnswer}/>
         
        </div>

      <div className="flex items-center justify-center ">
        {data ().length-2===currentIndex ?
        <Button color="indigo" onClick={handleSubmit}>
      Submit 
        </Button>:
        <Button color="indigo" onClick={handleNext}>
        Next
        </Button>}
      </div>
       
    </div>
  )
}
export default Create;