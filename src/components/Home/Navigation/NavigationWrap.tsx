import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import { rgba } from 'polished'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { theme } from '../../common/theme'
import SvgWrap from './SvgWrap'


import HomeSvg from './HomeSvg'
import WorksSvg from './WorksSvg'
import ProfileSvg from './ProfileSvg'

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
      width: 100%;
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
  const Work = styled(NavigationItem)`
    ${media.greaterThan('large')`
      top: -200px;
      z-index: 1;z
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
      a {
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
          <Work>
            <HomeSvg width="743" height="679" />
            <AniLink
              paintDrip
              hex={theme.colors.orange}
              to="/works"
            >
              <HomeSvg />
              Works
            </AniLink>
          </Work>
          <Profile>
            <ProfileSvg width="794" height="817" />
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
            <WorksSvg width="583" height="470" />
            <AniLink
              paintDrip
              hex={theme.colors.blue}
              to="/contact"
            >
              <WorksSvg />
              Contact
            </AniLink>
          </Contact>
        </ul>
      </NavigationWrapper>
  )
}

export default Navigation
