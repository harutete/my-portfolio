import React from 'react'
import styled from 'styled-components'

import ContentsWrapper from '../common/ContentsWrapper'

const ProfileContentsWrapper = styled(ContentsWrapper)`
  background: rgba(201, 159, 255, 0.8);
`
const Profile = () => (
  <ProfileContentsWrapper>
    <h1>Profile</h1>
  </ProfileContentsWrapper>
)

export default Profile