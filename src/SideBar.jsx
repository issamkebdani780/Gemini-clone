import { useState } from "react";
import { assets } from "./assets/assets";

const SideBar = () => {
  let [isOpen,setIsOpen] = useState(false) ;
  return (
    <div
      className={`bg-[#f0f4f9] flex flex-col justify-between h-screen p-5 relative ${
        isOpen ? "w-64" : "w-20 items-center"
      }`}
    >
      <div>
        <div
          className="mb-5 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={assets.menu_icon} alt="icon" className="w-7" />
        </div>
        <div
          className={`flex gap-2 items-center bg-gray-300 rounded-full h-10 p-3 cursor-pointer`}
        >
          <img src={assets.plus_icon} alt="icon" className="w-5" />
          {isOpen ? "New Chat" : null}
        </div>
      </div>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer ">
          <img src={assets.question_icon} alt="icon" className="w-5 h-5" />
          {isOpen ? "Help" : null}
        </li>
        <li className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer">
          <img src={assets.history_icon} alt="icon" className="w-5 h-5" />
          {isOpen ? "Activity" : null}
        </li>
        <li className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer">
          <img src={assets.setting_icon} alt="icon" className="w-5 h-5" />
          {isOpen ? "Settings" : null}
        </li>
      </ul>
    </div>
  );
}

export default SideBar;