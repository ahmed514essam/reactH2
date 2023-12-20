import { useContext } from "react"
import CountersContext from "../context/CountersContext"

export default function Heading() {
    const { counters } = useContext(CountersContext)

    const getTotalCount = () => {
        return counters.reduce((total, counter) => total + counter.count, 0)
    }

    return (
        <h1>Productivity Points: {getTotalCount()}</h1>
    )
}