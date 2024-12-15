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
  const hasPhysicalSuggestion = column.suggestedPhysicalName && column.suggestedPhysicalName !== '-';
  const hasLogicalSuggestion = column.suggestedLogicalName && column.suggestedLogicalName !== '-';

  return (
    <tr className="border-t">
      <td className="px-4 py-3">{column.id}</td>
      <td className="px-4 py-3">
        <input
          type="text"
          value={column.physicalName}
          onChange={(e) => onColumnChange(column.id, 'physicalName', e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </td>
      <td className="px-4 py-3">
        <input
          type="text"
          value={column.logicalName}
          onChange={(e) => onColumnChange(column.id, 'logicalName', e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </td>
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
      <td className="px-4 py-3">{column.suggestedPhysicalName || '-'}</td>
      <td className="px-4 py-3">
        <button
          onClick={() => onRequestSuggestion(column.id, 'physical')}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          실행
        </button>
      </td>
      <td className="px-4 py-3">{column.suggestedLogicalName || '-'}</td>
      <td className="px-4 py-3">
        <button
          onClick={() => onRequestSuggestion(column.id, 'logical')}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          실행
        </button>
      </td>
      <td className="px-4 py-3">
        <button
          onClick={() => onColumnChange(column.id, 'applyPhysicalSuggestion', !column.applyPhysicalSuggestion)}
          disabled={!hasPhysicalSuggestion}
          className={`w-8 h-8 flex items-center justify-center border rounded ${
            column.applyPhysicalSuggestion ? 'bg-green-500 text-white' : 'bg-white'
          } ${!hasPhysicalSuggestion ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
        >
          {column.applyPhysicalSuggestion && <Check size={16} />}
        </button>
      </td>
      <td className="px-4 py-3">
        <button
          onClick={() => onColumnChange(column.id, 'applyLogicalSuggestion', !column.applyLogicalSuggestion)}
          disabled={!hasLogicalSuggestion}
          className={`w-8 h-8 flex items-center justify-center border rounded ${
            column.applyLogicalSuggestion ? 'bg-green-500 text-white' : 'bg-white'
          } ${!hasLogicalSuggestion ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
        >
          {column.applyLogicalSuggestion && <Check size={16} />}
        </button>
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