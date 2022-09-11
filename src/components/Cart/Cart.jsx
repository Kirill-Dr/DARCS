import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// custom imports
import { useCart } from "../../contexts/CartContextProvider";
import { Alert, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/cart.css";

export default function Cart() {
    const { getCart, cart, deleteSkinInCart, changeSkinCount, getCount } =
        useCart();

    React.useEffect(() => {
        getCart();
    }, []);

    function cartCleaner() {
        localStorage.removeItem("cart");
        getCart();
        localStorage.removeItem("sum");
        getCount();
    }

    const navigate = useNavigate();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Оружие</TableCell>
                        <TableCell align="right">Скин</TableCell>
                        <TableCell align="right">Редкость</TableCell>
                        <TableCell align="right">Цена за шт.</TableCell>
                        <TableCell align="right">Количество</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">---</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart?.skins.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align="right">{row.item.weapon}</TableCell>
                            <TableCell align="right">{row.item.skin}</TableCell>
                            <TableCell align="right">{row.item.rarity}</TableCell>
                            <TableCell align="right">{row.item.price} $</TableCell>
                            <TableCell align="right">
                                <TextField
                                    type="number"
                                    value={row.count}
                                    key={row.key}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            Alert("Please Enter quantity bigger then 0");
                                            return;
                                        }

                                        changeSkinCount(e.target.value, row.item.id);
                                    }}
                                />
                            </TableCell>
                            <TableCell align="right">{row.subPrice} $</TableCell>
                            <TableCell align="right">
                                <button
                                    className="cart__btn"
                                    onClick={() => deleteSkinInCart(row.item.id)}
                                >
                                    Удалить
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="buy-container">
                <Typography variant="h6" component="div">
                    Общая цена: {cart?.totalPrice} $
                </Typography>
                <button className="cart__btn">Купить</button>
            </div>
        </TableContainer>
    );
}
