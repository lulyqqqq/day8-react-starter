import {useState} from "react";

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0);


    const handleChange = (event) => {
        const value = Math.max(0, Math.min(20, parseInt(event.target.value, 10) || 0));
        setSize(value)
    }

    const handleRest = () => {
        props.setSize(size)
    }

    return (<div>
        <span>Size:{props.size}</span>
        <input min={0} max={20} type="number" value={size} onChange={handleChange}/>
        <button onClick={handleRest}>reset</button>
    </div>)
}

export default CounterGroupGenerator