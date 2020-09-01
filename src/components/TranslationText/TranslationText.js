import React from 'react'
import PropTypes from 'prop-types'

function TranslationText(props) {
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

export default TranslationText
