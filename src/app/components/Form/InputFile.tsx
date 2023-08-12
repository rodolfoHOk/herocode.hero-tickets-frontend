'use client';

import { ChangeEvent, useState } from 'react';

interface IImageProps {
  onFileChange: (image: File) => void;
}

export const InputFile = ({ onFileChange }: IImageProps) => {
  const [preview, setPreview] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files ? event.target.files[0] : null;

    if (image) {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        const base64String = event.target?.result;
        setPreview(base64String as string);
      };
      reader.readAsDataURL(image);

      onFileChange(image);
    }
  };

  return (
    <>
      {preview ? (
        <div
          className="w-full h-full bg-cover bg-center cursor-pointer rounded-3xl"
          style={{ backgroundImage: `url(${preview})` }}
        />
      ) : (
        <input
          type="file"
          className="block w-full h-full opacity-0 cursor-pointer rounded-3xl"
          onChange={handleChange}
        />
      )}
    </>
  );
};
