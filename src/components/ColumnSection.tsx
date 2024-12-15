import React from 'react';
import { Column } from '../types';
import { ColumnTable } from './ColumnTable';
import { Plus } from 'lucide-react';

interface Props {
  columns: Column[];
  onColumnChange: (columnId: number, field: keyof Column, value: any) => void;
  onRequestSuggestion: (columnId: number, type: 'physical' | 'logical') => void;
  onDeleteColumn: (columnId: number) => void;
  onAddColumn: () => void;
  onGenerateDDL: () => void;
}

export function ColumnSection({
  columns,
  onColumnChange,
  onRequestSuggestion,
  onDeleteColumn,
  onAddColumn,
  onGenerateDDL,
}: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">테이블 컬럼 정보</h2>
      
      <div className="mb-4">
        <ColumnTable
          columns={columns}
          onColumnChange={onColumnChange}
          onRequestSuggestion={onRequestSuggestion}
          onDeleteColumn={onDeleteColumn}
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={onAddColumn}
          className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600"
        >
          <Plus size={20} />
          Row 추가하기
        </button>

        <button
          onClick={onGenerateDDL}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          DDL 생성하기
        </button>
      </div>
    </div>
  );
}