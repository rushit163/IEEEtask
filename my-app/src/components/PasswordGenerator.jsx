import React, { Component, useState } from 'react'
import { createPassword } from '../services/ceratePassword';

let PasswordGenerator =()=> {
    let [state,setState] = useState({
        generatedPassword: '',
        passwordlength : 20,
        symbol : false,
        numbers : false,
        lower : false,
        upper : false
    });

    let updateInput = (event) => {
        setState({
            ...state,
            [event.target.name] : event.target.value
        })
    };

    let updateCheckBox = (event) => {
        setState({
            ...state,
            [event.target.name] : event.target.checked
        })
    };
    let submit = (e) => {
        e.preventDefault();
        let passwordObject = createPassword.getObjects(state);
        let thePassword =  createPassword.generatePassword(passwordObject, state.passwordlength)
        setState({...state, generatedPassword : thePassword});
    }
    return (
        <div className="container mt-5">
            {/* <pre>{JSON.stringify(state)}</pre> */}
            <div className='text-light'>Password Generator</div>
            <div className='row'>
                <form onSubmit={submit}>
                <div className="col">
                    <div className="bg-dark ">
                    <div className="d-flex justify-content-between">
                        <div value={state.generatedPassword} className="text-light p-4" name='generatedPassword'>{state.generatedPassword}</div>
                        <i className='bg-dark fa fa-copy p-4' id='copybtn'></i>
                    </div>
                    </div>
                    <div className="bg-dark mt-2 p-2">
                        <div className="d-flex justify-content-between">
                        <label htmlFor="customRange3" className="form-label text-light">Character Length</label>
                        <span className='text-light'>{state.passwordlength}</span>
                        </div>
                        <input  value={state.passwordlength} onChange = {updateInput} name='passwordlength' type="range" className="form-range" min="0" max="50" step="1" id="customRange3"></input>
                    <div className="form-check">
                        <input onChange={updateCheckBox} name='upper' className="form-check-input" type="checkbox"/>
                        <label className="form-check-label text-light" htmlFor="flexCheckDefault">Include UpperCase Characters</label>
                    </div>
                    <div className="form-check">
                        <input onChange={updateCheckBox} name='lower' className="form-check-input" type="checkbox"/>
                        <label className="form-check-label text-light" htmlFor="flexCheckDefault">Include LowerCase Characters</label>
                    </div>
                    <div className="form-check">
                        <input  onChange={updateCheckBox} name='numbers' className="form-check-input" type="checkbox"/>
                        <label className="form-check-label text-light" htmlFor="flexCheckDefault">Include Numbers</label>
                    </div>
                    <div className="form-check">
                        <input onChange={updateCheckBox} name='symbol' className="form-check-input" type="checkbox"/>
                        <label className="form-check-label text-light" htmlFor="flexCheckDefault">Include Symbols</label>
                    </div>
                    </div>
                    <div className="bg-dark p-2">
                    <input type='submit' value="Generate" className="btn btn-outline-dark" id='button'/>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
  }
export default PasswordGenerator;