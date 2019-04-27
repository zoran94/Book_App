import React from "react";
import M from "materialize-css";
import InputField from "../../profile/InputField";



const LoginForm = (props) => {

    return (
        <form className="form">

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

            <button className="btn register" onClick={props.onLogin}>Login</button>

        </form>
    )
}




export default LoginForm;





