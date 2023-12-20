import { useContext } from "react"
import CountersContext from "../context/CountersContext"

export default function Counter({ counter }) {
    const { setCounters } = useContext(CountersContext)

    const increaseCount = () => {
        setCounters(prev => prev.map(item => {
            if (item.id === counter.id) {
                return {
                    id: item.id,
                    title: item.title,
                    count: item.count + 1
                }
            }

            return item
        }))
    }

    const decreaseCount = () => {
        setCounters(prev => prev.map(item => {
            if (item.id === counter.id && item.count > 0) {
                return {
                    id: item.id,
                    title: item.title,
                    count: item.count - 1
                }
            }

            return item
        }))
    }

    return (
        <div className='counter-contaienr'>
            <h3>Title: {counter.title}</h3>
            <p>Count: {counter.count}</p>
            <div className='btns-wrapper'>
                <button onClick={increaseCount}>increase</button>
                <button onClick={decreaseCount}>decrease</button>
            </div>
        </div>
    )
}
