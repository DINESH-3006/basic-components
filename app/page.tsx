'use client'
import React, { useState } from 'react'
import {
  UsersIcon,
  TruckIcon,
  CogIcon,
} from '@heroicons/react/24/outline'

const routes = [
  {
    category_name: "MAIN MENU",
    CategoryItems: [
      {
        name: "DashBoard",
        icon: <UsersIcon className="h-5 w-5 mr-3" />,
      },
      {
        name: "Employees",
        icon: <UsersIcon className="h-5 w-5 mr-3" />,
      },
      {
        name: "Attendance",
        icon: <UsersIcon className="h-5 w-5 mr-3" />,
      },
      {
        name: "Project",
        icon: <UsersIcon className="h-5 w-5 mr-3" />,
      },
      {
        name: "Task Manager",
        icon: <UsersIcon className="h-5 w-5 mr-3" />,
      },
    ],
  },
  {
    category_name: "MAIN MENU",
    CategoryItems: [
      {
        name: "Payroll",
        icon: <TruckIcon className="h-5 w-5 mr-3" />,
      },
      {
        name: "Invoice Generator",
        icon: <TruckIcon className="h-5 w-5 mr-3" />,
      },
      {
        name: "Reports",
        icon: <TruckIcon className="h-5 w-5 mr-3" />,
      },
    ],
  },
  {
    category_name: "Others",
    CategoryItems: [
      {
        name: "Settings",
        icon: <CogIcon className="h-5 w-5 mr-3" />,
      },
      {
        name: "Logout",
        icon: <CogIcon className="h-5 w-5 mr-3" />,
      },
    ],
  },
]

const SideBar: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  const handleRouteClick = (routeName: string) => {
    setActiveRoute(routeName);
  };

  return (
    <div className="fixed left-0 top-0 h-auto w-64 bg-white border border-gray-200 shadow-xl m-3 rounded-lg overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-5">
          <div className="text-left">
            <h1 className="text-md font-semibold">
              <span className="text-blue-700">Box</span>
              <span className="text-black">Way</span>
            </h1>
            <p className="text-gray-500 text-sm">Employee Management</p>
          </div>
        </div>
        <div className="px-4 flex-1 overflow-y-auto">
          {routes.map((category) => (
            <div key={category.category_name} className='py-2'>
              <h2 className="pb-2 text-xs font-medium text-slate-400">{category.category_name}</h2>
              {category.CategoryItems.map((route) => (
                <div
                  key={route.name}
                  className={`flex items-center cursor-pointer py-2 px-3 rounded-lg text-xs font-semibold ${activeRoute === route.name ? 'bg-gray-100 text-blue-700' : 'text-gray-900'}`}
                  onClick={() => handleRouteClick(route.name)}
                >
                  {route.icon}
                  {route.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar;
