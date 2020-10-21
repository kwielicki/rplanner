import React from 'react'
import { connect } from 'react-redux'
import { fetchGuests } from 'Actions/guestsActions'
import Loader from 'Components/UI/Loader'
import GuestTableHeaderBasic from './GuestTableHeaderBasic'
import GuestTableBodyBasic from './GuestTableBodyBasic'
import EmptyData from 'Components/EmptyData'
import { isEmpty } from 'lodash'
import './GuestTableManager.scss'

const mapStateToProps = state => {
    const { collection,
            loading,
            error } = state.guests
    const { uid } = state.auth.user
    return {
        collection: collection,
        loading: loading,
        error: error,
        uid: uid
    }
}

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
        const { collection, loading, error, uid, dispatch } = this.props

        return (
            <div styleName='GuestTableManager'>
                {(!loading && !isEmpty(collection)) &&
                    <div styleName='__header'>
                        <GuestTableHeaderBasic data={this.state.tableHeaderBasic}/>
                    </div>
                }
                <div styleName='__body'>
                    {loading ? <Loader/> : <GuestTableBodyBasic data={collection} uid={uid} dispatch={dispatch}/>}
                    {!loading && isEmpty(collection) &&
                        <EmptyData
                            icon
                            title='No results found'
                            subTitle='Your guest collections is empty'>
                        </EmptyData>}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(GuestTableManager)
