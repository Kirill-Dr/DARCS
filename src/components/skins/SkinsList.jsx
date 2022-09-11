import React, { useEffect, useState } from "react";
import { useSkins } from "../../contexts/SkinsContextProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import SkinCard from "./SkinCard";
import {Pagination} from "@mui/material";
import "../../styles/skinsList.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "../../contexts/CartContextProvider";

const SkinsList = () => {
    const { skins, getSkins } = useSkins();
    const navigate = useNavigate();

    useEffect(() => {
        getSkins();
    }, []);

    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("q") || "");

    useEffect(() => {
        setSearchParams({
            q: search,
        });
    }, [search, ]);

    useEffect(() => {
        getSkins();
        setPage(1);
    }, [searchParams, ]);

    const [page, setPage] = useState(1);
    const itemsOnPage = 12;
    const counts = Math.ceil(skins.length / itemsOnPage);

    const handlePage = (e, p) => {
        setPage(p);
    };

    function currentData() {
        const begin = (page - 1) * itemsOnPage;
        const end = begin + itemsOnPage;
        return skins.slice(begin, end);
    }

    const { count, getCount } = useCart();
    useEffect(() => {
        getCount();
    }, []);

    return (
        <div>
            <div className="skin-search">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск..." className="search-inp" />
            </div>
            <div className="card-block" onClick={() => navigate("/cart")}>
                <ShoppingCartIcon fontSize="large"/><h2> - {count === 0 ? "нет" : count} предмета</h2>
            </div>
            <div className="skins-list">
                {skins ? (currentData().map((item) => <SkinCard item={item} key={item.id} />)
                ) : (
                    <h3>Загрузка...</h3>
                )}
            </div>
            <div className="skin-pagination">
                <Pagination count={counts} color="primary" size="large" page={page} onChange={handlePage} />
            </div>
        </div>
    );
}

export default SkinsList;