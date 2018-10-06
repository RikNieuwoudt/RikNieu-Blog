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
            A daily cronjob runs a nodejs script in order to find new jobs from
            various sources, and stores the results in a database.Entries older
            than a month get deleted too. Recruiters can also post jobs via a
            submissions page.
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
            RemoteReact was an evolution of Blockchaindevjobs, where recruiters
            can pay to get their posts activated instantly on payment.
          </div>
          <br />
          <div>
            The project was also constructed so that the same code could be used
            for multiple niches by only adjusting a single config file.
          </div>
          <br />
          <div>
            {`I can thus use the same code to create different jobs boards for any
            niche I'd want; cat groomers, plumbers, potato portrait takers,
            anything.`}
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
            created browser extentions for Chrome and Firefox, which allowed you
            to mine Monero cryptocurrency in your browser.
          </div>
          <br />
          <div>
            The extention had a little pop-up window where you could set your
            CPU usage level, and where you set your Monero wallet address.
          </div>
          <br />
          <div>
            The proceeds from your mining was paid to your wallet automatically,
            with 10% being paid to mine.
          </div>
          <br />
          <div>
            Sadly, both Chrome and Firefox banned most crypto-related extentions
            within a couple of months, so this project is now retired.
          </div>
          <br />
        </p>
      </div>
    </Layout>
  )
}
