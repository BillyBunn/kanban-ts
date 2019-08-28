import * as React from 'react'

import Board from '../Board'
import Layout from '../Layout'

import '../../main.css'

class App extends React.Component {
  public render() {
    return (
      <Layout>
        {/* <LoginForm /> */}
        <Board />
      </Layout>
    )
  }
}

export default App
