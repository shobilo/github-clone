import React from 'react'
import { Link } from 'react-router-dom'

const UnknownPage = () => {
  return (
    <>
      <p>You have visited the unexisted page</p>
      <Link to="/">Go to the main page</Link>
    </>
  )
}

export default UnknownPage
