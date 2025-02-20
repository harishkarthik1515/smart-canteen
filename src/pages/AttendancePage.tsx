import React from 'react';
import { Download } from 'lucide-react';
import { AttendanceTable } from '../components/attendance/AttendanceTable';

export function AttendancePage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Attendance Logs</h1>
        <button className="flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
          <Download className="w-4 h-4 mr-2" />
          Export Logs
        </button>
      </div>
      <AttendanceTable />
    </div>
  );
}