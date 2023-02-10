import React from 'react'
import {useEffect,useState} from 'react';
import { login } from './Axios/axiox';

function Account() {
    const initialState = {
        email:'',
        password:''
    }
    const [log, setLog] = useState(initialState);

    const {email,password} = log;
    const changeVal = (e)=>{
        setLog({...log,[e.target.name]:e.target.value});
    }

    const onSubmit = async(e)=>{
        const response = await login(log);
        const data = response.data;
        const authtoken = (data.authtoken);
        localStorage.setItem('auth-token',authtoken);
        // e.preventDefault();
    }
    return (
        <div className='container'>
            <h2 className='text-center my-5'>Login To Add And See Your Notes</h2>
            <div class="form-group mb-3">
                <label for="exampleFormControlInput1">E-mail</label>
                <input onChange={changeVal} type="email" className="form-control border-info" name='email' id="exampleFormControlInput1" placeholder="example@email.com"/>
            </div>
            <div class="form-group mb-3">
                <label for="exampleFormControlInput1">Password</label>
                <input onChange={changeVal} type="password" className="form-control border-info" name='password' id="exampleFormControlInput1" placeholder="Your Password"/>
            </div>
            <button type="button" onClick={onSubmit} className="btn btn-primary">Login Now</button>
        </div>
    )
}

export default Account
