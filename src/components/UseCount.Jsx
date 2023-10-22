import { useState } from "react"

export default function useCount(initialValue) {
    const [val, setVal] = useState(initialValue)


    const handleIncrease = () =>{
         setVal(val + 1)
    }

    const handleDecrease = () => {
        setVal(val - 1)
    }

    const resetValue = () => {
        setVal(initialValue)
    }

    const setValue = (newValue) => {
        setVal(newValue)
    };

    return {val, handleDecrease, handleIncrease, resetValue, setValue}

}


