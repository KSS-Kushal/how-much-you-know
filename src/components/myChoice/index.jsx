import React from 'react';


const MyChoice=({question,option =[],onSelectAnswer=()=>{}})=>{
  return(
    <div className="flex flex-col justify-center items-center mx-3 gap-5">
      <p className="text-2xl">
        {question}
      </p>
      <div className="w-full h-full flex-wrap flex gap-3 items-center justify-center">
        {option.map((item,index)=>(
      <div key={index} className="w-32 h-32 flex flex-col gap-1 " onClick={()=>onSelectAnswer({question,answer:item.text})}>
      <img className="rounded-md" src={item.image}/>
          <p className="text-center">
            {item.text}
          </p>
        </div>
        ))}

        
      </div>

    </div>
  )
}
export default MyChoice;