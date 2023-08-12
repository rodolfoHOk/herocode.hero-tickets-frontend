'use client';

import { Button } from '@/app/components/Form/Button';
import { Input } from '@/app/components/Form/Input';
import { InputAutocomplete } from '@/app/components/Form/InputAutocomplete';
import { InputFile } from '@/app/components/Form/InputFile';
import { categories } from '@/app/utils/categories';
import { fetchWrapper } from '@/app/utils/fetchWrapper';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface IFormProps {
  title: string;
  latitude: string;
  longitude: string;
  coupon: string;
  date: string;
  time: string;
  price: string;
  sector: string;
  description: string;
  categories: string;
  banner: File;
  map: File;
}

export default function CreateEvent() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormProps>();

  const [flyers, setFlyers] = useState<File[]>([]);

  const onSubmit = async (data: IFormProps) => {
    const formattedDate = new Date(`${data.date}T${data.time}`);

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('location[latitude]', data.latitude);
    formData.append('location[longitude]', data.longitude);
    formData.append('coupon', data.coupon);
    formData.append('date', formattedDate.toISOString());
    formData.append('price[amount]', data.price);
    formData.append('price[sector]', data.sector);
    formData.append('description', data.description);
    formData.append('categories', data.categories);
    formData.append('banner', data.banner);
    // formData.append('map', data.map);
    flyers.forEach((flyer) => formData.append('flyers', flyer));

    try {
      const response = await fetchWrapper('/events', {
        method: 'POST',
        body: formData,
      });
      toast.success('Evento criado com sucesso!');
    } catch (error) {
      toast.error('Erro ao criar evento!');
      console.log(error);
    }
  };

  const handleFileChange = (name: any, file: File) => {
    if (name === 'flyers') {
      setFlyers([...flyers, file]);
    } else {
      setValue(name, file);
    }
  };

  const onSelectLocation = (location: any) => {
    setValue('latitude', location.lat);
    setValue('longitude', location.lng);
  };

  return (
    <div className="container m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-8">
          <div className="mb-4 pr-6 border-r-2 border-cyan">
            <div className="mb-9">
              <h3 className="text-blue text-2xl font-medium">
                Adicionar Eventos
              </h3>
              <p className="text-blue text-base font-light">
                Crie o seu próprio evento da maneira que você preferir! :)
              </p>
            </div>

            <Input
              type="text"
              placeholder="Insira o nome do seu evento"
              title="Título"
              {...register('title', { required: true })}
            />
            {errors.title && (
              <span className="text-red-500">Campo obrigatório</span>
            )}

            <InputAutocomplete onSelectLocation={onSelectLocation} />

            <Input
              type="text"
              placeholder="Insira seu cupom"
              title="Cupom"
              {...register('coupon', { required: false })}
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                type="date"
                placeholder="dd/mm/aaaa"
                title="Data"
                {...register('date', { required: true })}
              />
              {errors.date && (
                <span className="text-red-500">Campo obrigatório</span>
              )}

              <Input
                type="time"
                placeholder="hh:mm"
                title="Horário"
                {...register('time', { required: true })}
              />
              {errors.time && (
                <span className="text-red-500">Campo obrigatório</span>
              )}
            </div>

            <h4 className="text-blue text-base font-medium mb-1">
              Categoria do Evento
            </h4>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {categories.map((category) => (
                <label key={category.name} className="text-blue">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={category.name}
                    {...register('categories', { required: true })}
                  />
                  <span>{category.name}</span>
                </label>
              ))}
              <label className="text-blue">
                <input
                  type="checkbox"
                  className="mr-2"
                  {...register('categories', { required: true })}
                />
                <span>Outros</span>
              </label>
              {errors.categories && (
                <span className="text-red-500">Campo obrigatório</span>
              )}
            </div>

            <div className="mb-4">
              <h4 className="text-blue text-base font-medium mb-1">Valor</h4>
              <p className="text-blue text-[10px] font-light">
                Caso seu evento seja gratuito, o campo deverá ficar vazio. Caso
                haja mais de um setor, basta adicionar a seção. Se houver cupom
                promocional, basta colocar o código no campo “cupom”.
              </p>
            </div>

            <div className="grid grid-cols-5 gap-4">
              <Input
                type="text"
                placeholder="R$0,00"
                title="Preço"
                className="col-span-2"
                {...register('price', { required: true })}
              />
              {errors.price && (
                <span className="text-red-500">Campo obrigatório</span>
              )}

              <Input
                type="text"
                placeholder="Insira o nome do setor"
                title="Setor"
                className="col-span-3"
                {...register('sector', { required: true })}
              />
              {errors.sector && (
                <span className="text-red-500">Campo obrigatório</span>
              )}
            </div>

            <Input
              type="textarea"
              placeholder="Dê uma descrição que vai embalar o seu público!"
              title="Descrição"
              className="col-span-3"
              {...register('description', { required: true })}
            />
            {errors.description && (
              <span className="text-red-500">Campo obrigatório</span>
            )}
          </div>

          <div className="mb-6 pl-6">
            <div className="mb-9">
              <h3 className="text-blue text-2xl font-medium">Área Criativa</h3>
              <p className="text-blue text-base font-light">
                Adicione as imagens referentes ao seu evento!
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-blue text-base font-medium">Banner</h4>
              <p className="text-neutral-500 text-sm font-light mb-2">
                Insira um banner no formato 336x280
              </p>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile
                  onFileChange={(file) => handleFileChange('banner', file)}
                  {...register('banner', { required: true })}
                />
                {errors.banner && (
                  <span className="text-red-500">Campo obrigatório</span>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-blue text-base font-medium">Flyers</h4>
              <p className="text-neutral-500 text-sm font-light mb-2">
                Insira até três flyers
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                  <InputFile
                    onFileChange={(event) => handleFileChange('flyers', event)}
                  />
                </div>
                <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                  <InputFile
                    onFileChange={(event) => handleFileChange('flyers', event)}
                  />
                </div>
                <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                  <InputFile
                    onFileChange={(event) => handleFileChange('flyers', event)}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-blue text-base font-medium">
                Mapa do Evento
              </h4>
              <p className="text-neutral-500 text-sm font-light mb-2">
                Insira o Mapa do Evento indicando os setores
              </p>
              <div className="w-full h-56 bg-zinc-300 rounded-3xl shadow">
                <InputFile
                  onFileChange={(file) => handleFileChange('map', file)}
                  {...register('map', { required: true })}
                />
                {errors.map && (
                  <span className="text-red-500">Campo obrigatório</span>
                )}
              </div>
            </div>

            <Button title="Cadastrar evento" />
          </div>
        </div>
      </form>
    </div>
  );
}
