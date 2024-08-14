/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

const Category = ({categoryName}) => {

  return (
    <section className="container__category">
      <nav>
        <NavLink 
          to='/' 
          className="navbox-link"
          onClick={() => {
            localStorage.setItem('current_category', '/');
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </NavLink>
      </nav>
      <h1 className="onShowAnimate category_header categorybox_header">{categoryName}</h1>
    </section>
  )
}

export default Category
