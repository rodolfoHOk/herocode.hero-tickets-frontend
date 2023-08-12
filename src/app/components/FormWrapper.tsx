import { Button } from './Form/Button';
import { Input } from './Form/Input';
import { PriceWrapper } from './PriceWrapper';

export const FormWrapper = () => {
  return (
    <div className="bg-gray-50 shadow rounded-3xl">
      <p className="bg-blue rounded-3xl rounded-b-none p-3 text-white text-center">
        Ingressos
      </p>

      <div className="p-6">
        <PriceWrapper />

        <div className="grid grid-cols-5 gap-3 mt-3">
          <Input
            className="col-span-3"
            title="Cupom"
            placeholder="Insira aqui um cupom de desconto"
            type="text"
          />

          <Input
            className="col-span-2"
            type="text"
            title="Subtotal"
            placeholder="R$0,00"
          />
        </div>

        <Input
          type="text"
          title="Nome"
          placeholder="Insira aqui o seu nome completo"
        />

        <Input
          type="email"
          title="E-mail"
          placeholder="Insira aqui o seu e-mail"
        />

        <div>
          <Button title="Comprar" />
        </div>
      </div>
    </div>
  );
};
