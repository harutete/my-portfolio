import React from 'react'
import 'typeface-caveat'

import Head from './Head'
import Footer from './Footer'

type Props = {
  title: string,
  description: string
}

const Layout: React.FC<Props> = (props) => (
  <div>
    <Head title={ props.title } description={props.description} />
    { props.children }
    <Footer />
  </div>
)

export default Layout