import React from 'react'

import Layout from '../components/common/layout'
import ProfileComponent from '../components/Profile'

const Profile: React.FC = () =>
(
  <Layout
    title="profile"
    description="スキルを簡単に記載しています"
    isTextLight={true}
  >
    <ProfileComponent />
  </Layout>
)

export default Profile