'use client';

import { CardFilter } from '@/app/components/CardFilter';
import { Button } from '@/app/components/Form/Button';
import { Input } from '@/app/components/Form/Input';
import { InputAutocomplete } from '@/app/components/Form/InputAutocomplete';
import { InputRange } from '@/app/components/Form/InputRange';
import { categories } from '@/app/utils/categories';
import { fetchWrapper } from '@/app/utils/fetchWrapper';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IFormFilter {
  name: string;
  category: string;
  price: string;
  date: string;
  time: string;
  latitude: string;
  longitude: string;
  radius: string;
}

export default function FilterEvent() {
  const searchParams = useSearchParams();

  const [events, setEvents] = useState<any[]>([]);
  const { register, handleSubmit, setValue } = useForm<IFormFilter>();

  const getEvents = async (data: any) => {
    const response = await fetchWrapper(
      `/events/filter?${new URLSearchParams({
        name: data.name,
      })}`,
      { method: 'GET' }
    );

    setEvents(response);
  };

  const onSubmit = async (data: IFormFilter) => {
    let formattedDate: string = '';
    if (data.date && data.time) {
      formattedDate = new Date(`${data.date}T${data.time}`).toISOString();
    } else if (data.date && !data.time) {
      formattedDate = new Date(data.date).toISOString();
    }

    const response = await fetchWrapper(
      `/events/filter?${new URLSearchParams({
        name: data.name,
        category: data.category,
        price: data.price,
        date: formattedDate,
        radius: data.radius,
        latitude: data.latitude ? data.latitude : '',
        longitude: data.longitude ? data.longitude : '',
      })}`,
      { method: 'GET' }
    );

    setEvents(response);
  };

  const onSelectLocation = (location: any) => {
    setValue('latitude', location.lat);
    setValue('longitude', location.lng);
  };

  useEffect(() => {
    if (searchParams.get('q')) {
      getEvents({ name: searchParams.get('q') });
    }
  }, [searchParams.get('q')]);

  return (
    <div className="container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-8">
        <div className="mb-4 pr-6 border-r-2 border-cyan">
          <div className="mb-9">
            <h3 className="text-blue text-2xl font-medium">Filtrar Eventos</h3>
            <p className="text-blue text-base font-light">
              Busque o evento que é a sua cara de maneira mais detalhada!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Insira o nome do seu evento"
              title="Nome"
              {...register('name')}
            />

            <InputAutocomplete onSelectLocation={onSelectLocation} />

            <div className="grid grid-cols-2 gap-4">
              <Input
                type="date"
                placeholder="dd/mm/aa"
                title="Data"
                {...register('date')}
              />

              <Input
                type="time"
                placeholder="hh:mm"
                title="Horário"
                {...register('time')}
              />
            </div>

            <div className="text-blue mb-4">
              <label>Categoria</label>
              <select
                className="w-full px-6 py-[5px] font-medium bg-white rounded-lg border border-teal-400"
                {...register('category')}
              >
                <option value="">Selecione</option>
                {categories.map((category) => (
                  <option
                    key={category.name}
                    value={category.name}
                    className="font-medium"
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <InputRange title="Distância" {...register('radius')} />

            <InputRange title="Valor" {...register('price')} />

            <div className="grid grid-cols-2 gap-7 w-2/3 m-auto">
              <Button
                title="Limpar"
                className="bg-white border border-blue text-blue"
              />

              <Button title="Buscar" />
            </div>
          </form>
        </div>

        <div className="mb-6 pl-6 flex flex-col gap-6">
          <div className="mb-9">
            <h3 className="text-blue text-2xl font-medium">
              Resultados da busca
            </h3>
            <p className="text-blue text-base font-light">
              Explore os resultados da sua busca por diversão! :)
            </p>
          </div>

          {events.map((event) => (
            <CardFilter key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
