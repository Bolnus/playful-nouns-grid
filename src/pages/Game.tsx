
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
    <div className="min-h-screen bg-background flex flex-col items-center">
      <header className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">Word Selection Game</h1>
        <Button 
          onClick={refreshGame} 
          variant="outline" 
          className="flex items-center gap-2"
        >
          <RefreshCcw size={16} />
          New Game
        </Button>
      </header>
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
          Select words by clicking the circle button. Create a story using your selected words!
        </p>
        <GameGrid />
      </main>
      
      <footer className="w-full py-6 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm text-muted-foreground">
          © 2023 Word Selection Game. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Game;
