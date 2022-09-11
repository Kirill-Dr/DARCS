import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import {SKINS, JSON_API_SKINS, JSON_API_POPULAR_SKINS, POPULAR_SKINS} from "../helpers/consts";
import { useLocation, useNavigate } from "react-router-dom";

export const skinsContext = createContext();

export const useSkins = () => useContext(skinsContext);

const INIT_STATE = {
    skins: [],
    skinsDetails: null,
    popularSkins: []
};

const reducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case SKINS.GET_SKINS:
            return {...state, skins: action.payload};
        case SKINS.GET_SKINS_DETAILS:
            return {...state, skinsDetails: action.payload};
        case POPULAR_SKINS.GET_POPULAR_SKINS:
            return {...state, popularSkins: action.payload};
        default:
            return state;
    }
};

const SkinsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const navigate = useNavigate();
    const location = useLocation();

    // add skins

    const addSkins = async (newSkins) => {
        await axios.post(JSON_API_SKINS, newSkins);
        getSkins();
    };

    //  get all skins

    const getSkins = async () => {
         const { data } = await axios(`${JSON_API_SKINS}/${window.location.search}`);
         dispatch({
             type: SKINS.GET_SKINS,
             payload: data,
         });
    };

    const getPopularSkins = async () => {
        const { data } = await axios(`${JSON_API_POPULAR_SKINS}`);
        dispatch({
            type: POPULAR_SKINS.GET_POPULAR_SKINS,
            payload: data
        });
    }

    // edit&details skins

    const getSkinsDetails = async (id) => {
        const { data } = await axios(`${JSON_API_SKINS}/${id}`);
        dispatch({
            type: SKINS.GET_SKINS_DETAILS,
            payload: data
        });
    };

    const saveEditedSkins = async (newSkins) => {
        await axios.patch(`${JSON_API_SKINS}/${newSkins.id}`, newSkins);
        getSkins();
    };

    // delete skins

    const deleteSkins = async (id) => {
        await axios.delete(`${JSON_API_SKINS}/${id}`);
        getSkins();
    };

    const fetchByParams = (query, value) => {
        const search = new URLSearchParams(location.search);
        if (value === "all") {
            search.delete(query);
        } else {
            search.set(query, value);
        };
        const url = `${location.pathname}?${search.toString()}`;
        navigate(url);
    };

    const values = {
        skins: state.skins,
        skinsDetails: state.skinsDetails,
        popularSkins: state.popularSkins,
        getSkins,
        addSkins,
        getSkinsDetails,
        saveEditedSkins,
        deleteSkins,
        fetchByParams,
        getPopularSkins
    };

    return (
        <skinsContext.Provider value={values}>
            {children}
        </skinsContext.Provider>
    );
};

export default SkinsContextProvider;