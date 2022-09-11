import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "../../styles/navbar.css";
import Logo from "../../images/logo.png";
import {useNavigate} from "react-router-dom";

const pages = [
    {
        type: "Главная",
        path: "/"
    },
    {
        type: "Скины",
        path: "/skins"
    },
    {
        type: "Авторизация",
        path: "/authentication"
    },
    {
        type: "Добавить скин",
        path: "/add"
    }
]


export default function Navbar() {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="navbar-info">
                    <Typography>
                        <img src={Logo} alt="Error:(" className="navbar-logo" />
                    </Typography>
                    <Typography className="navbar-buttons">
                        {pages.map((page) => (
                            <button onClick={() => navigate(page.path)} className="navbar-btns">{page.type}</button>
                        ))}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
