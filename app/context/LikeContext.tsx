'use client'
// context/LikeContext.tsx
import React, {useEffect, createContext, useContext, useState } from 'react';

interface LikeContextType {
  liked: number;
  setliked: React.Dispatch<React.SetStateAction<number>>; 
}

const LikeContext = createContext<LikeContextType | undefined>(undefined);





export const LikeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [liked, setliked] = useState<number>(0);
    
  return (
    <LikeContext.Provider value={{ liked, setliked }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLikeContext = () => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLikeContext must be used within a LikeProvider");
  }
  return context;
};
