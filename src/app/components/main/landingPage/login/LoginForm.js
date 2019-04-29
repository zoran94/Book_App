import React from "react";
import M from "materialize-css";
import InputField from "../../profile/InputField";
import LoginInfo from "./LoginInfo";



const LoginForm = (props) => {

    return (
        <div className="row container margin-top">

            <LoginInfo />
            <form className="col s4 offset-s1 formBorder">
                <div className="space-between">
                    <button onClick={props.onToggleRegister} className="btn left col s6">Register</button>
                    <button onClick={props.onToggleRegister} className="btn right col s6">Login</button>
                </div>
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

                {props.error && <p>{props.error}</p>}

                <button className="btn register right" onClick={props.onLogin}>Login</button>

            </form>
        </div>
    )
}




export default LoginForm;





