import React, { Component } from "react";
import M from "materialize-css";
import InputField from "./../profile/InputField";
import fetchRegister from "./../../../../services/fetchRegister";

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }


    // componentDidMount() {
    //     this.onCreateRegister()
    // }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onCreateRegister = (e) => {
        e.preventDefault();
        console.log(e);
        const body = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        fetchRegister(body).then(response => {
            console.log(response);
        })
    }

    render() {
        return (
            <>
                <form className="form">

                    <InputField
                        type="text"
                        inputName="Name"
                        name="name"
                        onInputChange={this.onInputChange}
                        value={this.state.name}

                    />

                    <InputField
                        type="text"
                        inputName="Email"
                        name="email"
                        onInputChange={this.onInputChange}
                        value={this.state.email}
                    />

                    <InputField
                        type="password"
                        inputName="Password"
                        name="password"
                        onInputChange={this.onInputChange}
                        value={this.state.password}
                    />

                    <button className="btn register" onClick={this.onCreateRegister}>Register</button>
                </form>
            </>
        )
    }


}


export default RegisterForm;





