import React from 'react'
import PropTypes from 'prop-types'
import translations from 'Translations/translations.json'

export const  TranslationText = props => {
    const { object, id } = props
    return (
        <>
            {String(object[id])}
        </>
    )
}
TranslationText.propTypes = {
    object: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
}

export const  TranslationComponentProperty = props => {
    const { translationProperty = translations.properties.component,
            componentName,
            translationKey,
            component: Component = 'span'} = props
    return (
        <Component
            dangerouslySetInnerHTML={{__html: String(translationProperty[componentName][translationKey])}}/>
    )
}

TranslationComponentProperty.prototype = {
    componentName: PropTypes.string.isRequired,
    translationKey: PropTypes.string.isRequired,
    enableDangerHtml: PropTypes.bool
}
