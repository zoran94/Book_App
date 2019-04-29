import React from "react";
import M from "materialize-css";
import InputField from "../../profile/InputField";
import RegisterInfo from "./RegisterInfo";


const RegisterForm = (props) => {

    return (
        <div className="row container margin-top">
        <RegisterInfo />
            <form className="col s4 offset-s1 formBorder">
            <button onClick={props.onToggleRegister} className="btn left col s6">Register</button>
        <button onClick={props.onToggleRegister} className="btn right col s6">Login</button>
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

                {props.error && <p>{props.error}</p>}
                        <button className="btn register right" onClick={props.onCreateRegister}>Register</button>
            </form>
            </div>
    )
}




export default RegisterForm;





