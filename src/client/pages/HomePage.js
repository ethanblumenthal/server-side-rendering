import React from 'react'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <div className="center-align" style={{ marginTop: '200px' }}>
        <Helmet>
          <title>React SSR</title>
          <meta property="og:title" content="Welcome" />
        </Helmet>
        <h3>Welcome</h3>
        <p>Check out these awesome features</p>
      </div>
    </div>
  )
}

export default { component: Home }
