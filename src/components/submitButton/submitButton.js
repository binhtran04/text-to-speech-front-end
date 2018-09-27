import React, { Component } from 'react';

class SubmitButton extends Component {
    render() {
        return (
            <div class='buttonBlock'>
                <button className='btnSubmit'>Trien</button>
                <img src='https://www.jqueryscript.net//images/jQuery-Ajax-Loading-Overlay-with-Loading-Text-Spinner-Plugin.jpg' style={{width: '50px', height: '50px'}} />
            </div>
        )
    }
}

export default SubmitButton;