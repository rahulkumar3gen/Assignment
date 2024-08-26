import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addSearchValue } from "../slice/dashboardSlice";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  const searchRef = useRef();
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(addSearchValue(searchRef.current.value));
  };
  return (
    <div className="flex z-30 items-center sticky top-0 shadow-md justify-between	  w-full px-6 py-3  bg-white">
      <div className="flex bg-white">
        <p className="text-[#b8bbbe] font-bold bg-white">Home &gt;</p>
        <p className="font-bold pl-2 text-[#364687] bg-white">Dashboard V2 </p>
      </div>
      <div className="justify-center mr-40">
        <input
          ref={searchRef}
          className="max-w-[20rem] bg-[#F0F5FA] w-full rounded-md px-3 py-1 outline-none border-[#DDECFF] border-2 "
          type="text"
          placeholder="search anything..."
          onChange={handleSearch}
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
