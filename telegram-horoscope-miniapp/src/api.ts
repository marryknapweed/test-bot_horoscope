import axios from "axios";

const API_URL = "https://poker247tech.ru/get_horoscope/";

export const fetchHoroscope = async (
  sign: string,
  language: string,
  period: string
) => {
  try {
    const response = await axios.post(API_URL, {
      sign,
      language: language === "en" ? "translated" : "original",
      period,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching horoscope:", error);
    throw error;
  }
};
