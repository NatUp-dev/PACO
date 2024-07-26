import React from "react";
import ExploitationSelect from "./exploitation-select";

export default function Header() {
  return (
    <>
      <div className="w-full flex justify-around items-center px-7 h-[68px] shadow-sm">
        <div className="w-full flex flex-col justify-start">
          <div className="text-gray-500 text-xs font-medium">Activité</div>
          <div className="text-gray-800 text-base font-medium">
            Suivi de collectes
          </div>
        </div>
        <div className="w-full flex justify-end">
          <ExploitationSelect />
        </div>
      </div>
    </>
  );
}
