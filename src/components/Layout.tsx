import * as React from 'react'

const Layout = (props: React.PropsWithChildren<{}>) => (
  <>
    <header>Super Duper Kanban Board</header>
    <main>{props.children}</main>
    <footer>
      Created by <a href="https://billybunn.com/">Billy Bunn</a>
    </footer>
  </>
)

export default Layout
