import React, { Component } from 'react';
import './textInput.css'

class TextInput extends Component {

    render() {
        return (
            <div className='input-block'>
                <label>Please input text in below box</label>
                <textarea placeHolder='Your text ...'>
                </textarea>
            </div>
        )
    }
}

export default TextInput;