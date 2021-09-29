import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to Uppercase!");
    }
    const handleLowClick = () =>{
        let lowerText = text.toLowerCase();
        setText(lowerText)
        props.showAlert("Converted to Lowercase!");
    }
    const handleClearClick = () =>{
        let lowerText = '';
        setText(lowerText)
        props.showAlert("Text Cleared!");
    }
    const handleTitleClick = () =>{
        let titleCase = text.toLowerCase().split(' ');
        for (var i = 0; i< titleCase.length; i++){
            titleCase[i] = titleCase[i].charAt(0).toUpperCase()+titleCase[i].slice(1);
        }
        setText(titleCase.join(' '));
        props.showAlert("Converted to Titlecase!");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard!");
        document.getSelection().removeAllRanges();
    }

    const handleTrim = () =>{        
        let newtext = text.split(" ");
        let tnew = [];
        var j=0;
        for(var i=0; i<newtext.length; i++){
            if (newtext[i] !== ''){
                tnew[j] = newtext[i];
                j++;
            }
        }
        // setText(text.replace(/\s+/g, " "));
        setText(tnew.join(" "));
        props.showAlert("Extra spaces removed!");

    }

    const [text, setText] = useState('Enter text here');
        
    return (
    <>
        <div className="container" style = {{color: props.mode ==='light'?'black':'white'}}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>
            <div className='mb-3'>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#212529', color: props.mode ==='light'?'black':'white'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 m-3" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleTitleClick}>Convert to Titlecase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mxr-3" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleTrim}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style = {{color: props.mode ==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * (text.split(' ').filter((element)=>{return element.length !== 0}).length)} Minutes required to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter some text in textbox to preview'}</p>
        </div>
    </>
    );
}

