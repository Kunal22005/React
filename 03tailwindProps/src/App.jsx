import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Kunal Sharma",
    age:21
  }
  let myArr = [1,2,3,4]


  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Chai-aur-code" btnText="VisitMe"/>
      <Card username="Kunal Sharma" btnText="ClickMe"/>
    </>
  )
}

export default App
