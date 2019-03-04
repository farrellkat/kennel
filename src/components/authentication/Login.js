import React, { Component } from "react"


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        rememberMe: false
    }
    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    //set state of checkbox to opposite of what's printed as default.
    handleCheck = () => {
        this.setState({
            rememberMe: !this.state.rememberMe
        })
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

    // If remember me isn't checked set credentials to session storage
        if (this.state.rememberMe === false) {
            sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            )
        } else {
    //If checked set credentials to local storage
            localStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            )
        }
    }
    //Build login form
    render() {
        return (
            <form onSubmit={this.handleLogin} className="px-5">
                <h1 className="h3 mb-3 font-weight-bold">Please sign in</h1>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">
                            Email address
                </label>
                        <input onChange={this.handleFieldChange} className="form-control" type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword">
                            Password
                </label>
                        <input onChange={this.handleFieldChange} className="form-control" type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input onChange={this.handleCheck} class="form-check-input" type="checkbox" id="rememberMe" />
                        <label htmlFor="checkbox">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-info btn-sm">
                    Sign in
                </button>
            </form>
        )
    }
}