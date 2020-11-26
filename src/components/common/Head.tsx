import React from 'react'
import Helmet from 'react-helmet'

type Props = {
  title: string,
  description: string
}
const Head: React.FC<Props> = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{ title }</title>
    <meta name="description" content={ description } />
    <meta name="robots" content="noindex, noforrow" />
    <html lang="ja" />
  </Helmet>
)

export default Head
