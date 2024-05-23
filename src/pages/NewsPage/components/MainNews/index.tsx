import { Box, Stack } from '@mui/material'

import { useGetNews } from '../../../../modules/news/query'

import { NewsCard } from './components/NewsCard'
import type { FC } from 'react'

export const MainNews:FC = () => {
  const data = useGetNews()
 
  return (
    <Box>
      <Stack direction='row' padding='1rem' justifyContent='space-between' gap='1rem' flexWrap='wrap'>
        {
          data?.data?.map((value) => <NewsCard description={value.text} title={value.header} author={value.id} date={value.createdAt} image={value.image}/>)
        }
      </Stack>
            
    </Box>
  )
}
