import React from 'react'
import PropTypes from 'prop-types'

export const getFirstCharacterFromString = (string) => {
    return string.charAt(0);
}
getFirstCharacterFromString.propTypes = {
    string: PropTypes.string.isRequired
}
