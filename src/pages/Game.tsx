
import React from 'react';
import GameGrid from '@/components/GameGrid';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { toast } from 'sonner';

const Game: React.FC = () => {
  const refreshGame = () => {
    // This would normally refresh the game, but for now we'll just show a toast
    // Since we'd need to lift state up to properly implement this
    toast.success('Game refreshed', {
      description: 'New cards have been generated',
      position: 'bottom-center',
    });
    window.location.reload();
  };

  return (
    <div className="min-h-[100dvh] overflow-hidden bg-background flex flex-col items-center">
      <header className="game-header w-full max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="game-header__main-text font-semibold tracking-tight">Codenames duet</h1>
        <Button 
          onClick={refreshGame} 
          variant="outline" 
          size="sm"
          className="flex items-center gap-2"
        >
          <RefreshCcw size={14} />
          <span className="hidden sm:inline">New Game</span>
        </Button>
      </header>
      
      <main className="game-main flex flex-col flex-1 w-full max-w-7xl mx-auto">
        <p className="text-muted-foreground mb-4 md:mb-2 sm:mb-1 max-w-2xl mx-auto text-center text-xs sm:text-sm">
          Select words by clicking the circle button.
        </p>
        <GameGrid />
      </main>
      
      <footer className="w-full py-2 sm:py-4 border-t border-border">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 text-center text-xs sm:text-sm text-muted-foreground">
          © 2023 Word Selection Game. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Game;
