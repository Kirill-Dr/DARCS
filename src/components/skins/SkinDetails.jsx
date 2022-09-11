import React, { useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { useSkins } from "../../contexts/SkinsContextProvider";
import "../../styles/skinDetails.css";
import { useCart } from "../../contexts/CartContextProvider";

const SkinDetails = () => {
    const { id } = useParams();
    const { getSkinsDetails, skinsDetails, deleteSkins } = useSkins();
    const { addSkinToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        getSkinsDetails(id);
    }, []);

    return (
        <>
            {skinsDetails ? (
                <div className="skin-container">
                    <div className="exit-container">
                        <button className="exit-btn" onClick={() => navigate("/skins")}>Выйти</button>
                    </div>
                    <div className="skin-image-container">
                        <img src={skinsDetails.image} alt="Error:(" className="skin-image" />
                    </div>
                    <div className="skin-info">
                        <h1 className="skin-weapon">Оружие: {skinsDetails.weapon}</h1>
                        <h3 className="skin-skin">Скин: {skinsDetails.skin}</h3>
                        <h3 className="skin-rarity">Редкость: {skinsDetails.rarity}</h3>
                        <h3 className="skin-price">Цена: {skinsDetails.price} $</h3>
                    </div>
                    <div className="skin-btns">
                        <button className="edit-btn" onClick={() => navigate(`/edit/${skinsDetails.id}`)}>Изменить</button>
                        <button className="cart-btn" onClick={() => addSkinToCart(skinsDetails)}>Добавить в корзину</button>
                        <button className="delete-btn" onClick={() => {
                            navigate("/skins");
                            deleteSkins(skinsDetails.id);
                        }}>Удалить</button>
                    </div>
                </div>
            ) : (
                <h3>Загрузка...</h3>
            )}
        </>
    )
}

export default SkinDetails;