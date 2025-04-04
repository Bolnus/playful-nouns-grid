
import React, { useState } from 'react';
import GameGrid from '@/components/GameGrid';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Game: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');
  const [gameKey, setGameKey] = useState(0); // Add a key to force re-render

  const refreshGame = () => {
    // Increment the key to force a re-render of the GameGrid component
    setGameKey(prevKey => prevKey + 1);
    
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

  return (
    <div className="min-h-[100dvh] overflow-hidden bg-background flex flex-col items-center">
      <header className="game-header w-full max-w-7xl mx-auto pt-4 pb-2 sm:py-6 px-2 sm:px-6 flex justify-between items-center">
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
            ? 'Select words by clicking the circle button. Create a story using your selected words!'
            : 'Выбирайте слова, нажимая на круглую кнопку. Создайте историю, используя выбранные слова!'}
        </p>
        <GameGrid key={gameKey} language={language} />
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
