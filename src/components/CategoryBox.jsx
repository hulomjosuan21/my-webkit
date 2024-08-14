/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom"
import { db } from "../firebase/FirebaseConfig";
import { collection, onSnapshot  } from "firebase/firestore";
import { useState, useEffect } from "react";

const CategoryBox = ({ onSelectCategory }) => {

  const navigate = useNavigate();

  const handleCategorySelect = (_category) => {
    onSelectCategory(_category);
    navigate("/category");
  };

  const [category, setCategory] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "category"), (querySnapshot) => {
      const _category = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategory(_category);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="category__container">
      <h1 className="onShowAnimate category_header">Category</h1>

      <NavLink to='/category' style={{ textDecoration: 'none' }}>
        <div className="category_wrapper">
          {
            (category.length != 0) ? category.map((c) => (
              <div className="onShowAnimate category_box animateOnScroll" key={c.id} onClick={() => handleCategorySelect(c.category_name)} >{c.category_name}</div>
            )) : <div className="onShowAnimate category_box animateOnScroll lazy_loading">Loading</div>
          }
        </div>
      </NavLink>
    </section>
  )
}

export default CategoryBox