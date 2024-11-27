import {useState} from "react";
import "./CounterPractice.scss";

const CounterPractice = () => {
    const [score, setScore] = useState(0);

    const increment = () => {
        setScore(score + 1)
    }

    const decrement = () => {
        setScore(score - 1)
    }
    return (
        <div className={"wrapper"}>
            <button onClick={increment}>+</button>
            <h1>{score}</h1>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default CounterPractice