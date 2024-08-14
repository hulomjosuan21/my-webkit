const Category = () => {

  const category = ["Color","Tools","UI","More","Components","Resource"]

  return (
    <section className="category__container">
      <h1 className="onShowAnimate">Category</h1>

      <div className="category_wrapper">
        {
          category && category.map((item, index) => (
            <div className="onShowAnimate category_box animateOnScroll" key={index}>{item}</div>
          ))
        }
      </div>
    </section>
  )
}

export default Category
