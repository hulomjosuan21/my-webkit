/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom"

const CategoryBox = ({ onSelectCategory }) => {

  const navigate = useNavigate();

  const handleCategorySelect = (_category) => {
    onSelectCategory(_category);
    navigate("/category");
    localStorage.setItem("current_category", _category);
  };

  const category = ["Color","Tools","UI","More","Components","Resource"]

  return (
    <section className="category__container">
      <h1 className="onShowAnimate category_header">Category</h1>

      <NavLink to='/category' style={{ textDecoration: 'none' }}>
        <div className="category_wrapper">
          {
            category && category.map((category_name, index) => (
              <div className="onShowAnimate category_box animateOnScroll" key={index} onClick={() => handleCategorySelect(category_name)} >{category_name}</div>
            ))
          }
        </div>
      </NavLink>
    </section>
  )
}

export default CategoryBox