import React from 'react'
import CurrentYear from 'Components/CurrentYear';
import './Copyright.scss'

class Copyright extends React.Component {

    render() {
        return (
            <div styleName='Copyright'>
                <div styleName='__inner'>
                    {'\u00A9'}&nbsp;<CurrentYear/>.
                    All rights reserved.
                </div>
            </div>
        )
    }
}

export default Copyright