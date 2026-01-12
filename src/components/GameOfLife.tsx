"use client";

import { useEffect, useRef, useState } from "react";

interface GameOfLifeProps {
  cellSize?: number;
  speed?: number;
}

export default function GameOfLife({
  cellSize = 10,
  speed = 100,
}: GameOfLifeProps) {
  const [grid, setGrid] = useState<boolean[][]>([]);
  const [isRunning, setIsRunning] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate grid dimensions based on container size
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const cols = Math.floor(rect.width / cellSize);
        const rows = Math.floor(rect.height / cellSize);
        setDimensions({ width: cols, height: rows });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [cellSize]);

  // Initialize grid with random pattern
  const initializeGrid = (width: number, height: number) => {
    const newGrid: boolean[][] = [];
    for (let i = 0; i < height; i++) {
      newGrid[i] = [];
      for (let j = 0; j < width; j++) {
        // 30% chance of being alive initially
        newGrid[i][j] = Math.random() > 0.7;
      }
    }
    return newGrid;
  };

  // Count live neighbors
  const countNeighbors = (
    grid: boolean[][],
    x: number,
    y: number,
    width: number,
    height: number
  ): number => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newX = x + i;
        const newY = y + j;
        if (
          newX >= 0 &&
          newX < height &&
          newY >= 0 &&
          newY < width &&
          grid[newX][newY]
        ) {
          count++;
        }
      }
    }
    return count;
  };

  // Compute next generation
  const nextGeneration = (
    currentGrid: boolean[][],
    width: number,
    height: number
  ): boolean[][] => {
    const newGrid = currentGrid.map((row) => [...row]);

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const neighbors = countNeighbors(currentGrid, i, j, width, height);
        const isAlive = currentGrid[i][j];

        if (isAlive) {
          // Live cell dies if it has fewer than 2 or more than 3 neighbors
          newGrid[i][j] = neighbors === 2 || neighbors === 3;
        } else {
          // Dead cell becomes alive if it has exactly 3 neighbors
          newGrid[i][j] = neighbors === 3;
        }
      }
    }

    return newGrid;
  };

  // Initialize grid when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      setGrid(initializeGrid(dimensions.width, dimensions.height));
    }
  }, [dimensions]);

  // Game loop
  useEffect(() => {
    if (!isRunning || dimensions.width === 0 || dimensions.height === 0) return;

    intervalRef.current = setInterval(() => {
      setGrid((prevGrid) => {
        if (prevGrid.length === 0) return prevGrid;
        return nextGeneration(prevGrid, dimensions.width, dimensions.height);
      });
    }, speed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, speed, dimensions]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px] overflow-hidden"
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <div
          className="grid gap-[1px] w-full h-full"
          style={{
            gridTemplateColumns: `repeat(${dimensions.width}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${dimensions.height}, ${cellSize}px)`,
          }}
        >
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`transition-colors duration-75 ${
                  cell ? "bg-[#1e3a8a]" : "bg-white"
                }`}
                style={{
                  width: `${cellSize}px`,
                  height: `${cellSize}px`,
                }}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
