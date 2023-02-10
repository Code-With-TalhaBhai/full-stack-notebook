import React from 'react'
import {useEffect,useState} from 'react';
import { signup } from './Axios/axiox';

function Signup() {
    const initialState = {
        email:'',
        name:'',
        password:''
    }
    const [state, setstate] = useState(initialState);

    const {email,name,password} = state;
    const changeVal = (e)=>{
        setstate({...state,[e.target.name]:e.target.value});
    }

    const onSign = async(e)=>{
        await signup(state);
        console.log('click');
        // e.preventDefault();
    }
    return (
        <div>
             <div className='container'>
            <h2 className='text-center my-5'>Signup To Get Started.</h2>
            <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1">Full Name</label>
                <input onChange={changeVal} type="text" className="form-control border-info" name='name' id="exampleFormControlInput1" placeholder="Full Name"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1">E-mail</label>
                <input onChange={changeVal} type="email" className="form-control border-info" name='email' id="exampleFormControlInput2" placeholder="example@email.com"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1">Password</label>
                <input onChange={changeVal} type="password" className="form-control border-info" name='password' id="exampleFormControlInput3" placeholder="password"/>
            </div>
            <button type="button" onClick={onSign} className="btn btn-primary">Sign Up</button>
        </div>
        </div>
    )
}

export default Signup
