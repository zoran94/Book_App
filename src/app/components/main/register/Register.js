import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import RegisterInfo from "./RegisterInfo";
import fetchRegister from "./../../../../services/fetchRegister";

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            registerUi: false
        }
    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onToggleRegister = () => {
        this.setState((prevState) => {
            return { registerUi: !prevState.registerUi }
        })
    }

    onCreateRegister = (e) => {
        e.preventDefault();

        const body = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        fetchRegister(body)
            .then(response => {
                localStorage.setItem("key", response.accessToken);
                console.log(response.accessToken);
            })
    }

    render() {

        return (
            <>
                <RegisterInfo registerUi={this.state.registerUi} />
                <RegisterForm
                    name={this.state}
                    onInputChange={this.onInputChange}
                    onCreateRegister={this.onCreateRegister}
                    onToggleRegister={this.onToggleRegister}
                />
            </>
        )

    }
}



export default Register