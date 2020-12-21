import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import SvgEmptyImage from 'Assets/images/icons/inbox.svg'
import translations from 'Translations/translations.json'
import './EmptyData.scss'

function EmptyData({ icon, iconSize, title, subTitle, actionArea }) {
    return (
        <div styleName='EmptyData'>
            {icon && <div styleName={classNames('__icon', {
                [`-${iconSize}`]: iconSize
            })}>
                <div styleName={classNames('__iconSource', {
                    [`-${iconSize}`]: iconSize
                })}>
                    <SvgEmptyImage/>
                </div>
            </div>}
            <div styleName='__title'>{title}</div>
            {subTitle && <div styleName='__subtitle'>{subTitle}</div>}
            {actionArea && <div styleName='__actionArea'>{actionArea}</div>}
        </div>
    )
}
EmptyData.propTypes = {
    /**
     * Used to set icon.
     */
    icon: PropTypes.bool,
    /**
     * Used to set icon size.
     */
    iconSize: PropTypes.oneOf(['small', 'normal', 'large']),
    /**
     * Used to set title.
     */
    title: PropTypes.string,
    /**
     * Used to set subTitle.
     */
    subTitle: PropTypes.string,
    /**
     * Used to set action area.
     */
    actionArea: PropTypes.element
}

EmptyData.defaultProps = {
    /**
     * Used to set default title.
     */
    title: translations.properties.noResultsFound
}

export default EmptyData
