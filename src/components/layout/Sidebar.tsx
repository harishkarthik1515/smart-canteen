import React from 'react';
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Ticket,
  Bell,
  Settings,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Students', path: '/students' },
  { icon: ClipboardList, label: 'Attendance', path: '/attendance' },
  { icon: Ticket, label: 'Tokens', path: '/tokens' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

interface SidebarProps {
  onNavigate: (path: string) => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-cyan-400">SchoolDash</h1>
      </div>
      <nav className="mt-8">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.path);
            }}
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-cyan-400 transition-colors"
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}