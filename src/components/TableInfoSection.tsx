import React, { useState } from 'react';
import { TableInfo, Column } from '../types';
import { TableInfoForm } from './TableInfoForm';
import { DDLInput } from './DDLInput';

interface Props {
  tableInfo: TableInfo;
  onTableInfoChange: (field: keyof TableInfo, value: string) => void;
  onDDLAnalysis: (tableInfo: TableInfo, columns: Column[]) => void;
}

export function TableInfoSection({ tableInfo, onTableInfoChange, onDDLAnalysis }: Props) {
  const [showDDLInput, setShowDDLInput] = useState(false);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">테이블 정보</h2>
        <button
          onClick={() => setShowDDLInput(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          테이블 정보 가져오기
        </button>
      </div>
      
      <TableInfoForm
        tableInfo={tableInfo}
        onTableInfoChange={onTableInfoChange}
      />

      {showDDLInput && (
        <DDLInput
          onClose={() => setShowDDLInput(false)}
          onAnalysis={onDDLAnalysis}
        />
      )}
    </div>
  );
}