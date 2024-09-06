import React from 'react'
import {
  FaUser,
  FaCalendarCheck,
  FaUsers,
  FaShareAlt,
  FaHandshake,
  FaList,
} from 'react-icons/fa'
import './menuPopup.css'

const MenuPopup = ({isOpen, onClose}) => {
  if (!isOpen) return null

  return (
    <div className={`menu-popup ${isOpen ? 'open' : ''}`}>
      <div className="menu-popup-content">
        <div className="menu-popup-header">
          <h2>Menu</h2>
          <button onClick={onClose} className="menu-popup-close">
            ×
          </button>
        </div>
        <ul className="menu-popup-list">
          <li>
            <FaUser /> My Profile
          </li>
          <li>
            <FaCalendarCheck /> Bookings
          </li>
          <li>
            <FaUsers /> Group Booking
          </li>
          <li>
            <FaShareAlt /> Refer a Friend
          </li>
          <li>
            <FaHandshake /> Partner with Us
          </li>
          <li>
            <FaList /> List with Us
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuPopup
