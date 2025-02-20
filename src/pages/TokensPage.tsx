import React from 'react';
import { TokensTable } from '../components/tokens/TokensTable';

export function TokensPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Tokens Management</h1>
      </div>
      <TokensTable />
    </div>
  );
}