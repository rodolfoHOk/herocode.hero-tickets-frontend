'use client';

import { ChangeEvent, useState } from 'react';
import { Input } from './Input';

export const InputAutocomplete = () => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const fetchSuggestions = await fetch(`/api?input=${value}`);
    const data = await fetchSuggestions.json();
    setSuggestions(data.predictions);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <>
      <Input
        type="text"
        title="Localização"
        placeholder="Insira o endereço do seu evento"
        onChange={handleChangeInput}
        value={inputValue}
      />
      <ul className="rounded bg-white shadow">
        {suggestions.map((suggestion) => (
          <li
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSelectSuggestion(suggestion.description)}
          >
            {suggestion.description}
          </li>
        ))}
      </ul>
    </>
  );
};
