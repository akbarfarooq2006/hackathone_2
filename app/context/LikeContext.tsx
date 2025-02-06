'use client'
// context/LikeContext.tsx
import React, {useEffect, createContext, useContext, useState } from 'react';

interface LikeContextType {
  liked: number,
  setliked: React.Dispatch<React.SetStateAction<number>>,
  count: number,
  setcount: React.Dispatch<React.SetStateAction<number>>,
  value:any,
  setvalue:any
}

const LikeContext = createContext<LikeContextType | undefined>(undefined);

export const LikeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [liked, setliked] = useState<number>(0);
    const [count, setcount] = useState(0)
    const [value, setvalue] = useState<any>()
    
 // Fetch initial state from localStorage
 useEffect(() => {
  const storedLiked = JSON.parse(localStorage.getItem('likedValue') || '0');
  const storedCount = JSON.parse(localStorage.getItem('likeCount') || '0');
  setliked(storedLiked);
  setcount(storedCount);
}, []);

// Persist state to localStorage
useEffect(() => {
  localStorage.setItem('likedValue', JSON.stringify(liked));
  localStorage.setItem('likeCount', JSON.stringify(count));
}, [liked, count]);


  return (
    <LikeContext.Provider value={{ liked, setliked, count, setcount, value,setvalue }}>
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
