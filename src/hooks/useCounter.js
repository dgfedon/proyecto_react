import { useState } from "react";

export const useCounter = (initial, stock) => {

    const [counter, setCounter] = useState(initial);

    const handleSum = () => {
        if (counter < stock) {
            setCounter(prev => prev + 1)
        }
    }
    const handleRest = () => {
        if (counter > initial) {
            setCounter(prev => prev - 1)
        }
    }

    return {
        counter,
        handleSum,
        handleRest
    }
}
