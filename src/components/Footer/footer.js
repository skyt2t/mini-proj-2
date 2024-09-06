import './footer.css'
import React from 'react'
const Footer = () => {
  return (
    <div className="footer">
      <div className="amber-details">
        <img
          src="https://prod-static-assets.amberstudent.com/images/amber-hd.svg?auto=format&trim=auto"
          alt="footer logo"
        />
        <p>amber © 2024. All rights reserved.</p>
        <div className="footer-rating">
          <div className="rating-block">
            <img
              src="https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg"
              alt="footer rating"
            />
            <div
              style={{
                border: '1px solid #D1D5DB',
                height: '3vh',
                width: '0.1vh',
              }}
            ></div>
            <div>
              <p>4.8/5 on Trustpilot</p>
            </div>
          </div>
          <div className="rate-block">
            <p>
              Rated as "Excellent"{' '}
              <ul>
                <li>5000+ Reviews by students</li>
              </ul>{' '}
            </p>
          </div>
        </div>
        <div className="download-details">
          <div className="apps">
            <p style={{color: 'black', fontSize: 15}}>Get the app</p>
            <div className="arrange-image">
              <img
                src="https://prod-static-assets.amberstudent.com/images/playstore-android.svg?auto=format&trim=auto"
                alt="playstore"
              />
              <img
                src="https://prod-static-assets.amberstudent.com/images/app-store.svg?auto=format&trim=auto"
                alt="applestore"
              />
            </div>
          </div>
          <div
            style={{border: '1px solid #D1D5DB', height: '7vh', width: '0.1vh'}}
          ></div>
          <div className="methods">
            <p style={{color: 'black', fontSize: 15}}>Payment Options</p>
            <div className="cards">
              {' '}
              <img
                src="https://prod-static-assets.amberstudent.com/images/footer_payment_partners.svg?auto=format&trim=auto"
                alt="visa"
              />{' '}
            </div>
          </div>
        </div>
      </div>
      <div className="fo-details">
        <div className="company">
          <p>
            <b>Company</b>
          </p>
          <ul type="none">
            <li>About</li>
            <li>How it works?</li>
            <li>Refer a friend</li>
            <li>Group Bookings</li>
            <li>List with us</li>
            <li>Partner with us</li>
            <li>Universities</li>
            <li>careers</li>
          </ul>
        </div>
        <div className="company">
          <p>
            <b>Discover</b>
          </p>
          <ul type="none">
            <li>Blog</li>
            <li>Podcast</li>
            <li>Newsroom</li>
            <li>Amber plus</li>
            <li>Media Mention</li>
            <li>Ambassador</li>
            <li>Scholarshps</li>
            <li>Exams</li>
          </ul>
        </div>
        <div className="company">
          <p>
            <b>Support</b>
          </p>
          <ul type="none">
            <li>Help center</li>
            <li>Contact</li>
            <li>T&C</li>
            <li>Privacy Policy</li>
            <li>Media Mention</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="company">
          <p>
            <b>Contact Us</b>
          </p>
          <br></br>
          <ul type="none" style={{color: 'grey'}}>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1vh',
                padding: '0.3vh',
                border: '1px solid grey',
                borderRadius: '10px',
                borderStyle: 'inset',
                overflow: 'hidden',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="16"
                height="16"
                fill="#f3123c"
              >
                <path d="M484.6 330.6C484.6 330.6 484.6 330.6 484.6 330.6l-101.8-43.66c-18.5-7.688-40.2-2.375-52.75 13.08l-33.14 40.47C244.2 311.8 200.3 267.9 171.6 215.2l40.52-33.19c15.67-12.92 20.83-34.16 12.84-52.84L181.4 27.37C172.7 7.279 150.8-3.737 129.6 1.154L35.17 23.06C14.47 27.78 0 45.9 0 67.12C0 312.4 199.6 512 444.9 512c21.23 0 39.41-14.44 44.17-35.13l21.8-94.47C515.7 361.1 504.7 339.3 484.6 330.6zM457.9 469.7c-1.375 5.969-6.844 10.31-12.98 10.31c-227.7 0-412.9-185.2-412.9-412.9c0-6.188 4.234-11.48 10.34-12.88l94.41-21.91c1-.2344 2-.3438 2.984-.3438c5.234 0 10.11 3.094 12.25 8.031l43.58 101.7C197.9 147.2 196.4 153.5 191.8 157.3L141.3 198.7C135.6 203.4 133.8 211.4 137.1 218.1c33.38 67.81 89.11 123.5 156.9 156.9c6.641 3.313 14.73 1.531 19.44-4.219l41.39-50.5c3.703-4.563 10.16-6.063 15.5-3.844l101.6 43.56c5.906 2.563 9.156 8.969 7.719 15.22L457.9 469.7z"></path>
              </svg>
              +44 xxxxxxxxxx
            </li>

            <br></br>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1vh',
                padding: '0.3vh',
                border: '1px solid grey',
                borderRadius: '10px',
                borderStyle: 'inset',
                overflow: 'hidden',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#f3123c"
                viewBox="0 0 512 512"
              >
                <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM32 128V167.9L227.6 311.3C244.5 323.7 267.5 323.7 284.4 311.3L480 167.9V128C480 110.3 465.7 96 448 96H63.1C46.33 96 31.1 110.3 31.1 128H32zM32 207.6V384C32 401.7 46.33 416 64 416H448C465.7 416 480 401.7 480 384V207.6L303.3 337.1C275.1 357.8 236.9 357.8 208.7 337.1L32 207.6z"></path>
              </svg>
              contact@example.com
            </li>
            <br></br>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1vh',
                padding: '0.3vh',
                border: '1px solid grey',
                borderRadius: '10px',
                borderStyle: 'inset',
                overflow: 'hidden',
              }}
            >
              <svg
                viewBox="0 0 448 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  fill="#f3123c"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Whatsapp
            </li>
            <br></br>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1vh',
                padding: '0.3vh',
                border: '1px solid grey',
                borderRadius: '10px',
                borderStyle: 'inset',
                overflow: 'hidden',
              }}
            >
              <svg
                width="14"
                height="14"
                fill="#f3123c"
                viewBox="0 0 12 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.1875 5.25C8.1875 6.45859 7.20859 7.4375 6 7.4375C4.79141 7.4375 3.8125 6.45859 3.8125 5.25C3.8125 4.04141 4.79141 3.0625 6 3.0625C7.20859 3.0625 8.1875 4.04141 8.1875 5.25ZM6 6.5625C6.72461 6.5625 7.3125 5.97461 7.3125 5.25C7.3125 4.52539 6.72461 3.9375 6 3.9375C5.27539 3.9375 4.6875 4.52539 4.6875 5.25C4.6875 5.97461 5.27539 6.5625 6 6.5625ZM11.25 5.25C11.25 7.63984 8.05078 11.8945 6.64805 13.65C6.31172 14.0684 5.68828 14.0684 5.35195 13.65C3.92461 11.8945 0.75 7.63984 0.75 5.25C0.75 2.35047 3.10047 0 6 0C8.89844 0 11.25 2.35047 11.25 5.25ZM6 0.875C3.58281 0.875 1.625 2.83281 1.625 5.25C1.625 5.67656 1.77348 6.26172 2.07781 6.98359C2.37613 7.6918 2.79531 8.46016 3.26945 9.22852C4.20078 10.7406 5.30547 12.1871 6 13.0594C6.69453 12.1871 7.79922 10.7406 8.73164 9.22852C9.20469 8.46016 9.62305 7.6918 9.92109 6.98359C10.2273 6.26172 10.375 5.67656 10.375 5.25C10.375 2.83281 8.41719 0.875 6 0.875Z"
                  fill="#f3123c"
                ></path>
              </svg>
              40 E Main st # 1215 Newark 19711-4639
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
