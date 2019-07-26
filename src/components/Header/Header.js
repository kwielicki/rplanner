import React from 'react';
import CSSModules from 'react-css-modules';
import Column from '../Grid/Column';
import styles from './Header.scss'

@CSSModules(styles, {allowMultiple: true})
class Header extends React.Component {
	render() {
		return (
			<header styleName='Header'>
				<Column xs='1'>
					<div styleName='__inner'>
                        Header
					</div>
				</Column>
			</header>
		)
	}
}

export default Header
