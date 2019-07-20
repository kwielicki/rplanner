import React from 'react';
import CSSModules from 'react-css-modules';
import Megamenu from '../Megamenu/Megamenu'
import Column from '../Column/Column';
import styles from './Header.scss'

class Header extends React.Component {
	render() {
		return (
			<header styleName='Header'>
				<Column xs='1'>
					<div styleName='__inner'>
                        <Megamenu/>
					</div>
				</Column>
			</header>
		)
	}
}

export default CSSModules(Header,styles)
