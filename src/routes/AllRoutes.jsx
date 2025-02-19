import { Route, Routes } from "react-router";

// ADMIN DASHBOARD IMPORTS
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import AdminLayout from "../pages/adminDashboard/AdminLayout";
import Disputes from "../pages/adminDashboard/pages/Disputes/Disputes.jsx";
import Employer from "../pages/adminDashboard/pages/Employer/Employer.jsx";
import Monitoring from "../pages/adminDashboard/pages/Monitoring/Monitoring.jsx";

// EMPLOYER DASHBOARD IMPORTS
import EmployerLayout from "../pages/employerDashboard/EmployerLayout";
import EmployerDashboard from "../pages/employerDashboard/EmployerDashboard";
import Analytics from "../pages/employerDashboard/pages/Analytics/Analytics.jsx";
import Blacklist from "../pages/employerDashboard/pages/Blacklist/Blacklist.jsx";
import EmployeeList from "../pages/employerDashboard/pages/EmployeeList/EmployeeList.jsx";
import History from "../pages/employerDashboard/pages/History/History.jsx";
import Reviews from "../pages/employerDashboard/pages/Reviews/Reviews.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="/admin/disputes" element={<Disputes />} />
        <Route path="/admin/employer" element={<Employer />} />
        <Route path="/admin/monitoring" element={<Monitoring />} />
      </Route>

      <Route path="/company" element={<EmployerLayout />}>
        <Route index element={<EmployerDashboard />} />
        <Route path="/company/analytics" element={<Analytics />} />
        <Route path="/company/blacklist" element={<Blacklist />} />
        <Route path="/company/employee-list" element={<EmployeeList />} />
        <Route path="/company/history" element={<History />} />
        <Route path="/company/reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
