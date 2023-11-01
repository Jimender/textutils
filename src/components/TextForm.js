import React, {useState} from 'react'

export default function TextForm(props){      

    const [text,setText] = useState('');
    const [bold,setBold] = useState(false);
    const [uniqueWords, setUniqueWords] = useState(new Set());
    const [shortestWordLength, setShortestWordLength] = useState(0);

    const words = text.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const spaceCount = (text.match(/ /g) || []).length;

    // functions

    const handleOnChange = (event) => {
        console.log('on change');
        let text = event.target.value;
        setText(text);  
        
        let newWords = text.split(/\s+/).filter(Boolean);
        setUniqueWords(new Set(newWords)); 

        shortestWord(newWords);
    }

    const convertToUpper = () => {
        console.log('Converted to Upper Case');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const convertToLower = () => {
        console.log('Converted to Upper Case');
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const makeBold = () => {
        console.log('Text set to Bold');
        setBold(true);
    }

    const clearText = () => {
        console.log('TextArea is cleared');
        setText('');
        setShortestWordLength(0);
        setUniqueWords(new Set());
    }

    const shortestWord = (words) => {
        if(words.length === 0) return 0;

        const shortestLength = words.reduce((value,word) => {
            if(word.length < value){
                return word.length;
            }

            return value;
        }, words[0].length);

        setShortestWordLength(shortestLength);
    };

    const printConsole = () => {
        console.log(words);
        console.log(uniqueWords);
    }

    return (
        <>
            <div className='container'>
                <h1 className="display-1">{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label"></label> */}
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-uppercase me-3" onClick={convertToUpper}>UpperCase</button>
                <button type="button" className="btn btn-primary btn-lowercase me-3" onClick={convertToLower}>LowerCase</button>
                <button type="button" className="btn btn-warning btn-bold me-3" onClick={makeBold}> Bold </button>
                <button type="button" className="btn btn-danger btn-clear me-3" onClick={clearText}> Clear </button>
                <button type="button" className="btn btn-danger btn-console me-3" onClick={printConsole}> Print Console </button>
            </div>
            <div className="container">
                <h2 className='mt-5'>Text Summary</h2>
                {/* <p className=''>{wordCount} <b>words</b> and {text.length} <b>Characters</b></p>
                <p>{(0.008 * text.length).toFixed(2)} <b>minutes</b></p> */}
                <table className='table table-bordered' style={{width: '40%'}}>
                    <tbody>
                        <tr>
                            <td className='ps-2 py-3'>Characters</td>
                            <td className='ps-2 py-3'>{text.length}</td>
                        </tr>
                        <tr>
                            <td className='ps-2 py-3'>Characters w/o spaces</td>
                            <td className='ps-2 py-3'>{text.length - spaceCount}</td>
                        </tr>
                        <tr>
                            <td className='ps-2 py-3'>Spaces</td>
                            <td className='ps-2 py-3'>{spaceCount}</td>
                        </tr>
                        <tr>
                            <td className='ps-2 py-3'>Words</td>
                            <td className='ps-2 py-3'>{wordCount}</td>
                        </tr>
                        <tr>
                            <td className='ps-2 py-3'>Unique Words</td>
                            <td className='ps-2 py-3'>{uniqueWords.size}</td>
                        </tr>
                        <tr>
                            <td className='ps-2 py-3'>Shortest Word Length</td>
                            <td className='ps-2 py-3'>{shortestWordLength}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Preview</h3>
                <p style={{fontWeight: bold ? 'bold' : 'normal'}}>{text}</p>
            </div>
        </>
    );
}