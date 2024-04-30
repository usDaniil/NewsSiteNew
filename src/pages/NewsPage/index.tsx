import { Box } from '@mui/material'
import { FC } from 'react'

import { TopPanel } from '../../common/components/TopPanel'

import { MainNews } from './components/MainNews'

export const NeswPage:FC = () => {
  return (
    <Box flexDirection="column">
      <TopPanel />
      <MainNews/>
    </Box>)
}
