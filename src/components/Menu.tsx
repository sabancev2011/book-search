import { MenuIcon, ArrowIcon, ComputersIcon, ArtIcon, BiographyIcon, HistoryIcon, MedicalIcon, PoetryIcon, AllIcon, Search } from '../assets';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSort, fetchItems, setQuery, resetPagination } from '../redux/actions/items';
import { FilterType, SortType } from '../types/items';
import { RootState } from '../redux/reducers';
import useOnclickOutside from "react-cool-onclickoutside";

const Menu: React.FC = () => {

    const { filter, sort, pagination, query } = useSelector((state: RootState) => state)
    const [filterPopUp, setFilterPopUp] = useState(false)
    const [sortPopUp, setSortPopUp] = useState(false)
    let [text, setText] = useState('');

    const dispatch = useDispatch()
    const onSetFilter = (filter: FilterType) => dispatch(setFilter(filter))
    const onResetPagination = () => dispatch(resetPagination()) 
    const onSetSort = (sort: SortType) => dispatch(setSort(sort))
    const onSetQuery = (text: string) => dispatch(setQuery(text))
    const filterRef = useOnclickOutside(() => setFilterPopUp(false))
    const sortRef = useOnclickOutside(() => setSortPopUp(false))

    useEffect(() => {
        if (query) {
            dispatch(fetchItems(filter, sort, pagination, query))
        }
    }, [filter, sort, pagination, query, dispatch])

    return (
        <div className="menu">
            <div className="container">
                <div className="menu__wrapper">
                    <form className="search">
                        <input placeholder="Search" type="text" className="search__input" value={text} onChange={(e) => setText(e.target.value)} />
                        <button onClick={(e) => {
                            e.preventDefault()
                            onResetPagination()
                            onSetQuery(text)
                        }} className="search__btn"><Search className='search__icon' /></button>
                    </form>
                    <div className="menu__inner">
                        <button ref={filterRef} onClick={() => setFilterPopUp(!filterPopUp)} className="menu__catBtn">
                            <MenuIcon className='menu__menuIcon' />
                            categories
                        </button>
                        <ul ref={filterRef} className={filterPopUp ? "filterPopUp" : "filterPopUp none"}>
                            <li onClick={() => { dispatch(onSetFilter('all')); setFilterPopUp(false) }} className="filterPopUpItem"><AllIcon />all</li>
                            <li onClick={() => { dispatch(onSetFilter('art')); setFilterPopUp(false) }} className="filterPopUpItem"><ArtIcon />art</li>
                            <li onClick={() => { dispatch(onSetFilter('biography')); setFilterPopUp(false) }} className="filterPopUpItem"><BiographyIcon />biography</li>
                            <li onClick={() => { dispatch(onSetFilter('computers')); setFilterPopUp(false) }} className="filterPopUpItem"><ComputersIcon />computers</li>
                            <li onClick={() => { dispatch(onSetFilter('history')); setFilterPopUp(false) }} className="filterPopUpItem"><HistoryIcon />history</li>
                            <li onClick={() => { dispatch(onSetFilter('medical')); setFilterPopUp(false) }} className="filterPopUpItem"><MedicalIcon />medical</li>
                            <li onClick={() => { dispatch(onSetFilter('poetry')); setFilterPopUp(false) }} className="filterPopUpItem"><PoetryIcon />poetry</li>
                        </ul>
                        <div ref={sortRef} className="menu__sort">
                            <p className='menu__sortTitle'>sort by:</p>
                            <button onClick={() => setSortPopUp(!sortPopUp)} className={sortPopUp ? "menu__sortBtn" : "menu__sortBtn close"}>
                                <span>{sort}</span>
                                <ArrowIcon className='menu__arrowIcon' />
                            </button>
                            <ul className={sortPopUp ? "sortPopUp" : "sortPopUp none"}>
                                <li onClick={() => { dispatch(onSetSort('relevance')); setSortPopUp(false) }} className="sortPopUp__item">Relevance</li>
                                <li onClick={() => { dispatch(onSetSort('newest')); setSortPopUp(false) }} className="sortPopUp__item">Newest</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu