export enum ItemsActionTypes {
    SET_ITEMS = "SET_ITEMS",
    SET_FILTER = "SET_FILTER",
    SET_SORT = "SET_SORT",
    SET_QUERY = "SET_QUERY",
    SET_PAGINATION = "SET_PAGINATION",
    RESET_PAGINATION = "RESET_PAGINATION",
    SET_ITEMS_LOADED = "SET_ITEMS_LOADED",
    SET_NOTHING_FOUND = "SET_NOTHING_FOUND"
}

export type FilterType = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'
export type SortType = 'relevance' | 'newest'

export interface ItemType {
    id: string
    title: string
    authors: string[]
    description: string
    categories: string[]
    image: string
}

export interface ItemsState {
    items: ItemType[]
    isLoaded: boolean
    filter: FilterType
    sort: SortType
    totalItems: number | null
    pagination: number
    query: string
    isNothingFound: boolean
}

export interface SetFilterAction {
    type: ItemsActionTypes.SET_FILTER
    payload: FilterType
}

export interface SetSortAction {
    type: ItemsActionTypes.SET_SORT
    payload: SortType
}

export interface SetItemsAction {
    type: ItemsActionTypes.SET_ITEMS
    payload: { items: ItemType[], totalItems: number }
}

export interface SetPagination {
    type: ItemsActionTypes.SET_PAGINATION
}

export interface ResetPagination {
    type: ItemsActionTypes.RESET_PAGINATION
}

export interface SetQuery {
    type: ItemsActionTypes.SET_QUERY
    payload: string
}

export interface SetItemsLoaded {
    type: ItemsActionTypes.SET_ITEMS_LOADED
    payload: boolean
}

export interface SetNothingFound {
    type: ItemsActionTypes.SET_NOTHING_FOUND
    payload: boolean
}

export type ItemsActions = SetItemsAction | SetSortAction | SetFilterAction | SetPagination | SetQuery | ResetPagination | SetItemsLoaded | SetNothingFound  