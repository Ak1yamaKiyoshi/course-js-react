import React from "react";
import { push, remove } from "../redux/blogReducer";
import { login, unlog, switchlogin } from "../redux/adminReducer";
import './Login.css'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import jquery from "jquery";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const admins =   useSelector((state) => state.admins.admins);
    const isLogged = useSelector((state) => state.admins.isAdminLogged);
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleLoginClick() {
        let output = 0;
        admins.forEach(admin => {
            if ( admin.name == username && admin.password == password ) {
                navigate('../home');
                dispatch(login());
            }
        });
    }
    function handleInput(e) {
        if (e.target.id == 'login-username-input')
          setUsername(jquery(e.target).val())
        else if ( e.target.id == 'login-password-input')
            setPassword(jquery(e.target).val())
    }

    return (<div className="login-outer-container">
        <div className="login-inner-container"> 
        <h1> Sign up </h1>
        <p> Username </p>
        <input id="login-username-input" onChange={handleInput} />
        <p> Password </p>
        <input id="login-password-input" onChange={handleInput}/>
        <h2 onClick={handleLoginClick}> login </h2>
        <Link to="../home" onClick={() => {dispatch(unlog())}}> 
            <h3>  Not admin </h3>
        </Link>
        </div>
    </div>);
}