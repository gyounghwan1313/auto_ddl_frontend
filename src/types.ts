export interface Column {
  id: number;
  logicalName: string;
  dataType: string;
  isNull: boolean;
  suggestedPhysicalName?: string;
}

export interface TableInfo {
  database: string;
  schema: string;
  tableName: string;
}