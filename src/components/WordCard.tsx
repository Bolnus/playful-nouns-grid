
import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WordCardProps {
  word: string;
  onGreenChange?: (isGreen: boolean) => void;
  onBypasserChange?: (isActive: boolean) => void;
}

const WordCard: React.FC<WordCardProps> = ({ word, onGreenChange, onBypasserChange }) => {
  const [selected, setSelected] = useState(false);
  const [downSelected, setDownSelected] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  
  const toggleSelected = () => {
    const newState = !selected;
    setSelected(newState);
    if (onBypasserChange) {
      onBypasserChange(newState);
    }
  };

  const toggleDownSelected = () => {
    const newState = !downSelected;
    setDownSelected(newState);
    if (onBypasserChange) {
      onBypasserChange(newState);
    }
  };

  const toggleGreen = () => {
    const newGreenState = !isGreen;
    setIsGreen(newGreenState);
    if (onGreenChange) {
      onGreenChange(newGreenState);
    }
  };

  return (
    <div className={cn(
      "word-card animate-appear",
      isGreen && "bg-green-100"
    )}>
      <div className="word-card__toolbar">
      <button 
        onClick={toggleGreen} 
        className={cn(
          "card-button animate-scale group",
          isGreen ? "bg-green-500" : "bg-green-200 hover:bg-green-300"
        )}
        aria-label={isGreen ? "Remove green highlight" : "Highlight card green"}
      >
        <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full group-hover:bg-white/50"></span>
      </button>
      
      <div className="word-card__toolbar-spacer" />

      {/* Up arrow button */}
      <button 
        onClick={toggleSelected} 
        className="card-button animate-scale group"
        aria-label={selected ? "Deselect card" : "Select card"}
      >
        {selected ? (
          <ArrowUp 
            size={14} 
            className="text-primary animate-rotate-in" 
          />
        ) : (
          <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full group-hover:bg-gray-50"></span>
        )}
      </button>
      
      {/* Down arrow button */}
      <button 
        onClick={toggleDownSelected}
        className="card-button animate-scale group"
        aria-label={downSelected ? "Deselect down arrow" : "Select down arrow"}
      >
        {downSelected ? (
          <ArrowDown
            size={14}
            className="text-primary animate-rotate-in"
          />
        ) : (
          <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full group-hover:bg-gray-50"></span>
        )}
      </button>
      </div>
      
      {/* Upside down word with more distinct color */}
      <div className="upside-down-title text-indigo-500">{word}</div>
      
      <div className="card-title-container">
        <div className="card-title">{word}</div>
      </div>
    </div>
  );
};

export default WordCard;
