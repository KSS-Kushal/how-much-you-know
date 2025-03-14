"use client";
import React,{useState} from 'react';
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Matching from '../components/matching';
import {data} from './data';

export default function Home(){
  const [currentIndex, setCurrentIndex] =useState(0);

  const [name,setName]=useState('');
  const [showQuestion,setShowQuestion]=useState(false);
  
  const onChangeName=(e)=>{
    setName(e.target.value);
  }

    
  const handleNext = () => {
    if(!showQuestion){
      if(name.length>2){
      setShowQuestion(true);
        localStorage.setItem('name',name);
    }
    }
    else{
      
    const size = data().length;
    
    setCurrentIndex(prev=>(Math.min(prev+1,size-1)))
    }
  };
  
  return (
    <div className="flex items-center justify-center flex-col gap-3  h-screen">
      <div className="flex flex-col items-center justify-center gap-3">
        {!showQuestion &&<p className="text-2xl text-blue-500">
        Welcome 
        </p>}
        {showQuestion &&<p className="text-lg">
          {currentIndex+1}/{data().length}
        </p>}
        
      </div>
      <div className="flex justify-center items-center mx-5 flex-col gap-5">
        {!showQuestion && <Input  label="YOUR NAME" placeholder="Enter your name" value={name} onChange={onChangeName}/>}
      
        {showQuestion && <div className="flex flex-col items-center justify-center gap-3">
          <Matching question={data()[currentIndex]?.question} option={data()[currentIndex]?.option}/>
        </div>}

      <div className="flex items-center justify-center ">
        
        <Button color="indigo" onClick={handleNext}>
          Next
        </Button>
      </div>
      
      </div>
      
      
    </div>
  );
}
