import { NextResponse } from 'next/server'
import { connectDB } from '../../../../db'
import QuestionAnswer from '../../../models/QuestionAnswer'


connectDB();
export const POST=async (req)=>
  {
    try{
    const body = await req.json();
    const {name,questionAnswer}=body;
    const data=await QuestionAnswer.create({name,questionAnswer});
    return NextResponse.json({
      success:true,
      msg:"success",
      data
    }, {status:200})
    }
    catch(e){
      console.log(e);
      return NextResponse.json({
        success:false,
        msg:"error",
      
      }, {status:500})
    }
  }



export const GET=async (req)=>{
  try {
    const data=await QuestionAnswer.find();
    return NextResponse.json({success:true,msg:"success",data},{status:200})
  } catch (e) {
return NextResponse.json({success:false,msg:"error"},{status:500})
  }
  
}