import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './CurrentYear.scss'

class CurrentYear extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentYear: null
        }
    }

    getTime() {
        const time = new Date();
        this.setState({
            currentYear: time.getFullYear()
        })
    }

    componentDidMount() {
        this.getTime();
    }

    render() {
        return (
            <>
                <div styleName='CurrentYear'>
                    <span styleName='__year'>&copy; {this.state.currentYear}</span>
                </div>
            </>
        )
    }
}

export default CSSModules(CurrentYear,styles)