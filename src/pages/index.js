import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Welcome</h1>
    <p>This is the starter Gatsby site.</p>
    <p>It's time to build something great.</p>
    <Link to="../blog/">My dev journey</Link>
  </Layout>
)

export default IndexPage
