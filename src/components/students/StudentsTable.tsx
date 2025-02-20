import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { mockStudents } from '../../data/mockData';

export function StudentsTable() {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">ID</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Name</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Class</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Section</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Parent Phone</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Registration Date</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {mockStudents.map((student) => (
            <tr key={student.id} className="text-gray-300">
              <td className="px-6 py-4">{student.id}</td>
              <td className="px-6 py-4">{student.name}</td>
              <td className="px-6 py-4">{student.class}</td>
              <td className="px-6 py-4">{student.section}</td>
              <td className="px-6 py-4">{student.parentPhone}</td>
              <td className="px-6 py-4">{student.registrationDate}</td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  <button className="p-1 text-cyan-400 hover:text-cyan-300">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-red-400 hover:text-red-300">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}