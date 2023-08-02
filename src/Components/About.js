import React, {useState} from 'react'

export default function About() {
  
  
  
  
  
  const [myStyle,setMyStyle] = useState({
    color:'black',
    backgroundColor:'white',
    border: '1px solid black'
  })
 
  const [btnText,setBtnText] = useState("Enable Dark Mode")
    

    const toggleStyle = ()=>{
        if (myStyle.color==="black"){
            setMyStyle({
                color:"white",
                backgroundColor:"black",
                border: '2px solid red'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white",
                border: '1px solid black'
                
            })
            setBtnText("Enable Dark Mode")
        }
    }

  
  
  return (

  <>  
  <div className='Container my-3 mx-3' style={myStyle}>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum asperiores fuga veniam, deserunt sit non voluptate optio amet? Officiis pariatur tempora porro sint. Nihil inventore alias, aliquid consectetur minima eum ipsa recusandae deleniti voluptates debitis fugiat atque doloremque magnam eius rem, totam repudiandae sunt similique adipisci blanditiis nobis. Omnis tenetur vel dicta, hic repellendus excepturi?
  </p>
  </div>
    <div className="container">
        <button class="btn btn-primary my-3 mx-1" onClick={toggleStyle}>{btnText}</button>
        </div>
  </>
  )
}
