import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {useSpring, animated} from 'react-spring'
import Moment from 'react-moment'
import { fetchRecentlyAddedGuests } from 'Actions/recentlyAddedGuests.actions'
import { convertUtcDate } from 'Components/Helpers/convertUtcDate'
import capitalize from 'Components/Helpers/capitalize'
import Chips from 'Components/UI/Chips'
import SvgGroom from 'Assets/images/icons/groom.svg'
import SvgBride from 'Assets/images/icons/bride.svg'
import './RecentlyAddedGuests.scss'

function RecentlyAddedGuests(props) {
    const recentlyGuests = useSelector(state => state.recentlyAddedGuestsReducer.collection);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRecentlyAddedGuests(5))
    }, [])

    const handleGuestAffiliation = (guestAffiliation) => {
        return guestAffiliation === 'groom' ? <SvgGroom/> : <SvgBride/>
    }

    const SpringFadeIn = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <div styleName='RecentlyAddedGuests'>
            <ul styleName='__guests'>
                {recentlyGuests && recentlyGuests.map(recentlyGuest => (
                    <animated.li style={SpringFadeIn} key={recentlyGuest.id}
                        styleName='__guestElement'>
                        <div styleName='__guestImage'>
                            {handleGuestAffiliation(recentlyGuest.data.guest.guestAffiliation)}
                        </div>
                        <div styleName='__guestContent'>
                            <strong styleName='__guestName'>
                                {recentlyGuest.data.guest.fullName}
                            </strong>
                            <span styleName='__guestCreation'>
                                <Moment date={convertUtcDate(recentlyGuest?.data?.timestamp?.seconds)}
                                        format="D MMMM YYYY, HH:mm"/>
                            </span>
                        </div>
                        <div styleName='__guestStatus'>
                            <Chips type={recentlyGuest.data.guest.guestStatus}
                                size='small'>
                                {capitalize(recentlyGuest.data.guest.guestStatus)}
                            </Chips>
                        </div>
                    </animated.li>
                ))}
            </ul>
        </div>
    )
}

export default RecentlyAddedGuests
