import React, { useState } from 'react';
import { TableInfo } from './types';
import { TableInfoSection } from './components/TableInfoSection';
import { ColumnSection } from './components/ColumnSection';
import { DDLDisplay } from './components/DDLDisplay';
import { useColumnManagement } from './hooks/useColumnManagement';
import { generateDDL } from './services/api';

function App() {
  const [tableInfo, setTableInfo] = useState<TableInfo>({
    database: '',
    schema: '',
    tableName: ''
  });
  const [generatedDDL, setGeneratedDDL] = useState<string | null>(null);

  const {
    columns,
    setColumns,
    handleColumnChange,
    handleAddColumn,
    handleDeleteColumn,
    handleRequestSuggestion
  } = useColumnManagement();

  const handleTableInfoChange = (field: keyof TableInfo, value: string) => {
    setTableInfo({ ...tableInfo, [field]: value });
  };

  const handleDDLAnalysis = (newTableInfo: TableInfo, newColumns: Column[]) => {
    setTableInfo(newTableInfo);
    setColumns(newColumns);
  };

  const handleGenerateDDL = async () => {
    try {
      const ddl = await generateDDL({
        dw: tableInfo.database,
        schema: tableInfo.schema,
        table: tableInfo.tableName,
        columns
      });
      setGeneratedDDL(ddl);
    } catch (error) {
      console.error('Failed to generate DDL:', error);
      // Here you might want to show an error message to the user
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <TableInfoSection
          tableInfo={tableInfo}
          onTableInfoChange={handleTableInfoChange}
          onDDLAnalysis={handleDDLAnalysis}
        />
        
        <ColumnSection
          columns={columns}
          onColumnChange={handleColumnChange}
          onRequestSuggestion={handleRequestSuggestion}
          onDeleteColumn={handleDeleteColumn}
          onAddColumn={handleAddColumn}
          onGenerateDDL={handleGenerateDDL}
        />

        <DDLDisplay ddl={generatedDDL} />
      </div>
    </div>
  );
}

export default App;