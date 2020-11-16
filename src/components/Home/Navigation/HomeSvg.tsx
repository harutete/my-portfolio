import React from 'react'
import SvgWrap from './SvgWrap'

import { theme } from '../../common/theme'

type Props = {
  width?: string
  height?: string
}
const HomeSvg: React.FC<Props> = (props) => (
  <SvgWrap
    viewBox="0 0 743 679"
    width={props.width}
    height={props.height}
  >
    <path
      d="M704.503 346.781C734.254 517.628 651.464 581.866 480.618 611.616C309.771 641.367 76.4135 550.978 46.6629 380.132C16.9123 209.285 94.9625 95.6276 265.809 65.8771C353.927 50.5325 428.85 129.115 513.807 178.502C593.567 224.868 685.563 238.015 704.503 346.781Z"
      fill={theme.colors.orange}
      fillOpacity="0.8"
    />
  </SvgWrap>
)

export default HomeSvg