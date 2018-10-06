import React from 'react'
// import { Link } from 'gatsby's
import Layout from '../components/layout'
import './basicCSS.css'
import blockchaindevjobsImg from '../images/blockchaindevjobs.png'
import remotereactjobsImg from '../images/remotereactjobs.png'
import myocImg from '../images/myoc.png'

export default () => {
  const innerWidth = typeof window !== 'undefined' ? window.innerWidth : 320 // eslint-disable-line
  const isMobile = innerWidth <= 320
  const isTab = innerWidth <= 600 && innerWidth > 320
  const tabSize = innerWidth < 600 ? `${innerWidth - 20}px` : '600px'
  let imgSize = isMobile ? '280px' : '600px'
  imgSize = !isMobile && isTab ? tabSize : imgSize
  imgSize = !isMobile && !isTab ? '600px' : imgSize
  const imgStl = {
    borderRadius: '8px',
    width: imgSize,
    border: '1px solid #696a6c',
    marginBottom: '10px',
  }
  return (
    <Layout slim>
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <h1>Projects</h1>
        <p>
          {
            "These are some of the projects I've been working on in my free time." // eslint-disable-line
          }
        </p>
        <p
          style={{
            width: imgSize,
            margin: 'auto',
            textAlign: 'left',
            marginBottom: '40px',
          }}
        >
          <a
            href="https://blockchaindevjobs.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={blockchaindevjobsImg}
              style={imgStl}
              alt="blockchaindevjobs"
            />
            <br />
            Blockchaindevjobs.com
          </a>

          <div>
            Blockchaindevjobs was built with php and jquery on the front-end,
            and nodejs on the backend.
          </div>
          <br />
          <div>
            A cronjob runs a nodejs script daily in order to find new jobs from
            various sources, and stores the latest entries in a database and
            deleting entries older than a month. Recruites also post jobs via a
            submitions page.
          </div>
        </p>

        <p
          style={{
            width: imgSize,
            margin: 'auto',
            textAlign: 'left',
            marginBottom: '40px',
          }}
        >
          <a
            href="https://remotereact.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={remotereactjobsImg}
              style={imgStl}
              alt="remotereactjobs"
            />
            <br />
            https://remotereact.com
          </a>
          <div>
            RemoteReact was an evolution of Blockchaindevjobs, with an automated
            post submittions page, where recruiters can pay to get their posts
            activated instantly.
          </div>
          <br />
          <div>
            The project is also constructed in a generic way so as to make it
            generic, so that the same code can be used for other niches by only
            setting a basic config file.
          </div>
          <br />
          <div>
            I can thus instantly use the same code to create a jobs board for
            any niche I want; cat groomers, plumbers, potato portrait takers,
            anything.
          </div>
        </p>

        <p
          style={{
            width: imgSize,
            margin: 'auto',
            textAlign: 'left',
            marginBottom: '40px',
          }}
        >
          <a
            href="https://mineyourowncrypto.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={myocImg} style={imgStl} alt="myoc" />
            <br />
            https://mineyourowncrypto.com
          </a>
          <div>
            This was my first foray into browser extention development. I
            created browser extentions for both Chrome and Firefox, where you
            could mine Monero cryptocurrency in your browser.
          </div>
          <br />
          <div>
            The extention had a little pop-up window where you could choose your
            CPU usage level, and where you entered your Monero wallet address.
          </div>
          <br />
          <div>
            The proceeds from your mining was then paid to your wallet
            automatically, with 10% being paid to mine.
          </div>
          <br />
          <div>
            Sadly, both Chrome and Firefox banned most crypto-related extentions
            after a couple of months, so this project is retired.
          </div>
          <br />
        </p>
      </div>
    </Layout>
  )
}
