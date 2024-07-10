import React from 'react'
import ReactDOM from 'react-dom'
import Image from '../UI/Image'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Image country='FR' size='24' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('does not render without country prop', () => {
  const div = document.createElement('div')
  // @ts-ignore
  ReactDOM.render(<Image size='24' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('does not render without size prop', () => {
  const div = document.createElement('div')
  // @ts-ignore
  ReactDOM.render(<Image country='FR' />, div)
  ReactDOM.unmountComponentAtNode(div)
})
