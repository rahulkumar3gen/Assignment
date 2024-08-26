import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Heading = ({ setView }) => {
  return (
    <div className="flex justify-between items-center px-10 md:px-14 py-4 bg-[#F0F5FA] ">
      <div>
        <h2 className="font-bold text-xl py-1  bg-[#F0F5FA]">
          CNAPP Dashboard
        </h2>
      </div>
      <div className="flex bg-[#F0F5FA] ">
        <button
          className="px-2 py-1 bg-white border rounded-md  text-[#6b6f77] font-semibold text-sm"
          onClick={() => {
            setView(true);
          }}
        >
          Add Category <span className="font-bold bg-white">+</span>
        </button>

        <button className=" border rounded-md ml-4">
          <CachedOutlinedIcon color="white" />
        </button>
        <button className=" border rounded-md ml-4">
          <MoreVertOutlinedIcon color="white" />
        </button>
        <button className="color-white border rounded-md ml-4 flex justify-center">
          <WatchLaterIcon />
          <p className="text-[#6b6f77] font-semibold text-sm px-1">
            Last 2 days
          </p>
          <KeyboardArrowDownIcon color="#42a5f5" />
        </button>
      </div>
    </div>
  );
};

export default Heading;
