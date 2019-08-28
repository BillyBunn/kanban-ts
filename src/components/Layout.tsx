import * as React from 'react'

const Layout = (props: React.PropsWithChildren<{}>) => (
  <div
    style={{ display: 'flex', flexFlow: 'column nowrap', minHeight: '100vh' }}
  >
    <header style={{ flex: '0', textAlign: 'center' }}>
      <h1>TypeScript & Redux Kanban Board</h1>
      <p>
        <a href="https://github.com/BillyBunn/kanban-ts">See it on Github</a>
      </p>
    </header>
    <main style={{ flex: '1' }}>{props.children}</main>
    <footer style={{ flex: '0', textAlign: 'center' }}>
      Created by <a href="https://billybunn.com/">Billy Bunn</a>
    </footer>
  </div>
)

export default Layout
