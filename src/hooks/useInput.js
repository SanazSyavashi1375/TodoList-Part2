import { useState } from "react";

const UseInput = () => {
    const [enteredValue, setEnteredValue] = useState('');


    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const reset = () => {
        setEnteredValue('');
    }
    return {
        value: enteredValue,
        reset,
        valueChangeHandler
    }
}
export default UseInput;