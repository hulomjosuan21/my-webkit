import content from "../site-data.json"
import image from "../assets/undraw_link_shortener_mvf6.svg"

const LandingPage = () => {
  return (
    <section className="landingpage__container">
      <div className="landingpage_text">
        <h1 className="onShowAnimate">Hi👋🏻 <span>there</span></h1>
        <p className="onShowAnimate">{content.paragraph}</p>
      </div>

      <div className="onShowAnimate landingpage__img">
        <img src={image} alt="" />
      </div>
    </section>
  )
}

export default LandingPage
