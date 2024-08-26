import { useState } from "react";
import CategoryList from "./CategoryList";
import DashboardCategory from "./DashboardCategory";
import Heading from "./Heading";
import Navbar from "./Navbar";

const Body = () => {
  const [view, setView] = useState(false);
  return (
    <div className="w-full  relative bg-[#F0F5FA]">
      <Navbar />
      {view ? <CategoryList view={view} setView={setView} /> : null}

      <Heading setView={setView} />
      <DashboardCategory />
    </div>
  );
};

export default Body;
