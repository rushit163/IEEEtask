import React, { Component, useState } from 'react'

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

    return (
        <div className="container mt-5">
            {/* <pre>{JSON.stringify(state)}</pre> */}
            <div className='text-light'>Password Generator</div>
            <div className='row'>
                <form>
                <div className="col">
                    <div className="bg-dark p-2">
                    <div className="input-group">
                        <input value={state.generatedPassword} onChange = {updateInput} type="text" className="form-control bg-dark password text-light" placeholder="Random Password" name='generatedPassword'/>
                        <button className='input-group-text password bg-dark' ><i class="fa fa-copy"></i></button>
                    </div>
                    </div>
                    <div className="bg-dark mt-2 p-2">
                        <div className="d-flex justify-content-between">
                        <label for="customRange3" class="form-label text-light">Character Length</label>
                        <span className='text-light'>{state.passwordlength}</span>
                        </div>
                        <input  value={state.passwordlength} onChange = {updateInput} name='passwordlength' type="range" class="form-range" min="0" max="50" step="1" id="customRange3"></input>
                    <div class="form-check">
                        <input onChange={updateCheckBox} name='upper' class="form-check-input" type="checkbox" value=""/>
                        <label class="form-check-label text-light" for="flexCheckDefault">Include UpperCase Characters</label>
                    </div>
                    <div class="form-check">
                        <input onChange={updateCheckBox} name='lower' class="form-check-input" type="checkbox" value=""/>
                        <label class="form-check-label text-light" for="flexCheckDefault">Include UpperCase Characters</label>
                    </div>
                    <div class="form-check">
                        <input  onChange={updateCheckBox} name='numbers' class="form-check-input" type="checkbox" value=""/>
                        <label class="form-check-label text-light" for="flexCheckDefault">Include Numbers</label>
                    </div>
                    <div class="form-check">
                        <input onChange={updateCheckBox} name='symbol' class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-light" for="flexCheckDefault">Include Symbols</label>
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