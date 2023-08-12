'use client';

import { ChangeEvent, useState } from 'react';
import { Input } from './Input';

interface IIAutocompleteProps {
  onSelectLocation: (location: any) => void;
}

export const InputAutocomplete = ({
  onSelectLocation,
}: IIAutocompleteProps) => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const fetchSuggestions = await fetch(`/api?input=${value}`);
    const data = await fetchSuggestions.json();
    setSuggestions(data.predictions);
  };

  const handleSelectSuggestion = async (suggestion: any) => {
    setInputValue(suggestion.description);
    setSuggestions([]);

    try {
      const response = await fetch(
        `/api/maps?place_id=${suggestion.place_id}`,
        {}
      );
      const data = await response.json();

      if (data.result.geometry.location) {
        onSelectLocation(data.result.geometry.location);
      }
    } catch (error) {
      console.log(error);
    }
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
            onClick={() => handleSelectSuggestion(suggestion)}
          >
            {suggestion.description}
          </li>
        ))}
      </ul>
    </>
  );
};
