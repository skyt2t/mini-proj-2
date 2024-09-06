import React from 'react'
import './details.css'
const Details = () => {
  return (
    <div className="details">
      <div className="border">
        <img
          src="https://static-assets.amberstudent.com/amber-user-website/amber-website-prod-202/assets/images/app/assets/homepage-beds.svg"
          alt="beds"
        />
        <div>
          <b>1M+ Beds</b>
        </div>
        <div>
          <p>Book your perfect place from an extensive list of options.</p>
        </div>
      </div>
      <div className="border">
        <img
          src="https://static-assets.amberstudent.com/amber-user-website/amber-website-prod-202/assets/images/app/assets/homepage-universities.svg"
          alt="scholar"
        />
        <div>
          <b>800+ Universities</b>
        </div>
        <div>
          <p>Find the best student homes near prestigious universities.</p>
        </div>
      </div>
      <div className="border">
        <img
          src="https://static-assets.amberstudent.com/amber-user-website/amber-website-prod-202/assets/images/app/assets/homepage-cities.svg"
          alt="network"
        />
        <div>
          <b>250+ Global Cities</b>
        </div>
        <div>
          <p>We operate in major cities around the world.</p>
        </div>
      </div>
      <div className="border">
        <img
          src="https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg"
          alt="rating"
        />
        <div>
          <b>4.8/5 on Trustpilot</b>
        </div>
        <div>
          <p>5000+ students have rated us excellent for our services.</p>
        </div>
      </div>
    </div>
  )
}
export default Details
