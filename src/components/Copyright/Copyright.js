import React from 'react'
import CurrentYear from '../CurrentYear';
import CSSModules from 'react-css-modules';
import styles from './Copyright.scss'
import {FormattedMessage,defineMessages} from 'react-intl';


const translations = defineMessages({
    CopyrightWord: {
        id: 'Copyright.word',
        description: 'CopyrightWord',
        defaultMessage: 'Copyright'
    },
    CopyrightRights: {
        id: 'Copyright.rights',
        description: 'CopyrightRights',
        defaultMessage: 'by Krzysztof Wielicki. All rights reserved.'
    }
})

@CSSModules(styles, {allowMultiple: true})
class Copyright extends React.Component {

    render() {
        return (
            <div styleName='Copyright'>
                <div styleName='__inner'>
                    <FormattedMessage {...translations.CopyrightWord}/>
                    <CurrentYear></CurrentYear>
                    <FormattedMessage {...translations.CopyrightRights}/>
                </div>
            </div>
        )
    }
}

export default Copyright