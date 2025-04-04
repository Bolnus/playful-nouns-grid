
// English and Russian noun lists for the word game

export const englishNouns = [
  "TIME", "YEAR", "PEOPLE", "WAY", "DAY", "MAN", "THING", "WOMAN", "LIFE", "CHILD", 
  "WORLD", "SCHOOL", "STATE", "FAMILY", "STUDENT", "GROUP", "COUNTRY", "PROBLEM", "HAND", "PART",
  "PLACE", "CASE", "WEEK", "COMPANY", "SYSTEM", "PROGRAM", "QUESTION", "WORK", "GOVERNMENT", "NUMBER",
  "NIGHT", "POINT", "HOME", "WATER", "ROOM", "MOTHER", "AREA", "MONEY", "STORY", "FACT",
  "MONTH", "LOT", "RIGHT", "STUDY", "BOOK", "EYE", "JOB", "WORD", "BUSINESS", "ISSUE"
];

export const russianNouns = [
  "ВРЕМЯ", "ГОД", "ЧЕЛОВЕК", "ДЕЛО", "ДЕНЬ", "РУКА", "РАБОТА", "СЛОВО", "МЕСТО", "ЛИЦО", 
  "ДРУГ", "ГЛАЗ", "ВОПРОС", "ДОМ", "СТОРОНА", "МИР", "СЛУЧАЙ", "ГОЛОВА", "РЕБЕНОК", "СИЛА",
  "КОНЕЦ", "ВИД", "СИСТЕМА", "ЧАСТЬ", "ГОРОД", "ОТНОШЕНИЕ", "ЖЕНЩИНА", "ДЕНЬГИ", "ЗЕМЛЯ", "МАШИНА",
  "ВОДА", "ОТЕЦ", "ПРОБЛЕМА", "ЧАС", "ПРАВО", "НОГА", "РЕШЕНИЕ", "ДВЕРЬ", "ОБРАЗ", "ИСТОРИЯ",
  "ВЛАСТЬ", "ЗАКОН", "ВОЙНА", "БОГА", "ГОЛОС", "КНИГА", "ВОЗМОЖНОСТЬ", "РЕЗУЛЬТАТ", "НОЧЬ", "СТОЛ"
];

// Helper to get random items from an array
export const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

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
