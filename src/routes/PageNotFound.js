import React from 'react'
import { Helmet } from 'react-helmet'

class PageNotFound extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>404: page not found</title>
                </Helmet>
                <p>PageNotFound</p>
            </>
        )
    }
}

export default PageNotFound