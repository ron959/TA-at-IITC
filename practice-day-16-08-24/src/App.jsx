import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [subject, setSubject] = useState("React")/
  const [data, setData] = useState([])
  const [reourceType, setResourceType] = useState('posts')

  console.log(reourceType);
  console.log(data);
  
  useEffect(() => {
    // console.log('Welcome to the useEffect demo!');
    fetch(`https://jsonplaceholder.typicode.com/${reourceType}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [reourceType])
  
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        {/* <p>We Are Displying {subject}</p> */}
        {/* <button onClick={() => setSubject("React")}>React</button>
        <button onClick={() => setSubject("JavaScript")}>JavaScript</button>
        <button onClick={() => setSubject("TypeScript")}>TypeScript</button> */}

      </div>

      <h1>useEffect</h1>

      <div className="card">
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title || item.name}</h2>
              <p>{item.body || item.phone}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
