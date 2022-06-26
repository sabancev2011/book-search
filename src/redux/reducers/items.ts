import { ItemsState, ItemsActions, ItemsActionTypes } from "../../types/items"

const initialState: ItemsState = {
    items: [],
    isLoaded: true,
    filter: 'all',
    sort: 'relevance',
    totalItems: null,
    pagination: 0,
    query: '',
    isNothingFound: false
}

const items = (state = initialState, action: ItemsActions) => {
    
    switch (action.type) {
        case ItemsActionTypes.SET_ITEMS:
            if (state.pagination === 0) {
                return {
                    ...state,
                    items: [...action.payload.items],
                    totalItems: action.payload.totalItems
                }
            }
            else {
                return {
                    ...state,
                    items: [...state.items, ...action.payload.items],
                    totalItems: action.payload.totalItems
                }
            }
        case ItemsActionTypes.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case ItemsActionTypes.SET_SORT:
            return {
                ...state,
                sort: action.payload
            }
        case ItemsActionTypes.SET_PAGINATION:
            return {
                ...state,
                pagination: state.pagination + 1
            }
        case ItemsActionTypes.RESET_PAGINATION:
            return {
                ...state,
                pagination: 0
            }
        case ItemsActionTypes.SET_QUERY:
            return {
                ...state,
                query: action.payload
            }
        case ItemsActionTypes.SET_ITEMS_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        case ItemsActionTypes.SET_NOTHING_FOUND:
            return {
                ...state,
                isNothingFound: action.payload
            }
        default:
            return state
    }
}

export default items