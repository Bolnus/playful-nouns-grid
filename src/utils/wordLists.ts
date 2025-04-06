
// English and Russian noun lists for the word game organized by CEFR levels

import { CEFRLevel, WordItem } from "@/lib/types";
import { EnglishA1 } from "./constEnglishA1";
import { EnglishA2 } from "./constEnglishA2";
import { EnglishB2 } from "./constEnglishB2";
import { EnglishC1 } from "./constEnglishC1";
import { EnglishC2 } from "./constEnglishC2";
import { EnglishB1 } from "./constEnglisjB1";
import { RuA1 } from "./constRuA1";
import { RuA2 } from "./constRuA2";
import { RuB1 } from "./constRuB1";
import { RuB2 } from "./constRuB2";
import { RuC1 } from "./constRuC1";
import { RuC2 } from "./constRuC2";

// English word lists by CEFR level
export const englishNounsByCEFR: Record<string, string[]> = {
  A1: EnglishA1,
  A2: EnglishA2,
  B1: EnglishB1,
  B2: EnglishB2,
  C1: EnglishC1,
  C2: EnglishC2,
};

// Russian word lists by CEFR level
export const russianNounsByCEFR: Record<string, string[]> = {
  A1: RuA1,
  A2: RuA2,
  B1: RuB1,
  B2: RuB2,
  C1: RuC1,
  C2: RuC2
};

for (const key of Object.keys(englishNounsByCEFR)) {
  englishNounsByCEFR[key] = englishNounsByCEFR[key].filter((word) => word.length < 11);
  russianNounsByCEFR[key] = russianNounsByCEFR[key].filter((word) => word.length < 11);
}

// Generate a random ID for each word
export const generateRandomId = () => {
  const numbers = Array.from({ length: 4 }, () => 
    Math.floor(Math.random() * 10)
  ).join('');
  
  const letters = Array.from({ length: 2 }, () => 
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join('');
  
  return `${numbers}${letters}-${Math.floor(Math.random() * 999)}`;
};

// For backward compatibility
export const englishNouns = englishNounsByCEFR.B1;
export const russianNouns = russianNounsByCEFR.B1;

export const generateAllNounsByType = (language: 'en' | 'ru', level: CEFRLevel): WordItem[] => {
  const wordList = language === 'ru' ? russianNounsByCEFR[level] : englishNounsByCEFR[level];
  
  return wordList.sort(() => 0.5 - Math.random()).map(word => ({
    word,
    id: generateRandomId()
  }));
};