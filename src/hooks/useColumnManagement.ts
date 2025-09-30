import { useState } from 'react';
import { Column } from '../types';
import { getPhysicalColumnRecommendation } from '../services/api';

export function useColumnManagement() {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: 1,
      logicalName: '',
      dataType: 'varchar',
      isNull: false,
      suggestedPhysicalName: '-'
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
      logicalName: '',
      dataType: 'varchar',
      isNull: false,
      suggestedPhysicalName: '-'
    };
    setColumns([...columns, newColumn]);
  };

  const handleDeleteColumn = (columnId: number) => {
    setColumns(columns.filter(column => column.id !== columnId));
  };

  const handleRequestSuggestion = async (columnId: number, type: 'physical') => {
    try {
      const column = columns.find(col => col.id === columnId);
      if (!column) return;

      const requestData = {
        logical_name: column.logicalName
      };

      const recommendedName = await getPhysicalColumnRecommendation(requestData);

      setColumns(columns.map(col => 
        col.id === columnId 
          ? {
              ...col,
              suggestedPhysicalName: recommendedName
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