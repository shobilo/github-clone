import React from 'react'
import { Link } from 'react-router-dom'

const UnknownPage = () => {
  return (
    <main>
      <h1>You have visited the unexisted page</h1>
      <Link to="/">Go to the main page</Link>
    </main>
  )
}

export default UnknownPage
