import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { text, ZodiacSign } from "../../config/text";
import { fetchHoroscope } from "../../api";
import "./index.scss";

export const ZodiacList: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  const zodiacSigns = Object.keys(text[language].zodiac).map(sign => {
    const signId = sign as ZodiacSign;
    return {
      id: signId,
      name: text[language].zodiac[signId].name,
      period: text[language].zodiac[signId].period,
      icon: text[language].zodiac[signId].icon,
    };
  });

  // Вынесенная функция для запроса данных гороскопа
  const fetchHoroscopeData = async (signId: ZodiacSign, lang: string) => {
    try {
      const data = await fetchHoroscope(signId, lang, "today");
      setDescription(data.horoscope);
    } catch (error) {
      console.error("Error fetching description:", error);
    }
  };

  const handleClick = (signId: ZodiacSign) => {
    setSelectedSign(signId);
    fetchHoroscopeData(signId, language);
  };

  // useEffect для обновления описания при изменении языка
  useEffect(() => {
    if (selectedSign) {
      fetchHoroscopeData(selectedSign, language);
    }
  }, [language, selectedSign]);

  return (
    <div className="zodiac-wrapper">
      <div className={`zodiac-signs ${selectedSign ? "collapsed" : ""}`}>
        {zodiacSigns.map(sign => (
          <div
            key={sign.id}
            className={`zodiac-item ${
              selectedSign === sign.id ? "active" : ""
            }`}
            onClick={() => handleClick(sign.id)}
          >
            <div className="zodiac-icon">{sign.icon}</div>
            <div className="zodiac-name">{sign.name}</div>
            <div className="zodiac-period">{sign.period}</div>
          </div>
        ))}
      </div>
      {selectedSign && (
        <div className="zodiac-description">
          <div className="zodiac-description-title">
            {text[language].horoscope.title}
          </div>
          <div className="zodiac-description-text">{description}</div>
        </div>
      )}
    </div>
  );
};
