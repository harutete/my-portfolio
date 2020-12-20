import React from 'react'
import SvgWrap from './SvgWrap'

import { theme } from '../../common/theme'

type Props = {
  width?: string
  height?: string
}
const ProfileSvg: React.FC<Props> = (props) => (
  <SvgWrap
    viewBox="0 0 647 620"
    width={props.width}
    height={props.height}
  >
    <path
      d="M599 353C526.642 452.032 507 620 366 620C192.583 620 -5 486 1 309C7 132 173 -20 308 3.00003C482 53 506.841 -2 575 70C678.623 179.463 655 257 599 353Z"
      fill={theme.colors.purple}
      fillOpacity="0.8"
    />
  </SvgWrap>
)

export default ProfileSvg
