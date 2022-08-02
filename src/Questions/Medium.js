import React, { useEffect, useState } from 'react'
import axios from "axios";

const Medium = () => {
    const [questions,setQuestions]=useState([])
    useEffect(() => {
      const quesApi=async()=>{
        try {
            const res = await axios.get(`https://script.googleusercontent.com/macros/echo?user_content_key=sPx7oaLlrSUjShPRyjMuxgLusErw-B-LsfqFJn4gSdpslX17ddWmVel_a7sRDfhZN84I-sfdMGheqJ1jQL7T98eBwR9fYJw0m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK2yyIUJZS_RGj3881NQ3ur4wIzedoFkFASJ5IzlSKg_TCCiSazSxkTA2EpWndJrsVD9flFM3jHCV0CPX6Q6qzX4XDhLM_RWsw&lib=MVlCh-TY9-fMj4PtJKqD74tiR4gTsQqJ6`);
            // console.log(res.data);
            setQuestions(res.data.data);
          } catch (err) {
            console.log(err.status);
          }
        };
        quesApi()
    }, [])
    
  return (
    <div>{
        questions.filter((question)=> question.Level==='Medium')
        .map((question,idx)=>{
            const {Questions,QuestionLink,Level} = question
             return (<div key={idx} className="question">
             <h5>{Questions}</h5> 
             <a href={QuestionLink} target='_blank' rel="noreferrer">Click To Solve</a>
             <br />
             <small>{Level}</small>
     <hr/></div>)  
        })
    }</div>
  )
}

export default Medium 