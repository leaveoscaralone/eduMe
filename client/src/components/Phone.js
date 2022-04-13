import PhoneRow from "./PhoneRows";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  numberInput,
  fetchPhoneWords,
  wordList,
} from "../features/phoneSlice";

function Phone() {
  const rows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const dispatch = useDispatch();
  const userInput = useSelector(numberInput);
  const output = useSelector(wordList);

  function handleClick(e) {
    e.preventDefault();
    dispatch(fetchPhoneWords(userInput));
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
      <div className="flex flex-col bg-white rounded-2xl shadow-lg p-12 mt-12 w-96 items-center justify-center">
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex w-4/5 mb-4 h-14 border-solid border-2 rounded-xl bg-stone-100 items-center justify-center">
            <p className="truncate hover:text-clip" >{userInput ? userInput : "Press Something"}</p>
          </div>
          {rows.map((row, i) => (
            <PhoneRow key={i} rowElements={row}></PhoneRow>
          ))}
        </div>
        <div className="flex flex-row justify-around w-full">
          <button onClick={handleClick} className="border-solid border-2 rounded-full bg-indigo-400 hover:bg-indigo-600 h-12 w-24 shadow-md text-white font-bold mb-4" >{"Enter"}</button>
          <button onClick={() => dispatch(reset())} className="border-solid border-2 rounded-full bg-indigo-400 hover:bg-indigo-600 h-12 w-24 shadow-md text-white font-bold mb-4" >{"Clear"}</button>
        </div>
        <div className="flex w-full h-20 border-solid border-2 border-stone-200 overflow-y-auto rounded-xl shadow-sm mt-2 bg-stone-100 p-1">
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
}

export default Phone;
