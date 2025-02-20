import React from 'react';
import type { MetricCard as MetricCardType } from '../../types/dashboard';

export function MetricCard({ title, value, icon: Icon, trend }: MetricCardType) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {trend > 0 ? '+' : ''}{trend}% from last week
            </p>
          )}
        </div>
        <Icon className="w-8 h-8 text-cyan-400" />
      </div>
    </div>
  );
}