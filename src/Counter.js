import { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [step, setStep] = useState(1),
    [count, setCount] = useState(0),
    getDate = day =>
      new Date(+new Date() + day * 86400000)
        .toString()
        .split(' ')
        .slice(0, 4)
        .join(' '),
    getMessage = count => {
      let message = ''
      switch (Math.sign(count)) {
        case -1:
          message = `${Math.abs(count)} days ago was`
          break
        case 1:
          message = `${count} days from today is`
          break
        default:
          message = `Today is`
          break
      }
      return `${message} ${getDate(count)}`
    }

  return (
    <div className="Counter">
      <div>
        <button onClick={() => setStep(s => Math.max(s - 1, 1))}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>{getMessage(count)}</p>
    </div>
  )
}
