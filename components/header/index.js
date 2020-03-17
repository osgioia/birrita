import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import style from "./style.scss";
import { Follow } from "react-twitter-widgets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as moonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as moonRegular } from "@fortawesome/free-regular-svg-icons";

const user_twitter = "aioigzo"

const Header = ({ countCoffees, prefersDark }) => {
    const [darkMode, setDarkMode] = useState("");

    useEffect(() => {
        if (!darkMode) {
            setDarkMode(prefersDark);
        }

        window.localStorage.setItem("darkMode", darkMode);
        document.body.dataset.theme = darkMode || prefersDark;
    }, [darkMode]);

    return (
        <header className={style.headerContainer}>
            <div className={style.header}>
                <div className={style.profileImg}></div>
                <div className={style.informationContainer}>
                    <div className={style.name}>@DamianCatanzaro</div>
                    <div className={style.countCoffees}>
                        {countCoffees} cafecitos ☕️
                    </div>
                </div>

                <FontAwesomeIcon
                    icon={darkMode == "dark" ? moonSolid : moonRegular}
                    className={style.darkMode}
                    onClick={() => {
                        setDarkMode(darkMode === "dark" ? "light" : "dark");
                    }}
                    width="22"
                />
            </div>

            <div className={style.twitter}>
                <Follow username={user_twitter} />

            </div>  
        </header>
    );
};

Header.propTypes = {
    countCoffees: PropTypes.number,
    prefersDark: PropTypes.string,
};

export default Header;
