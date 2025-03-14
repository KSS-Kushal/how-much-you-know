import mongoose from "mongoose";



const QuestionAnswer =new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  questionAnswer:[
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      }
    }
  ]
  ,
  result:[
    {
      name: {
        type: String,
        
      },
      score:{
        type:Number}
    }
  ]
},{timestamps:true});
export default mongoose.models.QuestionAnswer || mongoose.model("QuestionAnswer", QuestionAnswer);