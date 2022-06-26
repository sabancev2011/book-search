import { useDispatch, useSelector } from 'react-redux';
import { Star } from '../assets';
import { Item, Loader } from '../components'
import { RootState } from '../redux/reducers';
import { setPagination } from '../redux/actions/items';
import { ItemType } from '../types/items';

const Items: React.FC = () => {
    const dispatch = useDispatch();
    const { items, filter, totalItems, isLoaded, isNothingFound } = useSelector((state: RootState) => state)

    return (
        <section className="items">
            {!isNothingFound && isLoaded && totalItems ?
                <div className="container">
                    <div className="title">
                        <h1 className="title__cat"><Star className='title__catIcon' />{filter}</h1>
                        <h3 className="title__totalResults">Found {totalItems} results</h3>
                    </div>
                    <div className="items__wrapper">
                        {items.map((item: ItemType) => < Item key={item.id} id={item.id} title={item.title}
                            authors={item.authors} categories={item.categories} image={item.image} />)}
                    </div>
                    <button className="items__paginationBtn" onClick={() => dispatch(setPagination())}>load more</button>
                </div>
                : !isNothingFound && isLoaded && !totalItems ? <div></div>

                    : isNothingFound && isLoaded ?
                        <div className="container">
                            <div className="title">
                                <h1 className="title__cat"><Star className='title__catIcon' />Nothing Found</h1>
                            </div>
                        </div>
                        :
                        <div className="container">
                            <div className="items__wrapper">
                                {[...Array(30)].map((el, index) => {
                                    return <Loader key={`${el}_${index}`} />
                                })}
                            </div>
                        </div >
            }
        </section>
    )
}

export default Items



