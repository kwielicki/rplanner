import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './UserData.scss'
import LazyImage from 'Components/LazyImage'
import imagePlaceHolder from 'Assets/images/animated-image-placeholder.svg'
import Moment from 'react-moment'

class UserData extends PureComponent {

    render() {
        const { ...props } = this.props
        return (
            <div styleName='UserData'>
                <div styleName='__inner'>
                    <div styleName='__avatar'>
                        <div styleName='__avatarImage'>
                            <LazyImage placeholder={imagePlaceHolder} src={props.userAvatar}/>
                        </div>
                    </div>
                    <div styleName='__user'>
                        <h3>{props.userName}</h3>
                        <p>{props.userEmail}</p>
                        <ul styleName='__details'>
                            <li styleName='__detailsElement'>
                                <strong styleName='__detailsLabel'>Creation time:</strong>
                                <Moment date={props.userCreationTime}
                                        format="D MMM YYYY, HH:mm"
                                        styleName='__detailsValue'/>
                            </li>
                            <li styleName='__detailsElement -last'>
                                <strong styleName='__detailsLabel'>Last successful sign in:</strong>
                                <Moment date={props.userLastSignInTime}
                                        format="D MMM YYYY, HH:mm"
                                        styleName='__detailsValue'/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

UserData.propTypes = {
    avatar: PropTypes.string
}

export default UserData