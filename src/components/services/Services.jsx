import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Branding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Website Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Experience Consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile app design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Promotional design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Raw UX Design.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visually appealing and polished.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Intuitive to use.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimized for mobile Services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Inclusive of search engines.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Easily accessible contact information.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Matching current trends.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Regularly checked for any broken links or not working scripts.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Devops Engineering</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>QA Testing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mpesa Integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>IT Consulting.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Product Engineering.</p>
            </li>
          </ul>
        </article>
        {/* END OF Software Development */}
      </div>
    </section>
  )
}

export default Services