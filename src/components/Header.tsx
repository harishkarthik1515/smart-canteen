import React from 'react';
import { LogOut, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 h-16 fixed top-0 right-0 left-64 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <h2 className="text-white text-lg">Welcome, Admin</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-cyan-400 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <button className="text-gray-400 hover:text-cyan-400">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}