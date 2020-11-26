import React from 'react'

import Layout from '../components/common/layout'
import ContactComponent from '../components/Contact'

const Contact: React.FC = () =>
(
  <Layout
    title="Contact"
    description="お問い合わせについて"
    isTextLight={true}
  >
    <ContactComponent />
  </Layout>
)

export default Contact