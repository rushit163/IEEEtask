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
                        <label for="customRange3" class="form-label text-light">Character Length</label>
                        <input type="range" class="form-range" min="0" max="50" step="0.5" id="customRange3"></input>
                    </div>
                </div>
            </div>
        </div>
    )
  }
export default PasswordGenerator;