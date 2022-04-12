import PhoneRow from "./PhoneRows";

function Phone () {
    const rows = [[1,2,3], [4,5,6], [7,8,9]];
    console.log(rows);
    return (
        <div>
            <input type="number" />
            {rows.map((row, i) => <PhoneRow key={i} rowElements={row} ></PhoneRow>)}
        </div>
    )
}

export default Phone;