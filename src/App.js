import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./styles/index.css";
import MainRoutes from "./MainRoutes";
import SkinsContextProvider from "./contexts/SkinsContextProvider";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import AuthContextProvider from "./contexts/authContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            divider: '#fff',
            text: {
                primary: '#fff',
                secondary: '#fff',
            },
        }
    });

  return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CartContextProvider>
                    <AuthContextProvider>
                        <SkinsContextProvider>
                            <Navbar />
                            <MainRoutes />
                        </SkinsContextProvider>
                    </AuthContextProvider>
                </CartContextProvider>
            </ThemeProvider>
        </>
  );
}

export default App;
