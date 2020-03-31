import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import styles from './Tooltipster.scss'

function Tooltipster(props) {

    const classes = {
        popper: styles.Tooltipster,
        tooltip: styles.__tooltip
    }

    return (
        <Tooltip {...props} classes={classes}>{props.children}</Tooltip>
    )
}

export default Tooltipster
