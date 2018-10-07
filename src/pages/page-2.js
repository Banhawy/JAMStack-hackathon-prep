import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Looks like React</h1>
    <p>Good...we're in familiar territory.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
