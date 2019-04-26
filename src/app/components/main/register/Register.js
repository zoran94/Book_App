import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import RegisterInfo from "./RegisterInfo";
// import fetchRegister from "./../../../../services/fetchRegister";
// import fetchLogin from "./../../../../services/fetchLogin";
import { fetchLogin, fetchRegister } from "../../../../services/authService";


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            registerUi: false,
            error: '',
        }
    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onToggleRegister = () => {
        this.setState((prevState) => {
            return {
                registerUi: !prevState.registerUi,
                error: '',
            }
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

    onLogin = (e) => {
        e.preventDefault();

        const body = {
            email: this.state.email,
            password: this.state.password
        };

        fetchLogin(body)
            .then(() => {
                this.props.history.push('/feed/')
            })
            .catch(error => this.setState({ error }))
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
                    onLogin={this.onLogin}
                    error={this.state.error}
                />
            </>
        )

    }
}



export default Register