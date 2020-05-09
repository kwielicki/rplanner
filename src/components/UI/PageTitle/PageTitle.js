import React from 'react'
import PropTypes from 'prop-types'
import './PageTitle.scss'

import Divider from 'Components/UI/Divider'

function PageTitle( props ) {

    const {
        supTitle,
        subTitle
    } = props

    return (
        <div styleName="PageTitle">
            <Divider spacer light/>
            <h1 styleName="__heading">
                <span styleName="__headingSup">{supTitle}</span>
                <span styleName="__headingSub">{subTitle}</span>
            </h1>
        </div>
    )
}

PageTitle.propTypes = {
    supTitle: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

export default PageTitle
