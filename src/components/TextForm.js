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
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value={text}></textarea>
                    <button className="btn btn-primary mt-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mt-2 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mt-2 mx-3" onClick={handleSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mt-2 mx-3" onClick={handleClear}>Clear Text</button>
                    <button className="btn btn-primary mt-2 mx-3" onClick={handleCopy}>Copy Text</button>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p><b>Your text contains {text.length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</b></p>
                <p><b>{0.008 * text.split(" ").length} minutes read</b></p>
                <hr />
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter the text to preview'}</p>
            </div>
        </>
    )
}