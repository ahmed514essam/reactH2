import { useContext } from 'react'
import Counter from './Counter'
import CountersContext from '../context/CountersContext'

export default function CountersList() {
    const { counters } = useContext(CountersContext)

    return (
        <div className='counters-list'>
            {counters.map(counter => (
                <Counter key={counter.id} counter={counter} />
            ))}
        </div>
    )
}
