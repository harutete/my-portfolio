import React from 'react'

import Layout from '../components/common/layout'
import ProfileComponent from '../components/Profile'

const Profile = () =>
(
  <Layout title="profile" description="スキルを簡単に記載しています">
    <ProfileComponent />
  </Layout>
)

export default Profile