import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import { calcSubPrice, calcTotalPrice, getCountSkinsInCart } from "../helpers/functions";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")),
    cartLength: getCountSkinsInCart(),
    count: JSON.parse(localStorage.getItem("sum")),
};

function reducer(state=INIT_STATE, action) {
    switch (action.type) {
        case CART.GET_CART:
            return {...state, cart: action.payload};
        case CART.GET_CART_LENGTH:
            return {...state, cartLength: action.payload};
        case CART.GET_COUNT:
            return {...state, count: action.payload};
        default:
            return state;
    }
}

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    // get cart
    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            localStorage.setItem("cart", JSON.stringify({ skins: [], totalPrice: 0 }));
            cart = {
                skins: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: CART.GET_CART,
            payload: cart,
        });
    };

    const addSkinToCart = (skin) => {
        let cart = JSON.parse(localStorage.getItem("cart"));

        if (!cart) {
            cart = {
                skins: [],
                totalPrice: 0,
            };
        }

        let newSkin = {
            item: skin,
            count: 1,
            subPrice: +skin.price,
        };

        let skinToFind = cart.skins.filter((elem) => elem.item.id === skin.id);

        if (skinToFind.length === 0) {
            cart.skins.push(newSkin);
        } else {
            cart.skins = cart.skins.filter((elem) => elem.item.id !== skin.id);
        }

        cart.totalPrice = calcTotalPrice(cart.skins);

        localStorage.setItem("cart", JSON.stringify(cart));
        getCount();
        dispatch({
            type: CART.GET_CART,
            payload: cart,
        });
    };

    function deleteSkinInCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.skins = cart.skins.filter((elem) => elem.item.id !== id);
        cart.totalPrice = calcTotalPrice(cart.skins);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
        getCount();
        dispatch({
            type: CART.GET_CART_LENGTH,
            payload: cart,
        });
    }

    const changeSkinCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem("cart"));

        cart.skins = cart.skins.map((skin) => {
            if (skin.item.id === id) {
                skin.count = count;
                skin.subPrice = calcSubPrice(skin);
            }
            return skin;
        });

        cart.totalPrice = calcTotalPrice(cart.skins);

        localStorage.setItem("cart", JSON.stringify(cart));
        getCount();
        dispatch({
            type: CART.GET_CART,
            payload: cart,
        });
    }

    const getCount = () => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            localStorage.setItem("cart", JSON.stringify({ skins: [], totalPrice: 0 }));
            cart = {
                skins: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: CART.GET_CART,
            payload: cart,
        });

        let array = [];
        cart.skins.map((item) => {
            array.push(item.count++);
        });

        let sum = array.reduce((a, b) => a + b, 0);

        localStorage.setItem("sum", JSON.stringify(sum));
        dispatch({
            type: CART.GET_COUNT,
            payload: sum,
        });
    };

    const values = {
        getCart,
        addSkinToCart,
        deleteSkinInCart,
        changeSkinCount,
        cart: state.cart,
        getCount,
        count: state.count,
    };

    return (
        <cartContext.Provider value={values}>
            { children }
        </cartContext.Provider>
    );
};

export default CartContextProvider;