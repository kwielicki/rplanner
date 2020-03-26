import React from 'react'
import PropTypes from 'prop-types'
import './PageTitle.scss'

import Hr from 'Components/UI/Hr'

function PageTitle( props ) {

    const {
        supTitle,
        subTitle
    } = props

    return (
        <div styleName="PageTitle">
            <Hr spacer/>
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
