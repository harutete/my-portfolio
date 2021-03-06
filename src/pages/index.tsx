import React from 'react'

import Layout from '../components/common/layout'
import HomeComponent from '../components/Home'

const Home: React.FC = () =>
(
  <Layout
    title="home"
    description="Haruteteのポートフォリオです"
    isTextLight={false}
  >
    <HomeComponent />
  </Layout>
)

export default Home