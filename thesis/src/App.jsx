import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Loader from './components/Loader'; 

function App() {
   const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 4000); // Simulate a 4-second loading time
        return () => clearTimeout(timer);
    }, []);

  return (
    <>
      {loading ? <Loader /> : <Navigate to="/thesis/login" replace />}
    </>
  )
}

export default App
