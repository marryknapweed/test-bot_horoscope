import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setLanguage } from "../../redux/lang-slice";
import "./index.scss";

export const LanguageSwitcher = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleChangeLanguage = (language: "en" | "ru") => {
    dispatch(setLanguage(language));
  };
  return (
    <div className="language-switcher">
      <button
        className="language-switcher__button"
        onClick={() => handleChangeLanguage("en")}
      >
        English
      </button>
      <button
        className="language-switcher__button"
        onClick={() => handleChangeLanguage("ru")}
      >
        Русский
      </button>
    </div>
  );
};
