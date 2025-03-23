
import React, { useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';
import WordCard from './WordCard';

const generateRandomId = () => {
  const numbers = Array.from({ length: 4 }, () => 
    Math.floor(Math.random() * 10)
  ).join('');
  
  const letters = Array.from({ length: 2 }, () => 
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join('');
  
  return `${numbers}${letters}-${Math.floor(Math.random() * 999)}`;
};

const generateUniqueNouns = (count: number): Array<{ word: string, id: string }> => {
  const nouns = new Set<string>();
  
  while (nouns.size < count) {
    const noun = faker.word.noun().toUpperCase();
    if (noun.length > 3 && noun.length < 10) {
      nouns.add(noun);
    }
  }
  
  return Array.from(nouns).map(word => ({
    word,
    id: generateRandomId()
  }));
};

const GameGrid: React.FC = () => {
  const cards = useMemo(() => generateUniqueNouns(25), []);
  const [greenCount, setGreenCount] = useState(0);
  const [bypassersCount, setBypassersCount] = useState(0);
  
  const handleGreenChange = (isGreen: boolean) => {
    setGreenCount(prev => isGreen ? prev + 1 : prev - 1);
  };
  
  const handleBypasserChange = (isActive: boolean) => {
    setBypassersCount(prev => isActive ? prev + 1 : prev - 1);
  };
  
  return (
    <>
      <div className="flex gap-4 mb-6">
        <div className="green-counter p-3 rounded-lg shadow-sm inline-flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span className="font-semibold">{greenCount} green cards selected</span>
        </div>
        
        <div className="bypassers-counter p-3 rounded-lg shadow-sm inline-flex items-center gap-2">
          <div className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-500">
            <span className="text-white text-[10px]">↕</span>
          </div>
          <span className="font-semibold">{bypassersCount} bypassers active</span>
        </div>
      </div>
      
      <div className="card-grid">
        {cards.map((card, index) => (
          <WordCard 
            key={`card-${index}`} 
            word={card.word} 
            id={card.id}
            onGreenChange={handleGreenChange}
            onBypasserChange={handleBypasserChange}
          />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
