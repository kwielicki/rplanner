import React from 'react'
import { Helmet } from 'react-helmet'

class UserProfile extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>User profile</title>
                </Helmet>
                <p>UserProfile</p>
            </>
        )
    }
}

export default UserProfile