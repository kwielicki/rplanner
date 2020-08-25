import React from 'react'
import CurrentYear from 'Components/CurrentYear'
import translations from 'Translations/translations.json'
import './Copyright.scss'

export const Copyright = () => {
    return (
        <div styleName='Copyright'>
            <div styleName='__inner'>
                {'\u00A9'}&nbsp;<CurrentYear/>.
                {translations.properties.allRightsReserved}
            </div>
        </div>
    )
}

export default Copyright
