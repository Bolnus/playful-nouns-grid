import React, { useMemo, useState } from 'react';
import WordCard from './WordCard';
import { Plus, Minus, ArrowUp, ArrowDown } from 'lucide-react';
import { englishNouns, russianNouns, getRandomItems, generateRandomId } from '@/utils/wordLists';

const generateUniqueNouns = (count: number, language: 'en' | 'ru'): Array<{ word: string, id: string }> => {
  const wordList = language === 'ru' ? russianNouns : englishNouns;
  
  const selectedWords = getRandomItems(wordList, count);
  
  return selectedWords.map(word => ({
    word,
    id: generateRandomId()
  }));
};

interface GameGridProps {
  language: 'en' | 'ru';
}

const GameGrid: React.FC<GameGridProps> = ({ language }) => {
  const cards = useMemo(() => generateUniqueNouns(25, language), [language]);
  const [greenCount, setGreenCount] = useState(0);
  const [bypassersCount, setBypassersCount] = useState(0);
  const [clearRounds, setClearRounds] = useState(0);
  
  const handleGreenChange = (isGreen: boolean) => {
    setGreenCount(prev => isGreen ? prev + 1 : prev - 1);
  };
  
  const handleBypasserChange = (isActive: boolean) => {
    setBypassersCount(prev => isActive ? prev + 1 : prev - 1);
  };

  const incrementClearRounds = () => {
    setClearRounds(prev => prev + 1);
  };

  const decrementClearRounds = () => {
    setClearRounds(prev => (prev > 0 ? prev - 1 : 0));
  };
  
  return (
    <>
      <div className="flex gap-2 mb-4 flex-wrap justify-center">
        <div className="green-counter p-2 md:p-1 sm:p-0.5 sm:p-3 rounded-lg shadow-sm inline-flex items-center gap-2 text-sm sm:text-base">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500"></div>
          <span className="font-semibold">
            {language === 'en' ? `${greenCount} green cards` : `${greenCount} зеленых карт`}
          </span>
        </div>
        
        <div className="bypassers-counter p-2 sm:p-3 rounded-lg shadow-sm inline-flex items-center gap-2 text-sm sm:text-base">
          <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center rounded-full bg-purple-500">
            <ArrowUp size={10} className="text-white" />
            <ArrowDown size={10} className="text-white" />
          </div>
          <span className="font-semibold">
            {language === 'en' ? `${bypassersCount} bypassers` : `${bypassersCount} байпасеров`}
          </span>
        </div>

        <div className="clear-rounds-counter p-2 sm:p-3 rounded-lg shadow-sm inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-sm sm:text-base">
          <span className="font-semibold">
            {language === 'en' ? `Clear rounds: ${clearRounds}` : `Раунды: ${clearRounds}`}
          </span>
          <div className="flex gap-1">
            <button 
              onClick={decrementClearRounds}
              className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors flex items-center justify-center"
              aria-label={language === 'en' ? "Decrease clear rounds" : "Уменьшить количество раундов"}
            >
              <Minus size={12} className="text-blue-700" />
            </button>
            <button 
              onClick={incrementClearRounds}
              className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors flex items-center justify-center"
              aria-label={language === 'en' ? "Increase clear rounds" : "Увеличить количество раундов"}
            >
              <Plus size={12} className="text-blue-700" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="card-grid">
        {cards.map((card, index) => (
          <WordCard 
            key={`card-${index}`} 
            word={card.word} 
            onGreenChange={handleGreenChange}
            onBypasserChange={handleBypasserChange}
          />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
