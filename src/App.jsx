import { useState } from 'react'
import { Navbar } from "./components/Navbar/Navbar";
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = {styles.App}>
        <Navbar />
      </div>
      <div className={styles.App}>      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App




// Complete React Portfolio Website Tutorial | Build & Deploy | Beginners Tutorial