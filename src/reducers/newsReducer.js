import {
    FETCH_NEWS_BEGIN,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_CATEGORY_SELECT
} from 'Actions/newsActions.js'

const initialState = {
    items:  [],
    loading: false,
    error: null,
    selectedCategory: 'general',
    categories: [
        {id: '1', value: 'general', label: 'General'},
        {id: '2', value: 'business', label:  'Business'},
        {id: '3', value: 'entertainment', label: 'Entertainment'},
        {id: '4', value: 'health', label: 'Health'},
        {id: '5', value: 'science', label: 'Science'},
        {id: '6', value: 'sports', label: 'Sports'},
        {id: '7', value: 'technology', label: 'Technology'}
    ]
}

export default function newsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_NEWS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_NEWS_CATEGORY_SELECT:
            return {
                ...state,
                selectedCategory: action.payload.selectedCategory
            }

        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.items
            }

        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }

        default:
            return state
    }
}