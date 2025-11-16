import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Key, 
  Code, 
  FileText, 
  BarChart3, 
  LogOut,
  Menu,
  X 
} from "lucide-react";
import { useToast } from "../Toast/Toast";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const menuItems = [
    { path: "/dashboard/overview", icon: LayoutDashboard, label: "Overview" },
    { path: "/dashboard/api-access", icon: Key, label: "API Access" },
    { path: "/dashboard/client-script", icon: Code, label: "Client Script" },
    { path: "/dashboard/logs", icon: BarChart3, label: "Logs & Monitoring" },
    { path: "/dashboard/documentation", icon: FileText, label: "Documentation" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg text-white"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gray-800/50 backdrop-blur-lg border-r border-gray-700 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full p-4">
            <div className="mb-8 mt-4">
              <h1 className="text-2xl font-bold text-blue-400">DigitalAxis</h1>
              <p className="text-sm text-gray-400">Dashboard</p>
            </div>

            <nav className="flex-1 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-0 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;

