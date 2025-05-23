
import React, { useState } from 'react';
import GameGrid from '@/components/GameGrid';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CEFRLevel, WordItem } from '@/lib/types';
import { generateAllNounsByType } from '@/utils/wordLists';


const Game: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');
  const [level, setLevel] = useState<CEFRLevel>('B1');
  const [gameKey, setGameKey] = useState(0); // Add a key to force re-render
  const [cards, setCards] = React.useState<WordItem[]>([]);
  const [allCards, setAllCards] = React.useState<WordItem[]>([]);

  React.useEffect(() => {
    setAllCards(generateAllNounsByType(language, level));
    setGameKey(0);
  }, [language, level]);

  React.useEffect(() => {
    const currentStart = gameKey * 25;
    setCards(allCards.slice(currentStart, currentStart + 25));
  }, [gameKey, allCards]);

  const refreshGame = () => {
    // Increment the key to force a re-render of the GameGrid component
    setGameKey(prevKey => (prevKey + 2) * 25 > allCards.length ? 0 : prevKey + 1);
    
    // Show a toast notification
    toast.success(language === 'en' ? 'Game refreshed' : 'Игра обновлена', {
      description: language === 'en' ? 'New cards have been generated' : 'Новые карточки были сгенерированы',
      position: 'bottom-center',
    });
  };

  const handleLanguageChange = (value: 'en' | 'ru') => {
    setLanguage(value);
    toast.success(value === 'en' ? 'Language changed to English' : 'Язык изменен на Русский', {
      position: 'bottom-center',
    });
  };

  const handleLevelChange = (value: CEFRLevel) => {
    setLevel(value);
    toast.success(
      language === 'en' 
        ? `Level changed to ${value}` 
        : `Уровень изменен на ${value}`, 
      {
        position: 'bottom-center',
      }
    );
  };

  const getLevelDescription = (level: CEFRLevel) => {
    if (language === 'en') {
      switch(level) {
        case 'A1': return 'Beginner';
        case 'A2': return 'Elementary';
        case 'B1': return 'Intermediate';
        case 'B2': return 'Upper Intermediate';
        case 'C1': return 'Advanced';
        case 'C2': return 'Proficient';
        default: return '';
      }
    } else {
      switch(level) {
        case 'A1': return 'Начальный';
        case 'A2': return 'Элементарный';
        case 'B1': return 'Средний';
        case 'B2': return 'Выше среднего';
        case 'C1': return 'Продвинутый';
        case 'C2': return 'Свободный';
        default: return '';
      }
    }
  };

  return (
    <div className="min-h-[100dvh] overflow-hidden bg-background flex flex-col items-center">
      <header className="game-header w-full max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="game-header__main-text font-semibold tracking-tight">
          Codenames duet
        </h1>
        <div className="flex items-center gap-2 sm:gap-4">
          <Select
            value={language}
            onValueChange={(value) =>
              handleLanguageChange(value as "en" | "ru")
            }
          >
            <SelectTrigger className="w-[130px] h-9">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
            </SelectContent>
          </Select>
          <Select value={level} onValueChange={(value) => handleLevelChange(value as CEFRLevel)}>
            <SelectTrigger className="w-[130px] h-9">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A1">A1 - {getLevelDescription('A1')}</SelectItem>
              <SelectItem value="A2">A2 - {getLevelDescription('A2')}</SelectItem>
              <SelectItem value="B1">B1 - {getLevelDescription('B1')}</SelectItem>
              <SelectItem value="B2">B2 - {getLevelDescription('B2')}</SelectItem>
              <SelectItem value="C1">C1 - {getLevelDescription('C1')}</SelectItem>
              <SelectItem value="C2">C2 - {getLevelDescription('C2')}</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            onClick={refreshGame} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2"
          >
            <RefreshCcw size={14} />
            <span className="hidden sm:inline">
              {language === "en" ? "New Game" : "Новая Игра"}
            </span>
          </Button>
        </div>
      </header>
      
      <main className="game-main flex flex-col flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 py-2 sm:py-4">
        <p className="text-muted-foreground mb-4 md:mb-2 sm:mb-1 max-w-2xl mx-auto text-center text-xs sm:text-sm">
        {language === 'en' 
            ? `Level ${level} (${getLevelDescription(level)}): Select words by clicking the circle button. Create a story using your selected words!`
            : `Уровень ${level} (${getLevelDescription(level)}): Выбирайте слова, нажимая на круглую кнопку. Создайте историю, используя выбранные слова!`}
        </p>
        <GameGrid language={language} cards={cards} />
      </main>

      <footer className="w-full py-2 sm:py-4 border-t border-border">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 text-center text-xs sm:text-sm text-muted-foreground">
          © 2023{" "}
          {language === "en" ? "Word Selection Game" : "Игра Выбора Слов"}.{" "}
          {language === "en" ? "All rights reserved." : "Все права защищены."}
        </div>
      </footer>
    </div>
  );
};

export default Game;
