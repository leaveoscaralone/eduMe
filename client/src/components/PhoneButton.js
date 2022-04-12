import { useDispatch } from 'react-redux';
import { setInput } from '../features/phoneSlice'


function PhoneButton({number}) {
    const dispatch = useDispatch();

    function handleClick(e) {
        dispatch(setInput(e.target.value))
    }

    return (
        <button onClick={handleClick} value={number} className="w-16 h-16 m-2 border-solid border-2 rounded-full bg-indigo-300 shadow-sm hover:bg-indigo-500 cursor-pointer  text-white font-bold">
            {number}
        </button>
    )
}

export default PhoneButton;