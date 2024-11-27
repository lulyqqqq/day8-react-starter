import Counter from "./Counter";
import {useMemo, useState} from "react";

const CounterGroup = (props) => {
    const [sum, setSum] = useState(0)

    const arr = useMemo(() => {
        setSum(0)
        return new Array(parseInt(props.size)).fill(Math.random());
    }, [props.size]);

    const handleSum = (number) => {
        setSum(sum + number)
    }
    return (<div>
        <span>{sum}</span>
        {arr.map((randomId, index) => {
            return <Counter key={index + randomId} updateSum={handleSum}/>
        })}
    </div>)
}

export default CounterGroup