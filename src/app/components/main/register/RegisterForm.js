import React from "react";
import M from "materialize-css";
import InputField from "./../profile/InputField";


const RegisterForm = (props) => {

    return (
        <>
            <div className="flex-container right">

                <InputField />
                <InputField />
                <InputField />

                <button className="btn register">Register</button>
            </div>
        </>
    )


}


export default RegisterForm;





