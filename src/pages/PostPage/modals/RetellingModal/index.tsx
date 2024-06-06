import { Box, CircularProgress, Dialog, Typography } from '@mui/material'
import type { FC } from 'react'

interface Props {
  onClose: () => void
  text: string
  open: boolean
  isLoading: boolean
}
export const RetellingModal:FC<Props> = ({ text, onClose, open, isLoading }) => 
  <Dialog open={open} onClose={onClose}>
    <Box 
      height='800px' 
      width='500px' 
      sx={{
        wordWrap: 'normal', 
        overflowWrap: 'anywhere' 
      }}   
      display='flex'
      padding='2rem'
      flexDirection='column'
      alignItems='center'
    >
      <Typography variant='h4'>Пересказ</Typography>
      {isLoading &&<CircularProgress />}
      <Typography marginTop='1rem' whiteSpace='wrap'>{text}</Typography>
    </Box>
  </Dialog>
