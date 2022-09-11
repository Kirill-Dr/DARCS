import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/popularCard.css";

const PopularSkinCard = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className="popular-card-container">
            <div className="popular-card-container-info">
                <h2>{item.weapon} | {item.skin}</h2>
            </div>
            <div className="popular-card-container-image">
                <img src={item.image} alt="Error:(" className="popular-card-image" />
            </div>
            <div className="popular-card-container-info-two">
                <h2>{item.price} $</h2>
            </div>
        </div>
    );
};

export default PopularSkinCard;