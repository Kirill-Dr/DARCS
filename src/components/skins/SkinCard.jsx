import React from "react";
import "../../styles/card.css";
import {useNavigate} from "react-router-dom";

const SkinCard = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className="card-container">
            <div className="card-container-image">
                <img src={item.image} alt="Error:(" className="card-image" />
            </div>
            <div className="card-container-info">
                <h2>Цена: {item.price} $</h2>
            </div>
            <div className="card-btn">
                <button className="info-btn"  onClick={() => navigate(`/details/${item.id}`)}>Подробнее</button>
            </div>
        </div>
    );
};

export default SkinCard;