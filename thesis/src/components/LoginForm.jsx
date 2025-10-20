import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import CIT from '../assets/CIT.png';

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
            setError('Incorrect username or password.');
        }
    } catch (err){
        setError('Login Failed. Please try again.');
    };
    }
    


    return(
        <div className="h-screen bg-gray-200 flex justify-center items-center">
            <div className="w-full max-w-sm  rounded-lg flex flex-col items-center -pb-2 shadow-lg bg-white">
                <img src={CIT} alt="Logo" className="w-32 h-32 mt-6"/>
                
                <form className="flex flex-col w-full p-4 gap-4">
                    <div class="relative w-full max-w-sm">
                        <input
                            type="text"
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder=" "
                            className="peer w-full border border-gray-300 rounded-md px-3 pt-4 pb-3 text-sm placeholder-transparent focus:outline-none focus:border-blue-500"
                        />
                        <label
                            htmlFor="name"
                            className="bg-white absolute left-2 -top-3 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                            Username
                        </label>
                    </div>

                    <div class="relative w-full max-w-sm">
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder=" "
                            className="peer w-full border border-gray-300 rounded-md px-3 pt-4 pb-3 text-sm placeholder-transparent focus:outline-none focus:border-blue-500"
                        />
                        <label
                            htmlFor="password"
                            className="bg-white absolute left-2 -top-3 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                            Password
                        </label>
                    </div>

                    <div className="mb-4 flex flex-col gap-4">
                        
                        <div className="flex justify-center">
                            {error && <p className="text-red-500 text-sm -pt-2">{error}</p>}
                        </div>

                        <input 
                            type="submit" 
                            id="submit"
                            className="font-bold text-white bg-slate-700 hover:bg-slate-600 w-full px-3 py-2 rounded cursor-pointer duration-300" 
                            onClick={handleSubmit}
                        />
                    </div>


                </form>
                 
            </div>
        </div>
    )
}

export default LoginForm;