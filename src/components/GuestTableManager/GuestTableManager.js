import React from 'react'
import { connect } from 'react-redux'
import { fetchGuests,
         filterGuestsByIdenticalTypes
       } from 'Actions/guestsActions'
import Loader from 'Components/UI/Loader'
import { Dropdown } from 'Components/UI/Dropdown'
import GuestTableHeaderBasic from './GuestTableHeaderBasic'
import GuestTableBodyBasic from './GuestTableBodyBasic'
import EmptyData from 'Components/EmptyData'
import bunches from 'Bunches/bunches.guest.json'
import { isEmpty, filter } from 'lodash'
import './GuestTableManager.scss'

const mapStateToProps = state => {
    const { collection,
            appliedFilters,
            loading,
            error } = state.guests
    const { uid } = state.auth.user
    return {
        collection: filter(collection, {
            data: {
                guest: Object.fromEntries(Object.entries(appliedFilters).filter(([_, v]) => v != null)),
        }}),
        loading: loading,
        appliedFilters: appliedFilters,
        error: error,
        uid: uid
    }
}
class GuestTableManager extends React.Component {

    state = {
        tableHeaderBasic: bunches.tableHeaderBasic,
        guestFilters: bunches.guestFilters,
        currentFilters: {},
    }

    componentDidMount() {
        this.props.dispatch(fetchGuests())
        this.setState({
            currentFilters: {
                ...this.props.appliedFilters
            }
        })
    }

    handleClickStatus = (filter) => {
        this.setState({
            currentFilters: {
                ...this.state.currentFilters,
                [filter.filterBy]: filter.value
            }
        }, () => {
            this.props.dispatch(filterGuestsByIdenticalTypes(this.state.currentFilters))
        });
    }

    filterByStatusValue = (value, type) => {
        if (!value) {
            return null;
        }
        return this.state.guestFilters[type].filter(element => {
            return element.value === value;
        }).reduce((result, item) => item, {});
    };

    render() {
        const {
            collection,
            loading,
            error,
            uid,
            dispatch,
            appliedFilters,
            appliedFilters: { guestStatus, guestAffiliation}
        } = this.props

        return (
            <div styleName='GuestTableManager'>
                <div styleName="__filters">
                    <div styleName="__filter">
                        <Dropdown
                            label='Filter by status'
                            selected={this.filterByStatusValue(guestStatus, "status") || this.state.guestFilters.statusSelected}
                            options={this.state.guestFilters.status}
                            handleClick={this.handleClickStatus}/>
                    </div>
                    <div styleName="__filter">
                        <Dropdown
                            label='Filter by affiltiation'
                            selected={this.filterByStatusValue(guestAffiliation, "affiltiation") || this.state.guestFilters.affiltiationSelected}
                            options={this.state.guestFilters.affiltiation}
                            handleClick={this.handleClickStatus}/>
                    </div>
                </div>
                {(!loading && !isEmpty(collection)) &&
                    <div styleName='__header'>
                        <GuestTableHeaderBasic data={this.state.tableHeaderBasic}/>
                    </div>
                }
                <div styleName='__body'>
                    {loading ? <Loader/> : <GuestTableBodyBasic data={collection} uid={uid} dispatch={dispatch}/>}
                    {!loading && isEmpty(collection) && !isEmpty(appliedFilters) &&
                        <EmptyData
                            icon
                            title='No data found after given filters'
                            subTitle='Try to change the criteria by which you want to filter the data.'>
                        </EmptyData>}
                    {!loading && isEmpty(collection) && isEmpty(appliedFilters) &&
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
