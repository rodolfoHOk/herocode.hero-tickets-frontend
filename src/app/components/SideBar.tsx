import { AiOutlineHome } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { MdOutlineAddBox, MdOutlinePrivacyTip } from "react-icons/md";

export const SideBar = () => {
  return (
    <aside className="sidebar fixed z-10 top-16 bottom-0 text-xs text-blue h-screen right-0 p-2 w-[90px] overflow-y-auto text-center bg-gray-50 shadow">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="flex flex-col gap-1 cursor-pointer justify-center items-center mb-9">
          <AiOutlineHome size="30" />
          <div>Home</div>
        </div>

        <div className="flex flex-col gap-1 cursor-pointer justify-center items-center mb-9">
          <LiaMapMarkerSolid size="30" />
          <div>Map</div>
        </div>

        <div className="flex flex-col gap-1 cursor-pointer justify-center items-center mb-9">
          <MdOutlineAddBox size="30" />
          <div>Adicionar evento</div>
        </div>

        <div className="flex flex-col gap-1 cursor-pointer justify-center items-center mb-9">
          <FiFilter size="30" />
          <div>Filtrar eventos</div>
        </div>

        <div className="flex flex-col gap-1 cursor-pointer justify-center items-center mb-9">
          <BsQuestionCircle size="30" />
          <div>SAC</div>
        </div>

        <div className="flex flex-col gap-1 cursor-pointer justify-center items-center mb-9">
          <MdOutlinePrivacyTip size="30" />
          <div>Privacidade</div>
        </div>
      </div>
    </aside>
  );
};
