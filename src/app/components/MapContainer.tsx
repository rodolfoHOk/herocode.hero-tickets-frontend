'use client';

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { fetchWrapper } from '../utils/fetchWrapper';
import { CardFilter } from './CardFilter';

const containerStyle = {
  width: '100%',
  height: '100vh',
  maxHeight: '100vh',
};

export const MapContainer = () => {
  const [center, setCenter] = useState({ lat: 19.89, lng: -43.93 });
  const [markers, setMarkers] = useState<any>([]);
  const [selectedMarker, setSelectedMarker] = useState<any>();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
  });

  const getEventsByLocation = async (latitude: number, longitude: number) => {
    const response = await fetchWrapper(
      `/events?latitude=${latitude}&longitude=${longitude}`,
      {}
    );

    setMarkers(response);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setCenter({
            lat: latitude,
            lng: longitude,
          });

          getEventsByLocation(latitude, longitude);
        },
        (error) => {
          console.log('Erro ao buscar localização', error);
        }
      );
    }
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {markers.map((mark: any, index: number) => (
        <>
          <Marker
            key={index}
            position={{
              lat: Number(mark.location.latitude),
              lng: Number(mark.location.longitude),
            }}
            onClick={() => setSelectedMarker(mark)}
          />

          {selectedMarker && (
            <InfoWindow
              position={{
                lat: Number(selectedMarker.location.latitude),
                lng: Number(selectedMarker.location.longitude),
              }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <CardFilter event={selectedMarker} />
            </InfoWindow>
          )}
        </>
      ))}
    </GoogleMap>
  ) : (
    <p>carregando...</p>
  );
};
