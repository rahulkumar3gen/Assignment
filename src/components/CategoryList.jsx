import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";

const CategoryList = ({ setView }) => {
  const { data } = useSelector((data) => data.dashboardData);

  const [selected, setSelected] = useState(data[0]);

  return (
    <div className=" right-0 top-0 w-1/3 z-40 h-screen absolute">
      <div className="bg-[#14147D] flex justify-between	py-2">
        <p className="bg-[#14147D] text-white font-semibold text-sm pl-2">
          Category list
        </p>
        <button
          onClick={() => {
            setView(false);
          }}
          className="text-white pr-2 font-bold text-m "
        >
          x
        </button>
      </div>
      <div className="flex py-2 justify-between bg-white	">
        {data.map((item) => (
          <div
            className="px-1 bg-white"
            key={item?._id}
            onClick={() => {
              setSelected(item);
            }}
          >
            <p
              className={`font-bold text-xs text-[#848484] cursor-pointer bg-white  ${
                selected._id === item._id ? "text-blue-700" : ""
              }`}
            >
              {item.category}
            </p>
          </div>
        ))}
      </div>
      <div className="h-screen relative">
        <h1 className="font-bold text-sm py-2 px-2">
          Uncheck to remove widgets
        </h1>
        {selected.widget.map((item) => (
          <Category
            setSelected={setSelected}
            widgetData={item}
            selectedCategoryId={selected._id}
            key={item.name}
          />
        ))}
        <div className="absolute bottom-20 right-0">
          <button
            className="bg-white border-[#606682] border-2 rounded-md px-2 text-[#606682] font-bold text-sm mr-2"
            onClick={() => {
              setView(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
