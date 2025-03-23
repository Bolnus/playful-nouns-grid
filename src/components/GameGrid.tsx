
import React, { useMemo } from 'react';
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
  
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <WordCard 
          key={`card-${index}`} 
          word={card.word} 
          id={card.id} 
        />
      ))}
    </div>
  );
};

export default GameGrid;
