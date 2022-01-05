import { Input, Stack, Pagination } from '@mui/material'
import React, { useState } from 'react'
import RepositoryList from '../components/RepositoryList'

const Main = () => {
  const [input, setInput] = useState('')
  const [page, setPage] = useState('1')

  const onInputChanged = (event) => {
    setInput(event.target.value)
  }

  const onPageChanged = (event, value) => {
    setPage(value);
  };

  return (
    <main>
      <Stack spacing={4}>
        <Input 
          placeholder="Input here the repository name"
          value={input}
          onChange={onInputChanged}
        />
        <RepositoryList/>
        <Pagination 
          count={30} 
          page={page} 
          onChange={onPageChanged}
          showFirstButton 
          showLastButton />
      </Stack>
    </main>
  )
}

export default Main
