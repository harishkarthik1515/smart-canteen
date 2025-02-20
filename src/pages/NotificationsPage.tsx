import React from 'react';
import { NotificationsTable } from '../components/notifications/NotificationsTable';

export function NotificationsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Notification Logs</h1>
      </div>
      <NotificationsTable />
    </div>
  );
}