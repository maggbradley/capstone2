import {useState} from "react";
function BookingForm () {
    const [date, setDate] = useState("1101")
    const [number, setNumber] = useState("5")
    const handleDateChange = (event) => {
        setDate(event.target.value)
    };
    const handleNumberChange = (event) => {
        setNumber(event.target.value)
    };
    return(
        <>
            <form style={{display: "grid", width: 200, gap: 20}}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time ">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={number} onChange={handleNumberChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
        </>
    )
}

export default BookingForm;