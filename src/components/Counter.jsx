import {useState} from "react";
import "./Counter.scss"

const Counter = (props) => {
    const [score, setScore] = useState(0);

    const increment = () => {
        setScore(score + 1)
        props.updateSum(1)
    }

    const decrement = () => {
        setScore(score - 1)
        props.updateSum(-1)
    }


    return (<div className={"wrapper"}>
        <button onClick={increment}>+</button>
        <span>{score}</span>
        <button onClick={decrement}>-</button>
    </div>)
}
export default Counter