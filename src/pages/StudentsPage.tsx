import React from 'react';
import { UserPlus } from 'lucide-react';
import { StudentsTable } from '../components/students/StudentsTable';

export function StudentsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Students Management</h1>
        <button className="flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Student
        </button>
      </div>
      <StudentsTable />
    </div>
  );
}