import React from 'react'
import { Link } from 'gatsby'
// import Img from 'gatsby-image'
import MediaQuery from 'react-responsive'
// import rikImgSml from './rikieu-sml.png'

const HeaderSlim = ({ siteTitle }) => {
  const innerWidth = typeof window !== 'undefined' ? window.innerWidth : 320 // eslint-disable-line
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rebeccapurple',
        backgroundImage: 'linear-gradient(45deg, #2A4584, #bb2746 )',
        marginBottom: '1.45rem',
        textAlign: 'center',
        width: '100%',
        boxShadow: '0px 5px 20px rgba(0,0,0,0.3)',
        height: innerWidth <= 375 ? '45px' : '80px',
      }}
    >
      <MediaQuery minDeviceWidth={300} maxDeviceWidth={374}>
        <Link
          to="/"
          style={{
            color: 'white',
            marginLeft: '5px',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </MediaQuery>

      <MediaQuery query="(min-device-width: 375px)">
        <h1 style={{ marginLeft: '5px' }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </MediaQuery>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '20p',
        }}
      >
        <Link to="/blog" className="btn">
          Blog
        </Link>

        <Link to="/projects" className="btn">
          Projects
        </Link>
        <Link to="/about" className="btn">
          About
        </Link>
      </div>
    </div>
  )
}

export default HeaderSlim
