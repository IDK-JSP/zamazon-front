import React, {FC, useContext} from 'react';
import {useNavigate} from "react-router";
import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import {EmailContext} from "../App";

const data =[
    {page:"Boutique", path:"/Shop"},
    {page: "Recherche", path: "/Research"},
    {page:"Panier", path:"/Kart"},
    {page:"Admin", path:"/Admin"},];

const MyNavBarLogged:FC<{}> = ({}) => {
    let navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const emailContext = useContext(EmailContext);


    // Pour le composant MUI (menu déroulant de connexion et d'inscription)
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const pages = [{name: "Deconnexion", path: "/Register"}];

    return (
        <div className={"container"}>
            {data.map((item, index) => (
                <button onClick={()=>navigate(item.path)}>{item.page}</button>
            ))}
            <Box sx={{flexGrow: 0}}>
                <Tooltip title="Profile">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{backgroundColor: 'green'}}/>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{mt: '45px'}}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {pages.map((page) => (
                        <MenuItem onClick={() => {
                            handleCloseUserMenu();
                            emailContext?.setLoggedIn(false)
                            emailContext?.setEmail("")
                            navigate(page.path);
                        }} key={page.name}>
                            <Typography sx={{textAlign: 'center'}}><b>{page.name}</b></Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </div>
    );
}

export default MyNavBarLogged;