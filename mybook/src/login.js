import React,{useState} from 'react';
// import
const Login = () =>{
    const[email,setEmail]= useState('');
    const[password, setPassword] = useState('');
    return(
        <div className="login">
            <h3 className="login-header">Social Network</h3>
            <h6 className="login-subheader">Login</h6>
            <div className="login-data">
                <form>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.email)} placeholder="type your email"></input>
                    <input type="password" value={email} onChange={(e)=> setEmail(e.target.email)}placeholder="type your password"></input>
                    <button type="submit" placeholder=''>Log In</button>
                </form>
            </div>
        </div>
    )
}