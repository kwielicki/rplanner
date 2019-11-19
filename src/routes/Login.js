import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { loginUser } from "Actions/auth.js"

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    __handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    } 
    __handleSubmit = (evt) => {
        const { dispatch } = this.props
        const { email, password } = this.state
        dispatch(loginUser(email, password));
        evt.preventDefault()
    }

    render() {
        const { isAuthenticated, isLoading, error } = this.props
        if (isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
            <>
                <form onSubmit={this.__handleSubmit}>
                    <input type="email" placeholder="email" name="email" onChange={this.__handleChange}></input>
                    <input type="password" placeholder="password" name="password" onChange={this.__handleChange}></input>
                    {!isLoading && <button type="submit">Zaloguj</button>}
                    <p>{error}</p>
                </form>
            </>
        )
    }
}


const mapStateToProps = state => {
    const { isAuthenticated,
            isLoading,
            error } = state.auth
    return {
        isAuthenticated: isAuthenticated,
        isLoading: isLoading,
        error: error,
    }
}
  export default connect(mapStateToProps)(Login);