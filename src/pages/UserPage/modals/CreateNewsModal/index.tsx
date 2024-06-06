import {
  Box,
  Button,
  Dialog,
  Input,
  TextField,
  Typography
} from '@mui/material'
import { useState, type ChangeEvent, type FC } from 'react'
import { useQueryClient } from 'react-query'
import { ImageUpload } from '../../../../common/components/ImageUpload'
import { useAuth } from '../../../../common/store/auth'
import { useCreateNews } from '../../../../modules/news/query'

interface Props {
  open: boolean;
  onClose: () => void;
}
export const CreateNewsModal: FC<Props> = ({ open, onClose }) => {
  const [image, segImage] = useState<Blob | null>(null)
  const [header, setHeader] = useState('')
  const [text, setText] = useState('')
  const { user } = useAuth()
  const create = useCreateNews()
  const client = useQueryClient()
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      segImage(file)
    }
  } 

  const handleSubmit = () => {
    if (image && header && text && user?.id) {
      create.mutate({
        image, header, text, userId: String(user?.id) 
      }, {
        onSuccess: () => {
          client.invalidateQueries(['News'])
          onClose()
        } 
      }) 
    }
  }
  return (
    <Dialog maxWidth='lg' open={open} onClose={onClose}>
      <Box width='100%' display='flex' />
      <Box
        padding="2rem"
        sx={{ width: '100%', height: '882px' }}
        display="flex"
        flexDirection="column"
        gap="1rem"
      >
        <Box display="flex" justifyContent="start">
          <Typography fontWeight="bold" variant="h2">
          Создание поста
          </Typography>
        </Box>
        <Box width='100%' display="flex" gap="1rem">
          <ImageUpload onChange={handleChangeImage} />
          <Box width="100%" display="flex" flexDirection="column" gap="1rem">
            <TextField
              onChange={(e) => setHeader(e.target.value)}
              style={{ width: '477px' }}
              variant="outlined"
              placeholder="Заголовок..."
            />
            <TextField
              onChange={(e) => setText(e.target.value)}
              rows={10}
              style={{ width: '800px' }}
              variant="outlined"
              multiline
              placeholder="Текст..."
            />
          </Box>
        </Box>
        <Box alignItems='end' display="flex">
          <Button onClick={handleSubmit}>Сохранить</Button>
          <Button onClick={onClose}>Отмена</Button>
        </Box>
      </Box>
    </Dialog>
  )
}
