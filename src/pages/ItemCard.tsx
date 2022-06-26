import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { RootState } from "../redux/reducers"


const ItemCard: React.FC = () => {

    const { id } = useParams()
    const item = useSelector((state: RootState) => state.items.find((item) => item.id === id))

    return (
        <>
            {item &&
                <div className="itemCard">
                    <div className="container">
                        <div className="itemCard__wrapper">
                            <div className="itemCard__img">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="itemCardInfo">
                                <ul className="itemCardInfo__categoriesWrapper">
                                    {item.categories?.map((item, index) => {
                                        return <li key={`${item}_${index}`} className="itemCardInfo__categories">{item}</li>
                                    })}
                                </ul>
                                <h1 className="itemCardInfo__title">{item.title}</h1>
                                <ul className="itemCardInfo__authorsWrapper">
                                    {item.authors?.map((item, index) => {
                                        return <li key={`${item}_${index}`} className="itemCardInfo__authors">{item}</li>

                                    })}
                                </ul>
                                {
                                    item.description &&
                                    <div className="itemCardDescr">
                                        <h1 className="itemCardDescr__title">description</h1>
                                        <p className="itemCardDescr__text">{item.description}</p>
                                    </div>
                                }
                            </div>

                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default ItemCard