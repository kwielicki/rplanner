import PropTypes from 'prop-types'

function EmptySpace(props) {
    const { type = 'normal' } = props

    return (
        type ? ' ' : '\xa0'
    )
}

EmptySpace.propTypes = {
    type: PropTypes.oneOf(['normal', 'nbsp']).isRequired
}

export default EmptySpace
