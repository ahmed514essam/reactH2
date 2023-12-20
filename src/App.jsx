import { useState } from 'react'
import './App.css'
import CounterList from './components/CounterList'
import HeadIng from './components/HeadIng'
import CountersContext from './context/CountersContext.js'

const initialCounters = [
  {
      id: "123",
      title: "Pages studied this month",
      count: 0,
  },
  {
      id: "456",
      title: "Projects created this month",
      count: 0,
  },
  {
      id: "789",
      title: "TV shows skipped this month",
      count: 0,
  },
]

function App() {
  const [counters, setCounters] = useState(initialCounters)

  return (
    <>
      <CountersContext.Provider value={{ counters, setCounters }}>
        <HeadIng />
        <CounterList />
      </CountersContext.Provider>
    </>
  )
}

export default App