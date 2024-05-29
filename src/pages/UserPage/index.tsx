import { Box, Divider } from '@mui/material'
import { useParams } from 'react-router-dom'

import { TopPanel } from '../../common/components/TopPanel'

import { NewsPage } from './components/NewsPage'
import { UserPanel } from './components/UserPanel'
import type { FC } from 'react'

export const UserPage: FC = () => {
  const { id } = useParams()
  return (
    <>
      <TopPanel hiddenSearc />
      <Box>
        <UserPanel id={id} />
        <Divider style={{ backgroundColor: '#fff', height: '2px' }} />
        <NewsPage id={id ?? ''} />
      </Box>
    </>
  )
}
