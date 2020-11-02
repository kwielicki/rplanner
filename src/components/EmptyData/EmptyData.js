import React from 'react'
import PropTypes from 'prop-types'
import SvgEmptyImage from 'Assets/images/icons/inbox.svg'
import translations from 'Translations/translations.json'
import './EmptyData.scss'

function EmptyData(props) {
    const { icon, iconSize, title, subTitle } = props

    return (
        <div styleName='EmptyData'>
            {icon && <div styleName='__icon'>
                <div styleName='__iconSource'>
                    <SvgEmptyImage/>
                </div>
            </div>}
            <div styleName='__title'>{title}</div>
            {subTitle && <div styleName='__subtitle'>{subTitle}</div>}
        </div>
    )
}
EmptyData.propTypes = {
    icon: PropTypes.bool,
    iconSize: PropTypes.oneOf(['small', 'normal', 'large']),
    title: PropTypes.string,
    subTitle: PropTypes.string
}

EmptyData.defaultProps = {
    title: translations.properties.noResultsFound
}

export default EmptyData
