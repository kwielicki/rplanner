import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import styles from './PageTitle.scss'

import Hr from 'PATH_TO__COMPONENTS/UI/Hr'

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

export default CSSModules(styles, {allowMultiple: true})(PageTitle)
