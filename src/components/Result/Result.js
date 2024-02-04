import React from 'react'
import './Result.css'

export default function Result(props) {
  const { score } = props;
  let percentage = ''
  if(score === 1){
    percentage = '20%'
  }else if(score === 2){
    percentage = '40%'
  }else if(score === 3){
    percentage = '60%'
  }else if(score === 4){
    percentage = '80%'
  }else if(score === 5){
    percentage = '100%'
  }else{
    percentage = '0%'
  }
  return (
    <div className='result-pad'>
      <h1>Results</h1>
      <h3>{score} out of 5 questions are correct - ({percentage})</h3>
      <button onClick={() => {window.location.reload()}}>Restart</button>
    </div>
  )
}
