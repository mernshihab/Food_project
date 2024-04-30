import React from "react";
import Slidebar from "./Slidebar";

const MasterLayout = (props) => {
  return (
    <div className="flex">
      <div className="w-full h-[1px] bg-gray-200 absolute top-20 left-0 opacity-75"></div>
      <Slidebar active={props.active} />
      {props.children}
    </div>
  );
};

export default MasterLayout;
