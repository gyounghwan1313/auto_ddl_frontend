import React from 'react';
import { Column } from '../types';
import { ColumnRow } from './ColumnRow';

interface Props {
  columns: Column[];
  onColumnChange: (columnId: number, field: keyof Column, value: any) => void;
  onRequestSuggestion: (columnId: number, type: 'physical' | 'logical') => void;
  onDeleteColumn: (columnId: number) => void;
}

export function ColumnTable({
  columns,
  onColumnChange,
  onRequestSuggestion,
  onDeleteColumn,
}: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">순번</th>
            <th className="px-4 py-3 text-left">물리명</th>
            <th className="px-4 py-3 text-left">논리명</th>
            <th className="px-4 py-3 text-left">타입</th>
            <th className="px-4 py-3 text-left">Null여부</th>
            <th className="px-4 py-3 text-left">추천 물리명</th>
            <th className="px-4 py-3 text-left">물리명 추천받기</th>
            <th className="px-4 py-3 text-left">추천 논리명</th>
            <th className="px-4 py-3 text-left">논리명 추천받기</th>
            <th className="px-4 py-3 text-left">물리명 적용</th>
            <th className="px-4 py-3 text-left">논리명 적용</th>
            <th className="px-4 py-3 text-left">삭제</th>
          </tr>
        </thead>
        <tbody>
          {columns.map((column) => (
            <ColumnRow
              key={column.id}
              column={column}
              onColumnChange={onColumnChange}
              onRequestSuggestion={onRequestSuggestion}
              onDeleteColumn={onDeleteColumn}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}