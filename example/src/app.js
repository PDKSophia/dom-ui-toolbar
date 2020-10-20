import React from 'react'
import { render } from 'react-dom'
import Main from '../../src'

const App = () => {
  return (
    <div>
      本地开发
      <Main />
    </div>
  )
}
render(<App />, document.getElementById('root'))
