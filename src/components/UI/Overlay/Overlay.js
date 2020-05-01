import React from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from "react-redux"
import { overlayRoot } from 'Components/Helpers/domRoots'
import './Overlay.scss'

const Overlay = () => {
    const isOverlayActivated = useSelector(state => state.overlay.isOverlayActivated)
    return createPortal(
        isOverlayActivated && <div styleName='Overlay'></div>
        ,overlayRoot()
    )
}
export default Overlay