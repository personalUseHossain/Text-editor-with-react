import React, {useState} from 'react'

export default function TextAria(props) {
    const [text, setText] = useState('');
    const touppercase = ()=>{
       let newTxt = text.toUpperCase()
        setText(newTxt)
    }
    const tolowercase = ()=>{
       let newTxt = text.toLowerCase()
        setText(newTxt)
    }
    const Cleartextaria = ()=>{
        setText('')
    }
    const textareachange = (e)=>{
        setText(e.target.value)
    }

    const CopyText = ()=>{
        let txt = document.getElementById('txtarea');
        // txt.select();
        navigator.clipboard.writeText(txt.value)
        
    }

    





    
  return (
    <>
    <div id='hoga' style={props.style}>
    <div  className='container'>
        <h2>Enter you text here to analyze</h2>
        <textarea style={props.style} id="txtarea" onChange={textareachange}   cols="100" rows="10" value={text}></textarea>
        <div className='buttons'>
            <button onClick={touppercase} className=''>To upper Case</button>
            <button onClick={tolowercase} className=''>To lower Case</button>
            <button onClick={Cleartextaria} className=''>Clear Text</button>
            <button onClick={CopyText} className=''>Copy Text</button>
        </div>
        
    </div>
    <div className="preview">
        <h3>Preview</h3>
        <div className='previewcontainer'>{text}</div>
        </div>
        </div>
    <div style={props.mode} className="info">
    <h3>Info</h3>
        <p>There are {text.length} charecter and {text.split(' ').length -1} word in your paragraph</p>
    </div>
    </>
  )
}
