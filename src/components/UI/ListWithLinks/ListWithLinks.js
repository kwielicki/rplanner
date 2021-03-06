import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import './ListWithLinks.scss'

class ListWithLinks extends React.Component {
    render() {
        const { links } = this.props
        return (
            (!isEmpty(links) &&
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