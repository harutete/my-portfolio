import React, { FC, useState } from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import { rgba } from 'polished'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { theme } from '../common/theme'
import SvgWrap from './SvgWrap'

const Navigation: FC = () => {
  const [ state, setState ] = useState(false)
  const NavigationWrapper = styled.nav`
    position: relative;
    ${media.lessThan('large')`
      position: absolute;
      top: -100%;
      left: 0;
      transition: top .2s ease 0s;
      width: 100%;
      height: 100%;
      &.is-active {
        top: 0;
      }
    `}
  `
  const NavigationButton = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    span {
      position: absolute;
      top: 4px;
      left: 50%;
      transform: translateX(-50%);
      background: ${({theme}) => theme.colors.textColor};
      width: 35px;
      height: 2px;
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background: ${({theme}) => theme.colors.textColor};
        width: 35px;
        height: 2px;
      }
      &::before {
        top: 15px;
      }
      &::after {
        top: 35px;
      }
    }
  `
  const NavigationList = styled.ul`
    ${media.lessThan('large')`
      background: ${({theme}) => rgba(theme.colors.textColor, 0.6)}
    `}
  `
  const NavigationItem = styled.li`
    ${media.greaterThan('large')`
      position: absolute;
      left: 0;
      a {
        position: absolute;
        left: 100px;
        font-size: 5rem;
      }
    `}
    ${media.lessThan('large')`
      text-align: center;
      svg {
        display: none;
      }
      a {
        display: inline-block;
        font-size: 2rem;
        padding: 10px 0;
      }
    `}
    a {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Caveat', cursive;
      text-decoration: none
      }
  `
  const Work = styled(NavigationItem)`
    ${media.greaterThan('large')`
      top: -200px;
      a {
        top: 230px;
      }
    `}
  `
  const Profile = styled(NavigationItem)`
    ${media.greaterThan('large')`
      top: 50%;
      left: auto;
      right: -150px;
      transform: translateY(-50%);
      a {
        top: 50%;
        transform: translateY(-50%);
      }
    `}
  `
  const Contact = styled(NavigationItem)`
    ${media.greaterThan('large')`
      bottom: -100px;
      a {
        bottom: 130px;
      }
    `}
  `

  return (
    <>
      <NavigationButton
        onClick={() => setState(!state)}
        aria-label={state ? 'メニューを閉じる' : 'メニューを開く'}
      >
        <span></span>
      </NavigationButton>
      <NavigationWrapper>
        <NavigationList>
          <Work>
            <SvgWrap
              width="743"
              height="679"
              viewBox="0 0 743 679"
            >
              <path
                d="M704.503 346.781C734.254 517.628 651.464 581.866 480.618 611.616C309.771 641.367 76.4135 550.978 46.6629 380.132C16.9123 209.285 94.9625 95.6276 265.809 65.8771C353.927 50.5325 428.85 129.115 513.807 178.502C593.567 224.868 685.563 238.015 704.503 346.781Z"
                fill={theme.colors.orange}
                fillOpacity="0.8"
              />
            </SvgWrap>
            <AniLink
              paintDrip
              hex={theme.colors.orange}
              to="/works"
            >
              Works
            </AniLink>
          </Work>
          <Profile>
            <SvgWrap
              width="794"
              height="817"
              viewBox="0 0 794 817"
            >
              <path
                d="M614.82 608.425C543.61 766.547 439.038 773.285 280.916 702.076C122.793 630.867 40.1004 487.623 111.31 329.5C182.519 171.377 294.31 107 409.226 129.79C584.5 189 614.82 82 725.31 292.5C765.329 375.626 660.154 507.758 614.82 608.425Z"
                fill={theme.colors.purple}
                fillOpacity="0.8"
              />
            </SvgWrap>
            <AniLink
              paintDrip
              hex={theme.colors.purple}
              to="/profile"
            >
              Profile
            </AniLink>
          </Profile>
          <Contact>
            <SvgWrap
              width="584"
              height="470"
              viewBox="0 0 584 470"
            >
              <path
                d="M552 387C445.191 538 454.226 436 280.809 436C107.391 436 -20.0002 398 3.49984 251.5C26.9999 105 97.4999 0.5 246.5 0.5C332.5 0.5 366.275 61.7195 426.5 107.5C454.727 128.957 509.494 150.322 533.5 170.5C604.124 229.862 588.782 335 552 387Z"
                fill={theme.colors.blue}
                fillOpacity="0.8"
              />
            </SvgWrap>
            <AniLink
              paintDrip
              hex={theme.colors.blue}
              to="/contact"
            >
              Contact
            </AniLink>
          </Contact>
        </NavigationList>
      </NavigationWrapper>
    </>
  )
}

export default Navigation
