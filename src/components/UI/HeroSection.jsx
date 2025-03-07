import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const HeroSection = () => {
  return (
    <main className="hero-section main">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1 className="heading-xl">
                Explore the world, One Country at a time.
              </h1>
              <p className="paragraph">
                Discover the history, cutlre and beauty of every nation. search and
                filter through countries to find the details
              </p>
              <NavLink to="/country">
              <button className="btn btn-darken btn-inline bg-white-box">
                start Exploring <FaLongArrowAltRight />
              </button>
              </NavLink>
            </div>
            <div className="hero-image">
              <img src="/images/world.png" alt="world beauty" className="banner-image" />
            </div>
          </div>
        </main>
  )
}

