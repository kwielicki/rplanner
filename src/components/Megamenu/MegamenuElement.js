import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { hamburgerCloseAction } from 'Actions/hamburgerActions'
import { overlayHideAction } from 'Actions/overlayActions'
import styles from './MegamenuElement.scss'

const mapStateToProps = state => {
    return {
        isOpen: state.hamburger.isOpen,
        isOverlayActivated: state.overlay.isOverlayActivated
    }
}

class MegamenuElement extends React.Component {
    state = {
        isActive: null,
    }

    componentDidMount() {
        this.setState({
            isActive: 'isActive'
        })
    }

    handleClick = () => {
        this.props.dispatch(hamburgerCloseAction(!this.props.isOpen))
        this.props.dispatch(overlayHideAction(!this.props.isOverlayActivated))
    }
    
    render() {
        const { megamenuLinks } = this.props
        const { isActive } = this.state
        return (
            <ul styleName='MegamenuElement'>
                {megamenuLinks.map(({ linkUrl, linkTitle, linkIcon } = route, index) => (
                    <li styleName='__listElement' key={index}>
                        <NavLink to={linkUrl} 
                                 title={linkTitle} 
                                 activeClassName={styles.isActive} 
                                 exact={true} 
                                 styleName='__listAnchor'
                                 onClick={this.handleClick}>
                            <div styleName="__icon">
                                <FontAwesomeIcon icon={linkIcon} styleName="__iconSvg"/>
                            </div>
                            {linkTitle}
                        </NavLink>
                    </li>
                ))}
            </ul>
        )
    }
}

MegamenuElement.propTypes = {
    megamenuLinks: PropTypes.array
}

export default connect(mapStateToProps)(MegamenuElement)