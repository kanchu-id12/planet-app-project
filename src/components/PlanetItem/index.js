import './index.css'

const PlanetItem = props => {
  const {planentItemDetails} = props

  const {description, imageUrl, name} = planentItemDetails
  return (
    <div>
      <img src={imageUrl} alt={name} className="planet-img" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
