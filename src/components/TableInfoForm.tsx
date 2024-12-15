import React from 'react';
import { TableInfo } from '../types';

interface Props {
  tableInfo: TableInfo;
  onTableInfoChange: (field: keyof TableInfo, value: string) => void;
}

export function TableInfoForm({ tableInfo, onTableInfoChange }: Props) {
  return (
    <div className="bg-white p-6 mb-6 rounded-lg shadow">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            데이터베이스
          </label>
          <input
            type="text"
            value={tableInfo.database}
            onChange={(e) => onTableInfoChange('database', e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            스키마
          </label>
          <input
            type="text"
            value={tableInfo.schema}
            onChange={(e) => onTableInfoChange('schema', e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            테이블
          </label>
          <input
            type="text"
            value={tableInfo.tableName}
            onChange={(e) => onTableInfoChange('tableName', e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
}