import React from 'react';
import { useFullScreen } from 'react-browser-hooks'
import Rbutton from '../Rbutton/Rbutton'
import CSSModules from 'react-css-modules';
import styles from './FullScreenView.scss'


const FullScreenView = () => {
    const { toggle, fullScreen } = useFullScreen()
    return (
        <Rbutton
            label={ fullScreen ? 'Zamknij' : 'Otwórz' } 
            type='primary'
            handleClick={toggle}/>
    )
}

export default CSSModules(FullScreenView,styles)