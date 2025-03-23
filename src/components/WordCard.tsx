
import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WordCardProps {
  word: string;
  id: string;
  onGreenChange?: (isGreen: boolean) => void;
}

const WordCard: React.FC<WordCardProps> = ({ word, id, onGreenChange }) => {
  const [selected, setSelected] = useState(false);
  const [downSelected, setDownSelected] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  
  const toggleSelected = () => {
    setSelected(prev => !prev);
  };

  const toggleDownSelected = () => {
    setDownSelected(prev => !prev);
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
      {/* Green toggle button */}
      <button 
        onClick={toggleGreen} 
        className={cn(
          "card-button animate-scale group",
          "left-12", // Position on the left
          isGreen ? "bg-green-500" : "bg-green-200 hover:bg-green-300"
        )}
        aria-label={isGreen ? "Remove green highlight" : "Highlight card green"}
      >
        <span className="w-4 h-4 rounded-full group-hover:bg-white/50"></span>
      </button>
      
      {/* Up arrow button */}
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
      
      {/* Down arrow button */}
      <button 
        onClick={toggleDownSelected}
        className="card-button animate-scale group right-12" // Position to the left of the up arrow
        aria-label={downSelected ? "Deselect down arrow" : "Select down arrow"}
      >
        {downSelected ? (
          <ArrowDown
            size={16}
            className="text-primary animate-rotate-in"
          />
        ) : (
          <span className="w-4 h-4 rounded-full group-hover:bg-gray-50"></span>
        )}
      </button>
      
      {/* Upside down word in grey italic */}
      <div className="upside-down-title italic text-gray-400">{word}</div>
      
      <div className="card-title-container">
        <div className="card-title">{word}</div>
      </div>
      
      <div className="card-id">{id}</div>
    </div>
  );
};

export default WordCard;
