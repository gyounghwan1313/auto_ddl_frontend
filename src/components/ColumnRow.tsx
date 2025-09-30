import React from 'react';
import { Column } from '../types';
import { Check, Trash2 } from 'lucide-react';

interface Props {
  column: Column;
  onColumnChange: (columnId: number, field: keyof Column, value: any) => void;
  onRequestSuggestion: (columnId: number, type: 'physical' | 'logical') => void;
  onDeleteColumn: (columnId: number) => void;
}

export function ColumnRow({
  column,
  onColumnChange,
  onRequestSuggestion,
  onDeleteColumn,
}: Props) {

  return (
    <tr className="border-t">
      <td className="px-4 py-3">{column.id}</td>
      <td className="px-4 py-3">
        <input
          type="text"
          value={column.logicalName}
          onChange={(e) => onColumnChange(column.id, 'logicalName', e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </td>
      <td className="px-4 py-3">
        <button
          onClick={() => onRequestSuggestion(column.id, 'physical')}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          실행
        </button>
      </td>
      <td className="px-4 py-3">{column.suggestedPhysicalName || '-'}</td>
      <td className="px-4 py-3">
        <select
          value={column.dataType}
          onChange={(e) => onColumnChange(column.id, 'dataType', e.target.value)}
          className="border rounded px-2 py-1 w-full"
        >
          <option value="varchar">varchar</option>
          <option value="int">int</option>
          <option value="datetime">datetime</option>
          <option value="decimal">decimal</option>
        </select>
      </td>
      <td className="px-4 py-3">
        <select
          value={column.isNull ? 'Y' : 'N'}
          onChange={(e) => onColumnChange(column.id, 'isNull', e.target.value === 'Y')}
          className="border rounded px-2 py-1"
        >
          <option value="Y">Y</option>
          <option value="N">N</option>
        </select>
      </td>
      <td className="px-4 py-3">
        <button
          onClick={() => onDeleteColumn(column.id)}
          className="text-red-500 hover:text-red-700"
          title="삭제"
        >
          <Trash2 size={20} />
        </button>
      </td>
    </tr>
  );
}