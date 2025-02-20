import React from 'react';
import { Users, Ticket, Bell, ClipboardList } from 'lucide-react';
import { Header } from './components/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MetricCard } from './components/dashboard/MetricCard';
import { AttendanceChart } from './components/dashboard/AttendanceChart';
import { StudentsPage } from './pages/StudentsPage';
import { AttendancePage } from './pages/AttendancePage';
import { TokensPage } from './pages/TokensPage';
import { NotificationsPage } from './pages/NotificationsPage';

const metrics = [
  { title: 'Total Students', value: '1,234', icon: Users, trend: 5 },
  { title: 'Tokens Issued Today', value: '156', icon: Ticket, trend: 12 },
  { title: 'Notifications Sent', value: '89', icon: Bell, trend: -2 },
  { title: 'Attendance Today', value: '1,023', icon: ClipboardList, trend: 8 },
];

function App() {
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'students':
        return <StudentsPage />;
      case 'attendance':
        return <AttendancePage />;
      case 'tokens':
        return <TokensPage />;
      case 'notifications':
        return <NotificationsPage />;
      default:
        return (
          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric) => (
                <MetricCard key={metric.title} {...metric} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AttendanceChart />
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-white text-lg mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-4 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <p>Student ID #1234 verified attendance</p>
                      <span className="text-sm text-gray-500">2 min ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar onNavigate={(path) => setCurrentPage(path.slice(1) || 'dashboard')} />
      <Header />
      <div className="ml-64 pt-16">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;