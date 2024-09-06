import './steps.css'

const Steps = () => {
  return (
    <div className="steps-details">
      <div className="step">
        <div className="step-title">
          <h2>Book your place in 3 easy steps</h2>
          <p style={{color: 'rgba(7, 5, 5, 0.678)'}}>
            Book places in major cities and universities across the globe
          </p>
        </div>
        <div className="step-start">
          <div className="step-step">
            <div className="left">
              <p>1</p>
            </div>
            <img
              src="https://static-assets.amberstudent.com/images/bookings-steps-hd-1.svg"
              alt="discover"
            />
            <h3>Discover and Finalise</h3>
            <p style={{color: 'rgba(7, 5, 5, 0.678)'}}>
              Choose from a plethora of verified student home listings
            </p>
          </div>
          <div className="arrow">
            <img
              src="https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/step-arrow-right.svg"
              alt="arrow"
            />
          </div>
          <div className="step-step">
            <div className="left">
              <p>2</p>
            </div>
            <img
              src="https://static-assets.amberstudent.com/images/bookings-steps-hd-1.svg"
              alt="report"
            />
            <h3>Get your paperwork done</h3>
            <p style={{color: 'rgba(7, 5, 5, 0.678)'}}>
              Paperwork’s on us, no need to fuss.
            </p>
          </div>
          <div className="arrow">
            <img
              src="https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/step-arrow-right.svg"
              alt="arrow"
            />
          </div>
          <div className="step-step">
            <div className="left">
              <p>3</p>
            </div>
            <img
              src="https://static-assets.amberstudent.com/images/bookings-steps-hd-3.svg"
              alt="home"
            />
            <h3>Accommodation Booked!</h3>
            <p style={{color: 'rgba(7, 5, 5, 0.678)'}}>
              Relax, pack your bags, and unravel a new life chapter!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Steps
