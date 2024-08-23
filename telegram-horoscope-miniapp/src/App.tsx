import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LanguageSwitcher } from "./components/languageSwitcher";
import { ZodiacList } from "./components/zodiacList";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <LanguageSwitcher />
        <ZodiacList />
      </div>
    </Provider>
  );
};
