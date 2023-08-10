export const Footer = () => {
  return (
    <div className="w-full h-[26px] fixed bottom-0 bg-blue text-xs font-light text-gray-100 flex items-center justify-end gap-1 pr-32">
      <img src="/minilogo.png" alt="logo mini" />
      <p>Hero Tickets ® {new Date().getFullYear()}</p>
      <span>|</span>
      <p>Todos os Direitos Reservados</p>
    </div>
  );
};
