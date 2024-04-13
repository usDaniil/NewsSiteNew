import { AppBar, Toolbar, Typography, Button, InputBase, Divider, IconButton, Paper, Box } from "@mui/material";
import { FC } from "react";
import { useToggle } from "../../hooks/useToggle";
import { LoginModal } from "./modals/LoginModal";
import { RegisterModal } from "./modals/RegisterModal";
import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from "../../store/auth";

export const TopPanel:FC = () => {
  const [openLogin, openLoginToggle] = useToggle(false);
  const [openReg, openRegToggle] = useToggle(false);
  const {user} = useAuth()

    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News Site
          </Typography>
          <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
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
    <Box padding='1rem'>
    {user ? <Button color="inherit" onClick={()=> null}>{user.login}</Button> :
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