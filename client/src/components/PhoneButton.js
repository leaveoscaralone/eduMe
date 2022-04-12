import { useDispatch } from 'react-redux';
import { setInput } from '../features/phoneSlice'


function PhoneButton({number}) {
    const dispatch = useDispatch();

    function handleClick(e) {
        dispatch(setInput(e.target.value))
    }

    return (
        <div className="m-10">
            <button onClick={handleClick} value={number} >{number}</button>
        </div>
    )
}

export default PhoneButton;