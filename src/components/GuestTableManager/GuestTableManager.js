import React from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { fetchGuests } from 'Actions/guestsActions'
import Loader from 'Components/UI/Loader'
import Hr from 'Components/UI/Hr'
import Moment from 'react-moment'
import { convertUtcDate } from 'Components/Helpers/convertUtcDate'
import GuestTableHeaderBasic from './GuestTableHeaderBasic'
import styles from './GuestTableManager.scss'
import GuestTableBodyBasic from './GuestTableBodyBasic'

const mapStateToProps = state => {
    const { collection,
            loading,
            error } = state.guests
    return {
        collection: collection,
        loading: loading,
        error: error
    }
}

@CSSModules(styles, {allowMultiple: true})
class GuestTableManager extends React.Component {

    state = {
        tableHeaderBasic: [
            {id: 0, info: '#', style: 'smaller'},
            {id: 1, info: 'First name'},
            {id: 2, info: 'Last name'},
            {id: 3, info: 'Guest count (adult)'},
            {id: 4, info: 'Affiliation'},
            {id: 5, info: 'Status'},
            {id: 6, info: 'Actions'}
        ]
    }

    componentDidMount() {
        this.props.dispatch(fetchGuests())
    }

    render() {
        const { collection, loading, error } = this.props


        return (
            <div styleName='GuestTableManager'>
                <div styleName='__header'>
                    <GuestTableHeaderBasic data={this.state.tableHeaderBasic}/>
                </div>
                <div styleName='__body'>
                    {loading ? <Loader/> : <GuestTableBodyBasic data={collection}/>}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(GuestTableManager)