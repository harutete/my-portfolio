import React from 'react'
import styled from 'styled-components'

import { detailContentsWrapper } from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'

const ProfileContentsWrapper = styled(detailContentsWrapper)`
  background: rgba(201, 159, 255, 0.8);
`
const Profile = () => (
  <ProfileContentsWrapper>
    <PrimaryHeading>Profile</PrimaryHeading>
    <h2>[Skill]</h2>
    <dl>
      <dt>●Design</dt>
      <dd>
        <ul>
          <li>PhotoShop</li>
          <li>Illustrator</li>
        </ul>
      </dd>
      <dt>●Markup&Programming</dt>
      <dd>
        <ul>
          <li>HTML</li>
          <li>CSS(SCSS)</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>TypeScript</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>React</li>
        </ul>
      </dd>
    </dl>
    <ul>
      <li>
        <a href="https://github.com/harutete" target="_blank">
          <img src={'/ico_github.png'} alt="" />
        </a>
      </li>
    </ul>
  </ProfileContentsWrapper>
)

export default Profile