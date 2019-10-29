import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from './MegamenuElement.scss'

@CSSModules(styles, {allowMultiple: true})
class MegamenuElement extends React.Component {
    state = {
        isActive: null,
    }

    componentDidMount() {
        this.setState({
            isActive: styles.isActive
        })
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
                                 activeClassName={isActive} 
                                 exact={true} 
                                 styleName='__listAnchor'>
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

export default MegamenuElement