import axios from 'axios'

export const FETCH_NEWS_BEGIN   = 'FETCH_NEWS_BEGIN'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE'
export const FETCH_NEWS_CATEGORY_SELECT = 'FETCH_NEWS_CATEGORY_SELECT'
export const FETCH_NEWS_COUNTRY_SELECT = 'FETCH_NEWS_COUNTRY_SELECT'

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

export const fetchNewsCategorySelect = selectedCategory => ({
    type: FETCH_NEWS_CATEGORY_SELECT,
    payload: { selectedCategory }
})

export const fetchNewsCountrySelect = (selectedCountry, selectedCountryLabel) => ({
    type: FETCH_NEWS_COUNTRY_SELECT,
    payload: { selectedCountry, selectedCountryLabel }
})

export function fetchNews(category, country) {
    return dispatch => {
        dispatch(fetchNewsBegin());
        return axios.get('https://newsapi.org/v2/top-headlines', {
                params: {
                    country: country,
                    category: category,
                    apiKey: NEWS_API_KEY,
                    pageSize: 25
                }
            })
            .then(response => response.data)
            .then(data => {
                dispatch(fetchNewsSuccess(data))
                return data
            })
            .catch(error => dispatch(fetchNewsFailure(error)))
    }
}