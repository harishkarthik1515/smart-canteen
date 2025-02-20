import React from 'react';
import { RefreshCw } from 'lucide-react';
import { mockTokens } from '../../data/mockData';

export function TokensTable() {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Token ID</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Student ID</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Time</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Token Number</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Meal Type</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Status</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {mockTokens.map((token) => (
            <tr key={token.id} className="text-gray-300">
              <td className="px-6 py-4">{token.id}</td>
              <td className="px-6 py-4">{token.studentId}</td>
              <td className="px-6 py-4">{new Date(token.timestamp).toLocaleString()}</td>
              <td className="px-6 py-4">{token.tokenNumber}</td>
              <td className="px-6 py-4">{token.mealType}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  token.status === 'Used' ? 'bg-gray-700 text-gray-300' : 'bg-green-900 text-green-300'
                }`}>
                  {token.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="p-1 text-cyan-400 hover:text-cyan-300">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}