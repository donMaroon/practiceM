import { useState } from "react"

export default function useCount(initialValue) {
    const [val, setVal] = useState(initialValue)

    const handleIncrease = () =>{
         setVal(val + 1)
    }

    const handleDecrease = () => {
        setVal(val - 1)
    }

    const setvalue = () => {
        setVal(initialValue)
    }

    return {val, handleDecrease, handleIncrease, setvalue}

}


