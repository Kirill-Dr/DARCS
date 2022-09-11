import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSkins} from "../../contexts/SkinsContextProvider";
import "../../styles/addSkin.css";

const AddSkin = () => {
    const { addSkins } = useSkins();
    const navigate = useNavigate();

    const [ skin, setSkin ] = useState({
        "weapon": "",
        "skin": "",
        "rarity": "",
        "image": "",
        "price": "",
    });

    const  handleInp = (e) => {
        if (e.target.value === "price") {
            let obj = {
                ...skin,
                [e.target.name]: Number(e.target.value),
            };
            setSkin(obj);
        } else {
            let obj = {
                ...skin,
                [e.target.name]: e.target.value,
            };
            setSkin(obj);
        }
    };

    return (
        <div className="add-container">
            <h1 className="add-title">Добавить скин</h1>
            <input type="text" className="add-inp" name="weapon" placeholder="Введите название" onChange={handleInp} />
            <input type="text" className="add-inp" name="skin" placeholder="Введите скин" onChange={handleInp} />
            <input type="text" className="add-inp" name="rarity" placeholder="Введите редкость" onChange={handleInp} />
            <input type="text" className="add-inp" name="image" placeholder="Введите URL" onChange={handleInp} />
            <input type="text" className="add-inp" name="price" placeholder="Введите цену" onChange={handleInp} />
            <div className="add-btn">
                <button className="add-skin-btn" onClick={() => {
                    addSkins(skin);
                    navigate("/skins");
                }}>Добавить скин</button>
            </div>
        </div>
    )
};

export default AddSkin;