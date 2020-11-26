import React from 'react'
import SvgWrap from './SvgWrap'

import { theme } from '../../common/theme'

type Props = {
  width?: string
  height?: string
}
const WorksSvg: React.FC<Props> = (props) => (
  <SvgWrap
    viewBox="0 0 583 470"
    width={props.width}
    height={props.height}
  >
    <path
      d="M551.297 386.5C444.488 537.5 453.523 435.5 280.105 435.5C106.688 435.5 -20.7035 397.5 2.7966 251C26.2967 104.5 96.7967 0 245.797 0C331.797 0 365.572 61.2195 425.797 107C454.024 128.457 508.791 149.822 532.797 170C603.42 229.362 588.079 334.5 551.297 386.5Z"
      fill={theme.colors.blue}
      fillOpacity="0.8"
    />
  </SvgWrap>
)

export default WorksSvg
