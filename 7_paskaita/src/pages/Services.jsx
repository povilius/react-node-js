import "./Services.css"

const Services = () => {
  return (
    <main className="services-main">
      <div className="service-wrapper" >
        <div className="service-image-wrapper">
          <img className="service-image" src="https://i.pinimg.com/564x/69/e8/42/69e8426f75bc5c35863253c3c92e6730.jpg" alt="Service photo" />
        </div>
        <div className="service-info-wrapper">
          <h2>Service #1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="service-wrapper" >
        <div className="service-image-wrapper">
          <img className="service-image" src="https://i.pinimg.com/564x/69/e8/42/69e8426f75bc5c35863253c3c92e6730.jpg" alt="Service photo" />
        </div>
        <div className="service-info-wrapper">
          <h2>Service #2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="service-wrapper" >
        <div className="service-image-wrapper">
          <img className="service-image" src="https://i.pinimg.com/564x/69/e8/42/69e8426f75bc5c35863253c3c92e6730.jpg" alt="Service photo" />
        </div>
        <div className="service-info-wrapper">
          <h2>Service #2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </main>
  )
}

export default Services