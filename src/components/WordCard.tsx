
import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WordCardProps {
  word: string;
  id: string;
}

const WordCard: React.FC<WordCardProps> = ({ word, id }) => {
  const [selected, setSelected] = useState(false);
  
  const toggleSelected = () => {
    setSelected(prev => !prev);
  };

  return (
    <div className="word-card animate-appear">
      <button 
        onClick={toggleSelected} 
        className="card-button animate-scale group"
        aria-label={selected ? "Deselect card" : "Select card"}
      >
        {selected ? (
          <ArrowUp 
            size={16} 
            className="text-primary animate-rotate-in" 
          />
        ) : (
          <span className="w-4 h-4 rounded-full group-hover:bg-gray-50"></span>
        )}
      </button>
      
      <div className="upside-down-title">{word}</div>
      
      <div className="card-title-container">
        <div className="card-title">{word}</div>
      </div>
      
      <div className="card-id">{id}</div>
    </div>
  );
};

export default WordCard;
