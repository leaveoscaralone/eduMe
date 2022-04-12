import PhoneButton from "./PhoneButton"

function PhoneRow ({ rowElements }) {
    return (
        <div className="flex flex-row w-1/5 justify-center items-center">
            {rowElements.map((el, i) => <PhoneButton key={i} number={el} ></PhoneButton>)}
        </div>
    )
}

export default PhoneRow;