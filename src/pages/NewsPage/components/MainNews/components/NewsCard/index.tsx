import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Typography 
} from '@mui/material'
import { FC } from 'react'

// interface Props {
//     image: string;
//     title: string;
//     description: string;
//     author: string;
//     date: string;
// }
export const NewsCard:FC = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Lizard
          </Typography>
          <Typography variant="caption">20.03.2022</Typography>
          <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Автор</Button>
          <Button size="small">Читать</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
