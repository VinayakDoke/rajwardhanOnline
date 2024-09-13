import React from 'react'
import SocialMediaIcons from '../../Helper/SocialMediaIcons'

function ContactInfo () {
  return (
    <>
      <div>
        <div style={{ fontSize: '40px', marginTop: '20px' }}>Contact Info</div>
        <div>
          <div className='contact-page-header'>Address</div>
          <address className='contact-page-body'>
            2nd Floor, Raja Ram Kumar Plaza, Lucknow Uttar Pradesh 226001
          </address>
        </div>
        <div>
          <div className='contact-page-header'> Email Us</div>

          <p className='contact-page-body'>
          <a
            href='mailto:vinayakdoke934@gmail.com'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <i className='bi bi-envelope '  style={{ marginRight: '10px' }}></i>
            vinayakdoke934@gmail.com
          </a>
          </p>
        </div>
        <div>
          <div className='contact-page-header'> Call Us</div>

          {/* <p className='contact-page-body'>
            8788584847</p> */}

          <p className='contact-page-body'>
            <a
              href='tel:+918788584847'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <i
                className='bi bi-telephone'
                style={{ marginRight: '10px' }}
              ></i>
              +91 8788584847
            </a>
          </p>
        </div>
        <div className='social-icons-contact-page'>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              className='bi bi-facebook facebook-icon'
              style={{ fontSize: '1.5rem' }}
            ></i>
          </a>

          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              className='bi bi-instagram instagram-icon'
              style={{ fontSize: '1.5rem' }}
            ></i>
          </a>

          <a
            href='https://www.youtube.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              className='bi bi-youtube'
              style={{ fontSize: '1.5rem', color: 'red' }}
            ></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
