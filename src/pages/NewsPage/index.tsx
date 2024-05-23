import { Box } from '@mui/material'

import { TopPanel } from '../../common/components/TopPanel'

import { MainNews } from './components/MainNews'
import type { FC } from 'react'

export const NeswPage:FC = () => (
  <Box flexDirection="column">
    <TopPanel />
    <MainNews/>
  </Box>)
