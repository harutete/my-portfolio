import React from 'react'
import Helmet from 'react-helmet'

type Props = {
  title: string,
  description: string
}
const Head: React.FC<Props> = (props) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{ props.title }</title>
    <meta name="description" content={ props.description } />
    <meta name="robots" content="noindex, noforrow" />
    <html lang="ja" />
  </Helmet>
)

export default Head
