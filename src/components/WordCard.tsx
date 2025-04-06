
import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WordCardProps {
  word: string;
  isGreen: boolean;
  isDown: boolean;
  isUp: boolean;
  onGreenChange?: (isGreen: boolean) => void;
  onBypasserUpChange?: (isActive: boolean) => void;
  onBypasserDownChange?: (isActive: boolean) => void;
}

const WordCard: React.FC<WordCardProps> = ({ word, onGreenChange, onBypasserUpChange, onBypasserDownChange, isGreen, isDown, isUp }) => {
  return (
    <div className={cn(
      "word-card animate-appear",
      isGreen && "bg-green-100"
    )}>
      <div className="word-card__toolbar">
      <button 
        onClick={() => onGreenChange(!isGreen)} 
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
        onClick={() => onBypasserUpChange(!isUp)} 
        className="card-button animate-scale group"
        aria-label={isUp ? "Deselect card" : "Select card"}
      >
        {isUp ? (
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
        onClick={() => onBypasserDownChange(!isDown)}
        className="card-button animate-scale group"
        aria-label={isDown ? "Deselect down arrow" : "Select down arrow"}
      >
        {isDown ? (
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
