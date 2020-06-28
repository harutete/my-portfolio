import React from 'react'
import styled, { keyframes } from 'styled-components'
import SvgWrap from './SvgWrap'

const Navigation: React.FC = () => {
  const NavigationWrapper = styled.nav`
    position: relative;
  `
  const rotate = keyframes`
    from {
      transform: rotate(0deg) scale(1, 1);
    }
    to {
      transform: rotate(360deg) scale(1.1, 1.1);
    }
  `
  const NavigationItem = styled.li`
    position: absolute;
    left: 0;
    a {
      position: absolute;
      left: 100px;
    }
  `
  const Work = styled(NavigationItem)`
    top: -200px;
    a {
      top: 230px;
    }
  `
  const Profile = styled(NavigationItem)`
    top: 50%;
    transform: translateY(-50%);
    a {
      top: 50%;
      transform: translateY(-50%);
    }
  `
  const Contact = styled(NavigationItem)`
    bottom: -100px;
    a {
      bottom: 130px;
    }
  `
  // TODO theme設定する
  // TODO フォントのimport見直す(themeに設定？)
  const NavigationText = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
    color: #ffffff;
    font-family: 'Caveat', cursive;
    font-size: 5rem;
  `

  return (
    <NavigationWrapper>
      <ul>
        <Work>
          <div>
            <SvgWrap
              width="743"
              height="679"
              viewBox="0 0 743 679"
            >
              <path
                d="M704.503 346.781C734.254 517.628 651.464 581.866 480.618 611.616C309.771 641.367 76.4135 550.978 46.6629 380.132C16.9123 209.285 94.9625 95.6276 265.809 65.8771C353.927 50.5325 428.85 129.115 513.807 178.502C593.567 224.868 685.563 238.015 704.503 346.781Z"
                fill="#FFCD9F"
                fill-opacity="0.8"
              />
            </SvgWrap>
            <NavigationText>Work</NavigationText>
          </div>
        </Work>
        <Profile>
          <div>
            <SvgWrap
              width="794"
              height="817"
              viewBox="0 0 794 817"
            >
              <path d="M614.82 608.425C543.61 766.547 439.038 773.285 280.916 702.076C122.793 630.867 40.1004 487.623 111.31 329.5C182.519 171.377 294.31 107 409.226 129.79C584.5 189 614.82 82 725.31 292.5C765.329 375.626 660.154 507.758 614.82 608.425Z" fill="#C99FFF" fill-opacity="0.8"/>
            </SvgWrap>
            <NavigationText>Profile</NavigationText>
          </div>
        </Profile>
        <Contact>
          <div>
            <SvgWrap
              width="584"
              height="470"
              viewBox="0 0 584 470"
            >
              <path d="M552 387C445.191 538 454.226 436 280.809 436C107.391 436 -20.0002 398 3.49984 251.5C26.9999 105 97.4999 0.5 246.5 0.5C332.5 0.5 366.275 61.7195 426.5 107.5C454.727 128.957 509.494 150.322 533.5 170.5C604.124 229.862 588.782 335 552 387Z" fill="#9FDDFF" fill-opacity="0.8"/>
            </SvgWrap>
            <NavigationText>Contact</NavigationText>
          </div>
        </Contact>
      </ul>
    </NavigationWrapper>
  )
}

export default Navigation
