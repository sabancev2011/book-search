import Items from "../redux/reducers/items";
import { setFilter, setSort, setPagination, resetPagination, setQuery, setItemsLoaded, setNothingFound, setItems } from "../redux/actions/items";

const state = {
    items: [
        { id: '1', title: 'title', authors: ['author1', 'author2'], description: 'description', categories: ['categories1', 'categories2'], image: 'image url' },
        { id: '2', title: 'title', authors: ['author1', 'author2'], description: 'description', categories: ['categories1', 'categories2'], image: 'image url' },
        { id: '3', title: 'title', authors: ['author1', 'author2'], description: 'description', categories: ['categories1', 'categories2'], image: 'image url' },
        { id: '4', title: 'title', authors: ['author1', 'author2'], description: 'description', categories: ['categories1', 'categories2'], image: 'image url' },
    ],
    isLoaded: true,
    filter: 'all',
    sort: 'relevance',
    totalItems: null,
    pagination: 0,
    query: '',
    isNothingFound: false
};

it('items state should be rewrite', () => {
    let action = setItems([
        { id: '1', title: 'title', authors: ['author1', 'author2'], description: 'description', categories: ['categories1', 'categories2'], image: 'image url' },
        { id: '2', title: 'title', authors: ['author1', 'author2'], description: 'description', categories: ['categories1', 'categories2'], image: 'image url' },
    ], 2)
    let newState = Items(state, action);
    expect(newState.items.length).toBe(2)
    expect(newState.totalItems).toBe(2)
})

it('new items should be added', () => {
    let action = setItems([
        { id: '5', title: 'title', authors: ['author1', 'author2'], description: 'description', categories: ['categories1', 'categories2'], image: 'image url' },
        { id: '6', title: 'title', authors: ['author1', 'author2'], description: 'description', categories: ['categories1', 'categories2'], image: 'image url' },
    ], 3)
    let newState = Items({ ...state, pagination: 1 }, action);
    expect(newState.items.length).toBe(6)
    expect(newState.totalItems).toBe(3)
})

it('filter should be set', () => {
    let action = setFilter('biography')
    let newState = Items(state, action);
    expect(newState.filter).toBe('biography')
})

it('sort should be set', () => {
    let action = setSort('newest')
    let newState = Items(state, action);
    expect(newState.sort).toBe('newest')
})

it('pagination should be incremented', () => {
    let action = setPagination()
    let newState = Items(state, action);
    expect(newState.pagination).toBe(1)
})

it('pagination should be reset', () => {
    let action = resetPagination()
    let newState = Items({ ...state, pagination: 10 }, action);
    expect(newState.pagination).toBe(0)
})

it('query should be added', () => {
    let action = setQuery('query')
    let newState = Items(state, action);
    expect(newState.query).toBe('query')
})

it('item load should be set', () => {
    let action = setItemsLoaded(false)
    let newState = Items(state, action);
    expect(newState.isLoaded).toBe(false)
})

it('nothing found should be set', () => {
    let action = setNothingFound(true)
    let newState = Items(state, action);
    expect(newState.isNothingFound).toBe(true)
})
