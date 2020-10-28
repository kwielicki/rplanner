import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.scss'

function Pagination(props) {
    const style = {
        inner: styles.inner,
        element: styles.element,
        elementNext: styles.elementNext,
        elementPrev: styles.elementPrev,
        page: styles.page,
        isPrev: styles.isPrev,
        isNext: styles.isNext,
        isActive: styles.isActive,
        isDisabled: styles.isDisabled
    }
    return (
        <div styleName='Pagination'>
            <p styleName='__perPage'>Maximum items per page: {props.maxItemsPerPage}</p>
            <p styleName='__offset'>
                {props.pageRangeStart + 1} - {props.pageRangeEnd >= props.allPages
                    ? props.allPages
                    : props.pageRangeEnd} of {props.allPages}
            </p>
            <ReactPaginate
                previousLabel={props.previousLabel}
                nextLabel={props.nextLabel}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={props.pageCount}
                onPageChange={props.onPageChange}
                containerClassName={style.inner}
                subContainerClassName={'pages pagination'}
                activeClassName={style.isActive}
                pageClassName={style.element}
                pageLinkClassName={style.page}
                previousClassName={`${style.element} ${style.isPrev}`}
                previousLinkClassName={style.elementPrev}
                nextClassName={`${style.element} ${style.isNext}`}
                nextLinkClassName={style.elementNext}
                disabledClassName={style.isDisabled}
            />
        </div>
    )
}

export default Pagination
