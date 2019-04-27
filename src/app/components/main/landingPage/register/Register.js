import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import RegisterInfo from "./RegisterInfo";
import { fetchRegister } from "../../../../../services/authService";


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            error: '',
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
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
                console.log(response.accessToken);
            })
    }


    render() {

        return (
            <>
                <RegisterInfo />
                <RegisterForm
                    name={this.state}
                    onInputChange={this.onInputChange}
                    onCreateRegister={this.onCreateRegister}
                    error={this.state.error}
                />
            </>
        )

    }
}



export default Register;