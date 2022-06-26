import { Link } from "react-router-dom"

const Header: React.FC = () => {

  return (
    <header className="header">
      <div className="container">
         <Link to={'/'}><h1 className="header__title">Search for books</h1></Link>
      </div>
    </header >
  )
}

export default Header