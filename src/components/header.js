import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Header = ({ siteTitle, data }) => {
  console.log('data', data)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rebeccapurple',
        backgroundImage: 'linear-gradient(45deg, #2A4584, #bb2746 )',
        marginBottom: '1.45rem',
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: 0 }}>
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
            width: '120px',
            height: '120px',
            borderRadius: '90px',
            padding: '8px',
            border: '3px solid white ',
          }}
        >
          <Img
            fixed={data.file.childImageSharp.fixed}
            style={{
              borderRadius: 64,
            }}
          />
        </div>

        <div style={{ marginTop: '30px', color: 'white ' }}>
          Coder.
          <br />
          Product maker.
          <br />
          Deep breath taker.
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px',
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
    </div>
  )
}

export default Header
