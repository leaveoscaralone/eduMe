import PhoneRow from "./PhoneRows";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setInput, reset, numberInput, fetchPhoneWords, wordList } from '../features/phoneSlice'

function Phone () {
    const rows = [[1,2,3], [4,5,6], [7,8,9]];
    const [result, setResult] = useState('');
    const dispatch = useDispatch();
    const userInput = useSelector(numberInput)
    const output = useSelector(wordList)

    function handleClick(e) {
        e.preventDefault()
        dispatch(fetchPhoneWords(userInput))
        console.log(output);
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
        <div className="flex flex-col bg-white rounded-md shadow-lg p-12 mt-12 w-2/5 items-center justify-center">
            <div className="flex flex-col w-full justify-center items-center">

            <div className="flex w-4/5 mb-4 h-10 border-solid border-2 rounded-xl bg-stone-100" >{userInput}</div>
            {rows.map((row, i) => <PhoneRow key={i} rowElements={row} ></PhoneRow>)}
            </div>
            <div className="flex flex-row justify-around w-full">
            <button onClick={handleClick} >{"Enter"}</button>
            <button onClick={() => dispatch(reset())} >{"Clear"}</button>
            </div>
            <div className="flex w-full h-20 border-solid border-2 border-stone-200 overflow-y-auto rounded-md">
                <p>{output}</p>
            </div>
        </div>
        </div>
    )
}

export default Phone;