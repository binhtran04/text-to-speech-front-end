import React, { Component } from 'react';

class TextInput extends Component {

    render() {
        return (
            <div className='inputBlock'>
                <label>Please paste text in below box:</label>
                <textarea rows='4' cols='50'>
                    Your text..
                </textarea>
            </div>
        )
    }
}

export default TextInput;