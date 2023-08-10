import Image from "next/image";

export const NavBar = () => {
  return (
    <nav className="bg-blue flex mx-auto px-6 absolute top-0 w-full h-16 items-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={250}
        height={64}
        className="mr-[6rem]"
      />

      <div className="flex items-center w-[50vw]">
        <input
          className="w-full rounded-md px-3 py-2 text-sm font-normal"
          type="text"
          placeholder="Insira o nome ou endereço do seu evento por aqui! :)"
        />
      </div>
    </nav>
  );
};
