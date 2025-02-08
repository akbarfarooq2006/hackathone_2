"use client";
import { Input } from "@/components/ui/input"

import { useState, useEffect, useRef } from "react";

export default function AddressInput(  {
  value,
  onChange,
  // label,
  holder
}: {
  // label: string;
  holder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [query, setQuery] = useState<string>(value);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const suggestionRefs = useRef<HTMLLIElement[]>([]); // Track list item refs

  const fetchSuggestions = async (input: string) => {
    if (input.length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      const apiKey =process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY;
      const response = await fetch(
        `https://api.locationiq.com/v1/autocomplete.php?key=${apiKey}&q=${input}&format=json`
      );
      const data = await response.json();
      setSuggestions(data);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    fetchSuggestions(inputValue);
    setActiveIndex(-1);
    onChange(inputValue); // Update form value
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onChange(suggestion); // Update form value when selecting suggestion
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        handleSuggestionClick(
          suggestions[activeIndex].display_name ||
            suggestions[activeIndex].address?.name
        );
      }
      e.preventDefault();
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    if (activeIndex !== -1 && suggestionRefs.current[activeIndex]) {
      suggestionRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <div className="relative ">
      <Input 
       
        value={query}
        // value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={holder}
         className="bg-primary w-full placeholder:text-button3 md:placeholder:text-sm placeholder:text-xs   text-sm  font-medium rounded-[10px] sm:px-10 px-5 py-3 focus:outline-none down1 focus:ring-1 focus:ring-button1 "
                                   
      />
      {showSuggestions && suggestions.length > 0 && ( 
        <ul className="absolute  w-full mt-1 bg-white shadow-lg max-h-60 overflow-y-auto  z-10">
          {suggestions.map((item: any, index: number) => (
            <li
              key={item.place_id || item.osm_id}
              ref={(el) => {
                suggestionRefs.current[index] = el!;
              }}
               // Store ref
              className={`p-2 sm:text-sm text-xs border-b cursor-pointer ${
                index === activeIndex ? "bg-but  text-black" : ""
              }`}
              onMouseDown={() =>
                handleSuggestionClick(item.display_name || item.address?.name)
              }
            >
              {item.display_name || item.address?.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
