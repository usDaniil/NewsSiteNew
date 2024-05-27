import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import type { FC } from 'react'

interface Props {
  imagePath: string
  title?: string;
  description?: string;
  author?: string;
  date?: string;
  userId?: string
}

export const NewsCard: FC<Props> = ({
  title,
  description,
  author,
  date,
  imagePath,
  userId
}) => {
  const navigate = useNavigate()

  const clickNavigateToUser = () => navigate('/user/' + userId)
  return (
    <Box>
      <Card sx={{ maxWidth: 345, width: 345, height: 343.91 }}>
        <CardMedia sx={{ height: 140 }} image={`${import.meta.env.VITE_APP_API_URL}file/${imagePath}`} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="caption">{date && format(new Date(date), 'dd.MM.yyyy HH:mm')}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={clickNavigateToUser}>{author ?? 'Автор'}</Button>
          <Button size="small">Читать</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
