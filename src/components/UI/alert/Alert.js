import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Alert.scss'

function Alert( { type, icon, message, delay, show = true } ) {
    let timer = null;

    const [visible, setVisible] = useState(!show);

    useEffect(() => {
        setTimer();
    }, [show]);

    function setTimer() {
        if (timer != null) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          setVisible(!visible);
          timer = null;
        }, delay);
    }

    return (
        visible && <div styleName={classNames({
            'Alert': true,
            [`-${type}`]: type
        })} role='alert'>
            <div styleName={classNames({
                '__inner': true,
                [`-${type}`]: type
            })}>
                <div styleName='__icon'>
                    <FontAwesomeIcon icon={icon} styleName='__iconVariant'/>
                </div>
                <div styleName='__content'>
                    <h6 styleName='__title'>{type}</h6>
                    <p styleName='__text' dangerouslySetInnerHTML={{__html: message}}></p>
                </div>
            </div>
        </div>
    )
}

Alert.propTypes = {
    type: PropTypes.oneOf(['warning', 'danger', 'success', 'info']),
    icon: PropTypes.string.isRequired,
    delay: PropTypes.number,
    show: PropTypes.bool
}

export default Alert