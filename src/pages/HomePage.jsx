import React, {useContext, useEffect} from 'react';
import "../styles/homepage.css";
import homepageSkin from "../images/homepage-skin.png";
import homepageSkinTwo from "../images/homepage-skin-2.png";
import homepageSkinThree from "../images/homepage-skin-3.png";
import csgoLogo from "../images/cs-go-logo.png";
import { useSkins } from "../contexts/SkinsContextProvider";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useNavigate} from "react-router-dom";
import PopularSkinCard from "../components/skins/PopularSkinCard";
import {authContext} from "../contexts/authContextProvider";

export default function HomePage() {
    const { popularSkins, getPopularSkins } = useSkins();
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {
        getPopularSkins();
    }, []);

    const items = popularSkins?.map((item) => <PopularSkinCard item={item} key={item.id} />);

    const countItems = items.length;

    const responsive = {
        1770: {
            items: 4
        },
        1420: {
            items: 3
        },
        1070: {
            items: 2
        },
        0: {
            items: 1
        }
    }

    return (
        <>
            <div className="homepage-container">
                <div className="homepage-left">
                    <div className="homepage-title">
                        <h1>Покупайте лучшие скины</h1>
                    </div>
                    <div className="homepage-description">
                        <p>DARCS помогает гибко работать с вашим инвентарем в Steam: от покупки до получения</p>
                    </div>
                    <div className="homepage-btn">
                        <button className="homepage-btn-left" onClick={() => navigate("/skins")}>Купить</button>
                    </div>
                </div>
                <div className="homepage-right">
                    <img src={homepageSkinTwo} alt="Error:(" className="homepage-image-two"/>
                    <img src={homepageSkin} alt="Error:(" className="homepage-image"/>
                </div>
            </div>
            <div className="homepage-info">
                <div className="info-block">
                    <div className="info-percent">35%</div>
                    <div className="info-line"></div>
                    <div className="info-bonus">Бонус при пополнении баланса</div>
                </div>
                <div className="info-block">
                    <div className="info-k">80 К</div>
                    <div className="info-line"></div>
                    <div className="info-item">CS:GO предметов на нашем сайте</div>
                </div>
                <div className="info-block">
                    <div className="info-sec">30 сек.</div>
                    <div className="info-line"></div>
                    <div className="info-buy">Необходимо после входа на сайт для покупки</div>
                </div>
                <div className="info-block">
                    <div className="info-time">24/7</div>
                    <div className="info-line"></div>
                    <div className="info-min">Онлайн техническая поддержка, мы отвечаем в течении 5 минут</div>
                </div>
            </div>
            <div className="popular-items">
                <div className="popular-text">
                    <div className="csgo-text">
                        <img src={csgoLogo} alt="Error:(" className="csgo-image" />
                        <p className="csgo-desc">Популярные предметы CS:GO</p>
                    </div>
                    <div>
                        <button className="popular-btn" onClick={() => navigate("/skins")}>Посмотреть все {countItems}</button>
                    </div>
                </div>
                <div className="item-card">
                    <AliceCarousel items={items} responsive={responsive} infinite disableDotsControls />
                </div>
            </div>
            <div className="collection-block">
                <div className="collection-block-left">
                    <img src={homepageSkinThree} alt="Error:(" className="collection-img" />
                </div>
                <div className="collection-block-right">
                    <h2 className="collection-desc">
                        Новейшие скины на DARCS
                    </h2>
                    <button className="collection-get-btn" onClick={() => navigate("/skins")}>
                        Получить скины
                    </button>
                </div>
            </div>
        </>
    );
}
