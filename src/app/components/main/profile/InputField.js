import React from 'react';

const InputField = (props) => {
    return (
        <div class="row">
            <div class="input-field col s7">
                <input id="email" type={`${props.type}`} class="validate" />
                <label for="email">{props.name}</label>
                <span class="helper-text" data-error="wrong" data-success="right"></span>
            </div>
        </div>
    )
}
export default InputField;