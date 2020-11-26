import React from 'react'
import SvgWrap from './SvgWrap'

import { theme } from '../../common/theme'

type Props = {
  width?: string
  height?: string
}
const ProfileSvg: React.FC<Props> = (props) => (
  <SvgWrap
    viewBox="0 0 794 817"
    width={props.width}
    height={props.height}
  >
    <path
      d="M614.82 608.425C543.61 766.548 439.038 773.285 280.916 702.076C122.793 630.867 40.1004 487.623 111.31 329.5C182.519 171.377 294.31 107 409.226 129.79C584.5 189 614.82 82 725.31 292.5C765.329 375.626 660.154 507.758 614.82 608.425Z"
      fill={theme.colors.purple}
      fillOpacity="0.8"
    />
  </SvgWrap>
)

export default ProfileSvg
