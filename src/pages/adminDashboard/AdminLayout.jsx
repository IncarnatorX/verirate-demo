import { Outlet } from "react-router";
import Header from "../../header/header";
import Sidebar from "../../sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="md:grid grid-cols-12 flex-grow h-0 flex-1 flex">
        <div className="md:col-span-2">
          <Sidebar />
        </div>
        <div className="md:col-span-10  flex-grow h-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
