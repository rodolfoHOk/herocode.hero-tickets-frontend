'use client';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '100vh',
  maxHeight: '100vh',
};

export const MapContainer = () => {
  const [center, setCenter] = useState({ lat: 19.89, lng: -43.93 });

  const markers = [
    { lat: -19.899613, lng: -43.9314789 },
    { lat: -19.89565, lng: -43.9364789 },
    { lat: -19.82919, lng: -43.987981 },
    { lat: -19.968614, lng: -43.405302 },
  ];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setCenter({
            lat: latitude,
            lng: longitude,
          });
        },
        (error) => {
          console.log('Erro ao buscar localização');
        }
      );
    }
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {markers.map((mark, index) => (
        <Marker key={index} position={{ lat: mark.lat, lng: mark.lng }} />
      ))}
    </GoogleMap>
  ) : (
    <p>carregando...</p>
  );
};
