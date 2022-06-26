import { Link } from "react-router-dom"

interface ItemProps {
    id: string
    title: string
    authors: string[]
    categories: string[]
    image: string
}

const Item: React.FC<ItemProps> = ({ id, title, authors, categories, image }) => {

    return (
        <div className="item">
            <Link to={`/itemCard/${id}`}>
                <div className="item__imgWrapper">
                    <img src={image} alt={title} className="item__img" />
                </div>
            </Link>
            <div className="item__inner">
                <ul className="item__categotiesWrapper">
                    {
                        categories && <li className="item__categoties">{categories[0]}</li>
                    }
                </ul>
                <h2 className="item__title">{title}</h2>
                <ul className="item__authorWrapper">
                    {
                        authors?.map((item, index) => <li key={`${item}_${index}`} className="item__author">{item}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Item




