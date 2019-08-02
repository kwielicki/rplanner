import {
    FETCH_NEWS_BEGIN,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE
} from '@actions/newsActions.js'

const initialState = {
    items:  [],
    loading: false,
    error: null,
    defaultCategory: 'general',
    categories: [
        {id: 'general', name: 'General'},
        {id: 'business', name: 'Business' },
        {id: 'entertainment', name: 'Entertainment'},
        {id: 'health', name: 'Health'},
        {id: 'science', name: 'Science'},
        {id: 'sports', name: 'Sports'},
        {id: 'technology', name: 'Technology'}
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