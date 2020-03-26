import React from 'react'
import PropTypes from 'prop-types'
import './InformationPanel.scss'

import newsApiLogo from 'Assets/images/news-api-logo.svg'

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

export default InformationPanel
