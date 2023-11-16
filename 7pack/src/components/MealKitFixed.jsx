import "./MealKitFixed.scss"

const MealKitFixed = () => {
  return (
    <div className="food-cards">
      <div className="service-wrapper" >
        <div className="service-image-wrapper">
          <img className="service-image" src="https://7pack.lt/wp-content/uploads/2023/05/7pack-sport-pack-mityba-sportuojantiems.png" alt="Service photo" />
        </div>
        <div className="service-info-wrapper">
          <h2>Sport pack</h2>
          <p>Nuo 23,05 / d. (su pristatymu)</p>
        </div>
      </div>

      <div className="service-wrapper" >
        <div className="service-image-wrapper">
          <img className="service-image" src="https://7pack.lt/wp-content/uploads/2022/05/7pack-subalansuota-mityba-individualus.jpg" alt="Service photo" />
        </div>
        <div className="service-info-wrapper">
          <h2>Indivudualus</h2>
          <p>0,00 / d.</p>
        </div>
      </div>

      <div className="service-wrapper" >
        <div className="service-image-wrapper">
          <img className="service-image" src="https://7pack.lt/wp-content/uploads/2022/06/7pack-mitybosplanas-lunchboxveg-500.jpg" alt="Service photo" />
        </div>
        <div className="service-info-wrapper">
          <h2>Lunch Box Veg</h2>
          <p>Nuo 13,99 / d. (su pristatymu)</p>
        </div>
      </div>
    </div>
  )
}

export default MealKitFixed