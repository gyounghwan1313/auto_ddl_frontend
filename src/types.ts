export interface Column {
  id: number;
  physicalName: string;
  logicalName: string;
  dataType: string;
  isNull: boolean;
  suggestedPhysicalName?: string;
  suggestedLogicalName?: string;
  applyPhysicalSuggestion: boolean;
  applyLogicalSuggestion: boolean;
}

export interface TableInfo {
  database: string;
  schema: string;
  tableName: string;
}