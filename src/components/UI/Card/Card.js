import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { isEmpty } from 'lodash'

import styles from './Card.scss'

function Card(props) {
    const { label, href, title, header, description, sub } = props
    return (
        <div styleName='Card'>
            <Link styleName='__link' title={title} to={href}>
                <h2 styleName='__header'>
                    {header}
                    {!isEmpty(sub) &&
                        <sub styleName='__headerSub'>{sub}</sub>
                    }
                </h2>
                <p styleName='__description'>{description}</p>
                <span styleName='__label'>{label}</span>
            </Link>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    sub: PropTypes.string,
    description: PropTypes.string.isRequired
}

export default CSSModules(styles, {allowMultiple: true})(Card)
