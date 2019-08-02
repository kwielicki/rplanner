export const FETCH_NEWS_BEGIN   = 'FETCH_NEWS_BEGIN'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE'

const NEWS_API_KEY = 'd166dcd861194b818e8660ce5a318e7f'

export const fetchNewsBegin = () => ({
    type: FETCH_NEWS_BEGIN
})

export const fetchNewsSuccess = items => ({
    type: FETCH_NEWS_SUCCESS,
    payload: { items }
})

export const fetchNewsFailure = error => ({
    type: FETCH_NEWS_FAILURE,
    payload: { error }
})

export function fetchNews(country, category) {
    return dispatch => {
        dispatch(fetchNewsBegin());
        return fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${NEWS_API_KEY}`)
            .then(handleErrors)
            .then(resp => resp.json())
            .then(data => {
                dispatch(fetchNewsSuccess(data))
                return data
            })
            .catch(error => dispatch(fetchNewsFailure(error)))
    }
}

function handleErrors(response) {
    if ( !response.ok ) {
        throw Error(response.statusText)
    }
    return response
}