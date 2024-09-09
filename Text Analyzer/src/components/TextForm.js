import React, {useState} from 'react'
import './TextForm.css';


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleText = (event) => {
        setText(event.target.value);
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);;
        // newText = newText
        setText(newText.join(" "));
    }

    const copyText = () => {
        const textarea = document.getElementById('exampleFormControlTextarea1');
        textarea.select();
        navigator.clipboard.writeText(textarea.value);
    }

    const changeToSentencecase = () => {
        let newText = '';
        let sentenceArray = text.split(". ");
        sentenceArray.forEach((sentence, index) => {
            sentence = sentence.trim();
            newText += sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();

            if (index < sentenceArray.length - 1) {
                newText += '. ';
            }
            setText(newText);
        });
    }

    const changeToLowercase = () => {
        const newText = text.toLowerCase();
        setText(newText);
        // console.log(newText);
    }
    
    const changeToUppercase = () => {
        const newText = text.toUpperCase();
        setText(newText);
        // console.log(newText);
    }

    const cleaText = () => {
        document.getElementById('exampleFormControlTextarea1').value = '';
    }

    const toggleTheme = {
        backgroundColor: props.mode === 'light' ? 'white' : '#030721',
        color: props.mode==='light' ? 'black' : 'white'
    }

    return (

        <div className="container my-2" style={toggleTheme}>
            <h1 className='heading my-2'>{props.heading}</h1>
            {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea className="form-control" style={{backgroundColor: props.mode==='light' ? 'white' : '#030721', color: props.mode==='light' ? 'black' : 'white'}} placeholder="Enter the Text Here" value={text} onChange={handleText} id="exampleFormControlTextarea1" rows="10"></textarea>
            <div className="txt-summary container  border py-2">
                {`Sentences : ${text === ''? 0 : text.trim().split(". ").length} \u00A0 | \u00A0 Words : ${text === ''? 0 : text.trim().split(/\s+/).length} \u00A0 | \u00A0 Characters : ${text.length} \u00A0 `}
            </div>

            <button className="btn btn-primary my-3 mx-1" onClick={changeToSentencecase}>Sentence case</button>
            <button className="btn btn-primary my-3 mx-1" onClick={changeToUppercase}>UPPER case</button>
            <button className="btn btn-primary my-3 mx-1" onClick={changeToLowercase}>lower case</button>
            <button className="btn btn-primary my-3 mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary my-3 mx-1" onClick={copyText}>Copy to clipboard</button>
            <button className="btn btn-dark mx-1" onClick={cleaText}>clear</button>
        </div>
    );
}
