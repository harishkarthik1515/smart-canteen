import React from 'react';
import { RefreshCw } from 'lucide-react';
import { mockNotifications } from '../../data/mockData';

export function NotificationsTable() {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">ID</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Student ID</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Parent Phone</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Message</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Status</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Time</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {mockNotifications.map((notification) => (
            <tr key={notification.id} className="text-gray-300">
              <td className="px-6 py-4">{notification.id}</td>
              <td className="px-6 py-4">{notification.studentId}</td>
              <td className="px-6 py-4">{notification.parentPhone}</td>
              <td className="px-6 py-4 max-w-md truncate">{notification.message}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  notification.status === 'Delivered' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                }`}>
                  {notification.status}
                </span>
              </td>
              <td className="px-6 py-4">{new Date(notification.timestamp).toLocaleString()}</td>
              <td className="px-6 py-4">
                {notification.status === 'Failed' && (
                  <button className="p-1 text-cyan-400 hover:text-cyan-300">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}