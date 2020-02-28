import React from 'react'
import CSSModules from 'react-css-modules';
import { NavLink } from 'react-router-dom'
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'
import styles from './BreadcrumbsWrapper.scss'


@CSSModules(styles, {allowMultiple: true})
class BreadcrumbsWrapper extends React.Component {
    state = {
        currentItem: null
    
    }
    componentDidMount() {
        this.setState({
            currentItem: `${styles.__item} ${styles.isCurrent}`
        })
    }
    
    render() {
        const { currentItem } = this.state
        const { BreadcrumbsWrapper, __item, __anchor } = styles

        return (
            <Breadcrumbs
                    separator={null}
                    container={
                        (props) =>
                            <ul className={BreadcrumbsWrapper}>{props.children}</ul>}
                    item={
                        (props) =>
                            <li className={__item}>
                                {<NavLink to="/" activeClassName={null} className={__anchor} title={props.children}>{props.children}</NavLink>}
                            </li>}
                    finalItem={(props) =><li className={currentItem}>{props.children}</li>}/>
        )
    }
}

export default BreadcrumbsWrapper