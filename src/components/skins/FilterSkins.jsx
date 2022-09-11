import React from "react";
import {useSkins} from "../../contexts/SkinsContextProvider";
import "../../styles/filterSkins.css";

const FilterSkins = () => {
    const { fetchByParams } = useSkins();


    return (
        <>
            <form className="form-container" onClick={(e) => fetchByParams("rarity", e.target.value)}>
                <div className="fil-block">
                    <input
                        className="fil-inp"
                        name="rarity"
                        type="radio"
                        id="all"
                        value="all"
                    />
                    <label htmlFor="all">All</label>
                </div>
                <div className="fil-block">
                    <input
                        className="fil-inp"
                        name="rarity"
                        type="radio"
                        id="Consumer"
                        value="Consumer"
                    />
                    <label htmlFor="Consumer">Consumer</label>
                </div>
                <div className="fil-block">
                    <input
                        className="fil-inp"
                        name="rarity"
                        type="radio"
                        id="Industrial"
                        value="Industrial"
                    />
                    <label htmlFor="Industrial">Industrial</label>
                </div>
                <div className="fil-block">
                    <input
                        className="fil-inp"
                        name="rarity"
                        type="radio"
                        id="Mil-spec"
                        value="Mil-spec"
                    />
                    <label htmlFor="Mil-spec">Mil-spec</label>
                </div>
                <div className="fil-block">
                    <input
                        className="fil-inp"
                        name="rarity"
                        type="radio"
                        id="Restricted"
                        value="Restricted"
                    />
                    <label htmlFor="Restricted">Restricted</label>
                </div>
                <div className="fil-block">
                    <input
                        className="fil-inp"
                        name="rarity"
                        type="radio"
                        id="Classified"
                        value="Classified"
                    />
                    <label htmlFor="Classified">Classified</label>
                </div>
            </form>
        </>
    )
}

export default FilterSkins;