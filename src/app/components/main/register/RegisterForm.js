import React, { Component } from "react";
import M from "materialize-css";
import InputField from "./../profile/InputField";


const RegisterForm = (props) => {

    return (
        <>
            <form className="form">

                <InputField
                    type="text"
                    inputName="Name"
                    name="name"
                    onInputChange={props.onInputChange}
                    value={props.name.name}

                />

                <InputField
                    type="text"
                    inputName="Email"
                    name="email"
                    onInputChange={props.onInputChange}
                    value={props.name.email}
                />

                <InputField
                    type="password"
                    inputName="Password"
                    name="password"
                    onInputChange={props.onInputChange}
                    value={props.name.password}
                />

                <button className="btn register" onClick={props.onCreateRegister}>Register</button>
            </form>
        </>
    )
}




export default RegisterForm;





