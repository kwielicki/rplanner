import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import styles from './ListWithLinks.scss'


@CSSModules(styles, {allowMultiple: true})
class ListWithLinks extends React.Component {
    render() {
        const { links } = this.props
        return (
            (!_.isEmpty(links) &&
                <ul styleName='ListWithLinks'>
                    {links.map(({ linkUrl, linkTitle, linkLabel }, index) => {
                        return (
                            <li key={index} styleName='__element'>
                                <Link to={linkUrl} title={linkTitle} styleName='__anchor'>
                                    {linkLabel}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )
        )
    }
}

ListWithLinks.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        linkUrl: PropTypes.string.isRequired,
        linkTitle: PropTypes.string,
        linkLabel: PropTypes.string.isRequired
    }))
}

export default ListWithLinks