import './index.css'

const PlanetItem = props => {
  const {imageUrl, name, description} = props
  console.log(props)
  return (
    <div className="planet-item">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1>{name}</h1>
      <p className="info">{description}</p>
    </div>
  )
}

export default PlanetItem
