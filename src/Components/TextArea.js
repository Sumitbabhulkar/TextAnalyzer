import React, {useState} from 'react'


export default function TextArea(props) {
    
    
    const [text, setText] = useState("Enter Text here");
    const onUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("success","Converted to UpperCase")
    }
    const onlowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("success","Converted to LowerCase")
    }
    const handleonChange = (event)=>{
        
        setText(event.target.value)
    }

    
    const handleClearText = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("success","Cleared Text")
    }


    



    return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
    
            <textarea class="form-control" id="mybox" value={text} onChange = {handleonChange} rows="10" style={{backgroundColor: props.mode==='dark' ? 'grey' :'white',color : props.mode==='dark' ? 'white' :'black'}} />
            </div>
            <button class="btn btn-primary my-3" onClick={onUpClick} >Convert to uppercase</button>
            <button class="btn btn-primary my-3 mx-3" onClick={onlowClick} >Convert to lowercase</button>
            <button class="btn btn-primary my-3 mx-1" onClick={handleClearText} >Clear Text</button>

   

        </div>

        <div className= 'container my-3'>

            <h2>Your Text Summary</h2>
            <p>{text.length>0?text : "Nothing to Preview here"}</p>
            <p>Your words {text.split(" ").length} and characters are {text.length}</p>
            <p>{0.08 * text.split(" ").length} minutes read</p>

        </div>
    </>


  )
}
