import React from 'react';
import { TableInfo } from '../types';

interface Props {
  tableInfo: TableInfo;
}

export function TableInfoHeader({ tableInfo }: Props) {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">
        데이터베이스: {tableInfo.database} &nbsp;&nbsp; 
        스키마: {tableInfo.schema} &nbsp;&nbsp; 
        테이블: {tableInfo.tableName}
      </h2>
    </div>
  );
}