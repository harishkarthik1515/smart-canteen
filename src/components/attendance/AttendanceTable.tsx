import React from 'react';
import { mockAttendanceLogs } from '../../data/mockData';

export function AttendanceTable() {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Log ID</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">User ID</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Timestamp</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Verification</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Status</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Temperature</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Mask</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {mockAttendanceLogs.map((log) => (
            <tr key={log.id} className="text-gray-300">
              <td className="px-6 py-4">{log.id}</td>
              <td className="px-6 py-4">{log.userId}</td>
              <td className="px-6 py-4">{new Date(log.timestamp).toLocaleString()}</td>
              <td className="px-6 py-4">{log.verificationMode}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  log.status === 'Success' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                }`}>
                  {log.status}
                </span>
              </td>
              <td className="px-6 py-4">{log.temperature}°C</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  log.maskStatus ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                }`}>
                  {log.maskStatus ? 'Yes' : 'No'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}