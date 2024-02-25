import { FoldersTree } from "components/FoldersTree";
import React from "react";

// https://www.dropbox.com/scl/fo/cf6muytbju2y3y41imgih/h?rlkey=wregz711kgyk680ozhwnl1jqi&dl=0

export const Sidebar = () => {
  return (
    <div className="bg-slate-200 h-full p-5">
      <FoldersTree />
    </div>
  );
};
