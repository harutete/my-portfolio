import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { theme } from '../../common/theme'

type Props = {
  href: string
}
const LinkButton: React.FC<Props> = (props) => {
  const isExternalLink = /^https:\/\//.test(props.href)
  const Button = styled(AniLink)`
    display: block;
    position: relative;
    transition: opacity .2s ease 0s;
    background: ${({theme}) => theme.colors.orange};
    border-radius: 5px;
    color: ${({theme}) => theme.colors.white};
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    width: 80%;
    max-width: 300px;
    margin: 30px auto 0;
    padding: 15px 30px;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%) rotate(45deg);
      transition: right .2s ease 0s;
      border-top: 2px solid ${({theme}) => theme.colors.white};
      border-right: 2px solid ${({theme}) => theme.colors.white};
      width: 10px;
      height: 10px;
    }
    &:hover {
      opacity: .8;
      &::before {
        right: 10px;
      }
    }
  `

  return (
    isExternalLink ?
      <Button as="a" href={props.href}>{props.children}</Button> :
      <Button
        paintDrip
        hex={theme.colors.orange}
        to={props.href}
      >
        {props.children}
      </Button>

  )
}

export default LinkButton