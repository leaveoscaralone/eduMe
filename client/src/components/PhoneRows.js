import PhoneButton from "./PhoneButton"

function PhoneRow ({ rowElements }) {
    return (
        <div className="flex flex-row">
            {rowElements.map((el, i) => <PhoneButton key={i} number={el} ></PhoneButton>)}
        </div>
    )
}

export default PhoneRow;