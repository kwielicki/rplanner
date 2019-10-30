import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from './LazyImage.scss'

@CSSModules(styles, {allowMultiple: true})
class LazyImage extends PureComponent {

    componentDidMount() {
        this.observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const { isIntersecting } = entry
                    if (isIntersecting) {
                        this.element.src = this.props.src
                        this.observer = this.observer.disconnect()
                    }
                })
            }, {
                rootMargin: "0px 0px -100px 0px"
            })
        this.observer.observe(this.element);
    }

    render() {
        const { placeholder, alt, isCovered } = this.props;
        return (
            <img ref={el => this.element = el} 
                 src={placeholder} 
                 alt={alt} 
                 styleName={classNames({
                    "LazyImage": true,
                    "--isCovered": isCovered
                 })}/>
        );
    }
}

LazyImage.propTypes = {
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    isCovered: PropTypes.bool
};

export default LazyImage;