import React from "react";
import "../styles/skinsPage.css";
import SkinsList from "../components/skins/SkinsList";
import FilterSkins from "../components/skins/FilterSkins";

const SkinsPage = () => {
    return (
        <div className="skin-page-container">
            <div className="skin-filter">
                <h2 className="filter-title">Фильтрация по скинам</h2>
                <FilterSkins />
            </div>
            <div className="skin-list">
                <SkinsList />
            </div>
        </div>
    )
};

export default SkinsPage;