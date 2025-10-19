import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const LoadingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 4000); // Simulate a 4-second loading time
        return () => clearTimeout(timer);
    }, []);

    return loading ? (
            <h1>Loading...</h1>
    ) : (
        <Navigate to="/thesis/login" replace />
    );
}
export default LoadingPage