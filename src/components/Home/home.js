import React, { useState } from 'react'
import './home.css'

import LoginModal from './LoginModal'
import MenuPopup from './MenuPopup' // Import the MenuPopup component
import { FaCheckCircle, FaSearch, FaClock, FaDollarSign } from 'react-icons/fa' // Import the icons

const Home = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false)
  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false) // New state for menu popup

  const handleLogin = loginDetails => {
    console.log('Login successful with details:', loginDetails)
    // Replace with actual authentication logic
  }

  return (
    <div>
      <div className="background">
        <img
          src="https://static-assets.amberstudent.com/amber-user-website/amber-website-prod-197/assets/images/app/assets/1440%20-%20web-min.png?q=90"
          alt="could not load"
        />
        <div className="navbar">
          <img
            src="https://prod-static-assets.amberstudent.com/images/logo/amber-logo-light.svg"
            alt="no logo"
          />
          <div className="right-nav">
            <div>Download App</div>
            <div>Support</div>
            <div>Shortlist</div>
            {/* Add role and accessibility features to make it interactive */}
            <div
              role="button"
              tabIndex="0"
              onClick={() => setLoginModalOpen(true)}
              onKeyPress={e => e.key === 'Enter' && setLoginModalOpen(true)}
            >
              Login
            </div>
            
            <div
              role="button"
              tabIndex="0"
              onClick={() => setMenuPopupOpen(true)}
              onKeyPress={e => e.key === 'Enter' && setMenuPopupOpen(true)}
            >
              Menu
            </div>
            
          </div>
        </div>
        <div className="text-name">
          <span>Home Away from Home!</span>
        </div>
        <div className="sub-head">
          <span className="book">
            Book student accommodations near top universities and cities across
            the globe.
          </span>
          <div className="assurence">
            <span>
              <FaCheckCircle /> Verified
            </span>
            <span>
              <FaClock /> 24x7 Assistance
            </span>
            <span>
              <FaDollarSign /> Lowest Price Guidelines
            </span>
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            name="searchbar"
            placeholder="Search by City, University or Property"
          />
          <div className="search-icon">
            <FaSearch size={40} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSubmit={handleLogin}
      />

      <MenuPopup
        isOpen={isMenuPopupOpen}
        onClose={() => setMenuPopupOpen(false)}
      />
    </div>
  )
}

export default Home
