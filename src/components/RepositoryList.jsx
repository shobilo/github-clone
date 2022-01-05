import { Stack } from '@mui/material';
import React from 'react'
import RepositoryShortInfo from './RepositoryShortInfo';

const RepositoryList = () => {
  return (
    <Stack spacing={3}>
      <RepositoryShortInfo/>
      <RepositoryShortInfo/>
      <RepositoryShortInfo/>
    </Stack>
  )
}

export default RepositoryList
