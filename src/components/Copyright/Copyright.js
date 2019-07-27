import React from 'react'
import CurrentYear from '../CurrentYear';
import CSSModules from 'react-css-modules';
import styles from './Copyright.scss'
import { FormattedMessage,defineMessages } from 'react-intl';


const messages = defineMessages({
    copyright: {
        id: 'copyright',
        description: 'Copyright Message with including Current Year Component',
        defaultMessage: '{copySign} Copyright {currentYear}. All rights reserved.'
    }
})

@CSSModules(styles, {allowMultiple: true})
class Copyright extends React.Component {

    render() {
        return (
            <div styleName='Copyright'>
                <div styleName='__inner'>
                    <FormattedMessage
                        {...messages.copyright}
                            values={{
                                currentYear: <CurrentYear/>,
                                copySign: '\u00A9'
                            }}/>
                </div>
            </div>
        )
    }
}

export default Copyright