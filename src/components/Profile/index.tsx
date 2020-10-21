import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import mySkill from '../../../content/mySkill.json'

import { detailContentsWrapper } from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'
import ReturnButton from '../common/ReturnButton'

const ProfileContentsWrapper = styled(detailContentsWrapper)`
  background: ${({theme}) => rgba(theme.colors.purple, 0.8)};
  &::after {
    background: ${({theme}) => rgba(theme.colors.purple, 0.8)};
  }
`
const Heading02 = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
  margin-top: 30px;
`
const SkillList = styled.dl`
  dt {
    margin-top: 15px;
    &::before {
      content: '●';
      display: inline-block;
      margin-right: 5px;
    }
  }
  dd {
    margin-top: 15px;
  }
`
const ToolList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  li {
    marign: 5px 0 0 5px;
  }
`
const SnsLinkList = styled(ToolList)`
  margin-top: 20px;
  li {
    width: 60px;
    img {
      max-width: 100%;
    }
  }
`

const Profile = () => {
  return(
    <ProfileContentsWrapper>
      <PrimaryHeading>Profile</PrimaryHeading>
      <Heading02>[Skill]</Heading02>
      <SkillList>
        {mySkill.contents.map((skill, index) =>
          <>
            <dt key={`skill_${index}`}>
              {skill.name}
            </dt>
            <dd>
              <ToolList>
                {skill.tools.map(tool =>
                  <li>{tool}</li>
                )}
              </ToolList>
            </dd>
          </>
        )}
      </SkillList>
      <SnsLinkList>
        <li>
          <a href="https://github.com/harutete" target="_blank">
            <img src={'/ico_github.png'} alt="" />
          </a>
        </li>
      </SnsLinkList>
      <ReturnButton />
    </ProfileContentsWrapper>
  )
}

export default Profile