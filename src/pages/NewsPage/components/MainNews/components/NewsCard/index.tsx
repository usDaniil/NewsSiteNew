import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Typography 
} from '@mui/material'
import type { FC } from 'react'

interface Props {
    image?: Blob;
    title?: string;
    description?: string;
    author?: string;
    date?: string;
}
export const NewsCard:FC<Props> = ({ title, description, author, date, image }) => {
  const imageSrc = image ? URL.createObjectURL(image) : ''
  return (
    <Box>
      <Card sx={{ maxWidth: 345, width: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageSrc}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="caption">{date}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{author ?? 'Автор'}</Button>
          <Button size="small">Читать</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
