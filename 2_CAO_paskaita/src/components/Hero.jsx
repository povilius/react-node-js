

const Hero = (props) => (
  <div style={{
    backgroundColor: props.color,
    color: props.textColor,
    padding: "2rem",
    height: "50vh",
  }}>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
)


export default Hero