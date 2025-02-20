import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-03-01', attendance: 85 },
  { date: '2024-03-02', attendance: 88 },
  { date: '2024-03-03', attendance: 92 },
  { date: '2024-03-04', attendance: 90 },
  { date: '2024-03-05', attendance: 87 },
];

export function AttendanceChart() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg h-[400px]">
      <h3 className="text-white text-lg mb-4">Attendance Trends</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="date" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '0.375rem',
              color: '#fff',
            }}
          />
          <Line
            type="monotone"
            dataKey="attendance"
            stroke="#00e6e6"
            strokeWidth={2}
            dot={{ fill: '#00e6e6' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}