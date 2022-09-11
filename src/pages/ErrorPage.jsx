import React from "react";
import Error from "../images/error.png";
import "../styles/errorPage.css";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="error-container">
            <img src={Error} alt="Error:(" className="error-img" />
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Страница не найдена</h2>
            <div className="home-btn-container">
                <button className="home-btn" onClick={() => navigate("/")}>На главную страницу</button>
            </div>
        </div>
    )
};

export default ErrorPage;