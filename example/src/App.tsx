import React from 'react'
import { FlagStyle } from './types/types'
import Image from './UI/Image'

const App = () => {

  
  return (
    <>
      <div>
        <Image 
          country='EUR'
          style={FlagStyle.BLUR}
          size='64'
        />
      </div>
    </>
  )
}

export default App
