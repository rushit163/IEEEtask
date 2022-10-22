import React, { Component } from 'react'

let PasswordGenerator =()=> {
    return (
        <div className="container mt-5">
            <div className='row'>
                <div className="col-md-4">
                    <div className="bg-dark p-2">
                    <div className="input-group">
                        <input type="text" className="form-control bg-dark password" placeholder="Random Password" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className='input-group-text password bg-dark'><i class="fa fa-copy"></i></button>
                    </div>
                    </div>
                    <div className="bg-dark mt-2 p-2">
                        <div className="d-flex justify-content-between">
                        <label for="customRange3" class="form-label text-light">Character Length</label>
                        <span className='text-light'>0</span>
                        </div>
                        <input type="range" class="form-range" min="0" max="50" step="0.5" id="customRange3"></input>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <label class="form-check-label text-light" for="flexCheckDefault">Include UpperCase Characters</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <label class="form-check-label text-light" for="flexCheckDefault">Include UpperCase Characters</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <label class="form-check-label text-light" for="flexCheckDefault">Include Numbers</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label text-light" for="flexCheckDefault">Include Symbols</label>
                    </div>
                    </div>
                    <div className="bg-dark p-2">
                    <button className='btn btn-outline mt-2' id='button' type='submit'>Generate password</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
export default PasswordGenerator;