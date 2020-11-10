import React from 'react'
import Provider from './src/components/common/Provider'

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>