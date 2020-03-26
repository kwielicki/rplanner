import React from 'react'
import classNames from 'classnames'
import { numberBetween } from 'Components/Helpers/numberBetween'

import './Rating.scss'

const maxRating = 5

function Rating(props) {
    const [rating] = React.useState(props.rating)

    const isActiveStar = (star) => {
        return star < rating ? true : false
    }
    
    const renderStarsRating = (maxRating) => {
        const ratingStars = []
        let rating = null

        for (rating = 0; rating < maxRating; rating++) {

            ratingStars.push(
                <span styleName={classNames({
                        "__element": true,
                        [`-isActive`]: isActiveStar(rating)
                    })} 
                    key={rating}>&#8902;</span>)

        }
        return ratingStars;
    }

    return (
        <div styleName="Rating">
            {renderStarsRating(maxRating)}
        </div>
    )
}

Rating.propTypes = {
    rating: numberBetween(0, maxRating)
}

export default Rating
