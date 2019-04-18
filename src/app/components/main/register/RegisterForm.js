import React, { Component } from "react";
import M from "materialize-css";
import InputField from "./../profile/InputField";
import { Link } from 'react-router-dom';


const RegisterForm = (props) => {

    return (
        <>
            <form className="form">

                {props.name.registerUi &&
                    <InputField
                        type="text"
                        inputName="Name"
                        name="name"
                        onInputChange={props.onInputChange}
                        value={props.name.name}
                    />}

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

                {props.name.registerUi ?
                    <>
                        <button className="btn register" onClick={props.onCreateRegister}>Register</button> <span onClick={props.onToggleRegister} className="register-toggle">Already have account ?</span>
                    </>
                    :
                    <>
                        <button className="btn register" onClick={props.onLogin}><Link to="/feed">Login</Link></button> <span onClick={props.onToggleRegister} className="register-toggle">If you dont have account, register!</span>
                    </>}
            </form>
        </>
    )
}




export default RegisterForm;





