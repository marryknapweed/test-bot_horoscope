// config/text.ts
import { en } from "./en";
import { ru } from "./ru";

export type ZodiacSign =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export type ZodiacSignDetails = {
  name: string;
  period: string;
  icon: string;
};

export type ZodiacSignText = {
  [key in ZodiacSign]: ZodiacSignDetails;
};

export type TextConfig = {
  horoscope: {
    title: string;
  };
  zodiac: ZodiacSignText;
};

export const text: { [key: string]: TextConfig } = {
  en,
  ru,
};
