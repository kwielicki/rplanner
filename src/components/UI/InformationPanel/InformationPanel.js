import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import styles from './InformationPanel.scss'

import newsApiLogo from '@assets/images/news-api-logo.svg'

function InformationPanel(props) {
    return (
        <div styleName="InformationPanel">
            <div styleName="__inner">
                <div styleName="__image"><img src={newsApiLogo} alt="Image"/></div>
                <div styleName="__content">
                    <h3 styleName="__contentHeading">{props.heading}</h3>
                    <p styleName="__contentDescription">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

InformationPanel.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default CSSModules(styles, {allowMultiple: true})(InformationPanel)
