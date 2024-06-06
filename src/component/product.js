import one from "../assest/Images/one.jpg"
import two from "../assest/Images/two.jpg"
import three from "../assest/Images/three.jpg"

function Products() {
    return (
      <div className="products">
  
        <div className="box">
          <img src={one} alt="one"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
        <div className="box">
          <img src={two} alt="two"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="box">
          <img src={three} alt="three"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
  
  
      </div>
    )
  }

  export default Products