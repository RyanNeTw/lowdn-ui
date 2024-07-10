import React from 'react'
import ReactDOM from 'react-dom'
import Image from '../../example/src/UI/Image'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Image country={'FR'} size={'24'} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
