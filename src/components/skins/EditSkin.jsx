import React, { useState, useEffect } from "react";
import { useSkins } from "../../contexts/SkinsContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/editSkin.css";

const EditSkin = () => {
    const { getSkinsDetails, skinsDetails, saveEditedSkins } = useSkins();
    const navigate = useNavigate();
    const { id } = useParams();
    const [skin, setSkin] = useState(skinsDetails);

    useEffect(() => {
        setSkin(skinsDetails);
    }, [skinsDetails]);

    useEffect(() => {
        getSkinsDetails(id);
    }, []);

    const handleInp = (e) => {
        if (e.target.name === "price") {
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
    }

    return (
        <>
            {skin ? (
                <div className="edit-container">
                    <h1 className="edit-title">Изменить скин</h1>
                    <input type="text" className="edit-inp" name="weapon" value={skin.weapon} placeholder="Введите название" onChange={handleInp} />
                    <input type="text" className="edit-inp" name="skin" value={skin.skin} placeholder="Введите скин" onChange={handleInp} />
                    <input type="text" className="edit-inp" name="rarity" value={skin.rarity} placeholder="Введите редкость" onChange={handleInp} />
                    <input type="text" className="edit-inp" name="image" value={skin.image} placeholder="Введите URL" onChange={handleInp} />
                    <input type="text" className="edit-inp" name="price" value={skin.price} placeholder="Введите цену" onChange={handleInp} />
                    <div className="edit-container-btn">
                        <button className="edit-skin-btn" onClick={() => {
                            saveEditedSkins(skin);
                            navigate("/skins");
                        }}>
                            Сохранить изменения
                        </button>
                    </div>
                </div>
            ) : (
                <h3>Загрузка...</h3>
            )}
        </>
    )
};

export default EditSkin;