import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import './basicCSS.css'

export default () => (
  <Layout slim>
    <div>
      <h1>About</h1>
      <p>I'm a developer from South Africa who enjoys making things.</p>
      <p>
        I currently work as a mobile app developer at{' '}
        <a
          href="https://granadilla.ai"
          alt="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Granadilla
        </a>
        , an insuretech start up. I also like to tinker around with side
        Projects when I have the time.
      </p>
      <p>
        My current preferred tech stack and tools include;
        <ul>
          <li>React Native</li>
          <li>ReactJS</li>
          <li>Atom</li>
          <li>xCode</li>
          <li>Android Studio</li>
          <li>NodeJS</li>
          <li>Git</li>
          <li>BitBucket</li>
          <li>JIRA</li>
          <li>NodeJS</li>
          <li>Photoshop</li>
        </ul>
      </p>
      <p>
        For more information, see my{' '}
        <a
          href="https://www.linkedin.com/in/rikus-nieuwoudt-24a4422a/"
          alt="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  </Layout>
)