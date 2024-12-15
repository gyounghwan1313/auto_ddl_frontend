import { useState } from 'react';
import { Column } from '../types';
import { getPhysicalColumnRecommendation, getLogicalColumnRecommendation } from '../services/api';

export function useColumnManagement() {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: 1,
      physicalName: '',
      logicalName: '',
      dataType: 'varchar',
      isNull: false,
      suggestedPhysicalName: '-',
      suggestedLogicalName: '-',
      applyPhysicalSuggestion: false,
      applyLogicalSuggestion: false
    }
  ]);

  const handleColumnChange = (columnId: number, field: keyof Column, value: any) => {
    setColumns(columns.map(column => 
      column.id === columnId ? { ...column, [field]: value } : column
    ));
  };

  const handleAddColumn = () => {
    const newColumn: Column = {
      id: columns.length + 1,
      physicalName: '',
      logicalName: '',
      dataType: 'varchar',
      isNull: false,
      suggestedPhysicalName: '-',
      suggestedLogicalName: '-',
      applyPhysicalSuggestion: false,
      applyLogicalSuggestion: false
    };
    setColumns([...columns, newColumn]);
  };

  const handleDeleteColumn = (columnId: number) => {
    setColumns(columns.filter(column => column.id !== columnId));
  };

  const handleRequestSuggestion = async (columnId: number, type: 'physical' | 'logical') => {
    try {
      const column = columns.find(col => col.id === columnId);
      if (!column) return;

      const requestData = {
        physical_col_nm: column.physicalName,
        logical_col_nm: column.logicalName,
        col_type: column.dataType
      };

      const recommendedName = type === 'physical'
        ? await getPhysicalColumnRecommendation(requestData)
        : await getLogicalColumnRecommendation(requestData);

      setColumns(columns.map(col => 
        col.id === columnId 
          ? {
              ...col,
              [type === 'physical' ? 'suggestedPhysicalName' : 'suggestedLogicalName']: recommendedName
            }
          : col
      ));
    } catch (error) {
      console.error('Failed to get suggestion:', error);
    }
  };

  return {
    columns,
    setColumns,
    handleColumnChange,
    handleAddColumn,
    handleDeleteColumn,
    handleRequestSuggestion
  };
}