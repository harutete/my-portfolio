import 'styled-components'

export const theme = {
  colors: {
    textColor: '#333333',
    orange: '#ffcd9f',
    purple: '#c99fff',
    blue: '#9fddff',
    white: '#ffffff',
    darkGray: '#666666',
    beige: '#fffaf3'
  }
} as const

type AppTheme = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}