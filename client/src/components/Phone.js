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

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(fetchPhoneWords(userInput))
        console.log(output);
    }

    return (
        <div className="flex flex-col w-screen h-screen divide-y justify-center items-center">
            <div>{userInput}</div>
            {rows.map((row, i) => <PhoneRow key={i} rowElements={row} ></PhoneRow>)}
            <div className="flex flex-row justify-around w-1/5">
            <button type="submit" onSubmit={handleSubmit} >{"Enter"}</button>
            <button onClick={() => dispatch(reset())} >{"Clear"}</button>
            </div>
            <div className="flex w-1/5">
                <p>{output}</p>
            </div>
        </div>
    )
}

export default Phone;