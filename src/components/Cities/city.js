import './city.css'
import data from '../Data/data'

const City = () => {
  return (
    <div className="city-details">
      <div className="city">
        <div className="city-title">
          <h2>Popular Cities across the Globe</h2>
          <p style={{color: 'rgba(7, 5, 5, 0.678)'}}>
            Book student accommodations near top cities and universities around
            the world
          </p>
        </div>
        <div className="city-photos">
          <div className="cities">
            {data.map(element => (
              <div key={element.id} className="city-item">
                <img
                  src={element.url}
                  alt={element.city}
                  className="city-photo"
                />
                <p className="city-name">{element.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default City
