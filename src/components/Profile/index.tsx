import React from 'react'
import styled from 'styled-components'
import mySkill from '../../../content/mySkill.json'

import { detailContentsWrapper } from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'

const ProfileContentsWrapper = styled(detailContentsWrapper)`
  background: rgba(201, 159, 255, 0.8);
`
const Profile = () => {
  return(
    <ProfileContentsWrapper>
      <PrimaryHeading>Profile</PrimaryHeading>
      <h2>[Skill]</h2>
      <dl>
        {mySkill.contents.map((skill, index) =>
          <>
            <dt key={`skill_${index}`}>
              {skill.name}
            </dt>
            <dd>
              <ul>
                {skill.tools.map(tool =>
                  <li>{tool}</li>
                )}
              </ul>
            </dd>
          </>
        )}
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
}

export default Profile