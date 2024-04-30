import {
  AppBar, Toolbar, Typography, Button, InputBase, Divider, IconButton, Paper, Box, Menu, MenuItem 
} from '@mui/material'
import { FC } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useToggle } from '../../hooks/useToggle'
import { useAuth } from '../../store/auth'

import { LoginModal } from './modals/LoginModal'
import { RegisterModal } from './modals/RegisterModal'


interface Props {
  hiddenSearc?: boolean
}
export const TopPanel:FC<Props> = ({ hiddenSearc }) => {
  const [openLogin, openLoginToggle] = useToggle(false)
  const [openReg, openRegToggle] = useToggle(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { user,api } = useAuth()

  const navigete = useNavigate()
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News Site
        </Typography>
        {!hiddenSearc &&
          <Paper
            component="form"
            sx={{
              p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Найти новость по названию"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          </Paper>
        }
        <Box padding='1rem'>
          {user ? <Box flexDirection="column"><Button color="inherit" onClick={handleMenu}>{user.login}</Button>  
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => navigete(`/user/${user.id}`)}>Профиль</MenuItem>
              <MenuItem onClick={()=> api.exit}>Выйти</MenuItem>
            </Menu></Box> :
            <>
              <Button color="inherit" onClick={openLoginToggle}>Войти</Button>
              <Button color="inherit" onClick={openRegToggle}>Зарегистрироваться</Button>
            </>
          }
        </Box>
      </Toolbar>
      <LoginModal open={openLogin} onClose={openLoginToggle} />
      <RegisterModal open={openReg} onClose={openRegToggle} />
    </AppBar>
  )
}
