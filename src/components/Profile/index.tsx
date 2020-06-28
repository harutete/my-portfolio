import React from 'react'
import styled from 'styled-components'

import ContentsWrapper from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'

const ProfileContentsWrapper = styled(ContentsWrapper)`
  background: rgba(201, 159, 255, 0.8);
`
const Profile = () => (
  <ProfileContentsWrapper>
    <PrimaryHeading>Profile</PrimaryHeading>
  </ProfileContentsWrapper>
)

export default Profile