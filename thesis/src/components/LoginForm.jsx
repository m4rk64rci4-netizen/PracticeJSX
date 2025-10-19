import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';


function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password){
        setError('Please fill all the fields.');
        return;
    };

    try {
        setError('');
        if (username === "admin" && password === "admin"){
            navigate('/thesis/admin', {replace: true});
        } else {
            setError('Invalid username or password.');
        }
    } catch (err){
        setError('Login Failed. Please try again.');
    };
    }
    


    return(
        <div className="h-screen bg-blue-950 flex justify-center items-center">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md flex flex-col items-center m-3 drop-shadow-md drop-shadow-white">
                <h2 className="text-2xl font-bold mb-2 mt-3">Login</h2>
                <form className="flex flex-col w-full p-6">
                    <div className="mb-4 flex flex-col gap-2">
                        <label htmlFor="username" className="text-sm font-medium">Username</label>
                        <input 
                            type="text" 
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Username" 
                        />
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Password" 
                        />
                        <input 
                            type="submit" 
                            id="submit"
                            value="Submit" 
                            className="font-bold text-white bg-sky-500 hover:bg-blue-600 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Submit"
                            onClick={handleSubmit}
                        />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default LoginForm;