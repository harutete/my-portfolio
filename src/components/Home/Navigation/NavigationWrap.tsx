import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import { rgba } from 'polished'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { theme } from '../../common/theme'

import WorksSvg from './WorksSvg'
import ProfileSvg from './ProfileSvg'
import ContactSvg from './ContactSvg'

const Navigation: React.FC = () => {
  const NavigationWrapper = styled.nav`
    position: relative;
    ${media.lessThan('large')`
      margin-top: 20px;
    `}
  `
  const NavigationItem = styled.li`
    ${media.greaterThan('large')`
      position: absolute;
      left: 0;
      & > svg {
        display: block;
        width: 100%;
        height: 100%;
      }
      a {
        position: absolute;
        left: 100px;
        color: ${({theme}) => theme.colors.white};
        font-size: 5rem;
        & > svg {
          display: none;
        }
      }
    `}
    ${media.lessThan('large')`
      text-align: center;
      margin-top: 15px;
      & > svg {
        display: none;
      }
      a {
        position: relative;
        display: inline-block;
        color: ${({theme}) => theme.colors.textColor};
        text-shadow: 1px 1px 1px ${({theme}) => theme.colors.white};
        font-size: 3rem;
        padding: 10px 0;
        & > svg {
          position: absolute;
          top: 0;
          left: -15px;
          z-index: -1;
          width: 40px;
          height: 40px;
        }
      }
    `}
    a {
      font-family: 'Caveat', cursive;
      text-decoration: none
    }
  `
  const Works = styled(NavigationItem)`
    ${media.greaterThan('large')`
      top: -200px;
      z-index: 1;
      max-width: calc(743 * 100vw / 1440);
      max-height: calc(679 * 100vh / 900);
      a {
        top: 230px;
      }
    `}
    ${media.lessThan('large')`
      a {
        &::before {
          background: ${({theme}) => rgba(theme.colors.orange, 0.8)};
        }
      }
    `}
  `
  const Profile = styled(NavigationItem)`
    ${media.greaterThan('large')`
      top: 50%;
      left: auto;
      right: -150px;
      transform: translateY(-50%);
      z-index: 2;
      max-width: calc(647 * 100vw / 1440);
      max-height: calc(620 * 100vh / 900);
      & > svg {
        margin-left: auto;
      }
      a {
        top: 50%;
        transform: translateY(-50%);
      }
    `}
    ${media.lessThan('large')`
      a {
        &::before {
          background: ${({theme}) => rgba(theme.colors.purple, 0.8)};
        }
      }
    `}
  `
  const Contact = styled(NavigationItem)`
    ${media.greaterThan('large')`
      bottom: -100px;
      z-index: 1;
      max-width: calc(583 * 100vw / 1440);
      max-height: calc(470 * 100vh / 900);
      a {
        left: 50px;
        bottom: 130px;
      }
    `}
    ${media.lessThan('large')`
      a {
        &::before {
          background: ${({theme}) => rgba(theme.colors.blue, 0.8)};
        }
      }
    `}
  `

  return (
      <NavigationWrapper>
        <ul>
          <Works>
            <WorksSvg width="743" height="679" />
            <AniLink
              paintDrip
              hex={theme.colors.orange}
              to="/works"
            >
              <WorksSvg />
              Works
            </AniLink>
          </Works>
          <Profile>
            <ProfileSvg width="647" height="620" />
            <AniLink
              paintDrip
              hex={theme.colors.purple}
              to="/profile"
            >
              <ProfileSvg />
              Profile
            </AniLink>
          </Profile>
          <Contact>
            <ContactSvg width="583" height="470" />
            <AniLink
              paintDrip
              hex={theme.colors.blue}
              to="/contact"
            >
              <ContactSvg />
              Contact
            </AniLink>
          </Contact>
        </ul>
      </NavigationWrapper>
  )
}

export default Navigation
