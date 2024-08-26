import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeWidgetData } from "../slice/dashboardSlice";

const Category = ({ widgetData, selectedCategoryId }) => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState("");
  const handleChange = (e) => {
    dispatch(
      removeWidgetData({
        dashboardId: selectedCategoryId,
        widgetName: widgetData.name,
      })
    );
  };
  const handleClick = () => {
    const d = setDisplay("hidden");
  };

  return (
    <div className={display}>
      <div className="flex px-3 py-2">
        <input
          type="checkbox"
          name="widget"
          value={widgetData.name}
          checked="true"
          onClick={handleClick}
          onChange={handleChange}
        />
        <p className="font-bold text-xs px-2">{widgetData.name}</p>
      </div>
    </div>
  );
};

export default Category;
