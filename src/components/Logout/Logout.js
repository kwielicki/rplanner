import React from 'react'
import CSSModules from 'react-css-modules'
import { connect } from "react-redux"
import { logoutUser } from "Actions/auth"

class Logout extends React.Component {

    __handleLogout = () => {
        const { dispatch } = this.props
        dispatch(logoutUser())
    }

    render() {
        return (
            <button onClick={this.__handleLogout}>Logout</button>
        )
    }
}

export default connect()(Logout)