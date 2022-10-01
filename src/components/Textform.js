
import React, { useState } from 'react';
export default function Textform(props) {
    const [text, setText] = useState('');
    const upperCase = () =>{
        // console.log('uppercase was click')
    //    let newText = 
        setText(text.toUpperCase());
        props.showAlert('Change to Uppercase','success');

    }
    const lowerCase =()=>{
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert('Change to lowercase','success');


    }
    const reset =()=>{
        let newText3 ='';
        setText(newText3);
        props.showAlert('Reset','success');

    }
    const handleTextToSpeech = () => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;     //  text what you written
        window.speechSynthesis.speak(msg);
      };

      let handleCopy = () => {
        navigator.clipboard.writeText(text);
        alert("Copied the text");
      }

 
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    return (
        <>
        <div>
            <h2 style={{color:props.modes==='light'?'black':'white'}}>{props.texhHeading}</h2>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.modes==='dark'?'#0e6961':'white'}} id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary rounded-pill" onClick={upperCase}>To UpperCase</button>
            <button type="button" className="btn btn-warning mx-2 rounded-pill" onClick={lowerCase}>To LowerCase</button>
            <button type="button" className="btn btn-danger mx-2 rounded-pill" onClick={reset}>Reset</button>
            <button type="button" className="btn btn-success mx-2 rounded-pill" onClick={handleTextToSpeech}>Text 2 Voice</button>
            <button type="button" className="btn btn-dark mx-2 rounded-pill" onClick={handleCopy}>Copy text</button>

            
            <div className="container my-2" style={{color:props.modes==='dark'?'dark':'light'}}>
                <h3>Your Result shown below:</h3>
                <p>No of Words { text==="" ?0 :text.trim().split(" ").length}, No of letters {text.length}</p>
            </div>
            </div>
            </>
    )
}
