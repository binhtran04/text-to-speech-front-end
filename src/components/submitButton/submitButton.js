import React, { Component } from 'react';
import './submitButton.css'

class SubmitButton extends Component {
    render() {
        return (
            <div class='buttonBlock'>
                <button className='btnSubmit'>Trien</button>
                <img src='https://www.jqueryscript.net//images/jQuery-Ajax-Loading-Overlay-with-Loading-Text-Spinner-Plugin.jpg'/>
            </div>
        )
    }
}

export default SubmitButton;
