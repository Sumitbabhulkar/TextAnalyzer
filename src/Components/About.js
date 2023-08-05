import React from 'react'

export default function About(props) {
  
  
  
  
const myStyle = {
  color : props.mode === "dark" ? "white" :"black",
  backgroundColor : props.mode === "dark" ? "black" :"white"

}
 

  
  
  return (

  <>  
  <div className='Container my-3 mx-3' style={myStyle}>
  <h1>Welcome! to TextAnalyzer</h1>
  <p>This is a free text analysis tool for handling text you can change your text in anything you want!!!
  </p>
  </div>

  </>
  )
}