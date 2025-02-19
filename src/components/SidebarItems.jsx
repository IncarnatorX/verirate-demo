import {
  Analytics,
  Block,
  History,
  Home,
  People,
  Person,
  Reviews,
  Settings,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";

const SidebarItems = () => {
  const role = "admin";

  const adminMenuItems = [
    { name: "Employer", icon: <Home /> },
    { name: "Disputes", icon: <Person /> },
    { name: "Monitoring", icon: <Settings /> },
  ];

  const employeeMenuItems = [
    { name: "Employee List", icon: <People /> },
    { name: "Reviews", icon: <Reviews /> },
    { name: "Blacklist", icon: <Block /> },
    {
      name: "Analytics",
      icon: <Analytics />,
    },
    {
      name: "History",
      icon: <History />,
    },
  ];

  let items = role === "admin" ? adminMenuItems : employeeMenuItems;

  return (
    <>
      <div className="flex flex-col items-center font-medium">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-4 gap-4 text-md text-white cursor-pointer hover:bg-[#afe8f6] transition-all w-full hover:shadow-md"
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="mb-5">
        <button className="flex items-center px-5 py-4 gap-4 text-md text-white font-medium cursor-pointer hover:bg-[#afe8f6] transition-all w-full hover:shadow-md">
          {<LogoutIcon />}Logout
        </button>
      </div>
    </>
  );
};

export default SidebarItems;
