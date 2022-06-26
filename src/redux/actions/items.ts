import axios from "axios";
import { Dispatch } from "redux";
import { ItemType, ItemsActions, ItemsActionTypes, FilterType, SortType } from "../../types/items";

export const setFilter = (filter: FilterType) => ({ type: ItemsActionTypes.SET_FILTER, payload: filter })
export const setSort = (sort: SortType) => ({ type: ItemsActionTypes.SET_SORT, payload: sort })
export const setPagination = () => ({ type: ItemsActionTypes.SET_PAGINATION })
export const resetPagination = () => ({ type: ItemsActionTypes.RESET_PAGINATION })
export const setQuery = (text: string) => ({ type: ItemsActionTypes.SET_QUERY, payload: text })
export const setItemsLoaded = (loaded: boolean) => ({ type: ItemsActionTypes.SET_ITEMS_LOADED, payload: loaded })
export const setNothingFound = (nothingFound: boolean) => ({ type: ItemsActionTypes.SET_NOTHING_FOUND, payload: nothingFound })
export const setItems = (items: ItemType[], totalItems: number) => ({ type: ItemsActionTypes.SET_ITEMS, payload: { items, totalItems } })

export const fetchItems = (filter: FilterType, sort: SortType, pagination: number, query: string) => {
    return async (dispatch: Dispatch<ItemsActions>) => {
        dispatch({ type: ItemsActionTypes.SET_ITEMS_LOADED, payload: false })
        dispatch({ type: ItemsActionTypes.SET_NOTHING_FOUND, payload: false })
        let response: any = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}${filter !== 'all' ? `+subject:${filter}` : ''}&startIndex=${pagination}&maxResults=30&orderBy=${sort}&key=AIzaSyCBQ5wkiWdD20pTiHVGDO5JJfy1eWVx0ww`)
        if (response.data.totalItems) {
            let { data: { totalItems, items } } = response
            let newTotalItems: number = totalItems
            let newItems: ItemType[] = items?.map((item: any) => ({
                id: `${item.id}_${item.etag}`,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                description: item.volumeInfo.description,
                categories: item.volumeInfo.categories,
                image: item.volumeInfo.imageLinks?.thumbnail
            }))
            dispatch({ type: ItemsActionTypes.SET_ITEMS, payload: { items: newItems, totalItems: newTotalItems } })
            dispatch({ type: ItemsActionTypes.SET_ITEMS_LOADED, payload: true })
        }
        else {
            dispatch({ type: ItemsActionTypes.SET_NOTHING_FOUND, payload: true })
            dispatch({ type: ItemsActionTypes.SET_ITEMS_LOADED, payload: true })
        }

    }
}




