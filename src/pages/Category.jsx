/* eslint-disable react/prop-types */
import { Modal } from "../components"
import { NavLink } from "react-router-dom"
import { db } from "../firebase/FirebaseConfig"
import { onSnapshot, collection, query, where } from 'firebase/firestore';
import { useState, useEffect } from "react";

const Category = ({categoryName}) => {

  const [tools, setTools] = useState([]);

  useEffect(() => {
    // Create a query with a condition to match the categoryName
    const q = query(collection(db, "tools"), where("category", "==", categoryName));

    // Listen for real-time updates
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const _tools = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTools(_tools);
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, [categoryName])

  return (
    <section className="container__category">
      <nav>
        <NavLink to='/' className="navbox-link">
          <i className="fa-solid fa-arrow-left"></i>
        </NavLink>
      </nav>
      <h1 className="onShowAnimate category_header category_header">{categoryName}</h1>

      <article className="modal__wrapper">
        {
          tools && tools.map((item, index) => (
            <Modal key={index} item={item} />
          ))
        }
      </article>
    </section>
  )
}

export default Category
