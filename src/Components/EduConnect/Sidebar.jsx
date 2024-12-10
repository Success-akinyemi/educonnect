import { Link } from "react-router-dom";
import Logo from "../Helpers/Logo";
import MoreVert from "../Icons/MoreVert";
import { educonnectlinks } from "../../Data/menuLinks.jsx";

function Sidebar() {
  const menu = educonnectlinks;

  return (
    <div className="w-full h-full flex flex-col bg-edu-main-color">
      <div className="flex flex-col gap-6 pt-5">
        <div className="flex flex-col gap-[50px]">
          {/* LOGO */}
          <div className="flex items-center gap-[10px] px-[30px]">
            <Logo white={true} style={`!w-[147.01px] !h-[42.32px]`} />
            <MoreVert color={"white"} />
          </div>

          {/* MENU LINKS */}
          <div className="flex flex-col gap-1 px-4">
            {menu?.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="flex items-center gap-[6px] py-2 px-3 rounded-[6px] text-[16px] text-gray-100 font-medium hover:bg-[#6BCA9C] transition-all"
              >
                {item.icon && (
                  <span className="flex items-center justify-center w-5 h-5 text-red-800">
                    {item.icon}
                  </span>
                )}
                {item.name}
              </Link>
            ))}
          </div>


        </div>
      </div>
          {/**LOGOUT */}
          <div className="mt-auto px-[16px] pb-[32px] flex items-center gap-6 rounded-[6px] text-[16px] text-gray-100 font-medium hover:bg-[#6BCA9C] transition-all">
          <span className="flex items-center justify-center w-5 h-5 text-red-800">
                <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100"
                >
                <path
                    d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                </svg>
          </span>
            Logout
          </div>
    </div>
  );
}

export default Sidebar;
