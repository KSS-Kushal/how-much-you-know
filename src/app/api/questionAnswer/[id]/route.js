import { NextResponse } from 'next/server'
import { connectDB } from '../../../../db'
import QuestionAnswer from '../../../models/QuestionAnswer'


connectDB();
export const GET=async (req,{params})=>
  {
    try{

      const {id}=params;
    const data=await QuestionAnswer.findById(id);
    NextResponse.json({
      success:true,
      msg:"success",
      data
    }, {status:200})
    }
    catch(e){
      NextResponse.json({
        success:false,
        msg:"error",
      
      }, {status:500})
    }
  }