import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecondary } from "@/app/components/BannerSecondary";
import { categories } from "@/app/utils/categories";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <BannerPrimary />

      <div className="p-2 text-blue">
        <p className="text-2xl font-medium">Eventos em destaque</p>
        <p className="text-base font-light">
          Se divirta com os principais eventos de Minas Gerais e do Brasil!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <BannerSecondary />

        <BannerSecondary />

        <BannerSecondary />
      </div>

      <div className="p-2 text-blue">
        <p className="text-2xl font-medium">Navegue por tipo de evento</p>
        <p className="text-base font-light">Vá ao evento que é a sua cara :D</p>
      </div>

      <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <Image
              src={category.image}
              alt=""
              width={136}
              height={136}
              className="rounded-full"
            />
            <span className="text-base font-semibold text-blue ">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
