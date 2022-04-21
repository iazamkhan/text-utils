import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "Success")
    }

    const handleLoClick = () => {
        //console.log("Lowercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "Success")
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Text cleared!", "Success")
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "Success")
    }

    const handleCopy = () => {
        let text = document.querySelector('#myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "Success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        //console.log("Handle on change");
    }

    const [text, setText] = useState(' ')
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className="mb-3">{props.heading}</h1>
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value={text}></textarea>
                    <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleClear}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
                </div>
            </div>
            <div className="container my-3"> disabled={text.length===0}
                <h2>Your Text Summary</h2>
                <p><b>Your text contains {text.length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</b></p>
                <p><b>{0.008 * text.split(" ").length} minutes read</b></p>
                <hr />
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
            </div>
        </>
    )
}