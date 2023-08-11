import { Input } from '@/app/components/Form/Input';
import { InputFile } from '@/app/components/Form/InputFile';
import { categories } from '@/app/utils/categories';

export default function CreateEvent() {
  return (
    <div className="container m-auto">
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
          />

          <Input
            type="text"
            placeholder="Insira o endereço do seu evento"
            title="Endereço"
          />

          <Input type="text" placeholder="Insira seu cupom" title="Cupom" />

          <div className="grid grid-cols-2 gap-4">
            <Input type="date" placeholder="dd/mm/aa" title="Data" />

            <Input type="number" placeholder="hh:mm" title="Horário" />
          </div>

          <h4 className="text-blue text-base font-medium mb-1">
            Categoria do Evento
          </h4>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {categories.map((category) => (
              <label key={category.name} className="text-blue">
                <input type="checkbox" className="mr-2" />
                <span>{category.name}</span>
              </label>
            ))}
            <label className="text-blue">
              <input type="checkbox" className="mr-2" />
              <span>Outros</span>
            </label>
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
            />

            <Input
              type="text"
              placeholder="Insira o nome do setor"
              title="Setor"
              className="col-span-3"
            />
          </div>

          <Input
            type="textarea"
            placeholder="Dê uma descrição que vai embalar o seu público!"
            title="Descrição"
            className="col-span-3"
          />
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
              <InputFile />
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-blue text-base font-medium">Flyers</h4>
            <p className="text-neutral-500 text-sm font-light mb-2">
              Insira até três flyers
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-blue text-base font-medium">Mapa do Evento</h4>
            <p className="text-neutral-500 text-sm font-light mb-2">
              Insira o Mapa do Evento indicando os setores
            </p>
            <div className="w-full h-56 bg-zinc-300 rounded-3xl shadow">
              <InputFile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
